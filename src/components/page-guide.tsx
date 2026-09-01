import { useEffect, useState } from "react";
import { ChevronDown, Lightbulb } from "lucide-react";

export type GuideStep = { title: string; body: string };

export function PageGuide({
  id,
  heading = "How to use this page",
  steps,
  tip,
}: {
  id: string;
  heading?: string;
  steps: GuideStep[];
  tip?: string;
}) {
  const key = `examglow.guide.${id}`;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(key) === "closed") setOpen(false);
    } catch {
      /* ignore */
    }
  }, [key]);

  function toggle() {
    const next = !open;
    setOpen(next);
    try {
      window.localStorage.setItem(key, next ? "open" : "closed");
    } catch {
      /* ignore */
    }
  }

  return (
    <section className="mb-8 overflow-hidden rounded-3xl border border-border bg-card">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-secondary/60"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-highlight text-ink">
          <Lightbulb className="size-4.5" aria-hidden />
        </span>
        <span className="flex-1">
          <span className="block text-[15px] font-semibold">{heading}</span>
          <span className="block text-sm text-muted-foreground">
            A quick guide so you always know the next step.
          </span>
        </span>
        <ChevronDown
          className={`size-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-5">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-surface p-4">
                <span className="flex size-6 items-center justify-center rounded-full bg-ink text-xs font-semibold text-ink-foreground">
                  {i + 1}
                </span>
                <span className="mt-3 block text-sm font-semibold">{step.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{step.body}</span>
              </li>
            ))}
          </ol>
          {tip && (
            <p className="mt-4 rounded-2xl bg-lilac/40 px-4 py-3 text-sm text-ink">
              <strong className="font-semibold">Tip:</strong> {tip}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
