import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getDictionary, isValidLocale, locales } from "@/lib/dictionaries";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isIT = locale === "it";

  return {
    title: {
      default: "Alessandro Tarsi — Frontend & Full Stack Developer",
      template: "%s — Alessandro Tarsi",
    },
    description: isIT
      ? "Sviluppatore Frontend e Full Stack con background nel Product Design. Focalizzato su prodotti digitali, strumenti operativi e implementazione curata."
      : "Product-minded Frontend and Full Stack Developer with a Product Design background. Focused on digital products, operational tools, and thoughtful implementation.",
    openGraph: {
      type: "website",
      locale: isIT ? "it_IT" : "en_US",
      url: "https://alessandrotarsi.com",
      siteName: "Alessandro Tarsi",
      title: "Alessandro Tarsi — Frontend & Full Stack Developer",
      description: isIT
        ? "Sviluppatore Frontend e Full Stack con background nel Product Design."
        : "Product-minded Frontend and Full Stack Developer with a Product Design background.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Alessandro Tarsi — Frontend & Full Stack Developer",
      description: isIT
        ? "Sviluppatore Frontend e Full Stack con background nel Product Design."
        : "Product-minded Frontend and Full Stack Developer with a Product Design background.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} dict={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict.nav} />
    </>
  );
}
