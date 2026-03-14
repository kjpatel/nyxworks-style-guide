import { ReactNode } from "react";

type Variant = "vertical" | "horizontal" | "featured";

/** Article preview card for blog sections. */
interface BlogCardProps {
  /** Article title. */
  title: string;
  /** Short excerpt. */
  excerpt?: string;
  /** Cover image or placeholder. */
  image?: ReactNode;
  /** Author name. */
  author?: string;
  /** Author avatar. */
  authorAvatar?: ReactNode;
  /** Publication date string. */
  date?: string;
  /** Category badge. */
  category?: ReactNode;
  /** Link URL. */
  href?: string;
  /** Layout variant. @default "vertical" */
  variant?: Variant;
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  author,
  authorAvatar,
  date,
  category,
  href,
  variant = "vertical",
  className = "",
}: BlogCardProps) {
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href } : {};

  if (variant === "horizontal") {
    return (
      <Tag
        {...linkProps}
        className={`flex gap-4 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-card-hover)] transition-all ${href ? "cursor-pointer" : ""} ${className}`}
      >
        {image && <div className="shrink-0 w-48 bg-[var(--color-bg-card-hover)]">{image}</div>}
        <div className="flex-1 p-4 min-w-0">
          {category && <div className="mb-2">{category}</div>}
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)] line-clamp-2">{title}</h3>
          {excerpt && <p className="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-2">{excerpt}</p>}
          <div className="flex items-center gap-2 mt-3">
            {authorAvatar && <div className="shrink-0">{authorAvatar}</div>}
            {author && <span className="text-xs font-medium text-[var(--color-text-secondary)]">{author}</span>}
            {date && <span className="text-xs text-[var(--color-text-muted)]">{date}</span>}
          </div>
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      {...linkProps}
      className={`rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-card-hover)] transition-all ${href ? "cursor-pointer" : ""} ${variant === "featured" ? "col-span-2" : ""} ${className}`}
    >
      {image && (
        <div className={`bg-[var(--color-bg-card-hover)] ${variant === "featured" ? "aspect-[2/1]" : "aspect-video"} overflow-hidden`}>
          {image}
        </div>
      )}
      <div className="p-4">
        {category && <div className="mb-2">{category}</div>}
        <h3 className={`font-semibold text-[var(--color-text-primary)] line-clamp-2 ${variant === "featured" ? "text-lg" : "text-sm"}`}>
          {title}
        </h3>
        {excerpt && <p className="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-2">{excerpt}</p>}
        <div className="flex items-center gap-2 mt-3">
          {authorAvatar && <div className="shrink-0">{authorAvatar}</div>}
          {author && <span className="text-xs font-medium text-[var(--color-text-secondary)]">{author}</span>}
          {date && <span className="text-xs text-[var(--color-text-muted)]">{date}</span>}
        </div>
      </div>
    </Tag>
  );
}
