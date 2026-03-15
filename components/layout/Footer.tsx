import Link from "next/link";
import type { Locale } from "@/lib/dictionaries";
import type { Dictionary } from "@/dictionaries/en";

interface FooterProps {
  locale: Locale;
  dict: Dictionary["nav"];
}

const externalLinks = [
  { href: "https://github.com/ale-tarsi", label: "GitHub", ariaLabel: "GitHub profile (opens in new tab)" },
  { href: "https://www.linkedin.com/in/aletarsi/", label: "LinkedIn", ariaLabel: "LinkedIn profile (opens in new tab)" },
];

export default function Footer({ locale, dict }: FooterProps) {
  const footerLinks = [
    { href: `/${locale}/about`, label: dict.about },
    { href: `/${locale}/projects`, label: dict.projects },
    { href: `/${locale}/experience`, label: dict.experience },
    { href: `/${locale}/contact`, label: dict.contact },
  ];

  return (
    <footer className="border-t border-border mt-auto" role="contentinfo">
      <div className="container-wide py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left — Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-secondary hover:text-ink transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — External + copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <ul className="flex items-center gap-4">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-sm text-ink-secondary hover:text-ink transition-colors duration-150"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-ink-tertiary">
              © {new Date().getFullYear()} Alessandro Tarsi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
