import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  GraduationCap,
  BookOpenCheck,
  School,
  BadgeCheck,
  MoreHorizontal,
} from "lucide-react";

import { OnboardingShell } from "@/components/onboarding-shell";
import { saveProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/onboarding/goal")({
  head: () => ({
    meta: [
      { title: "What are you studying for? — ExamGlow" },
      {
        name: "description",
        content: "Pick your program or exam so ExamGlow can build the right study plan.",
      },
      { property: "og:title", content: "What are you studying for? — ExamGlow" },
      { property: "og:description", content: "College, grad school, med school, certs and more." },
    ],
  }),
  component: GoalStep,
});

const goals = [
  { label: "College", hint: "Courses, assignments and semester exams", Icon: GraduationCap },
  { label: "IGCSE", hint: "Cambridge and Edexcel subjects", Icon: School },
  { label: "A Levels", hint: "AS and A Level exam preparation", Icon: BookOpenCheck },
  { label: "Professional Exams", hint: "Licensing, certification and entrance exams", Icon: BadgeCheck },
  { label: "Other", hint: "", Icon: MoreHorizontal },
];

function GoalStep() {
  const navigate = useNavigate();

  return (
    <OnboardingShell title="What are you studying for?" step={2}>
      <div className="mx-auto flex max-w-2xl flex-col gap-2">
        {goals.map(({ label, hint, Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => {
              saveProfile({ goal: label });
              navigate({ to: "/onboarding/source" });
            }}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-3 text-left transition-colors hover:bg-secondary"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Icon className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block font-semibold">{label}</span>
              {hint && <span className="block text-sm text-muted-foreground">{hint}</span>}
            </span>
          </button>
        ))}
      </div>
    </OnboardingShell>
  );
}
