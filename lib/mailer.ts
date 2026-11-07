/**
 * Enquiry delivery.
 *
 * Delivery is configured through environment variables so that real enquiries
 * reach the business inbox. There is exactly one expected production setup:
 *
 *   RESEND_API_KEY      — API key from https://resend.com
 *   ENQUIRY_TO_EMAIL    — inbox that should receive enquiries (default: business email)
 *   ENQUIRY_FROM_EMAIL  — verified sender, e.g. "Palmtree Website <enquiries@yourdomain.com>"
 *
 * If Resend is not configured, the server falls back to a documented webhook
 * (ENQUIRY_WEBHOOK_URL) and finally to a local append-only log so nothing is lost
 * during setup. The API response reports which channel was used, and the UI never
 * shows a success message unless a channel actually accepted the enquiry.
 */

export type EnquiryPayload = {
  kind: "quote" | "contact" | "training" | "enquiry";
  submittedAt: string;
  fields: Record<string, string | boolean | undefined>;
};

export type DeliveryResult =
  | { ok: true; channel: "resend" | "webhook" | "log"; detail?: string }
  | { ok: false; channel: "none" | "resend" | "webhook"; detail: string };

const TO = process.env.ENQUIRY_TO_EMAIL ?? "palmtreeng@gmail.com";
const FROM =
  process.env.ENQUIRY_FROM_EMAIL ?? "Palmtree Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toHtml(payload: EnquiryPayload) {
  const rows = Object.entries(payload.fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e3e9df;font:600 12px/1.4 Arial,sans-serif;color:#075B32;text-transform:capitalize;vertical-align:top">${escapeHtml(
          k.replace(/([A-Z])/g, " $1"),
        )}</td><td style="padding:8px 12px;border-bottom:1px solid #e3e9df;font:400 13px/1.5 Arial,sans-serif;color:#101D45">${escapeHtml(
          String(v),
        )}</td></tr>`,
    )
    .join("");

  return `<div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif">
    <div style="background:#075B32;padding:20px 24px;border-radius:12px 12px 0 0">
      <p style="margin:0;color:#FDCB05;font-size:11px;letter-spacing:2px;text-transform:uppercase">Palmtree Technology Services</p>
      <h1 style="margin:6px 0 0;color:#ffffff;font-size:19px">New ${payload.kind} enquiry</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e3e9df;border-top:0">${rows}</table>
    <p style="font:400 11px/1.5 Arial,sans-serif;color:#8a938a;padding:12px 4px">Received ${payload.submittedAt} from the Palmtree website.</p>
  </div>`;
}

function toText(payload: EnquiryPayload) {
  const lines = Object.entries(payload.fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k.replace(/([A-Z])/g, " $1")}: ${v}`);
  return `New ${payload.kind} enquiry — ${payload.submittedAt}\n\n${lines.join("\n")}`;
}

export async function deliverEnquiry(payload: EnquiryPayload): Promise<DeliveryResult> {
  const subject = `[Website] New ${payload.kind} enquiry — ${
    payload.fields.name ?? "Unknown"
  }`;

  // 1. Resend (primary)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [TO],
          reply_to:
            typeof payload.fields.email === "string" && payload.fields.email
              ? payload.fields.email
              : undefined,
          subject,
          html: toHtml(payload),
          text: toText(payload),
        }),
      });
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        return {
          ok: false,
          channel: "resend",
          detail: `Resend rejected the message (${res.status}). ${detail.slice(0, 240)}`,
        };
      }
      return { ok: true, channel: "resend" };
    } catch (error) {
      return {
        ok: false,
        channel: "resend",
        detail: error instanceof Error ? error.message : "Resend request failed",
      };
    }
  }

  // 2. Generic webhook (e.g. Formspree, Make, n8n, CRM endpoint)
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return {
          ok: false,
          channel: "webhook",
          detail: `Webhook responded ${res.status}`,
        };
      }
      return { ok: true, channel: "webhook" };
    } catch (error) {
      return {
        ok: false,
        channel: "webhook",
        detail: error instanceof Error ? error.message : "Webhook request failed",
      };
    }
  }

  // 3. Local durable log (development / pre-configuration)
  try {
    const { appendFile, mkdir } = await import("node:fs/promises");
    const path = await import("node:path");
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "enquiries.jsonl"),
      JSON.stringify(payload) + "\n",
      "utf8",
    );
    return { ok: true, channel: "log" };
  } catch (error) {
    return {
      ok: false,
      channel: "none",
      detail:
        error instanceof Error
          ? error.message
          : "No delivery channel is configured.",
    };
  }
}
