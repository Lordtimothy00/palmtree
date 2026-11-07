import { NextResponse } from "next/server";
import { contactSchema, enquirySchema, quoteSchema } from "@/lib/validation";
import { deliverEnquiry, type EnquiryPayload } from "@/lib/mailer";
import { site } from "@/lib/site";

const SITE_PHONE = site.phoneDisplay;

// Very simple in-memory rate limit (per instance) to discourage form spam.
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;

function limited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.reset) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (limited(ip)) {
    return NextResponse.json(
      { status: "error", message: "Too many submissions. Please try again later or message us on WhatsApp." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { status: "error", message: "We could not read that submission. Please try again." },
      { status: 400 },
    );
  }

  const kind = (json as { kind?: string })?.kind;
  if (kind !== "quote" && kind !== "contact" && kind !== "enquiry") {
    return NextResponse.json(
      { status: "error", message: "Unknown enquiry type." },
      { status: 400 },
    );
  }

  const raw = ((json as { data?: unknown }).data ?? {}) as Record<string, unknown>;

  // Honeypot: pretend success and drop the submission.
  if (typeof raw.company === "string" && raw.company.trim().length > 0) {
    return NextResponse.json({ status: "success" });
  }
  const parsed =
    kind === "quote"
      ? quoteSchema.safeParse(raw)
      : kind === "contact"
        ? contactSchema.safeParse(raw)
        : enquirySchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json(
      {
        status: "error",
        message: "Please check the highlighted fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const fields = Object.fromEntries(
    Object.entries(parsed.data).filter(
      ([key, value]) =>
        key !== "consent" &&
        key !== "company" &&
        value !== undefined &&
        value !== "",
    ),
  ) as Record<string, string | boolean>;

  const payload: EnquiryPayload = {
    kind,
    submittedAt: new Date().toISOString(),
    fields: {
      ...fields,
      source: "palmtreetechservices.com",
    },
  };

  const result = await deliverEnquiry(payload);

  if (!result.ok) {
    console.error("[enquiry] delivery failed:", result.channel, result.detail);
    return NextResponse.json(
      {
        status: "fallback",
        message: `Our automatic enquiry service is unavailable right now, so your message was not sent. Please reach us directly instead — or call ${SITE_PHONE}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ status: "success", channel: result.channel });
}
