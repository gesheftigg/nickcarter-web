import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { agenticNovelNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "How It Was Built — Agentic — Nick Carter",
  description:
    "The full story of how the Agentic novel drafting system was built in one evening — summary, narrative, and process.",
};

export default function ProcessPage() {
  const summaryHtml = renderMarkdown("agentic-novel/process-summary.md");
  const narrativeHtml = renderMarkdown(
    "agentic-novel/process-narrative.md"
  );

  return (
    <DocumentPage
      title="How It Was Built — Process & Transcript"
      description="The full story of building the Agentic drafting system in one evening: 4 hours, 29 files, 3 chapters drafted."
      backLink={{ href: "/portfolio/agentic-novel", label: "Agentic Overview" }}
      nav={agenticNovelNav}
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

      <hr className="my-10 border-[#e8e4df]" />

      <section>
        <h2 className="text-xl font-semibold text-[#b45309] mb-4">
          Session Transcript
        </h2>
        <div className="rounded-lg border border-[#e8e4df] bg-[#f0eeeb] p-6">
          <p className="text-base text-[#6b6560] italic">
            Full session transcript coming soon.
          </p>
        </div>
      </section>
    </DocumentPage>
  );
}
