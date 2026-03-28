import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { agenticNovelNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Ban List — Agentic — Nick Carter",
  description:
    "Words, phrases, and narrative moves the Agentic prose must never use. AI-voice tells and craft violations.",
};

export default function BanListPage() {
  const html = renderMarkdown("agentic-novel/ban-list.md");

  return (
    <DocumentPage
      title="Ban List — What the Prose Must Never Do"
      description="Banned words, phrases, and moves. AI-voice tells, craft violations, and the one exception."
      backLink={{ href: "/portfolio/agentic-novel", label: "Agentic Overview" }}
      nav={agenticNovelNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
