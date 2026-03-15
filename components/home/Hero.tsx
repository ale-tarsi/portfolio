import Button from "@/components/ui/Button";
import type { Dictionary } from "@/dictionaries/en";

interface HeroProps {
  dict: Dictionary["hero"];
  locale?: string;
}

export default function Hero({ dict, locale = "en" }: HeroProps) {
  return (
    <section
      className="section-padding pt-36 md:pt-44 lg:pt-52"
      aria-labelledby="hero-heading"
    >
      <div className="container-wide">
        <div className="max-w-[940px]">
          <p className="text-label mb-7">{dict.badge}</p>
          <h1
            id="hero-heading"
            className="font-display text-display-xl text-ink text-balance mb-9 leading-[1.04]"
          >
            {dict.line1}
            <br />
            {dict.line2}
            <br />
            <span className="text-ink-tertiary">{dict.accent}</span>
          </h1>
          <p className="text-ink-secondary text-lg md:text-xl leading-relaxed max-w-[540px] text-balance mb-11">
            {dict.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={`/${locale}/projects`} size="lg">
              {dict.viewProjects}
            </Button>
            <Button href={`/${locale}/contact`} variant="ghost" size="lg">
              {dict.getInTouch}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
