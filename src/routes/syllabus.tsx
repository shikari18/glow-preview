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
          { meta: "Unit 5", title: "Research methods", body: "How to design a study, collect evidence, and avoid common methodological mistakes." },
          { meta: "Unit 6", title: "Data analysis", body: "Interpreting trends, summarising findings, and turning raw information into clear conclusions." },
          { meta: "Unit 7", title: "Case studies", body: "Real-world examples that connect framework knowledge to exam scenarios and practical decisions." },
          { meta: "Unit 8", title: "Practical tasks", body: "Hands-on activities that reinforce the theory and build confidence in application questions." },
          { meta: "Unit 9", title: "Evaluation", body: "Comparing arguments, judging evidence quality, and explaining strengths and limitations." },
          { meta: "Unit 10", title: "Critical thinking", body: "Developing balanced responses, identifying assumptions, and writing stronger analytical answers." },
          { meta: "Unit 11", title: "Revision planning", body: "Organising your study time so each topic gets enough attention before the assessment." },
          { meta: "Unit 12", title: "Past papers", body: "Working through likely exam formats and familiarising yourself with common question structures." },
          { meta: "Unit 13", title: "Formula recall", body: "Memorising the exact steps and equations that appear repeatedly in calculations and short answers." },
          { meta: "Unit 14", title: "Laboratory work", body: "Recording observations, drawing evidence-backed conclusions, and explaining experimental errors." },
          { meta: "Summary", title: "One-page recap", body: "Everything condensed into a single sheet for the night before." },
          { meta: "Glossary", title: "Key terms", body: "Every term you must be able to define from memory." },
        ]}
      />
    </StudyPage>
  );
}
