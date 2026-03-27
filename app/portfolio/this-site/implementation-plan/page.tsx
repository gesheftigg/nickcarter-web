import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Implementation Plan — nickcarter.ai — Nick Carter",
  description:
    "Eight tasks from scaffolding to deploy, each dispatched to a fresh AI subagent with curated context.",
};

export default function ImplementationPlanPage() {
  const html = renderMarkdown("this-site/implementation-plan.md");

  return (
    <DocumentPage
      title="Implementation Plan"
      description="Eight tasks from scaffolding to deploy, each dispatched to a fresh AI subagent with curated context."
      backLink={{ href: "/portfolio/this-site", label: "nickcarter.ai Overview" }}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
