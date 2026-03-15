import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { getDictionary, isValidLocale } from "@/lib/dictionaries";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
  };
}

const stackGroups = [
  {
    category: "Frontend",
    items: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Angular",
      "HTML / CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Python",
      "FastAPI / Django",
      "PostgreSQL",
      "MongoDB",
      "REST API design",
    ],
  },
  {
    category: "Tooling",
    items: [
      "Docker",
      "Git",
      "WebSocket",
      "n8n",
      "Workflow automation",
    ],
  },
  {
    category: "Design",
    items: [
      "UX / UI",
      "Product Design",
      "Design systems",
      "Interaction design",
    ],
  },
];

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict.about;

  return (
    <article className="pt-32 md:pt-40">
      {/* Intro block */}
      <section className="section-padding-sm" aria-labelledby="about-heading">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="pt-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary">
                {t.label}
              </p>
            </div>
            <div>
              <h1
                id="about-heading"
                className="font-display text-display-lg text-ink text-balance mb-8"
              >
                {t.headingLine1}
                <br />
                {t.headingLine2}
                <br />
                <span className="text-ink-tertiary">{t.headingAccent}</span>
              </h1>
              <div className="flex flex-col gap-5 text-ink-secondary text-base md:text-lg leading-relaxed max-w-[620px]">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
                <p>{t.p4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Skills / Stack */}
      <section className="section-padding-sm" aria-labelledby="stack-heading">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="pt-1">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary"
                id="stack-heading"
              >
                {t.stackLabel}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {stackGroups.map((group) => (
                <div key={group.category}>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-3">
                    {group.category}
                  </h2>
                  <ul className="flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-ink-secondary">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Work values */}
      <section
        className="section-padding-sm"
        aria-labelledby="values-heading"
      >
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="pt-1">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary"
                id="values-heading"
              >
                {t.valuesLabel}
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8" role="list">
              {dict.focusAreas.areas.map((area, i) => (
                <li key={i}>
                  <h2 className="text-sm font-semibold text-ink mb-2 tracking-[-0.01em]">
                    {area.title}
                  </h2>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {area.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="section-padding-sm pb-24">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-sm text-ink-secondary leading-relaxed max-w-[440px]">
                {t.ctaText}
              </p>
            </div>
            <Button href={`/${locale}/contact`} size="lg">
              {t.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
