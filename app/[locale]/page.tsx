import { getDictionary, isValidLocale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import SelectedProjects from "@/components/home/SelectedProjects";
import FocusAreas from "@/components/home/FocusAreas";
import FinalCTA from "@/components/home/FinalCTA";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <Intro dict={dict.intro} />
      <SelectedProjects dict={dict.selectedProjects} locale={locale} />
      <FocusAreas dict={dict.focusAreas} />
      <FinalCTA dict={dict.finalCTA} locale={locale} />
    </>
  );
}
