import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { getDictionary, isValidLocale } from "@/lib/dictionaries";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.projects.metaTitle,
    description: dict.projects.metaDescription,
  };
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict.projects;
  const projects = getProjects(locale);

  return (
    <article className="pt-32 md:pt-40 pb-24">
      <section aria-labelledby="projects-page-heading">
        <div className="container-wide">
          {/* Header */}
          <div className="max-w-[600px] mb-16 md:mb-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-4">
              {t.label}
            </p>
            <h1
              id="projects-page-heading"
              className="font-display text-display-lg text-ink text-balance mb-5"
            >
              {t.heading}
            </h1>
            <p className="text-ink-secondary text-base md:text-lg leading-relaxed text-balance">
              {t.description}
            </p>
          </div>

          {/* Project list */}
          <ol
            className="divide-y divide-border"
            aria-label={t.allProjectsLabel}
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                locale={locale}
              />
            ))}
          </ol>
        </div>
      </section>
    </article>
  );
}
