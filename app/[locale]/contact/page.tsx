import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/contact/ContactForm";
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
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
  };
}

const channels = [
  {
    label: "Email",
    value: "alessandro.tarsi@proton.me",
    href: "mailto:alessandro.tarsi@proton.me",
    ariaLabel: "Send an email to Alessandro",
    ariaLabelIT: "Invia un\u2019email ad Alessandro",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aletarsi",
    href: "https://www.linkedin.com/in/aletarsi/",
    ariaLabel: "LinkedIn profile (opens in new tab)",
    ariaLabelIT: "Profilo LinkedIn (si apre in una nuova scheda)",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/ale-tarsi",
    href: "https://github.com/ale-tarsi",
    ariaLabel: "GitHub profile (opens in new tab)",
    ariaLabelIT: "Profilo GitHub (si apre in una nuova scheda)",
    external: true,
  },
];

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict.contact;
  const isIT = locale === "it";

  return (
    <article className="pt-32 md:pt-40 pb-24">
      <section aria-labelledby="contact-heading">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-4">
                {t.label}
              </p>
              <h1
                id="contact-heading"
                className="font-display text-display-lg text-ink text-balance mb-6 leading-[1.06]"
              >
                {t.heading}
              </h1>
              <p className="text-ink-secondary text-base md:text-lg leading-relaxed text-balance mb-10 max-w-[400px]">
                {t.description}
              </p>

              {/* Channels */}
              <ul className="flex flex-col gap-4" aria-label={t.label}>
                {channels.map((c) => (
                  <li key={c.label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary">
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      aria-label={isIT ? c.ariaLabelIT : c.ariaLabel}
                      className="text-sm text-ink link-underline w-fit"
                    >
                      {c.value}
                      {c.external && " \u2197"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div>
              <Divider className="md:hidden mb-10" />
              <ContactForm dict={t} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
