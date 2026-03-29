import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { localBrainNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Lessons Learned — What the Security Review Revealed — Local Brain — Nick Carter",
  description:
    "What broke, what surprised, and what a staff-level security review reveals about building production systems with AI assistance.",
};

export default function LessonsLearnedPage() {
  const html = renderMarkdown("local-brain/lessons-learned.md");

  return (
    <DocumentPage
      title="Lessons Learned"
      description="What broke, what surprised, and what building with AI actually teaches you about production systems."
      backLink={{ href: "/portfolio/local-brain", label: "Local Brain Overview" }}
      nav={localBrainNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
