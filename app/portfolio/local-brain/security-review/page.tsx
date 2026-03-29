import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { localBrainNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Security Review — 20 Findings, 16 Fixed — Local Brain — Nick Carter",
  description:
    "A staff-level code review of Local Brain: race conditions, SQL injection, SSRF, auth hardening, and what the findings reveal about building with AI.",
};

export default function SecurityReviewPage() {
  const html = renderMarkdown("local-brain/security-review.md");

  return (
    <DocumentPage
      title="Security Review — 20 Findings, 16 Fixed"
      description="Staff-level code review across every layer: server, admin, Docker, auth, and backup scripts."
      backLink={{ href: "/portfolio/local-brain", label: "Local Brain Overview" }}
      nav={localBrainNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
