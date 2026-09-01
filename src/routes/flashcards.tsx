import { createFileRoute } from "@tanstack/react-router";

import { CardGrid, StudyPage } from "@/components/study-page";

export const Route = createFileRoute("/flashcards")({
  head: () => ({
    meta: [
      { title: "Flashcards — spaced repetition that sticks | ExamGlow" },
      {
        name: "description",
        content:
          "Auto-generated flashcard decks with spaced repetition so the facts you keep forgetting come back until they stick.",
      },
      { property: "og:title", content: "Flashcards | ExamGlow" },
      { property: "og:description", content: "Spaced-repetition decks built from your own notes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FlashcardsPage,
});

function FlashcardsPage() {
  return (
    <StudyPage
      eyebrow="Recall"
      title="Flashcards"
      intro="Decks built straight from your notes and missed questions, scheduled so you review right before you forget."
      guideId="flashcards"
      steps={[
        { title: "Pick a deck", body: "Start with the cards due today." },
        { title: "Answer honestly", body: "Rate each card — guessing right still means review." },
        { title: "Come back daily", body: "Ten minutes a day beats an hour once a week." },
      ]}
      tip="Say the answer out loud before flipping the card."
    >
      <CardGrid
        items={[
          { meta: "24 due", title: "Definitions", body: "Terms you must be able to state word-perfect." },
          { meta: "12 due", title: "Formulas", body: "Every formula plus when to reach for it." },
          { meta: "9 due", title: "Missed questions", body: "Cards created from past questions you got wrong." },
        ]}
      />
    </StudyPage>
  );
}
