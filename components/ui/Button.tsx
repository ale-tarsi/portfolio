import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-surface hover:bg-ink/80 active:bg-ink/65",
  ghost:
    "bg-transparent text-ink-secondary hover:text-ink active:text-ink/70",
  outline:
    "bg-transparent text-ink border border-border-strong hover:border-ink hover:bg-ink/[0.03] active:bg-ink/[0.06]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 rounded-md",
  md: "text-sm px-5 py-2.5 rounded-md",
  lg: "text-base px-7 py-3.5 rounded-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  onClick,
  disabled,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 font-medium tracking-[-0.01em] transition-all duration-150 ease-expo-out select-none";
  const disabledStyles = disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "";

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
