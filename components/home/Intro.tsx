import type { Dictionary } from "@/dictionaries/en";

interface IntroProps {
  dict: Dictionary["intro"];
}

export default function Intro({ dict }: IntroProps) {
  return (
    <section className="section-padding-sm border-t border-border" aria-label="Introduction">
      <div className="container-wide">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div className="pt-1">
            <p className="text-label">{dict.label}</p>
          </div>
          <div className="flex flex-col gap-5 max-w-[640px]">
            <p className="text-ink text-lg md:text-xl leading-relaxed">{dict.p1}</p>
            <p className="text-ink-secondary text-base md:text-lg leading-relaxed">{dict.p2}</p>
            <p className="text-ink-secondary text-base md:text-lg leading-relaxed">{dict.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
