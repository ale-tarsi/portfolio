import Link from "next/link";
import { Project } from "@/types";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
  index: number;
  locale?: string;
}

export default function ProjectCard({ project, index, locale = "en" }: ProjectCardProps) {
  return (
    <li>
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="group flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 py-8 md:py-10 hover:bg-ink/[0.02] -mx-4 px-4 rounded-lg transition-colors duration-200 focus-visible:outline-ink"
        aria-label={`${project.title} — ${project.subtitle}`}
      >
        {/* Index number */}
        <span
          className="hidden sm:block text-xs text-ink-tertiary pt-[5px] w-6 shrink-0 tabular-nums select-none"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Color cover */}
        <div
          className={`${project.coverColor} rounded-md w-full sm:w-28 md:w-40 h-20 sm:h-24 md:h-28 shrink-0 transition-transform duration-300 ease-expo-out group-hover:scale-[1.02]`}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
            <h2 className="text-base font-semibold tracking-[-0.01em] text-ink group-hover:text-ink/75 transition-colors duration-150">
              {project.title}
            </h2>
            <span className="text-xs text-ink-tertiary pt-0.5 shrink-0">{project.year}</span>
          </div>
          <p className="text-sm text-ink-secondary mb-1 font-medium">{project.subtitle}</p>
          <p className="text-sm text-ink/60 leading-relaxed mb-3">{project.description}</p>
          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.tags.slice(0, 5).map((tag) => (
              <li key={tag}>
                <Tag label={tag} variant="muted" />
              </li>
            ))}
            {project.tags.length > 5 && (
              <li>
                <Tag label={`+${project.tags.length - 5} more`} variant="muted" />
              </li>
            )}
          </ul>
        </div>

        {/* Arrow */}
        <span
          className="hidden sm:block text-ink-tertiary group-hover:text-ink group-hover:translate-x-1 transition-all duration-200 pt-[3px] shrink-0 select-none"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </li>
  );
}
