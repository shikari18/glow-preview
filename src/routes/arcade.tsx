import { createFileRoute } from "@tanstack/react-router";

import { CardGrid, StudyPage } from "@/components/study-page";

export const Route = createFileRoute("/arcade")({
  head: () => ({
    meta: [
      { title: "Arcade — study games, streaks and leaderboards | ExamGlow" },
      {
        name: "description",
        content:
          "Turn revision into a game: timed challenges, streaks, points and leaderboards built on your own study material.",
      },
      { property: "og:title", content: "Arcade | ExamGlow" },
      { property: "og:description", content: "Study games, streaks and leaderboards from your own notes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArcadePage,
});

function ArcadePage() {
  return (
    <StudyPage
      eyebrow="Play"
      title="Arcade"
      intro="Revision disguised as games — beat the clock, keep your streak alive and climb the class leaderboard."
      guideId="arcade"
      steps={[
        { title: "Pick a game", body: "Each one pulls questions from your own material." },
        { title: "Chase the streak", body: "Play once a day to keep your multiplier." },
        { title: "Spend your points", body: "Unlock new decks and cosmetics." },
      ]}
      tip="Games count toward your daily study goal too."
    >
      <CardGrid
        items={[
          { meta: "60 seconds", title: "Speed round", body: "How many questions can you clear before the timer runs out?" },
          { meta: "Head to head", title: "Duel", body: "Challenge a classmate to the same set of questions." },
          { meta: "Daily", title: "Streak challenge", body: "One curated question set every day." },
          { meta: "Memory", title: "Match up", body: "Pair terms with definitions against the clock." },
          { meta: "Survival", title: "Last stand", body: "Keep answering until you miss three." },
          { meta: "Weekly", title: "Leaderboard", body: "See where you rank against your course." },
        ]}
      />
    </StudyPage>
  );
}
