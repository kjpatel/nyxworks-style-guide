"use client";

import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Specimen from "@/components/styleguide/Specimen";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import { ExternalLink, TrendingUp, Users, DollarSign, Activity, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function PatternsPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-10">
          <AnimateOnScroll>
            <h1 className="text-3xl font-bold mb-2">Patterns</h1>
            <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-4" />
            <p className="text-[var(--color-text-secondary)] mb-12">
              Reusable layout, animation, and interaction patterns.
            </p>
          </AnimateOnScroll>

          {/* Page Shell */}
          <Specimen
            title="Page Shell"
            description="Standard page layout with constrained width and vertical rhythm."
            code={`<section className="py-24 px-6">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-bold mb-4">Section Title</h2>
    <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-4" />
    <p className="text-[var(--color-text-secondary)] max-w-2xl mb-16">
      Description text.
    </p>
    {/* Content */}
  </div>
</section>`}
          >
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 text-center text-sm text-[var(--color-text-muted)]">
              <div className="border border-dashed border-[var(--color-border)] rounded-lg p-8 mb-4">
                Header
              </div>
              <div className="border border-dashed border-[var(--color-border)] rounded-lg p-16 mb-4">
                max-w-6xl content area with py-24 px-6
              </div>
              <div className="border border-dashed border-[var(--color-border)] rounded-lg p-8">
                Footer
              </div>
            </div>
          </Specimen>

          {/* Sidebar Layout */}
          <Specimen
            title="Sidebar Layout"
            description="Two-column layout with fixed sidebar and scrollable content."
            code={`<div className="flex gap-8">
  <aside className="w-64 shrink-0">
    <nav className="space-y-1">
      <a className="block px-4 py-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">Active</a>
      <a className="block px-4 py-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card)]">Link</a>
    </nav>
  </aside>
  <main className="flex-1 min-w-0">{/* Content */}</main>
</div>`}
          >
            <div className="flex gap-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 min-h-[200px]">
              <aside className="w-48 shrink-0 space-y-1">
                <div className="px-4 py-2 rounded-lg bg-[var(--color-accent)]/10 text-sm text-[var(--color-accent-light)]">Overview</div>
                <div className="px-4 py-2 rounded-lg text-sm text-[var(--color-text-muted)]">Analytics</div>
                <div className="px-4 py-2 rounded-lg text-sm text-[var(--color-text-muted)]">Settings</div>
                <div className="px-4 py-2 rounded-lg text-sm text-[var(--color-text-muted)]">Team</div>
              </aside>
              <div className="flex-1 border border-dashed border-[var(--color-border)] rounded-lg p-8 text-center text-sm text-[var(--color-text-muted)]">
                Main content area
              </div>
            </div>
          </Specimen>

          {/* Grid Systems */}
          <Specimen
            title="Grid Systems"
            description="Responsive grids: 2-col, 3-col, 4-col with gap-6 or gap-8."
            code={`{/* 2-column */}
<div className="grid md:grid-cols-2 gap-8">{/* items */}</div>

{/* 3-column */}
<div className="grid md:grid-cols-3 gap-6">{/* items */}</div>

{/* 4-column */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">{/* items */}</div>`}
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs text-[var(--color-text-muted)] mb-2">2-column (md:grid-cols-2 gap-8)</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[1, 2].map(n => (
                    <div key={n} className="h-16 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-sm text-[var(--color-accent-light)]">{n}</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] mb-2">3-column (md:grid-cols-3 gap-6)</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[1, 2, 3].map(n => (
                    <div key={n} className="h-16 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-sm text-[var(--color-accent-light)]">{n}</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] mb-2">4-column (grid-cols-2 md:grid-cols-4 gap-4)</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="h-16 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-sm text-[var(--color-accent-light)]">{n}</div>
                  ))}
                </div>
              </div>
            </div>
          </Specimen>

          {/* Scroll Animation */}
          <Specimen
            title="Scroll-Triggered Animation"
            description="Fade-in + slide-up on viewport entry using AnimateOnScroll."
            code={`<AnimateOnScroll>
  <div>Fades in when scrolled into view</div>
</AnimateOnScroll>

<AnimateOnScroll delay={0.2}>
  <div>With staggered delay</div>
</AnimateOnScroll>`}
          >
            <div className="space-y-4">
              <AnimateOnScroll>
                <Card>
                  <p className="font-medium">First item</p>
                  <p className="text-sm text-[var(--color-text-muted)]">No delay — appears first.</p>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.15}>
                <Card>
                  <p className="font-medium">Second item</p>
                  <p className="text-sm text-[var(--color-text-muted)]">delay=0.15 — appears second.</p>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3}>
                <Card>
                  <p className="font-medium">Third item</p>
                  <p className="text-sm text-[var(--color-text-muted)]">delay=0.3 — appears third.</p>
                </Card>
              </AnimateOnScroll>
            </div>
          </Specimen>

          {/* Hover Effects */}
          <Specimen
            title="Hover & Glow Effects"
            description="Card hover transitions: border color change, glow-border pseudo-element."
            code={`{/* Interactive border + glow */}
<div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all glow-border">
  Card content
</div>

{/* Text color on group hover */}
<div className="group">
  <h3 className="group-hover:text-[var(--color-accent-light)] transition-colors">Title</h3>
</div>`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all glow-border p-6 cursor-pointer">
                <p className="font-medium mb-1">Glow Border</p>
                <p className="text-sm text-[var(--color-text-muted)]">Hover to see the accent glow effect.</p>
              </div>
              <div className="group rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:bg-[var(--color-bg-card-hover)] transition-all p-6 cursor-pointer">
                <p className="font-medium mb-1 group-hover:text-[var(--color-accent-light)] transition-colors">Group Hover</p>
                <p className="text-sm text-[var(--color-text-muted)]">Title changes color on card hover.</p>
              </div>
            </div>
          </Specimen>

          {/* Card Variations */}
          <Specimen
            title="Card Variations"
            description="Project card, stat card, feature card, pricing card."
            code={`{/* Stat Card */}
<Card>
  <p className="text-sm text-[var(--color-text-muted)]">Revenue</p>
  <p className="text-3xl font-bold">$48.2K</p>
  <Badge color="success" size="sm">+12%</Badge>
</Card>

{/* Project Card (from nyxworks.ai) */}
<a className="group rounded-2xl bg-[var(--color-bg-card)] border ...">`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Stat cards */}
              <Card>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)] mb-1">Total Revenue</p>
                    <p className="text-3xl font-bold">$48.2K</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--color-success)]/10">
                    <DollarSign size={20} className="text-[var(--color-success)]" />
                  </div>
                </div>
                <div className="mt-3">
                  <Badge color="success" size="sm">+12.5%</Badge>
                </div>
              </Card>

              <Card>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)] mb-1">Active Users</p>
                    <p className="text-3xl font-bold">2,847</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--color-info)]/10">
                    <Users size={20} className="text-[var(--color-info)]" />
                  </div>
                </div>
                <div className="mt-3">
                  <Badge color="info" size="sm">+5.3%</Badge>
                </div>
              </Card>

              {/* Feature card */}
              <Card variant="interactive">
                <Activity size={24} className="text-[var(--color-accent-light)] mb-3" />
                <p className="font-semibold mb-1">Real-time Analytics</p>
                <p className="text-sm text-[var(--color-text-muted)]">Monitor user behavior and system performance in real time.</p>
              </Card>

              {/* Project card style */}
              <div className="group rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all glow-border overflow-hidden cursor-pointer">
                <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg group-hover:text-[var(--color-accent-light)] transition-colors">Project Name</h3>
                    <Badge color="accent">Live</Badge>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">A brief project description showcasing this card pattern.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge size="sm">React</Badge>
                      <Badge size="sm">AI</Badge>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-[var(--color-accent-light)]">
                      Visit <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Specimen>

          {/* Search & Filter */}
          <Specimen
            title="Search & Filter Bar"
            description="Common pattern for search + filter controls."
            code={`const [showFilters, setShowFilters] = useState(false);

<div className="flex gap-3">
  <div className="relative flex-1">
    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
    <Input className="pl-10" placeholder="Search..." />
  </div>
  <Button variant={showFilters ? "primary" : "secondary"} onClick={() => setShowFilters(!showFilters)}>
    <Filter size={16} /> Filters
  </Button>
</div>
{showFilters && (
  <div className="flex flex-wrap gap-2 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]">
    <Badge size="sm">Status</Badge>
    <Badge size="sm">Category</Badge>
  </div>
)}`}
          >
            <div className="max-w-xl space-y-3">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
                  <input
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/30"
                    placeholder="Search projects..."
                  />
                </div>
                <Button variant={showFilters ? "primary" : "secondary"} onClick={() => setShowFilters(!showFilters)}><Filter size={16} /> Filters</Button>
              </div>
              {showFilters && (
                <div className="flex flex-wrap gap-2 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]">
                  {["Status", "Category", "Date Range"].map((filter) => (
                    <Badge key={filter} size="sm">{filter}</Badge>
                  ))}
                </div>
              )}
            </div>
          </Specimen>

          {/* Form Validation */}
          <Specimen
            title="Form Validation Pattern"
            description="Input states: default, focus, error, disabled."
            code={`<Input label="Username" placeholder="Enter username" />
<Input label="Email" error="Email is required" />
<Input label="Note" disabled placeholder="Cannot edit" />`}
          >
            <div className="space-y-4 max-w-sm">
              <Input label="Username" placeholder="Choose a username" />
              <Input label="Email" type="email" placeholder="you@example.com" error="This email is already taken" />
              <Input label="Organization" placeholder="Auto-filled" disabled value="NyxWorks" />
              <Button className="w-full">Submit</Button>
            </div>
          </Specimen>
        </div>
      </div>
      <Footer />
    </>
  );
}
