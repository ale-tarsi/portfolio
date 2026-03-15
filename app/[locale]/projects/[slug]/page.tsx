import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { getDictionary, isValidLocale } from "@/lib/dictionaries";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return projects.flatMap((p) =>
    ["en", "it"].map((locale) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project)
    return {
      title: isValidLocale(locale)
        ? (await getDictionary(locale)).projectDetail.notFoundTitle
        : "Project not found",
    };
  return {
    title: project.title,
    description: project.description,
  };
}

function StatusBadge({
  status,
  labels,
}: {
  status: string;
  labels: { statusCompleted: string; statusInProgress: string; statusArchived: string };
}) {
  const config: Record<string, { dot: string; text: string }> = {
    completed:     { dot: "bg-green-500",   text: labels.statusCompleted },
    "in-progress": { dot: "bg-amber-400",   text: labels.statusInProgress },
    archived:      { dot: "bg-neutral-400", text: labels.statusArchived },
  };
  const { dot, text } = config[status] ?? { dot: "bg-neutral-400", text: status };
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`inline-block w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} aria-hidden="true" />
      {text}
    </span>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const dict = await getDictionary(locale);
  const t = dict.projectDetail;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="pt-32 md:pt-40 pb-24">
      <div className="container-wide">
        {/* Back link */}
        <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors duration-150"
          >
            <span aria-hidden="true">←</span> {t.allProjects.replace("← ", "")}
          </Link>
        </nav>

        {/* Hero */}
        <header className="mb-14 md:mb-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-4">
                {project.year} &middot; {project.role}
              </p>
              <h1 className="font-display text-display-lg text-ink text-balance mb-4 leading-[1.06]">
                {project.title}
              </h1>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed max-w-[560px] text-balance">
                {project.subtitle}
              </p>
            </div>

            {/* Cover — tech tag cloud */}
            <div
              className={`${project.coverColor} rounded-xl w-full md:w-64 lg:w-72 shrink-0 p-5 flex flex-wrap gap-2 content-start min-h-[9rem]`}
              aria-hidden="true"
            >
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} variant="muted" />
              ))}
            </div>
          </div>
        </header>

        <Divider spacing="sm" />

        {/* Body */}
        <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-20 mt-10 md:mt-14">
          {/* Sidebar */}
          <aside aria-label="Project metadata">
            <dl className="flex flex-col gap-5 text-sm sticky top-28">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-1">
                  {t.yearLabel}
                </dt>
                <dd className="text-ink-secondary">{project.year}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-1">
                  {t.roleLabel}
                </dt>
                <dd className="text-ink-secondary">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-1">
                  {t.statusLabel}
                </dt>
                <dd className="text-ink-secondary">
                  <StatusBadge status={project.status} labels={t} />
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-2">
                  {t.stackLabel}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Tag label={tag} variant="muted" />
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              {project.links && (
                <div className="pt-1 flex flex-col gap-1">
                  {project.links.github && (
                    <Button
                      href={project.links.github}
                      external
                      variant="ghost"
                      size="sm"
                      ariaLabel={t.githubAriaLabel}
                    >
                      {t.githubLabel}
                    </Button>
                  )}
                  {project.links.live && (
                    <Button
                      href={project.links.live}
                      external
                      variant="ghost"
                      size="sm"
                      ariaLabel={t.liveAriaLabel}
                    >
                      {t.liveLabel}
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      href={project.links.demo}
                      external
                      variant="ghost"
                      size="sm"
                      ariaLabel={t.demoAriaLabel}
                    >
                      {t.demoLabel}
                    </Button>
                  )}
                </div>
              )}
            </dl>
          </aside>

          {/* Main content — narrative order */}
          <div className="flex flex-col gap-14">
            <Section heading={t.sectionOverview}>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                {project.body.overview}
              </p>
            </Section>

            <Section heading={t.sectionContext}>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                {project.body.context}
              </p>
            </Section>

            <Section heading={t.sectionChallenges}>
              <ul className="flex flex-col gap-6" role="list">
                {project.body.challenges.map((c, i) => (
                  <li key={i} className="border-l-2 border-border pl-5">
                    <p className="text-sm font-semibold text-ink mb-1.5 tracking-[-0.01em]">
                      {c.title}
                    </p>
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {c.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section heading={t.sectionApproach}>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                {project.body.approach}
              </p>
            </Section>

            <Section heading={t.sectionOutcome}>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                {project.body.outcome}
              </p>
            </Section>
          </div>
        </div>

        <Divider />

        {/* Footer nav */}
        <nav className="flex flex-col gap-6" aria-label="Project navigation">
          {(prevProject || nextProject) && (
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pb-6 border-b border-border">
              {prevProject ? (
                <Link
                  href={`/${locale}/projects/${prevProject.slug}`}
                  className="group flex flex-col gap-1"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary">
                    ← {t.prevProject}
                  </span>
                  <span className="text-sm text-ink group-hover:text-ink-secondary transition-colors duration-150">
                    {prevProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextProject && (
                <Link
                  href={`/${locale}/projects/${nextProject.slug}`}
                  className="group flex flex-col gap-1 sm:items-end"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary">
                    {t.nextProject} →
                  </span>
                  <span className="text-sm text-ink group-hover:text-ink-secondary transition-colors duration-150">
                    {nextProject.title}
                  </span>
                </Link>
              )}
            </div>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <Button href={`/${locale}/projects`} variant="ghost" size="md">
              {t.backToProjects}
            </Button>
            <p className="text-sm text-ink-secondary">
              {t.discussText}{" "}
              <Link href={`/${locale}/contact`} className="text-ink link-underline">
                {t.contactLink}
              </Link>
            </p>
          </div>
        </nav>
      </div>
    </article>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  const id = `section-${heading.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="text-base font-semibold text-ink mb-4 tracking-[-0.01em]"
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
