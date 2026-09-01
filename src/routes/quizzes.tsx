import { createFileRoute } from "@tanstack/react-router";

import { CardGrid, StudyPage } from "@/components/study-page";

export const Route = createFileRoute("/quizzes")({
  head: () => ({
    meta: [
      { title: "AI Quizzes — test yourself on any topic | ExamGlow" },
      {
        name: "description",
        content:
          "Generate quizzes from your syllabus in seconds, get instant explanations and watch your weak topics shrink.",
      },
      { property: "og:title", content: "AI Quizzes | ExamGlow" },
      { property: "og:description", content: "Instant quizzes generated from your own syllabus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizzesPage,
});

function QuizzesPage() {
  return (
    <StudyPage
      eyebrow="Test yourself"
      title="Quizzes with AI"
      intro="Pick a topic, choose your difficulty and get a fresh quiz with explanations for every answer."
      guideId="quizzes"
      steps={[
        { title: "Choose a topic", body: "Any unit from your syllabus, or let ExamGlow pick your weakest." },
        { title: "Set the length", body: "Five quick questions or a full mock paper." },
        { title: "Read the explanations", body: "The reasoning matters more than the score." },
      ]}
      tip="Quiz yourself before re-reading — retrieval beats review."
    >
      <CardGrid
        items={[
          { meta: "5 questions", title: "Quick check", body: "A two-minute warm-up on today's topic." },
          { meta: "20 questions", title: "Topic drill", body: "Deeper coverage with explanations after each answer." },
          { meta: "Full paper", title: "Timed mock", body: "Exam conditions with a score breakdown by topic." },
        ]}
      />
    </StudyPage>
  );
}
