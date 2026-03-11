import Image from "next/image";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ColorSwatch from "@/components/styleguide/ColorSwatch";
import TypeScale from "@/components/styleguide/TypeScale";
import SpacingScale from "@/components/styleguide/SpacingScale";
import { colors, typography, spacing } from "@/data/tokens";
import {
  ArrowRight, Bell, Check, ChevronDown, Code, Copy, Download, Edit,
  ExternalLink, Eye, Filter, Heart, Home, Inbox, Info, Loader2, Mail,
  Menu, MoreHorizontal, Plus, Search, Settings, Star, Trash2, User, X,
} from "lucide-react";

const iconSet = [
  { icon: ArrowRight, name: "ArrowRight" },
  { icon: Bell, name: "Bell" },
  { icon: Check, name: "Check" },
  { icon: ChevronDown, name: "ChevronDown" },
  { icon: Code, name: "Code" },
  { icon: Copy, name: "Copy" },
  { icon: Download, name: "Download" },
  { icon: Edit, name: "Edit" },
  { icon: ExternalLink, name: "ExternalLink" },
  { icon: Eye, name: "Eye" },
  { icon: Filter, name: "Filter" },
  { icon: Heart, name: "Heart" },
  { icon: Home, name: "Home" },
  { icon: Inbox, name: "Inbox" },
  { icon: Info, name: "Info" },
  { icon: Loader2, name: "Loader2" },
  { icon: Mail, name: "Mail" },
  { icon: Menu, name: "Menu" },
  { icon: MoreHorizontal, name: "MoreHorizontal" },
  { icon: Plus, name: "Plus" },
  { icon: Search, name: "Search" },
  { icon: Settings, name: "Settings" },
  { icon: Star, name: "Star" },
  { icon: Trash2, name: "Trash2" },
  { icon: User, name: "User" },
  { icon: X, name: "X" },
];

export default function FoundationsPage() {
  return (
    <>
      <div className="py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* Logo & Wordmark */}
          <AnimateOnScroll>
            <section>
              <h1 className="text-3xl font-bold mb-2">Foundations</h1>
              <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-12" />

              <h2 className="text-2xl font-semibold mb-6">Logo & Wordmark</h2>

              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">Wordmark</h3>
              <div className="p-8 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] mb-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold tracking-tight">
                      <span className="font-[family-name:var(--font-orbitron)] text-[var(--color-text-primary)]">NyxWorks.</span>
                      <span className="font-[family-name:var(--font-orbitron)] text-[#8A5CFF]">ai</span>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="p-3 rounded-lg border border-[var(--color-border)]">
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">NyxWorks.</p>
                      <p className="font-mono text-xs text-[var(--color-accent-light)]">Orbitron Bold · var(--color-text-primary)</p>
                    </div>
                    <div className="p-3 rounded-lg border border-[var(--color-border)]">
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">ai</p>
                      <p className="font-mono text-xs text-[var(--color-accent-light)]">Orbitron Bold · #8A5CFF</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">Logo Assets</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-6 rounded-xl bg-[#0B0F1A] border border-[var(--color-border)] flex flex-col items-center gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Image src="/icon-dark.png" alt="Icon dark" width={40} height={40} className="rounded-sm" />
                      <span className="text-[10px] text-[#7B7F8E]">icon-dark.png</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Image src="/logo-dark.png" alt="Logo dark" width={120} height={40} className="rounded-sm" />
                      <span className="text-[10px] text-[#7B7F8E]">logo-dark.png</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#7B7F8E]">Dark background</span>
                </div>
                <div className="p-6 rounded-xl bg-[#F4F3FA] border border-[var(--color-border)] flex flex-col items-center gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Image src="/icon-light.png" alt="Icon light" width={40} height={40} className="rounded-sm mix-blend-multiply" />
                      <span className="text-[10px] text-[#8B8FA0]">icon-light.png</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Image src="/logo-light.png" alt="Logo light" width={120} height={40} className="rounded-sm mix-blend-multiply" />
                      <span className="text-[10px] text-[#8B8FA0]">logo-light.png</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#8B8FA0]">Light background</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[var(--color-info)]/30 bg-[var(--color-info)]/5 text-sm text-[var(--color-text-secondary)]">
                Use <code className="font-mono text-[var(--color-accent-light)]">mix-blend-multiply</code> on the light icon variant to eliminate white background artifacts.
              </div>
            </section>
          </AnimateOnScroll>

          {/* Colors */}
          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Colors</h2>

              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">Core Palette</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {colors.core.map((c) => (
                  <ColorSwatch key={c.name} {...c} />
                ))}
              </div>

              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">Semantic Colors</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {colors.semantic.map((c) => (
                  <ColorSwatch key={c.name} {...c} />
                ))}
              </div>
            </section>
          </AnimateOnScroll>

          {/* Typography */}
          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Typography</h2>

              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">Font Families</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {typography.fonts.map((f) => (
                  <div key={f.name} className="p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <p className={`text-2xl mb-1 ${f.variable === "--font-mono" ? "font-mono" : ""}`}>
                      {f.name}
                    </p>
                    <p className="text-xs font-mono text-[var(--color-accent-light)]">{f.variable}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{f.usage}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">Type Scale</h3>
              <div className="p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] mb-8">
                {typography.scale.map((t) => (
                  <TypeScale key={t.name} name={t.name} className={t.class} size={t.size} />
                ))}
              </div>

              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">Font Weights</h3>
              <div className="p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                {typography.weights.map((w) => (
                  <div key={w.name} className="flex items-baseline gap-6 py-2 border-b border-[var(--color-border)] last:border-0">
                    <span className="w-20 text-xs font-mono text-[var(--color-accent-light)]">{w.class}</span>
                    <span className="w-16 text-xs text-[var(--color-text-muted)]">{w.value}</span>
                    <span className={`text-lg ${w.class}`}>{w.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </AnimateOnScroll>

          {/* Spacing */}
          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Spacing</h2>
              <div className="p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-3">
                {spacing.map((s) => (
                  <SpacingScale key={s.name} name={s.name} size={s.size} />
                ))}
              </div>
            </section>
          </AnimateOnScroll>

          {/* Icons */}
          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Icons</h2>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                Lucide React — use at sizes 14, 16, 18, 20, or 24.
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                {iconSet.map(({ icon: Icon, name }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors"
                  >
                    <Icon size={20} className="text-[var(--color-text-secondary)]" />
                    <span className="text-[10px] text-[var(--color-text-muted)] text-center leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
      <Footer />
    </>
  );
}
