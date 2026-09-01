import { createFileRoute } from "@tanstack/react-router";

import { CardGrid, StudyPage } from "@/components/study-page";

export const Route = createFileRoute("/assignments")({
  head: () => ({
    meta: [
      { title: "Assignments — plan, draft and submit on time | ExamGlow" },
      {
        name: "description",
        content:
          "Track every assignment deadline, break work into steps and get guided help drafting and checking your answers.",
      },
      { property: "og:title", content: "Assignments | ExamGlow" },
      { property: "og:description", content: "Track deadlines and get guided help on every assignment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssignmentsPage,
});

function AssignmentsPage() {
  return (
    <StudyPage
      eyebrow="Coursework"
      title="Assignments"
      intro="Keep every deadline in one place, break each task into steps and get structured help while you write."
      guideId="assignments"
      steps={[
        { title: "Add the brief", body: "Paste the question and the due date." },
        { title: "Break it down", body: "ExamGlow splits it into a checklist you can tick off." },
        { title: "Check before you submit", body: "Run a structure and referencing review." },
      ]}
      tip="Start the outline the day you get the brief — future you says thanks."
    >
      <CardGrid
        items={[
          { meta: "Due in 3 days", title: "Lab report", body: "Method, results and discussion checklist with a word budget per section." },
          { meta: "Due in 8 days", title: "Essay draft", body: "Thesis, evidence and counter-argument scaffold ready to fill in." },
          { meta: "Due in 2 weeks", title: "Problem set", body: "Ten questions with hints that unlock one step at a time." },
        ]}
      />
    </StudyPage>
  );
}
