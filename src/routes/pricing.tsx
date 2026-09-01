import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

import balanceDoodle from "@/assets/balance-doodle.png";
import avatar1 from "@/assets/avatar-1.jpg";
import { saveProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Unlock ExamGlow Premium" },
      {
        name: "description",
        content:
          "Join 8M+ students using ExamGlow. Plans from $5.99 — weekly, monthly, or exam-season — cancel anytime.",
      },
      { property: "og:title", content: "Unlock ExamGlow Premium" },
      {
        property: "og:description",
        content: "92% of ExamGlow subscribers improved their grades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    id: "weekly" as const,
    name: "Weekly",
    sub: "$2.00 billed weekly",
    price: "$2.00",
    per: "/wk",
  },
  {
    id: "monthly" as const,
    name: "Monthly",
    sub: "$5.99 billed monthly",
    price: "$5.99",
    per: "/mo",
    badge: "MOST POPULAR",
  },
  {
    id: "termly" as const,
    name: "Termly",
    sub: "$14.99 every 3 months",
    price: "$14.99",
    per: "/3mo",
    badge: "TERMLY",
  },
  {
    id: "exam-pass" as const,
    name: "Exam Pass",
    sub: "Valid until the end of the next exam season",
    price: "$34.99",
    per: "",
    badge: "EXAM PASS",
  },
];

function PricingPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"weekly" | "monthly" | "termly" | "exam-pass">("monthly");
  const [processing, setProcessing] = useState(false);

  function unlock() {
    setProcessing(true);
    saveProfile({ plan: selected });
    navigate({ to: "/home" });
  }

  return (
    <div className="dark min-h-dvh bg-background px-4 py-5 text-foreground sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate({ to: "/onboarding/source" })}
          className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back
        </button>
        <button
          type="button"
          onClick={() => {
            saveProfile({ plan: "free" });
            navigate({ to: "/home" });
          }}
          className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
        >
          Skip <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 py-8 lg:min-h-[calc(100dvh-94px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-4">
        <div className="flex flex-col justify-center">
          <img
            src={balanceDoodle}
            alt="Line drawing of a student and a cat balancing on a seesaw"
            loading="lazy"
            width={900}
            height={760}
            className="mx-auto w-full max-w-[280px] invert sm:max-w-xs lg:max-w-[310px]"
          />
          <figure className="mx-auto mt-6 w-full max-w-lg rounded-2xl border border-border bg-card p-5 sm:p-6">
            <blockquote className="text-[15px] leading-relaxed">
              “I knew ExamGlow was fantastic for me when I could remember information without having
              to put a pen on paper at all.”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img
                src={avatar1}
                alt="Portrait of Nana Agyakoma"
                loading="lazy"
                width={512}
                height={512}
                className="size-10 rounded-full object-cover"
              />
              <span className="text-sm">
                <span className="block font-medium">Nana Agyakoma</span>
                <span className="block text-muted-foreground">Nursing at Emory University</span>
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            92% of ExamGlow subscribers improved their grades
          </h1>
          <p className="mt-2 text-muted-foreground">
            Join <strong className="text-foreground">8M+</strong> students already using ExamGlow
          </p>

          <div className="mt-5 space-y-2.5">
            {plans.map((plan) => {
              const active = selected === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelected(plan.id)}
                  aria-pressed={active}
                  className={`w-full overflow-hidden rounded-2xl border text-left transition-colors ${
                    active ? "border-foreground bg-secondary" : "border-border bg-card"
                  }`}
                >
                  {plan.badge && (
                    <span className="block bg-ink-foreground py-1 text-center text-[11px] font-semibold text-ink">
                      {plan.badge}
                    </span>
                  )}
                  <span className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-6">
                    <span className="min-w-0">
                      <span className="block font-semibold">{plan.name}</span>
                      <span className="block text-sm text-muted-foreground">{plan.sub}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3">
                      <span className="font-display text-2xl sm:text-3xl">
                        {plan.price}
                        <span className="text-base text-muted-foreground">{plan.per}</span>
                      </span>
                      <span
                        className={`flex size-7 items-center justify-center rounded-full border ${
                          active ? "border-transparent bg-foreground text-background" : "border-border"
                        }`}
                      >
                        {active && <Check className="size-4" aria-hidden />}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={unlock}
            disabled={processing}
            className="mt-4 w-full rounded-full bg-ink-foreground py-3.5 text-lg font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {processing ? "Setting up your workspace..." : "Unlock Premium"}
          </button>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Cancel anytime · No pressure · Secure checkout
          </p>
        </div>
      </div>
    </div>
  );
}
