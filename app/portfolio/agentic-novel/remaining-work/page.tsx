import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { agenticNovelNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Progress Tracking — Agentic — Nick Carter",
  description:
    "How work was divided between human decisions and AI execution in the Agentic novel drafting system.",
};

export default function RemainingWorkPage() {
  const html = renderMarkdown("agentic-novel/remaining-work.md");

  return (
    <DocumentPage
      title="Progress Tracking — Human vs. AI Responsibilities"
      description="What has been built, what needs human decisions, and what the AI handles."
      backLink={{ href: "/portfolio/agentic-novel", label: "Agentic Overview" }}
      nav={agenticNovelNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
