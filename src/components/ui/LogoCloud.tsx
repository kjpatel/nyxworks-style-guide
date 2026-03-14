import { ReactNode } from "react";

interface Logo {
  /** Logo content — an image, SVG, or any ReactNode. */
  content: ReactNode;
  /** Alt text for accessibility. */
  alt?: string;
}

/** Row or grid of partner/client logos with hover effect. */
interface LogoCloudProps {
  /** Optional heading above the logos. */
  title?: string;
  /** Logo items. */
  logos: Logo[];
  /** Layout variant. @default "row" */
  layout?: "row" | "grid";
  /** Grid columns (for "grid" layout). @default 4 */
  columns?: 3 | 4 | 5 | 6;
  className?: string;
}

const colMap = {
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
  5: "grid-cols-3 sm:grid-cols-5",
  6: "grid-cols-3 sm:grid-cols-6",
};

export default function LogoCloud({ title, logos, layout = "row", columns = 4, className = "" }: LogoCloudProps) {
  return (
    <div className={`text-center ${className}`}>
      {title && (
        <p className="text-sm font-medium text-[var(--color-text-muted)] mb-6">{title}</p>
      )}
      <div
        className={
          layout === "row"
            ? "flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
            : `grid ${colMap[columns]} gap-8 items-center justify-items-center`
        }
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="h-10 flex items-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all"
          >
            {logo.content}
          </div>
        ))}
      </div>
    </div>
  );
}
