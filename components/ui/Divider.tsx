import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  spacing?: "sm" | "md" | "lg";
}

export default function Divider({ className, spacing = "md" }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-t border-border",
        spacing === "sm" && "my-6",
        spacing === "md" && "my-10 md:my-14",
        spacing === "lg" && "my-14 md:my-20",
        className
      )}
    />
  );
}
