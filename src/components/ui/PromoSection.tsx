import { ReactNode } from "react";

interface PromoItem {
  /** Icon element. */
  icon?: ReactNode;
  /** Benefit title. */
  title: string;
  /** Short description. */
  description?: string;
}

type Layout = "row" | "grid" | "banner";
type Bg = "transparent" | "card" | "accent";

/** Incentive/benefit strip (shipping, returns, warranty, etc.). */
interface PromoSectionProps {
  /** Promo items. */
  items: PromoItem[];
  /** Layout variant. @default "row" */
  layout?: Layout;
  /** Background style. @default "transparent" */
  bg?: Bg;
  className?: string;
}

const bgMap: Record<Bg, string> = {
  transparent: "",
  card: "bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl",
  accent: "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-2xl text-white",
};

export default function PromoSection({ items, layout = "row", bg = "transparent", className = "" }: PromoSectionProps) {
  const isAccent = bg === "accent";

  return (
    <div className={`${bgMap[bg]} ${layout === "banner" ? "px-6 py-4" : "px-6 py-6"} ${className}`}>
      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : layout === "banner"
              ? "flex items-center justify-center gap-2 text-center"
              : "flex flex-wrap items-start justify-center gap-8"
        }
      >
        {layout === "banner" ? (
          <div className="flex items-center gap-2">
            {items[0]?.icon && <span className={isAccent ? "" : "text-[var(--color-accent-light)]"}>{items[0].icon}</span>}
            <span className={`text-sm font-medium ${isAccent ? "" : "text-[var(--color-text-primary)]"}`}>
              {items[0]?.title}
            </span>
            {items[0]?.description && (
              <span className={`text-sm ${isAccent ? "opacity-80" : "text-[var(--color-text-muted)]"}`}>
                — {items[0].description}
              </span>
            )}
          </div>
        ) : (
          items.map((item, i) => (
            <div key={i} className={`flex ${layout === "grid" ? "items-start gap-4" : "flex-col items-center text-center gap-2"}`}>
              {item.icon && (
                <div className={`shrink-0 ${isAccent ? "" : "text-[var(--color-accent-light)]"}`}>{item.icon}</div>
              )}
              <div>
                <p className={`text-sm font-medium ${isAccent ? "" : "text-[var(--color-text-primary)]"}`}>{item.title}</p>
                {item.description && (
                  <p className={`text-xs mt-0.5 ${isAccent ? "opacity-80" : "text-[var(--color-text-muted)]"}`}>{item.description}</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
