import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { thisSiteNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "How It Was Built — nickcarter.ai — Nick Carter",
  description:
    "How an afternoon article became a deployed website — the full process from brainstorm to running site.",
};

export default function ProcessPage() {
  const summaryHtml = renderMarkdown("this-site/process-summary.md");
  const narrativeHtml = renderMarkdown("this-site/process-narrative.md");

  return (
    <DocumentPage
      title="How It Was Built — From Article to Running Site"
      description="How an afternoon article became a deployed website — summary and full narrative."
      backLink={{ href: "/portfolio/this-site", label: "nickcarter.ai Overview" }}
      nav={thisSiteNav}
    >
      <section>
        <h2 className="text-xl font-semibold text-[#b45309] mb-4">Summary</h2>
        <div dangerouslySetInnerHTML={{ __html: summaryHtml }} />
      </section>

      <hr className="my-10 border-[#e8e4df]" />

      <section>
        <h2 className="text-xl font-semibold text-[#b45309] mb-4">
          Full Narrative
        </h2>
        <div dangerouslySetInnerHTML={{ __html: narrativeHtml }} />
      </section>
    </DocumentPage>
  );
}
