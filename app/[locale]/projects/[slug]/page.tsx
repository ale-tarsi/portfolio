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

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const dict = await getDictionary(locale);
  const t = dict.projectDetail;

  const sections = [
    { key: "overview", label: t.sectionOverview, content: project.body.overview },
    { key: "context", label: t.sectionContext, content: project.body.context },
    { key: "approach", label: t.sectionApproach, content: project.body.approach },
    { key: "outcome", label: t.sectionOutcome, content: project.body.outcome },
  ];

  return (
    <article className="pt-32 md:pt-40 pb-24">
      <div className="container-wide">
        {/* Back link */}
        <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors duration-150"
          >
            <span aria-hidden="true">\u2190</span> {t.allProjects.replace("\u2190 ", "")}
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
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed max-w-[560px] text-balance mb-6">
                {project.subtitle}
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Tag label={tag} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Cover swatch */}
            <div
              className={`${project.coverColor} rounded-xl w-full md:w-64 lg:w-72 h-36 md:h-44 shrink-0`}
              aria-hidden="true"
            />
          </div>
        </header>

        <Divider spacing="sm" />

        {/* Body */}
        <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-20 mt-10 md:mt-14">
          {/* Sidebar — quick info */}
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
                <dd className="text-ink-secondary capitalize">
                  {project.status}
                </dd>
              </div>
              {project.links && (
                <div className="pt-2 flex flex-col gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink link-underline"
                      aria-label={t.githubAriaLabel}
                    >
                      {t.githubLabel}
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink link-underline"
                      aria-label={t.liveAriaLabel}
                    >
                      {t.liveLabel}
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink link-underline"
                      aria-label={t.demoAriaLabel}
                    >
                      {t.demoLabel}
                    </a>
                  )}
                </div>
              )}
            </dl>
          </aside>

          {/* Main content */}
          <div className="flex flex-col gap-12">
            {sections.map((s) => (
              <Section key={s.key} heading={s.label}>
                <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                  {s.content}
                </p>
              </Section>
            ))}

            {/* Challenges */}
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
          </div>
        </div>

        <Divider />

        {/* Navigation to other projects */}
        <nav
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
          aria-label="Project navigation"
        >
          <Button href={`/${locale}/projects`} variant="ghost" size="md">
            {t.backToProjects}
          </Button>
          <p className="text-sm text-ink-secondary">
            {t.discussText}{" "}
            <Link href={`/${locale}/contact`} className="text-ink link-underline">
              {t.contactLink}
            </Link>
          </p>
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
        className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-4"
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
