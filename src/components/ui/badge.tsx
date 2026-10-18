import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "secondary" | "accent";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
  accent: "bg-accent/10 text-cyan-700 border-accent/20",
};

export function Badge({
  variant = "primary",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full",
        "text-xs font-semibold tracking-wide border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
