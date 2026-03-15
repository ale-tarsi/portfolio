import type { Dictionary } from "@/dictionaries/en";

export type Locale = "en" | "it";

export const locales: Locale[] = ["en", "it"];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("@/dictionaries/en").then((m) => m.default),
  it: () => import("@/dictionaries/it").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (dictionaries[locale] ?? dictionaries[defaultLocale])();
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
