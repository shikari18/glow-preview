import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, Clock3, FileQuestion, GraduationCap, Sparkles } from "lucide-react";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { readProfile, type OnboardingProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Study dashboard | ExamGlow" },
      { name: "description", content: "Plan your studies, review your progress and prepare for every exam in one focused ExamGlow workspace." },
      { property: "og:title", content: "Study dashboard | ExamGlow" },
      { property: "og:description", content: "Your focused workspace for notes, assignments, quizzes and exam preparation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "68%", label: "Syllabus covered" },
  { value: "142", label: "Cards due today" },
  { value: "9", label: "Day streak" },
  { value: "1,240", label: "Arcade points" },
];

const upcoming = [
  { title: "Past Questions", meta: "Practice papers by topic", to: "/past-questions", Icon: FileQuestion },
  { title: "Live Tutor", meta: "Personal help when you need it", to: "/tutors", Icon: GraduationCap },
  { title: "Syllabus Notes", meta: "Structured notes for every unit", to: "/syllabus", Icon: BookOpen },
] as const;

function HomePage() {
  const [profile, setProfile] = useState<OnboardingProfile>({});
  useEffect(() => setProfile(readProfile()), []);
  const firstName = profile.name?.split(" ")[0] ?? "there";

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <DashboardSidebar />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-20 md:px-8 md:pt-9 lg:px-12">
          <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">Tuesday, 1 September</p>
              <h1 className="mt-1 truncate text-[clamp(2rem,4vw,3.5rem)] leading-tight">Welcome back, {firstName}</h1>
            </div>
            <Link to="/syllabus" className="hidden shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-ink-foreground transition-transform hover:-translate-y-0.5 sm:flex">
              Upload material <ArrowRight className="size-4" aria-hidden />
            </Link>
          </header>

          <section className="mt-8 grid gap-5 bg-lilac px-6 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:px-8 lg:px-10">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70"><Sparkles className="size-4" /> Today’s focus</span>
              <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,3rem)] leading-tight">Keep moving through <span className="display-italic">Cardiovascular Physiology</span></h2>
              <p className="mt-3 max-w-xl text-foreground/70">One focused session now keeps your weekly plan comfortably on track.</p>
            </div>
            <div className="flex shrink-0 items-end">
              <Link to="/syllabus" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-ink-foreground">Continue studying <ArrowRight className="size-4" /></Link>
            </div>
          </section>

          <section className="mt-5 grid grid-cols-2 border-y border-border md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`px-4 py-5 ${index % 2 ? "border-l border-border" : ""} md:border-l md:first:border-l-0`}>
                <strong className="font-display text-3xl font-normal">{stat.value}</strong>
                <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </section>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
            <section>
              <div className="flex items-end justify-between gap-4">
                <div><p className="text-xs font-semibold uppercase text-muted-foreground">Today</p><h2 className="mt-1 text-3xl">Your study plan</h2></div>
                <span className="text-sm text-muted-foreground">3 of 5 complete</span>
              </div>
              <div className="mt-5 divide-y divide-border border-y border-border">
                {[
                  ["Review cardiac anatomy", "25 min", true],
                  ["Complete blood flow quiz", "15 min", true],
                  ["Revise ECG flashcards", "20 min", true],
                  ["Practice cardiac cycle questions", "30 min", false],
                  ["Write a one-page recap", "15 min", false],
                ].map(([title, time, done]) => (
                  <div key={String(title)} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4">
                    {done ? <CheckCircle2 className="size-5 shrink-0 text-lavender" /> : <span className="size-5 shrink-0 rounded-full border border-border" />}
                    <span className={`min-w-0 truncate text-[15px] ${done ? "text-muted-foreground line-through" : "font-medium"}`}>{title}</span>
                    <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground"><Clock3 className="size-3.5" />{time}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="text-xs font-semibold uppercase text-muted-foreground">Coming up</p>
              <h2 className="mt-1 text-3xl">Next in ExamGlow</h2>
              <div className="mt-5 space-y-3">
                {upcoming.map(({ title, meta, to, Icon }) => (
                  <Link key={title} to={to} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-3.5 transition-colors hover:text-lavender">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary"><Icon className="size-4.5" /></span>
                    <span className="min-w-0"><strong className="block truncate text-sm font-semibold">{title}</strong><span className="block truncate text-xs text-muted-foreground">{meta}</span></span>
                    <ArrowRight className="size-4 shrink-0" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <div className="flex items-center gap-3"><CalendarDays className="size-5 text-lavender" /><h3 className="text-xl">Next deadline</h3></div>
                <p className="mt-3 font-medium">Physiology lab report</p>
                <p className="mt-1 text-sm text-muted-foreground">Due Friday · 1,200 words</p>
                <Link to="/assignments" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Open assignments <ArrowRight className="size-4" /></Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}