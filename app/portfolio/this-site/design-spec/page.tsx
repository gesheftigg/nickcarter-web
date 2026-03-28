import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { thisSiteNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Design Spec — nickcarter.ai — Nick Carter",
  description:
    "The full design specification for nickcarter.ai — audience, content structure, technical architecture, and success criteria.",
};

export default function DesignSpecPage() {
  const html = renderMarkdown("this-site/design-spec.md");

  return (
    <DocumentPage
      title="Design Spec"
      description="The full specification — audience, content structure, technical architecture, success criteria."
      backLink={{ href: "/portfolio/this-site", label: "nickcarter.ai Overview" }}
      nav={thisSiteNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
