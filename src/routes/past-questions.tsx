import { createFileRoute } from "@tanstack/react-router";

import { CardGrid, StudyPage } from "@/components/study-page";

export const Route = createFileRoute("/past-questions")({
  head: () => ({
    meta: [
      { title: "Past Questions — solved papers by year | ExamGlow" },
      {
        name: "description",
        content:
          "Practise years of past exam papers with worked solutions, topic filters and examiner-style marking guides.",
      },
      { property: "og:title", content: "Past Questions | ExamGlow" },
      { property: "og:description", content: "Years of solved past papers with worked answers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PastQuestionsPage,
});

function PastQuestionsPage() {
  return (
    <StudyPage
      eyebrow="Practice"
      title="Past Questions"
      intro="Work through real papers year by year, with step-by-step solutions and the marking points examiners reward."
      guideId="past-questions"
      steps={[
        { title: "Choose a year", body: "Start with the most recent paper — patterns repeat." },
        { title: "Answer first", body: "Attempt the question before revealing the worked solution." },
        { title: "Review misses", body: "Every missed question becomes a flashcard automatically." },
      ]}
      tip="Time yourself. Exam pressure is a skill you can practise."
    >
      <CardGrid
        items={[2025, 2024, 2023, 2022, 2021, 2020].map((year) => ({
          meta: `${year} paper`,
          title: `Session ${year}`,
          body: "Full paper with worked solutions, difficulty tags and per-topic breakdown.",
        }))}
      />
    </StudyPage>
  );
}
