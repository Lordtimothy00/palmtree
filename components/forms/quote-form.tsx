"use client";

import { useState, useTransition } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Loader2,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/forms/fields";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const services = [
  "Solar System Installation",
  "Solar Inverter Installation",
  "Battery Supply and Installation",
  "Solar Energy Solutions",
  "Solar Equipment Supply",
  "CCTV and Security Equipment",
  "Solar System Maintenance",
  "Solar Technology Training",
  "Not sure yet — please advise",
];

const propertyTypes = ["Residential", "Commercial", "Industrial", "Other"];

const states = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT — Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","Outside Nigeria",
];

type Errors = Record<string, string[] | undefined>;

export function QuoteForm({
  defaultService,
  defaultMessage,
}: {
  defaultService?: string;
  defaultMessage?: string;
}) {
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState<"idle" | "success" | "error" | "fallback">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<string>("");
  const [reference, setReference] = useState<string>("");

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
          body: JSON.stringify({ kind: "quote", data }),
        });
        const body = (await res.json()) as {
          status: string;
          message?: string;
          fieldErrors?: Errors;
          channel?: string;
        };

        if (res.ok && body.status === "success") {
          setState("success");
          setReference(`PT-${Date.now().toString(36).toUpperCase().slice(-6)}`);
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
        className="flex flex-col items-start gap-4 rounded-3xl border border-forest-700/15 bg-forest-50/60 p-8"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-forest-700 text-white">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-forest-900">
            Your request has been received
          </h3>
          <p className="mt-2 max-w-md text-[14px] leading-relaxed text-navy-700/70">
            Thank you. Your enquiry has been delivered to the Palmtree team and we
            will contact you to discuss your requirements. For anything urgent,
            WhatsApp is the fastest way to reach us.
          </p>
          {reference && (
            <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-forest-700/60">
              Reference {reference}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2.5 pt-1">
          <ButtonLink
            href={whatsappLink(
              "Hello Palmtree Technology Services. I just submitted a quote request through your website. Please follow up with me.",
            )}
            variant="whatsapp"
            size="sm"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat on WhatsApp
          </ButtonLink>
          <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost" size="sm">
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phoneDisplay}
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="q-name" required error={errors.name?.[0]}>
          <Input
            id="q-name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Adebayo Oluwaseun"
            required
            invalid={!!errors.name}
            aria-describedby={errors.name ? "q-name-error" : undefined}
          />
        </Field>

        <Field
          label="Phone / WhatsApp"
          htmlFor="q-phone"
          required
          error={errors.phone?.[0]}
          hint="We reply on WhatsApp where possible."
        >
          <Input
            id="q-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0805 127 0913"
            required
            invalid={!!errors.phone}
            aria-describedby={errors.phone ? "q-phone-error" : undefined}
          />
        </Field>

        <Field label="Email" htmlFor="q-email" error={errors.email?.[0]}>
          <Input
            id="q-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            invalid={!!errors.email}
          />
        </Field>

        <Field
          label="State / location"
          htmlFor="q-state"
          required
          error={errors.state?.[0]}
        >
          <Select
            id="q-state"
            name="state"
            defaultValue=""
            required
            invalid={!!errors.state}
          >
            <option value="" disabled>
              Select your state
            </option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Property type"
          htmlFor="q-property"
          required
          error={errors.propertyType?.[0]}
        >
          <Select
            id="q-property"
            name="propertyType"
            defaultValue=""
            required
            invalid={!!errors.propertyType}
          >
            <option value="" disabled>
              Select property type
            </option>
            {propertyTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Service of interest"
          htmlFor="q-service"
          required
          error={errors.service?.[0]}
        >
          <Select
            id="q-service"
            name="service"
            defaultValue={defaultService ?? ""}
            required
            invalid={!!errors.service}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        label="Estimated power requirements"
        htmlFor="q-power"
        error={errors.powerRequirement?.[0]}
        hint="For example: lights and fans, a 1.5HP AC, a fridge, or a whole home. An estimate is fine."
      >
        <Input
          id="q-power"
          name="powerRequirement"
          placeholder="e.g. 4 bedrooms, 1 AC, fridge, fans and lights"
        />
      </Field>

      <Field
        label="Additional information"
        htmlFor="q-message"
        error={errors.message?.[0]}
      >
        <Textarea
          id="q-message"
          name="message"
          defaultValue={defaultMessage}
          placeholder="Tell us about the property, current power setup, and what you would like to achieve."
        />
      </Field>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="q-company">Company</label>
        <input id="q-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-[12.5px] leading-relaxed text-navy-700/70">
        <input
          type="checkbox"
          name="consent"
          value="true"
          required
          className="mt-0.5 size-4 shrink-0 rounded border-line text-forest-700 accent-forest-700"
        />
        <span>
          I agree to be contacted by Palmtree Technology Services about this
          enquiry.
          {errors.consent?.[0] && (
            <span className="mt-1 block text-[12px] font-medium text-red-600" role="alert">
              Please confirm we may contact you.
            </span>
          )}
        </span>
      </label>

      {(state === "error" || state === "fallback") && (
        <div
          role="alert"
          className="flex flex-col gap-3 rounded-2xl border border-amber-300/60 bg-amber-50 p-4 text-[13px] leading-relaxed text-amber-900"
        >
          <p className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              {message ||
                "We could not send your request automatically. Please try WhatsApp or call us directly."}
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            <ButtonLink
              href={whatsappLink(
                "Hello Palmtree Technology Services. I tried to submit a quote request on your website and would like to send it on WhatsApp.",
              )}
              variant="whatsapp"
              size="sm"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Send on WhatsApp
            </ButtonLink>
            <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost" size="sm">
              <Phone className="size-4" aria-hidden="true" />
              Call us
            </ButtonLink>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={pending} className="sm:min-w-64">
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending your request…
            </>
          ) : (
            <>
              Request a Solar Consultation
              <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
        <p className={cn("text-[11.5px] leading-relaxed text-navy-700/45 sm:max-w-56")}>
          We use your details only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}
