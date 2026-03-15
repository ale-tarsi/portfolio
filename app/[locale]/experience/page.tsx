import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experience, education } from "@/data/experience";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import { getDictionary, isValidLocale } from "@/lib/dictionaries";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.experience.metaTitle,
    description: dict.experience.metaDescription,
  };
}

export default async function ExperiencePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict.experience;

  return (
    <article className="pt-32 md:pt-40 pb-24">
      {/* Header */}
      <section className="section-padding-sm" aria-labelledby="experience-heading">
        <div className="container-wide">
          <div className="max-w-[560px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-4">
              {t.label}
            </p>
            <h1
              id="experience-heading"
              className="font-display text-display-lg text-ink text-balance mb-5"
            >
              {t.heading}
            </h1>
            <p className="text-ink-secondary text-base md:text-lg leading-relaxed text-balance">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Work experience */}
      <section className="section-padding-sm" aria-labelledby="work-heading">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="pt-1">
              <h2
                id="work-heading"
                className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary"
              >
                {t.workLabel}
              </h2>
            </div>
            <ol
              className="flex flex-col divide-y divide-border"
              aria-label={t.workLabel}
            >
              {experience.map((item, i) => (
                <li key={i} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <p className="text-base font-semibold text-ink tracking-[-0.01em]">
                        {item.role}
                      </p>
                      <p className="text-sm text-ink-secondary mt-0.5">
                        {item.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm text-ink-secondary">{item.period}</p>
                      <p className="text-xs text-ink-tertiary mt-0.5">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/60 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="flex flex-col gap-2" role="list">
                    {item.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-ink-secondary"
                      >
                        <span
                          className="text-ink-tertiary mt-[5px] shrink-0 text-[10px]"
                          aria-hidden="true"
                        >
                          ◆
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Divider />

      {/* Education */}
      <section className="section-padding-sm" aria-labelledby="education-heading">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="pt-1">
              <h2
                id="education-heading"
                className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary"
              >
                {t.educationLabel}
              </h2>
            </div>
            <ol
              className="flex flex-col divide-y divide-border"
              aria-label={t.educationLabel}
            >
              {education.map((item, i) => (
                <li key={i} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <p className="text-base font-semibold text-ink tracking-[-0.01em]">
                        {item.degree}
                      </p>
                      <p className="text-sm text-ink-secondary mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm text-ink-secondary">{item.period}</p>
                      <p className="text-xs text-ink-tertiary mt-0.5">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  {item.notes && (
                    <p className="text-sm text-ink/60 leading-relaxed mt-3">
                      {item.notes}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-sm text-ink-secondary max-w-[400px] leading-relaxed">
              {t.ctaText}
            </p>
            <Button href={`/${locale}/contact`} size="lg">
              {t.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
