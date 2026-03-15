import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/dictionaries/en";

interface SelectedProjectsProps {
  dict: Dictionary["selectedProjects"];
  locale?: string;
}

export default function SelectedProjects({
  dict,
  locale = "en",
}: SelectedProjectsProps) {
  const featured = getFeaturedProjects();

  return (
    <section className="section-padding border-t border-border" aria-labelledby="projects-heading">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14 md:mb-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-3">
              {dict.label}
            </p>
            <h2
              id="projects-heading"
              className="font-display text-display-md text-ink text-balance"
            >
              {dict.heading}
            </h2>
          </div>
          <Button href={`/${locale}/projects`} variant="outline" size="sm">
            {dict.allProjects}
          </Button>
        </div>

        {/* Project list */}
        <ol className="divide-y divide-border" aria-label={dict.heading}>
          {featured.map((project, i) => (
            <li key={project.slug}>
              <Link
                href={`/${locale}/projects/${project.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-8 md:py-10 hover:bg-ink/[0.02] -mx-4 px-4 rounded-lg transition-colors duration-200"
                aria-label={`${dict.viewProject} ${project.title}`}
              >
                {/* Index */}
                <span className="hidden sm:block text-xs text-ink-tertiary pt-[5px] w-6 shrink-0 select-none">
                  0{i + 1}
                </span>

                {/* Cover swatch */}
                <div
                  className={`${project.coverColor} rounded-md w-full sm:w-28 md:w-36 h-20 sm:h-24 shrink-0 transition-transform duration-300 ease-expo-out group-hover:scale-[1.02]`}
                  aria-hidden="true"
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold tracking-[-0.01em] text-ink group-hover:text-ink/80 transition-colors duration-150">
                      {project.title}
                    </h3>
                    <span className="text-xs text-ink-tertiary shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5" aria-label={dict.technologiesLabel}>
                    {project.tags.slice(0, 4).map((tag) => (
                      <li key={tag}>
                        <Tag label={tag} variant="muted" />
                      </li>
                    ))}
                    {project.tags.length > 4 && (
                      <li>
                        <Tag
                          label={`+${project.tags.length - 4}`}
                          variant="muted"
                        />
                      </li>
                    )}
                  </ul>
                </div>

                {/* Arrow hint */}
                <span
                  className="hidden sm:block text-ink-tertiary group-hover:text-ink group-hover:translate-x-1 transition-all duration-200 pt-[2px] shrink-0 select-none"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
