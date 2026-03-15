"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string; // e.g. "IT" or "EN"
}

export default function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Swap the locale segment: /en/about → /it/about
  const targetLocale: Locale = locale === "en" ? "it" : "en";
  const newPath = pathname.replace(
    new RegExp(`^/${locale}(/|$)`),
    `/${targetLocale}$1`
  );

  return (
    <Link
      href={newPath}
      aria-label={`Switch language to ${targetLocale.toUpperCase()}`}
      className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md border border-transparent text-ink-tertiary hover:text-ink hover:border-border transition-all duration-150"
    >
      {label}
    </Link>
  );
}
