"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { productEnquiryMessage } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  onOpen,
  className,
}: {
  product: Product;
  onOpen?: (product: Product) => void;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-forest-700/20 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-forest-700 backdrop-blur">
          {product.category}
        </span>
        {onOpen && (
          <button
            type="button"
            onClick={() => onOpen(product)}
            className="absolute inset-0 z-10"
            aria-label={`View details for ${product.name}`}
          >
            <span className="sr-only">View details for {product.name}</span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-semibold leading-snug text-navy-700">
          {onOpen ? (
            <button
              type="button"
              onClick={() => onOpen(product)}
              className="text-left transition-colors hover:text-forest-700"
            >
              {product.name}
            </button>
          ) : (
            product.name
          )}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-navy-700/65">
          {product.description}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <a
            href={whatsappLink(productEnquiryMessage(product.name, product.category))}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-forest-700 px-4 text-[12.5px] font-semibold text-white transition hover:bg-forest-600"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Enquire on WhatsApp
          </a>
          {onOpen ? (
            <button
              type="button"
              onClick={() => onOpen(product)}
              aria-label={`View details for ${product.name}`}
              className="relative z-20 flex size-10 items-center justify-center rounded-full border border-forest-700/15 text-forest-700 transition hover:border-forest-700/35 hover:bg-forest-50"
            >
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </button>
          ) : (
            <Link
              href="/products"
              aria-label={`See all products`}
              className="relative z-20 flex size-10 items-center justify-center rounded-full border border-forest-700/15 text-forest-700 transition hover:border-forest-700/35 hover:bg-forest-50"
            >
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
