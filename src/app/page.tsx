import Link from "next/link";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Palette, Component, LayoutGrid, Layers, Github } from "lucide-react";

const sections = [
  {
    title: "Foundations",
    description: "Colors, typography, spacing, and icons that form the visual language.",
    href: "/foundations",
    icon: Palette,
  },
  {
    title: "Components",
    description: "20 reusable UI components with live previews and source code.",
    href: "/components",
    icon: Component,
  },
  {
    title: "Patterns",
    description: "Layout, animation, and interaction patterns for common scenarios.",
    href: "/patterns",
    icon: LayoutGrid,
  },
  {
    title: "Examples",
    description: "Full page layouts — dashboard, settings, and landing page.",
    href: "/examples",
    icon: Layers,
  },
];

export default function Home() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">NyxWorks.ai</span> Style Guide
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mb-6">
              Design tokens, components, and patterns for the NyxWorks design system.
              Use this as the source of truth for building consistent NyxWorks sub-projects.
            </p>
            <a
              href="https://github.com/kjpatel/nyxworks-style-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-colors mb-16"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, i) => (
              <AnimateOnScroll key={section.title} delay={i * 0.1}>
                <Link
                  href={section.href}
                  className="group block rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all p-8 no-underline glow-border"
                >
                  <section.icon
                    size={28}
                    className="text-[var(--color-accent-light)] mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-accent-light)] transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {section.description}
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
