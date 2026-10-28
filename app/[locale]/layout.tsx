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
      default: "Alessandro Tarsi — Full Stack Developer · AtavicoLabs",
      template: "%s — Alessandro Tarsi",
    },
    description: isIT
      ? "Sviluppatore Full Stack e product designer. Con AtavicoLabs realizzo prodotti digitali solidi, strumenti operativi e automazioni per PMI e professionisti."
      : "Full Stack Developer and product designer. Through AtavicoLabs I build solid digital products, operational tools, and automations for small businesses and professionals.",
    openGraph: {
      type: "website",
      locale: isIT ? "it_IT" : "en_US",
      url: `https://ale-tarsi.github.io/portfolio/${locale}`,
      siteName: "Alessandro Tarsi",
      title: "Alessandro Tarsi — Full Stack Developer · AtavicoLabs",
      description: isIT
        ? "Sviluppatore Full Stack e product designer, fondatore di AtavicoLabs."
        : "Full Stack Developer and product designer, founder of AtavicoLabs.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Alessandro Tarsi — Full Stack Developer · AtavicoLabs",
      description: isIT
        ? "Sviluppatore Full Stack e product designer, fondatore di AtavicoLabs."
        : "Full Stack Developer and product designer, founder of AtavicoLabs.",
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
