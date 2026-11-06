import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { ProjectGallery } from "@/components/project-gallery";
import { projects, projectCategories } from "@/lib/data";

export function FeaturedProjects() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Installation portfolio"
            title="Work from the roof up."
            intro="Residential and commercial installations, panel arrays, inverter and battery builds, and the practical sessions behind our training."
            className="max-w-2xl"
          />
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-forest-700/20 bg-white px-5 py-3 text-[13px] font-semibold text-forest-800 transition hover:border-forest-700/40 hover:shadow-soft"
          >
            Open full gallery
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10">
          <ProjectGallery items={projects} limit={6} masonryColumns={3} />
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-navy-700/60">
          {projectCategories.map((c) => (
            <span key={c} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-forest-400" aria-hidden="true" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
