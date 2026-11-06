"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { Lightbox } from "@/components/lightbox";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = "All Projects" | ProjectCategory;
const filters: Filter[] = ["All Projects", ...projectCategories];

export function ProjectGallery({
  items,
  masonryColumns = 3,
  showFilters = true,
  limit,
}: {
  items: Project[];
  masonryColumns?: 2 | 3;
  showFilters?: boolean;
  limit?: number;
}) {
  const [filter, setFilter] = useState<Filter>("All Projects");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(() => {
    const filtered =
      filter === "All Projects" ? items : items.filter((p) => p.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, items, limit]);

  return (
    <div>
      {showFilters && (
        <div
          className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => {
            const count =
              f === "All Projects"
                ? items.length
                : items.filter((p) => p.category === f).length;
            if (count === 0) return null;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setOpenIndex(null);
                }}
                aria-pressed={filter === f}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2.5 text-[12.5px] font-semibold transition-all duration-300",
                  filter === f
                    ? "border-forest-700 bg-forest-700 text-white shadow-soft"
                    : "border-line bg-white text-navy-700/65 hover:border-forest-700/30 hover:text-forest-700",
                )}
              >
                {f}
                <span
                  className={cn(
                    "ml-1.5 text-[10.5px]",
                    filter === f ? "text-white/60" : "text-navy-700/35",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div
        className={cn(
          "mt-7 columns-1 gap-4 sm:columns-2",
          masonryColumns === 3 ? "lg:columns-3" : "lg:columns-2",
        )}
      >
        {visible.map((project, i) => {
          return (
            <figure
              key={project.id}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-mist"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="zoom-media block w-full text-left"
                aria-label={`View ${project.title} full screen`}
              >
                <div
                  className={cn(
                    "relative w-full",
                    project.span === "tall"
                      ? "aspect-[4/5]"
                      : project.span === "wide"
                        ? "aspect-[4/3]"
                        : "aspect-square",
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-solar-400">
                      {project.category}
                    </span>
                    <span className="mt-1 block font-display text-[15px] font-semibold leading-snug text-white">
                      {project.title}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] text-white/55">
                      {project.location}
                    </span>
                  </span>
                  <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/25 bg-navy-900/30 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <Expand className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </figure>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 rounded-2xl border border-dashed border-line p-8 text-center text-sm text-navy-700/50">
          No projects in this category yet.
        </p>
      )}

      {openIndex !== null && (
        <Lightbox
          items={visible}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </div>
  );
}
