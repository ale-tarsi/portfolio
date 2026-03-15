import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  className?: string;
  variant?: "default" | "muted";
}

export default function Tag({ label, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-medium tracking-wide px-2.5 py-1 rounded-full",
        variant === "default" && "bg-ink/8 text-ink",
        variant === "muted" && "bg-border text-ink-secondary",
        className
      )}
    >
      {label}
    </span>
  );
}
