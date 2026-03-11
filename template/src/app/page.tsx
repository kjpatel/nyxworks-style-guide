import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-gradient">My App</span>
          </span>
          <ThemeToggle />
        </div>
      </header>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome</h1>
          <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-4" />
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mb-16">
            Built with the NyxWorks design system.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {["Design Tokens", "Components", "Patterns"].map((title) => (
              <div
                key={title}
                className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-card-hover)] transition-all p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Placeholder card content.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
