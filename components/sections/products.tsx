import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section";
import { products } from "@/lib/content";
import { productEnquiryMessage, whatsappLink } from "@/lib/site";

export function Products() {
  return (
    <section id="products" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="Equipment we supply and install"
            intro="Ask about any item on WhatsApp and we will confirm what is in stock and what suits your system."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 4) * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-700/8 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="zoom-media relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, (max-width: 1280px) 30vw, 23vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-forest-700 shadow-sm backdrop-blur">
                    {product.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[15.5px] font-semibold text-navy-700">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-navy-700/65">
                    {product.description}
                  </p>
                  <a
                    href={whatsappLink(
                      productEnquiryMessage(product.name, product.category),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/45 bg-[#25D366]/10 px-4 py-2.5 text-[12.5px] font-semibold text-[#0b6b38] transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-[#04301a]"
                  >
                    <MessageCircle className="size-3.5" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <p className="mt-8 text-center text-[13px] text-navy-700/55">
            Availability and pricing are confirmed on enquiry — we do not list
            prices that may be out of date.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
