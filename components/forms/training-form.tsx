"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, AlertTriangle, Loader2, MessageCircle, Send } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/forms/fields";
import { programmes } from "@/lib/data";
import { whatsappLink, trainingEnquiryMessage } from "@/lib/site";

type Errors = Record<string, string[] | undefined>;

const experience = [
  "Complete beginner",
  "Some electrical experience",
  "Practising technician",
  "Already installing solar",
];

export function TrainingForm() {
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
        setMessage("We could not reach our registration service. Please use WhatsApp instead.");
      }
    });
  };

  const selectedProgramme = programmes[0].title;

  if (state === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-3xl border border-forest-700/15 bg-forest-50/60 p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-forest-700 text-white">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-forest-900">
            Registration enquiry received
          </h3>
          <p className="mt-2 max-w-md text-[14px] leading-relaxed text-navy-700/70">
            Thank you. Our training team will contact you with the current programme
            dates, requirements and fees. Nothing is confirmed until we speak.
          </p>
        </div>
        <ButtonLink
          href={whatsappLink(
            "Hello Palmtree Solar Master. I just submitted a training registration enquiry on your website.",
          )}
          variant="whatsapp"
          size="sm"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Chat on WhatsApp
        </ButtonLink>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="t-name" required error={errors.name?.[0]}>
          <Input id="t-name" name="name" autoComplete="name" required invalid={!!errors.name} placeholder="Your full name" />
        </Field>
        <Field label="Email address" htmlFor="t-email" required error={errors.email?.[0]}>
          <Input id="t-email" name="email" type="email" autoComplete="email" required invalid={!!errors.email} placeholder="you@example.com" />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="t-phone" error={errors.phone?.[0]}>
          <Input id="t-phone" name="phone" type="tel" autoComplete="tel" placeholder="0805 127 0913" />
        </Field>
        <Field label="Your experience level" htmlFor="t-level">
          <Select id="t-level" name="experience" defaultValue={experience[0]}>
            {experience.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Programme of interest" htmlFor="t-topic" required error={errors.topic?.[0]}>
        <Select id="t-topic" name="topic" defaultValue={selectedProgramme} required invalid={!!errors.topic}>
          {programmes.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
          <option value="Not sure yet — please advise">Not sure yet — please advise</option>
        </Select>
      </Field>

      <Field
        label="Anything we should know?"
        htmlFor="t-message"
        required
        error={errors.message?.[0]}
        hint="Tell us your goal, your location and your preferred learning format."
      >
        <Textarea
          id="t-message"
          name="message"
          required
          invalid={!!errors.message}
          placeholder="For example: I want to start installing solar for clients in Ibadan and prefer weekend classes."
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="t-company">Company</label>
        <input id="t-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {(state === "error" || state === "fallback") && (
        <div role="alert" className="flex flex-col gap-3 rounded-2xl border border-amber-300/60 bg-amber-50 p-4 text-[13px] text-amber-900">
          <p className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{message || "Your registration could not be sent. Please use WhatsApp instead."}</span>
          </p>
          <ButtonLink
            href={whatsappLink(trainingEnquiryMessage(selectedProgramme))}
            variant="whatsapp"
            size="sm"
            className="self-start"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Register on WhatsApp
          </ButtonLink>
        </div>
      )}

      <Button type="submit" size="lg" disabled={pending} className="self-start sm:min-w-64">
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Register Interest
            <Send className="size-4" aria-hidden="true" />
          </>
        )}
      </Button>
      <p className="text-[11.5px] leading-relaxed text-navy-700/45">
        Programme dates, fees and certification are confirmed by our team before any
        payment. Submitting this form does not commit you to a place.
      </p>
    </form>
  );
}
