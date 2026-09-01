import { createFileRoute } from "@tanstack/react-router";

import { CardGrid, StudyPage } from "@/components/study-page";

export const Route = createFileRoute("/syllabus")({
  head: () => ({
    meta: [
      { title: "Syllabus & Notes — turn your outline into notes | ExamGlow" },
      {
        name: "description",
        content:
          "Upload your course outline and ExamGlow turns every topic into clean, exam-ready notes you can revise in minutes.",
      },
      { property: "og:title", content: "Syllabus & Notes | ExamGlow" },
      {
        property: "og:description",
        content: "Turn any course outline into clean, exam-ready study notes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SyllabusPage,
});

function SyllabusPage() {
  return (
    <StudyPage
      eyebrow="Study material"
      title="Syllabus & Notes"
      intro="Drop in your course outline and get topic-by-topic notes, summaries and key definitions ready for revision."
      guideId="syllabus"
      steps={[
        { title: "Add your outline", body: "Paste or upload the course syllabus for the semester." },
        { title: "Pick the topics", body: "Choose which units you want covered first." },
        { title: "Study the notes", body: "Read the generated notes, then send weak topics to flashcards." },
      ]}
      tip="Short daily sessions beat one long cram night."
    >
      <CardGrid
        items={[
          { meta: "Unit 1", title: "Foundations", body: "Core definitions and the vocabulary every question assumes you know." },
          { meta: "Unit 2", title: "Core theory", body: "Worked explanations with diagrams and the mistakes examiners look for." },
          { meta: "Unit 3", title: "Applications", body: "How the theory shows up in calculation and case-style questions." },
          { meta: "Unit 4", title: "Advanced topics", body: "The high-mark sections most students skip until it is too late." },
          { meta: "Summary", title: "One-page recap", body: "Everything condensed into a single sheet for the night before." },
          { meta: "Glossary", title: "Key terms", body: "Every term you must be able to define from memory." },
        ]}
      />
    </StudyPage>
  );
}
