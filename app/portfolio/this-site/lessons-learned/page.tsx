import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Lessons Learned — nickcarter.ai — Nick Carter",
  description:
    "What went wrong building nickcarter.ai, what was corrected, and what would be done differently.",
};

export default function LessonsLearnedPage() {
  const html = renderMarkdown("this-site/lessons-learned.md");

  return (
    <DocumentPage
      title="Lessons Learned — What Went Wrong and How It Was Fixed"
      description="What went wrong, what was corrected, what would be done differently."
      backLink={{ href: "/portfolio/this-site", label: "nickcarter.ai Overview" }}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
