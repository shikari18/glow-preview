import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Upload } from "lucide-react";

import logoMark from "@/assets/logo-mark.png";
import { readProfile, type OnboardingProfile } from "@/lib/onboarding";

export const studyNav = [
  { to: "/home", label: "Home" },
  { to: "/syllabus", label: "Syllabus" },
  { to: "/past-questions", label: "Past Questions" },
  { to: "/assignments", label: "Assignments" },
  { to: "/flashcards", label: "Flashcards" },
  { to: "/quizzes", label: "Quizzes" },
  { to: "/tutors", label: "Tutors" },
  { to: "/arcade", label: "Arcade" },
] as const;

export function AppNav() {
  const [profile, setProfile] = useState<OnboardingProfile>({});
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setProfile(readProfile()), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <header
        className={`mx-auto flex max-w-[1240px] items-center gap-3 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-border/70 bg-background/75 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.35)]"
            : "border-transparent bg-background/45"
        }`}
      >
        <Link to="/" className="flex shrink-0 items-center gap-2 pl-1">
          <img
            src={logoMark}
            alt="ExamGlow logo"
            width={512}
            height={512}
            className="size-8 rounded-full bg-lilac/60 p-0.5"
          />
          <span className="text-[17px] font-semibold tracking-tight">ExamGlow</span>
        </Link>

        <nav className="scrollbar-none -mx-1 flex flex-1 items-center gap-0.5 overflow-x-auto px-1">
          {studyNav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13.5px] transition-colors ${
                  active
                    ? "bg-ink text-ink-foreground"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
            {profile.plan && profile.plan !== "free" ? "Premium" : "Free plan"}
          </span>
          <button className="flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13.5px] font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5">
            <Upload className="size-3.5" aria-hidden />
            Upload
          </button>
        </div>
      </header>
    </div>
  );
}

export function AppShell({
  children,
  eyebrow,
  title,
  description,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <AppNav />
      <main className="mx-auto max-w-[1240px] px-5 pb-24 pt-10">
        {title && (
          <header className="mb-8 max-w-2xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-2 text-[clamp(2rem,4vw,3rem)] leading-[1.05]">{title}</h1>
            {description && <p className="mt-4 text-muted-foreground">{description}</p>}
          </header>
        )}
        {children}
      </main>
    </div>
  );
}
