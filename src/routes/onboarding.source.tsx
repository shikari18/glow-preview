import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { UserRound, MoreHorizontal } from "lucide-react";

import { OnboardingShell } from "@/components/onboarding-shell";
import { saveProfile } from "@/lib/onboarding";

import openaiLogo from "@/assets/brands/openai.svg";
import tiktokLogo from "@/assets/brands/tiktok.svg";
import instagramLogo from "@/assets/brands/instagram.svg";
import facebookLogo from "@/assets/brands/facebook.svg";
import redditLogo from "@/assets/brands/reddit.svg";
import googleLogo from "@/assets/brands/google.svg";
import youtubeLogo from "@/assets/brands/youtube.svg";
import xLogo from "@/assets/brands/x.svg";

export const Route = createFileRoute("/onboarding/source")({
  head: () => ({
    meta: [
      { title: "How did you hear about ExamGlow?" },
      {
        name: "description",
        content: "Let us know how you found ExamGlow so we can keep improving.",
      },
      { property: "og:title", content: "How did you hear about ExamGlow?" },
      { property: "og:description", content: "Tell us where you discovered ExamGlow." },
    ],
  }),
  component: SourceStep,
});

type Source = { label: string; logo?: string; Icon?: typeof UserRound };

const sources: Source[] = [
  { label: "ChatGPT", logo: openaiLogo },
  { label: "TikTok", logo: tiktokLogo },
  { label: "Instagram", logo: instagramLogo },
  { label: "Friend or Classmate", Icon: UserRound },
  { label: "Facebook", logo: facebookLogo },
  { label: "Reddit", logo: redditLogo },
  { label: "Google", logo: googleLogo },
  { label: "YouTube", logo: youtubeLogo },
  { label: "X (Twitter)", logo: xLogo },
  { label: "Other", Icon: MoreHorizontal },
];

function SourceStep() {
  const navigate = useNavigate();

  return (
    <OnboardingShell title="How did you hear about ExamGlow?" step={3}>
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {sources.map(({ label, logo, Icon }, i) => (
          <button
            key={label}
            type="button"
            onClick={() => {
              saveProfile({ source: label });
              navigate({ to: "/pricing" });
            }}
            className={`flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 text-left transition-colors hover:bg-secondary ${
              i === sources.length - 1 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""
            }`}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
              {logo ? (
                <img src={logo} alt={`${label} logo`} width={20} height={20} className="size-5" />
              ) : (
                Icon && <Icon className="size-5 text-ink" aria-hidden />
              )}
            </span>
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>
    </OnboardingShell>
  );
}
