"use client";

import { useSearchParams } from "next/navigation";
import { QuoteForm } from "@/components/forms/quote-form";
import { services } from "@/lib/data";

/**
 * Reads ?service= / ?product= deep links so service and product CTAs
 * arrive with the relevant option already selected.
 */
export function QuoteFormConnected() {
  const params = useSearchParams();
  const serviceParam = params.get("service");
  const productParam = params.get("product");

  const matched = services.find(
    (s) =>
      s.title.toLowerCase() === (serviceParam ?? "").toLowerCase() ||
      s.slug === serviceParam,
  );

  const defaultService =
    matched?.title ??
    (serviceParam && serviceParam.length < 60 ? serviceParam : undefined);

  const defaultMessage = productParam
    ? `I would like a quote for the ${productParam}. `
    : undefined;

  return (
    <QuoteForm defaultService={defaultService} defaultMessage={defaultMessage} />
  );
}
