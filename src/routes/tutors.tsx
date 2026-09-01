import { createFileRoute } from "@tanstack/react-router";

import { CardGrid, StudyPage } from "@/components/study-page";

export const Route = createFileRoute("/tutors")({
  head: () => ({
    meta: [
      { title: "Tutors — book a human expert | ExamGlow" },
      {
        name: "description",
        content:
          "Live tutoring with verified professionals across medicine, law, engineering and more. Launching soon on ExamGlow.",
      },
      { property: "og:title", content: "Tutors | ExamGlow" },
      { property: "og:description", content: "Live tutoring with verified professionals — coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TutorsPage,
});

function TutorsPage() {
  return (
    <StudyPage
      eyebrow="Human help"
      title="Tutors"
      intro="Book one-to-one sessions with verified professionals in your field when the AI is not enough."
      guideId="tutors"
      comingSoon
      steps={[
        { title: "Pick a profession", body: "Browse tutors by field and specialisation." },
        { title: "Share your topic", body: "Send your notes so the session starts where you are stuck." },
        { title: "Book a slot", body: "Thirty or sixty minutes, online." },
      ]}
      tip="Join the waitlist to get early access pricing."
    >
      <CardGrid
        items={[
          "Medicine & Nursing",
          "Law",
          "Engineering",
          "Accounting & Finance",
          "Computer Science",
          "Sciences",
        ].map((field) => ({
          meta: "Coming soon",
          title: field,
          body: "Verified tutors with exam-board experience in this field.",
        }))}
      />
    </StudyPage>
  );
}
