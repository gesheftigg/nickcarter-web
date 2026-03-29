import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { localBrainNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Cost Tracking — Knowing What Your Memory Costs — Local Brain — Nick Carter",
  description:
    "Per-request token counting, cost estimation by model, daily breakdowns, and the economics of running a self-hosted AI memory layer.",
};

export default function CostTrackingPage() {
  const html = renderMarkdown("local-brain/cost-tracking.md");

  return (
    <DocumentPage
      title="Cost Tracking — Knowing What Your Memory Costs"
      description="Per-request token counting, model-level cost breakdowns, and why visibility changes behavior."
      backLink={{ href: "/portfolio/local-brain", label: "Local Brain Overview" }}
      nav={localBrainNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
