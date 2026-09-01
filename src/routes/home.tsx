import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileQuestion,
  Gamepad2,
  GraduationCap,
  Layers,
  NotebookPen,
  Sparkles,
  Target,
} from "lucide-react";

import heroDoodle from "@/assets/hero-doodle.png";
import { AppNav } from "@/components/app-shell";
import { PageGuide } from "@/components/page-guide";
import { StudyChat } from "@/components/study-chat";
import { readProfile, type OnboardingProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Study home — syllabus, past questions & AI quizzes | ExamGlow" },
      {
        name: "description",
        content:
          "Your ExamGlow study home: syllabus notes, past questions, assignments, flashcards, AI quizzes, tutors and the arcade — all in one place.",
      },
      { property: "og:title", content: "Study home | ExamGlow" },
      {
        property: "og:description",
        content: "Syllabus notes, past questions, assignments, flashcards and AI quizzes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const workspaces = [
  {
    to: "/syllabus",
    label: "Syllabus & Notes",
    hint: "Turn your outline into clean notes",
    Icon: BookOpen,
    tone: "bg-mint",
  },
  {
    to: "/past-questions",
    label: "Past Questions",
    hint: "8 years of solved papers",
    Icon: FileQuestion,
    tone: "bg-lilac",
  },
  {
    to: "/assignments",
    label: "Assignments",
    hint: "3 due this week",
    Icon: ClipboardList,
    tone: "bg-highlight",
  },
  {
    to: "/flashcards",
    label: "Flashcards",
    hint: "142 cards up for review",
    Icon: Layers,
    tone: "bg-lavender",
  },
  {
    to: "/quizzes",
    label: "AI Quizzes",
    hint: "Generated from your material",
    Icon: Sparkles,
    tone: "bg-mint",
  },
  {
    to: "/tutors",
    label: "Tutors",
    hint: "Real professionals · coming soon",
    Icon: GraduationCap,
    tone: "bg-lilac",
  },
  {
    to: "/arcade",
    label: "Arcade",
    hint: "Study games & streaks",
    Icon: Gamepad2,
    tone: "bg-highlight",
  },
  {
    to: "/pricing",
    label: "Study Ahead",
    hint: "Unlock the full workspace",
    Icon: Target,
    tone: "bg-lavender",
  },
] as const;

const plan = [
  { title: "Cardiac anatomy and blood flow", meta: "25 min · Reading + quiz", done: true },
  { title: "Electrical conduction and the ECG", meta: "40 min · Flashcards", done: false },
  { title: "The cardiac cycle and pressure-volume loops", meta: "30 min · Past questions", done: false },
  { title: "Cardiac output and vascular resistance", meta: "20 min · Recap", done: false },
];

const stats = [
  { value: "68%", label: "Syllabus covered" },
  { value: "142", label: "Cards due today" },
  { value: "9", label: "Day streak" },
  { value: "1,240", label: "Arcade points" },
];

function HomePage() {
  const [profile, setProfile] = useState<OnboardingProfile>({});
  useEffect(() => setProfile(readProfile()), []);
  const firstName = profile.name?.split(" ")[0];

  return (
    <div className="min-h-screen bg-background">
      <AppNav />

      <main className="mx-auto grid max-w-[1400px] gap-8 px-5 py-10 lg:grid-cols-[1fr_380px] lg:px-8">
        <div>
          <section className="relative overflow-hidden rounded-[2rem] bg-lilac p-8 text-ink lg:p-11">
            <p className="display-italic text-lg">Welcome back{firstName ? `, ${firstName}` : ""}</p>
            <h1 className="mt-3 max-w-xl text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.03]">
              Study ahead on <span className="display-italic">{profile.goal ?? "your courses"}</span>
            </h1>
            <p className="mt-4 max-w-md text-ink/70">
              Everything for this term in one workspace — syllabus notes, past questions,
              assignments, flashcards and AI quizzes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/syllabus"
                className="flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
              >
                Continue studying <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/quizzes"
                className="rounded-full border border-ink/20 bg-white/40 px-6 py-3.5 font-medium transition-colors hover:bg-white/70"
              >
                Generate a quiz
              </Link>
            </div>
            <img
              src={heroDoodle}
              alt=""
              loading="lazy"
              width={1200}
              height={912}
              className="pointer-events-none absolute -bottom-6 -right-6 hidden w-64 opacity-90 xl:block"
            />
          </section>

          <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card px-5 py-4">
                <span className="font-display text-3xl">{s.value}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </section>

          <div className="mt-8">
            <PageGuide
              id="home"
              heading="New here? Start in three moves"
              steps={[
                {
                  title: "Add your syllabus",
                  body: "Upload the course outline and we'll build your notes and study plan.",
                },
                {
                  title: "Practise with real papers",
                  body: "Past questions and AI quizzes drill the topics you keep missing.",
                },
                {
                  title: "Keep the streak",
                  body: "Flashcards every morning, arcade rounds when you need a break.",
                },
              ]}
              tip="Any page can be explained by the tutor on the right — just ask."
            />
          </div>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {workspaces.map(({ to, label, hint, Icon, tone }) => (
              <Link
                key={label}
                to={to}
                className="rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-1"
              >
                <span className={`flex size-11 items-center justify-center rounded-full ${tone} text-ink`}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="mt-4 block font-semibold">{label}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{hint}</span>
              </Link>
            ))}
          </section>

          <section className="mt-8 rounded-[2rem] border border-border bg-card p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl">Cardiovascular Physiology · Block 2</h2>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
                <NotebookPen className="size-3.5" aria-hidden /> Built from your syllabus
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.map((item) => (
                <li key={item.title} className="flex items-center gap-4 rounded-2xl bg-surface px-4 py-4">
                  <span
                    className={`size-3.5 shrink-0 rounded-full ${item.done ? "bg-lavender" : "bg-muted"}`}
                  />
                  <span className="flex-1">
                    <span className="block text-[15px] font-medium">{item.title}</span>
                    <span className="block text-sm text-muted-foreground">{item.meta}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">{item.done ? "Done" : "Start"}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:sticky lg:top-[100px] lg:h-[calc(100vh-132px)]">
          <div className="h-[600px] lg:h-full">
            <StudyChat />
          </div>
        </aside>
      </main>
    </div>
  );
}
