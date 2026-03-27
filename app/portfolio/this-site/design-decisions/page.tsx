import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Design Decisions — nickcarter.ai — Nick Carter",
  description:
    "Every visual choice made while building nickcarter.ai — editorial direction, hero style, card style, animations — with rationale.",
};

export default function DesignDecisionsPage() {
  const html = renderMarkdown("this-site/design-decisions.md");

  return (
    <DocumentPage
      title="Design Decisions — Every Visual Choice With Rationale"
      description="Every visual choice — editorial direction, hero style, card style, animations — with rationale."
      backLink={{ href: "/portfolio/this-site", label: "nickcarter.ai Overview" }}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
