import type { Metadata } from "next";
import { ArrowRight, Camera, Expand, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section";
import { projects } from "@/lib/data";
import { whatsappLink, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects & Gallery — Solar Installations in Nigeria",
  description:
    "Browse solar installation projects from Palmtree Technology Services: residential and commercial installations, solar panel arrays, inverter and battery builds, and practical training demonstrations.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Solar Installation Projects & Gallery",
    description:
      "Residential, commercial, panel, inverter and battery installations, plus our training workshops.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Projects"
        eyebrow="Installation portfolio"
        title="Work you can inspect, not just read about."
        intro="A look at the installations and practical sessions behind Palmtree Technology Services. Filter by category and open any image full screen."
        image="/images/gallery/commercial-rooftop.jpg"
        imageAlt="Commercial solar rooftop installation by Palmtree"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact#quote" size="md">
            Start your project
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(whatsappMessages.general)}
            variant="outlineLight"
            size="md"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Discuss a similar install
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-14 md:py-20">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-navy-700/60">
            <span className="inline-flex items-center gap-2">
              <Camera className="size-4 text-forest-600" aria-hidden="true" />
              {projects.length} project images
            </span>
            <span className="inline-flex items-center gap-2">
              <Expand className="size-4 text-forest-600" aria-hidden="true" />
              Click any image for full-screen view
            </span>
          </div>

          <ProjectGallery items={projects} masonryColumns={3} />
        </div>
      </section>

      <section className="border-t border-line bg-mist py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we install"
            title="Every project starts with the same discipline."
            intro="Whether it is a small home backup or a commercial array, the process is the same: assess the load, specify correctly, install cleanly, test, and hand over with an explanation."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Residential",
                body: "Homes, duplexes and apartments — lighting, fans, entertainment, refrigeration and selected appliances.",
              },
              {
                title: "Commercial",
                body: "Shops, offices, clinics and facilities needing dependable daytime power and reduced generator runtime.",
              },
              {
                title: "Training & demonstrations",
                body: "Practical sessions where installers learn on the same components we install on site.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <h3 className="font-display text-[15.5px] font-semibold text-navy-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700/65">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want an installation like these?"
        body="Send us photos of your roof or building and tell us what you want to power. We will advise on the right system."
      />
    </>
  );
}
