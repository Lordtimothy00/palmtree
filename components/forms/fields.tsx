"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-line bg-white px-4 text-[14px] text-navy-700 placeholder:text-navy-700/60 transition-all duration-200 hover:border-forest-700/25 focus:border-forest-600 focus:outline-none focus:ring-4 focus:ring-forest-700/10 disabled:opacity-60";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={htmlFor}
        className="text-[12.5px] font-semibold text-navy-700/85"
      >
        {label}
        {required ? (
          <span className="ml-0.5 text-forest-600" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 font-normal text-navy-700/65">(optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-[12px] font-medium text-red-600">
          {error}
        </p>
      ) : hint ? (
        <p className="text-[11.5px] text-navy-700/60">{hint}</p>
      ) : null}
    </div>
  );
}

export function Input({
  invalid,
  className,
  ...props
}: React.ComponentProps<"input"> & { invalid?: boolean }) {
  return (
    <input
      className={cn(fieldBase, "h-12", invalid && "border-red-400 bg-red-50/40", className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

export function Textarea({
  invalid,
  className,
  ...props
}: React.ComponentProps<"textarea"> & { invalid?: boolean }) {
  return (
    <textarea
      className={cn(fieldBase, "min-h-28 py-3 leading-relaxed", invalid && "border-red-400 bg-red-50/40", className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

export function Select({
  invalid,
  className,
  children,
  ...props
}: React.ComponentProps<"select"> & { invalid?: boolean }) {
  return (
    <div className="relative">
      <select
        className={cn(
          fieldBase,
          "h-12 appearance-none pr-10",
          invalid && "border-red-400 bg-red-50/40",
          className,
        )}
        aria-invalid={invalid || undefined}
        {...props}
      >
        {children}
      </select>
      <svg
        className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-navy-700/65"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
