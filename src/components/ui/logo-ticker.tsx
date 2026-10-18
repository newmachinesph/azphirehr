"use client";

import { cn } from "@/lib/utils";

interface LogoTickerProps {
  /** Company names to display as placeholder badges. */
  logos?: string[];
  /** Speed of the scroll in seconds for one full cycle. */
  speed?: number;
  className?: string;
}

const defaultLogos = [
  "Jollibee Foods",
  "San Miguel Corp",
  "Ayala Corporation",
  "PLDT Inc",
  "BDO Unibank",
  "SM Investments",
  "Globe Telecom",
  "Aboitiz Power",
  "Metro Pacific",
  "Alliance Global",
  "Monde Nissin",
  "Converge ICT",
];

export function LogoTicker({
  logos = defaultLogos,
  speed = 30,
  className,
}: LogoTickerProps) {
  // Duplicate logos for seamless looping
  const allLogos = [...logos, ...logos];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        // Fade edges
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className="flex w-max gap-4 animate-[ticker_var(--ticker-speed)_linear_infinite]"
        style={{ "--ticker-speed": `${speed}s` } as React.CSSProperties}
      >
        {allLogos.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className={cn(
              "flex-shrink-0 flex items-center justify-center",
              "px-6 py-3 rounded-full",
              "bg-white border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
              "text-sm font-semibold text-text-muted whitespace-nowrap",
              "select-none hover:border-primary/20 transition-colors duration-300"
            )}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
