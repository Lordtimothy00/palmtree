import { z } from "zod";

const phoneRegex = /^[+]?[\d\s()-]{7,20}$/;

export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "That name looks too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(20, "That phone number looks too long.")
    .regex(phoneRegex, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .max(160)
    .optional()
    .transform((v) => (v === "" ? undefined : v))
    .refine((v) => v === undefined || z.string().email().safeParse(v).success, {
      message: "Please enter a valid email address.",
    }),
  state: z.string().trim().min(2, "Please tell us your state or location.").max(120),
  propertyType: z.enum(["Residential", "Commercial", "Industrial", "Other"], {
    message: "Please choose a property type.",
  }),
  service: z
    .string({ message: "Please choose the service you need." })
    .trim()
    .min(2, "Please choose the service you need.")
    .max(120),
  powerRequirement: z.string().trim().max(240).optional().default(""),
  message: z.string().trim().max(2000, "Please keep your message under 2000 characters.").optional().default(""),
  /** Honeypot — bots fill this; handled after parsing so bots see success. */
  company: z.string().max(200).optional().default(""),
  consent: z.literal(true, { message: "Please confirm we may contact you." }),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

/**
 * Short enquiry form used on the single-page site: name, phone and a message.
 * Everything else (state, property type, service) would be a barrier on a
 * one-page layout, so the essentials are all we ask for.
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name looks too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(20, "That phone number looks too long.")
    .regex(phoneRegex, "Please enter a valid phone number."),
  interest: z.string().trim().max(120).optional().default(""),
  message: z
    .string()
    .trim()
    .min(5, "Please tell us briefly what you need.")
    .max(1500, "Please keep your message under 1500 characters."),
  company: z.string().max(200).optional().default(""),
  consent: z.literal(true, { message: "Please confirm we may contact you." }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z
    .string()
    .trim()
    .min(5, "Please enter your email address.")
    .max(160)
    .refine((v) => z.string().email().safeParse(v).success, {
      message: "Please enter a valid email address.",
    }),
  phone: z.string().trim().max(20).optional().default(""),
  topic: z.string().trim().min(2, "Please choose a topic.").max(120),
  message: z.string().trim().min(10, "Please tell us a little more.").max(2000),
  company: z.string().max(200).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type FormState = {
  status: "idle" | "success" | "error" | "fallback";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};
