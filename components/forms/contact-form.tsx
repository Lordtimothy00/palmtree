"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, AlertTriangle, Loader2, MessageCircle, Phone, Send } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/forms/fields";
import { site, whatsappLink } from "@/lib/site";

const topics = [
  "Solar installation enquiry",
  "Product enquiry",
  "Battery or inverter enquiry",
  "CCTV / security enquiry",
  "Solar training enquiry",
  "Maintenance or support",
  "Something else",
];

type Errors = Record<string, string[] | undefined>;

export function ContactForm() {
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
          body: JSON.stringify({ kind: "contact", data }),
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
        setMessage("We could not reach our enquiry service. Please use WhatsApp or call us.");
      }
    });
  };

  if (state === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-3xl border border-forest-700/15 bg-forest-50/60 p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-forest-700 text-white">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-forest-900">Message sent</h3>
          <p className="mt-2 max-w-md text-[14px] leading-relaxed text-navy-700/70">
            Thank you for reaching out. Your message has been delivered to our team
            and we will respond using the contact details you provided.
          </p>
        </div>
        <ButtonLink
          href={whatsappLink("Hello Palmtree Technology Services. I just sent a message through your website.")}
          variant="whatsapp"
          size="sm"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Continue on WhatsApp
        </ButtonLink>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="c-name" required error={errors.name?.[0]}>
          <Input id="c-name" name="name" autoComplete="name" placeholder="Your name" required invalid={!!errors.name} />
        </Field>
        <Field label="Email address" htmlFor="c-email" required error={errors.email?.[0]}>
          <Input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            invalid={!!errors.email}
          />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="c-phone" error={errors.phone?.[0]}>
          <Input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="0805 127 0913" />
        </Field>
        <Field label="What is this about?" htmlFor="c-topic" required error={errors.topic?.[0]}>
          <Select id="c-topic" name="topic" defaultValue="" required invalid={!!errors.topic}>
            <option value="" disabled>
              Select a topic
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Your message" htmlFor="c-message" required error={errors.message?.[0]}>
        <Textarea
          id="c-message"
          name="message"
          required
          invalid={!!errors.message}
          placeholder="How can we help?"
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="c-company">Company</label>
        <input id="c-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {(state === "error" || state === "fallback") && (
        <div role="alert" className="flex flex-col gap-3 rounded-2xl border border-amber-300/60 bg-amber-50 p-4 text-[13px] text-amber-900">
          <p className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{message || "Your message could not be sent. Please use WhatsApp or call us."}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <ButtonLink href={whatsappLink("Hello Palmtree Technology Services. I would like to send an enquiry.")} variant="whatsapp" size="sm">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp us
            </ButtonLink>
            <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost" size="sm">
              <Phone className="size-4" aria-hidden="true" />
              Call us
            </ButtonLink>
          </div>
        </div>
      )}

      <Button type="submit" size="lg" disabled={pending} className="self-start sm:min-w-56">
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send className="size-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
