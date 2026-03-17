import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug, getProjects } from "@/data/projects";
import type { ProjectAsset } from "@/types";
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
  const project = getProjectBySlug(slug, locale);
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

  const project = getProjectBySlug(slug, locale);
  if (!project) notFound();

  const dict = await getDictionary(locale);
  const t = dict.projectDetail;

  const allProjects = getProjects(locale);
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

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
            <Section id="overview" heading={t.sectionOverview}>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                {project.body.overview}
              </p>
            </Section>

            <Section id="context" heading={t.sectionContext}>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                {project.body.context}
              </p>
            </Section>

            <Section id="challenges" heading={t.sectionChallenges}>
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

            <Section id="approach" heading={t.sectionApproach}>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                {project.body.approach}
              </p>
            </Section>

            <Section id="outcome" heading={t.sectionOutcome}>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                {project.body.outcome}
              </p>
            </Section>

            {project.body.sections?.map((s, i) => {
              const isFeatured = s.variant === "featured";
              const isModules = s.variant === "modules";
              const isStatusSummary = s.variant === "status-summary";

              const statusDot: Record<string, string> = {
                active:  "bg-green-500",
                pending: "bg-amber-400",
                planned: "bg-neutral-400",
              };

              return (
                <Section key={s.id ?? i} id={s.id} heading={s.heading} featured={isFeatured}>
                  <>
                  {isStatusSummary && s.statusGroups ? (
                    /* Status summary: stacked rows with dot + label + items */
                    <div className="border border-border rounded-lg divide-y divide-border">
                      {s.statusGroups.map((group, j) => (
                        <div key={j} className="flex items-start gap-3 px-4 py-3.5">
                          <span
                            className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${statusDot[group.type] ?? "bg-neutral-400"}`}
                            aria-hidden="true"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-ink tracking-[-0.01em]">{group.label}</p>
                            <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed">
                              {group.items.join(" · ")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : isModules && s.items ? (
                    /* Modules: 2-column card grid */
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.items.map((item, j) => (
                        <div key={j} className="border border-border rounded-lg p-4 flex flex-col gap-2.5">
                          <p className="text-sm font-semibold text-ink tracking-[-0.01em]">{item.name}</p>
                          <p className="text-sm text-ink-secondary leading-relaxed flex-1">{item.description}</p>
                          {item.status && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-ink-tertiary pt-1 border-t border-border">
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.statusType === "pending" ? "bg-amber-400" : "bg-green-500"}`}
                                aria-hidden="true"
                              />
                              {item.status}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : isFeatured ? (
                    /* Featured: zone layout — intro separated, list + steps in body */
                    <div className="rounded-xl border border-border">
                      {s.intro && (
                        <div className={`px-6 md:px-8 pt-6 md:pt-7 ${(s.content || s.list || s.steps) ? "pb-5 border-b border-border" : "pb-6 md:pb-7"}`}>
                          <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                            {s.intro}
                          </p>
                        </div>
                      )}
                      {(s.content || s.list || s.steps) && (
                        <div className="px-6 md:px-8 py-5 md:py-6 flex flex-col gap-5">
                          {s.content && (
                            <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                              {s.content}
                            </p>
                          )}
                          {s.list && (
                            <ul className="flex flex-col gap-2.5">
                              {s.list.map((item, j) => (
                                <li key={j} className="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink-tertiary shrink-0" aria-hidden="true" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                          {s.steps && s.list && <div className="border-t border-border" />}
                          {s.steps && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {s.steps.map((step, j) => (
                                <div key={j} className="border border-border rounded-lg p-4 flex flex-col gap-2">
                                  <span className="text-xs font-semibold text-ink-tertiary tabular-nums">
                                    {String(j + 1).padStart(2, "0")}
                                  </span>
                                  <p className="text-sm font-semibold text-ink tracking-[-0.01em]">
                                    {step.title}
                                  </p>
                                  <p className="text-sm text-ink-secondary leading-relaxed">
                                    {step.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Standard: flat, no wrapper */
                    <>
                      {s.intro && (
                        <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                          {s.intro}
                        </p>
                      )}
                      {s.content && (
                        <p className="text-ink-secondary text-base md:text-lg leading-relaxed">
                          {s.content}
                        </p>
                      )}
                      {s.list && (
                        <ul className="flex flex-col gap-2">
                          {s.list.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-ink-tertiary shrink-0" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {s.steps && (
                        <ol className="flex flex-col gap-3">
                          {s.steps.map((step, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                              <span className="shrink-0 text-xs font-semibold text-ink-tertiary tabular-nums mt-0.5 w-5">
                                {String(j + 1).padStart(2, "0")}
                              </span>
                              <span>
                                <span className="font-semibold text-ink">{step.title} — </span>
                                <span className="text-ink-secondary">{step.description}</span>
                              </span>
                            </li>
                          ))}
                        </ol>
                      )}
                    </>
                  )}
                  {s.assets && s.assets.length > 0 && <SectionAssets assets={s.assets} />}
                  </>
                </Section>
              );
            })}
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
  id: idProp,
  heading,
  featured,
  children,
}: {
  id?: string;
  heading: string;
  featured?: boolean;
  children: React.ReactNode;
}) {
  const id = idProp ?? `section-${heading.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className={`font-semibold text-ink tracking-[-0.01em] ${featured ? "text-lg mb-6" : "text-base mb-4"}`}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

function SectionAssets({ assets }: { assets: ProjectAsset[] }) {
  return (
    <div className="mt-5 flex flex-col gap-4">
      {assets.map((asset, i) => {
        /* ── image ───────────────────────────────────────────────── */
        if (asset.type === "image") {
          return (
            <figure key={i}>
              {asset.url ? (
                <img src={asset.url} alt={asset.alt ?? ""} className="w-full rounded-lg" />
              ) : (
                <div className="w-full min-h-[10rem] rounded-lg border border-dashed border-border bg-neutral-100 flex items-center justify-center">
                  {asset.caption && (
                    <p className="text-xs text-ink-tertiary px-6 text-center">{asset.caption}</p>
                  )}
                </div>
              )}
              {asset.url && asset.caption && (
                <figcaption className="mt-1.5 text-xs text-ink-tertiary">{asset.caption}</figcaption>
              )}
            </figure>
          );
        }

        /* ── gallery ─────────────────────────────────────────────── */
        if (asset.type === "gallery") {
          const imgs = asset.images ?? [];
          return (
            <div key={i}>
              {imgs.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {imgs.map((img, j) => (
                    <img
                      key={j}
                      src={img.url}
                      alt={img.alt ?? ""}
                      className="w-full aspect-video object-cover rounded-md"
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" aria-hidden="true">
                  {[0, 1, 2].map((j) => (
                    <div
                      key={j}
                      className="aspect-video rounded-md border border-dashed border-border bg-neutral-100"
                    />
                  ))}
                </div>
              )}
              {asset.caption && (
                <p className="mt-1.5 text-xs text-ink-tertiary">{asset.caption}</p>
              )}
            </div>
          );
        }

        /* ── diagram ─────────────────────────────────────────────── */
        if (asset.type === "diagram") {
          return (
            <figure key={i}>
              {asset.url ? (
                <img src={asset.url} alt={asset.alt ?? ""} className="w-full rounded-lg" />
              ) : (
                <div className="w-full min-h-[14rem] rounded-lg border border-dashed border-border bg-neutral-100 flex items-center justify-center">
                  {asset.caption && (
                    <p className="text-xs text-ink-tertiary px-6 text-center">{asset.caption}</p>
                  )}
                </div>
              )}
              {asset.url && asset.caption && (
                <figcaption className="mt-1.5 text-xs text-ink-tertiary">{asset.caption}</figcaption>
              )}
            </figure>
          );
        }

        /* ── demo ────────────────────────────────────────────────── */
        if (asset.type === "demo") {
          return (
            <div key={i} className="border border-border rounded-lg p-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                {asset.label && (
                  <p className="text-sm font-semibold text-ink tracking-[-0.01em]">{asset.label}</p>
                )}
                {asset.caption && (
                  <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed">{asset.caption}</p>
                )}
              </div>
              {asset.url ? (
                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-semibold text-ink border border-border rounded-md px-3 py-1.5 hover:bg-neutral-100 transition-colors duration-150"
                >
                  View →
                </a>
              ) : (
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-400" aria-hidden="true" />
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
