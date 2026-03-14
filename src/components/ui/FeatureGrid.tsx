import { ReactNode } from "react";

interface Feature {
  /** Feature icon. */
  icon?: ReactNode;
  /** Feature title. */
  title: string;
  /** Feature description. */
  description: string;
  /** Optional image/media. */
  media?: ReactNode;
}

type Layout = "grid" | "alternating" | "bento" | "centered";

/** Feature showcase section with multiple layout variants. */
interface FeatureGridProps {
  /** Optional section heading. */
  title?: string;
  /** Optional section description. */
  subtitle?: string;
  /** Feature items. */
  features: Feature[];
  /** Layout variant. @default "grid" */
  layout?: Layout;
  /** Grid columns (for "grid"/"centered" layouts). @default 3 */
  columns?: 2 | 3 | 4;
  className?: string;
}

const colMap = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function FeatureGrid({
  title,
  subtitle,
  features,
  layout = "grid",
  columns = 3,
  className = "",
}: FeatureGridProps) {
  const header = (title || subtitle) && (
    <div className={`mb-12 ${layout === "centered" || layout === "grid" ? "text-center" : ""} max-w-2xl ${layout === "centered" || layout === "grid" ? "mx-auto" : ""}`}>
      {title && <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">{title}</h2>}
      {subtitle && <p className="mt-3 text-lg text-[var(--color-text-secondary)]">{subtitle}</p>}
    </div>
  );

  if (layout === "alternating") {
    return (
      <section className={`py-24 px-6 ${className}`}>
        <div className="mx-auto max-w-6xl">
          {header}
          <div className="space-y-24">
            {features.map((f, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  {f.icon && <div className="text-[var(--color-accent-light)] mb-4">{f.icon}</div>}
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{f.title}</h3>
                  <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">{f.description}</p>
                </div>
                {f.media && (
                  <div className={`rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    {f.media}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (layout === "bento") {
    return (
      <section className={`py-24 px-6 ${className}`}>
        <div className="mx-auto max-w-6xl">
          {header}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-6 ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                {f.media && <div className="mb-4 rounded-xl overflow-hidden">{f.media}</div>}
                {f.icon && <div className="text-[var(--color-accent-light)] mb-3">{f.icon}</div>}
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // "grid" and "centered"
  return (
    <section className={`py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {header}
        <div className={`grid ${colMap[columns]} gap-6`}>
          {features.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-6 ${
                layout === "centered" ? "text-center" : ""
              }`}
            >
              {f.icon && (
                <div className={`text-[var(--color-accent-light)] mb-3 ${layout === "centered" ? "flex justify-center" : ""}`}>
                  {f.icon}
                </div>
              )}
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{f.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
