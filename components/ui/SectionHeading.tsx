import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  level?: 1 | 2 | 3;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  level = 2,
}: SectionHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary">
          {label}
        </span>
      )}
      <Tag
        className={cn(
          "font-display text-display-md text-ink text-balance",
          titleClassName
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "text-ink-secondary text-base md:text-lg leading-relaxed max-w-prose-wide text-balance",
            align === "left" && "self-start"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
