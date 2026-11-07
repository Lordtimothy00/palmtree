"use client";

import { useState, useTransition } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/forms/fields";
import { site, whatsappLink } from "@/lib/site";

const interests = [
  "Solar Installation",
  "Inverter Installation",
  "Battery Supply and Installation",
  "Solar Products",
  "CCTV and Security Technology",
  "Solar Training",
  "Not sure yet — please advise",
];

type Errors = Record<string, string[] | undefined>;

export function EnquiryForm() {
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState<"idle" | "success" | "error" | "fallback">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setErrors({});
    setMessage("");

    startTransition(async () => {
      try {
        const res = await fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kind: "enquiry", data }),
        });
        const body = (await res.json()) as {
          status: string;
          message?: string;
          fieldErrors?: Errors;
        };

        if (res.ok && body.status === "success") {
          setState("success");
          form.reset();
          return;
        }
        if (body.status === "fallback") {
          setState("fallback");
          setMessage(body.message ?? "");
          return;
        }
        setState("error");
        setErrors(body.fieldErrors ?? {});
        setMessage(body.message ?? "Something went wrong. Please try again.");
      } catch {
        setState("fallback");
        setMessage(
          "We could not reach our enquiry service. Please message us on WhatsApp or call so we do not miss you.",
        );
      }
    });
  };

  if (state === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-forest-700/15 bg-forest-50/70 p-7"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-forest-700 text-white">
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-forest-900">
            Message received
          </h3>
          <p className="mt-1.5 max-w-md text-[13.5px] leading-relaxed text-navy-700/70">
            Thank you — your enquiry has reached the Palmtree team and we will get
            back to you. For anything urgent, WhatsApp is the fastest way to reach us.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <ButtonLink
            href={whatsappLink(
              "Hello Palmtree Technology Services. I just sent an enquiry through your website. Please follow up with me.",
            )}
            variant="whatsapp"
            size="sm"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat on WhatsApp
          </ButtonLink>
          <ButtonLink href={`tel:${site.phoneTel}`} variant="outline" size="sm">
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phoneDisplay}
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="c-name" required error={errors.name?.[0]}>
          <Input
            id="c-name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Adebayo Oluwaseun"
            required
            invalid={!!errors.name}
            aria-describedby={errors.name ? "c-name-error" : undefined}
          />
        </Field>

        <Field
          label="Phone / WhatsApp"
          htmlFor="c-phone"
          required
          error={errors.phone?.[0]}
        >
          <Input
            id="c-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0805 127 0913"
            required
            invalid={!!errors.phone}
            aria-describedby={errors.phone ? "c-phone-error" : undefined}
          />
        </Field>
      </div>

      <Field label="What do you need?" htmlFor="c-interest" error={errors.interest?.[0]}>
        <Select
          id="c-interest"
          name="interest"
          defaultValue=""
          invalid={!!errors.interest}
        >
          <option value="">Select a service (optional)</option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        label="Message"
        htmlFor="c-message"
        required
        error={errors.message?.[0]}
        hint="Tell us what you want to power, or the product you are asking about."
      >
        <Textarea
          id="c-message"
          name="message"
          rows={4}
          placeholder="I would like a quote for a solar system for my home…"
          required
          invalid={!!errors.message}
          aria-describedby={errors.message ? "c-message-error" : undefined}
        />
      </Field>

      <div className="flex items-start gap-2.5">
        <input
          id="c-consent"
          name="consent"
          type="checkbox"
          value="true"
          required
          className="mt-0.5 size-4 shrink-0 rounded border-navy-700/25 text-forest-700 accent-forest-700 focus:ring-2 focus:ring-forest-700/30"
        />
        <label htmlFor="c-consent" className="text-[12.5px] leading-relaxed text-navy-700/70">
          I am happy for Palmtree to contact me about this enquiry.
          {errors.consent?.[0] && (
            <span className="mt-1 block font-medium text-red-600">{errors.consent[0]}</span>
          )}
        </label>
      </div>

      {state === "error" && message && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-[12.5px] font-medium text-red-700">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {message}
        </p>
      )}

      {state === "fallback" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-[12.5px] leading-relaxed text-amber-900">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            {message}{" "}
            <a
              href={whatsappLink(
                "Hello Palmtree Technology Services. I tried to send an enquiry through your website.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Message us on WhatsApp
            </a>
            .
          </span>
        </p>
      )}

      <Button type="submit" disabled={pending} size="lg" className="mt-1 w-full">
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send Enquiry
          </>
        )}
      </Button>

      <p className="text-center text-[11.5px] text-navy-700/55">
        We only use your details to respond to this enquiry.
      </p>
    </form>
  );
}
