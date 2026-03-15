"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import type { Locale } from "@/lib/dictionaries";
import type { Dictionary } from "@/dictionaries/en";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary["nav"];
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}/about`, label: dict.about },
    { href: `/${locale}/projects`, label: dict.projects },
    { href: `/${locale}/experience`, label: dict.experience },
    { href: `/${locale}/contact`, label: dict.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-expo-out",
        scrolled
          ? "bg-surface/95 backdrop-blur-sm border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav
        className="container-wide flex items-center justify-between h-16 md:h-[68px]"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href={`/${locale}`}
          className="text-sm font-semibold tracking-[-0.02em] text-ink hover:text-ink/70 transition-colors duration-150"
          aria-label="Alessandro Tarsi — home"
        >
          Alessandro Tarsi
        </Link>

        {/* Desktop links + language switcher */}
        <div className="hidden md:flex items-center gap-0">
          <ul className="flex items-center gap-0">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== `/${locale}` && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm px-4 py-2 transition-colors duration-150",
                      active
                        ? "text-ink font-medium"
                        : "text-ink-tertiary hover:text-ink"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-[-1px] left-4 right-4 h-[1.5px] bg-ink rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="ml-3 pl-3 border-l border-border">
            <LanguageSwitcher locale={locale} label={dict.switchLang} />
          </div>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher locale={locale} label={dict.switchLang} />
          <button
            className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-md hover:bg-ink/5 transition-colors duration-150"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? dict.closeMenu : dict.openMenu}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                "block w-[18px] h-[1.5px] bg-ink transition-all duration-200",
                menuOpen && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block w-[18px] h-[1.5px] bg-ink transition-all duration-200",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-[18px] h-[1.5px] bg-ink transition-all duration-200",
                menuOpen && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-expo-out bg-surface border-b border-border",
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="container-wide flex flex-col py-3 pb-5 gap-0.5">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== `/${locale}` && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block text-base py-2.5 px-2 rounded-md transition-colors duration-150",
                    active
                      ? "text-ink font-medium"
                      : "text-ink-tertiary hover:text-ink"
                  )}
                  aria-current={active ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
