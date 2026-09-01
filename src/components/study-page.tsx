import type { ReactNode } from "react";

import { AppNav } from "@/components/app-shell";
import { PageGuide, type GuideStep } from "@/components/page-guide";

export function StudyPage({
  eyebrow,
  title,
  intro,
  guideId,
  steps,
  tip,
  comingSoon,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  guideId: string;
  steps: GuideStep[];
  tip?: string;
  comingSoon?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <AppNav />
      <main className="mx-auto max-w-[1240px] px-4 pb-24 pt-8 sm:px-6">
        <header className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-[34px] font-semibold leading-tight tracking-tight sm:text-[44px]">
            {title}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{intro}</p>
          {comingSoon ? (
            <span className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold">
              Coming soon
            </span>
          ) : null}
        </header>

        <PageGuide id={guideId} steps={steps} {...(tip ? { tip } : {})} />

        {children}
      </main>
    </div>
  );
}

export function CardGrid({ items }: { items: { title: string; body: string; meta?: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-border bg-card p-5 transition-transform hover:-translate-y-0.5"
        >
          {item.meta ? (
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground/50">
              {item.meta}
            </p>
          ) : null}
          <h2 className="text-[17px] font-semibold tracking-tight">{item.title}</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
