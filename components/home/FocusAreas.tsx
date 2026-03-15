import type { Dictionary } from "@/dictionaries/en";

interface FocusAreasProps {
  dict: Dictionary["focusAreas"];
}

export default function FocusAreas({ dict }: FocusAreasProps) {
  return (
    <section
      className="section-padding border-t border-border bg-ink text-surface"
      aria-labelledby="focus-heading"
    >
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-start md:gap-20 gap-12">
          <div className="md:w-64 shrink-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-surface/40 mb-3">
              {dict.label}
            </p>
            <h2
              id="focus-heading"
              className="font-display text-display-md text-surface text-balance"
            >
              {dict.heading}
            </h2>
          </div>

          <ul className="flex-1 grid sm:grid-cols-2 gap-x-10 gap-y-10" role="list">
            {dict.areas.map((area, i) => (
              <li key={i} className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-surface tracking-[-0.01em]">
                  {area.title}
                </h3>
                <p className="text-sm text-surface/60 leading-relaxed">
                  {area.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
