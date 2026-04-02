import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { lorehavenNav } from "@/lib/document-nav";
import ArchitectureDiagram from "../architecture-diagram";

export const metadata: Metadata = {
  title: "Context Architecture for Non-Technical Users — Lore Haven — Nick Carter",
  description:
    "Lore document design, Haven vault, pricing tiers, and language-as-architecture in Lore Haven.",
};

export default function ContextArchitecturePage() {
  const html = renderMarkdown("lorehaven/context-architecture.md");

  return (
    <DocumentPage
      title="Context Architecture for Non-Technical Users"
      description="Lore document design, Haven vault, pricing tiers, and the language-as-architecture principle."
      backLink={{ href: "/portfolio/lorehaven", label: "Lore Haven Overview" }}
      nav={lorehavenNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ArchitectureDiagram />
    </DocumentPage>
  );
}
