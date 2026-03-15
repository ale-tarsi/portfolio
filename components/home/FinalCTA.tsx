import Button from "@/components/ui/Button";
import type { Dictionary } from "@/dictionaries/en";

interface FinalCTAProps {
  dict: Dictionary["finalCTA"];
  locale?: string;
}

export default function FinalCTA({ dict, locale = "en" }: FinalCTAProps) {
  return (
    <section
      className="section-padding border-t border-border"
      aria-labelledby="cta-heading"
    >
      <div className="container-wide">
        <div className="max-w-[640px]">
          <p className="text-label mb-5">{dict.badge}</p>
          <h2
            id="cta-heading"
            className="font-display text-display-md text-ink text-balance mb-6"
          >
            {dict.heading1}
            <br />
            {dict.heading2}
            <br />
            {dict.heading3}
          </h2>
          <p className="text-ink-secondary text-base md:text-lg leading-relaxed mb-10 max-w-[500px] text-balance">
            {dict.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={`/${locale}/contact`} size="lg">
              {dict.primary}
            </Button>
            <Button href={`/${locale}/about`} variant="outline" size="lg">
              {dict.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
