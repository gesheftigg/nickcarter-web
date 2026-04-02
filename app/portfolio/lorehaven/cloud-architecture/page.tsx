import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { lorehavenNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Cloud Architecture — Web-First, Not Desktop — Lore Haven — Nick Carter",
  description:
    "The Electron-to-web pivot, S3 storage design, and Phase 2 remote MCP plans for Lore Haven.",
};

export default function CloudArchitecturePage() {
  const html = renderMarkdown("lorehaven/cloud-architecture.md");

  return (
    <DocumentPage
      title="Cloud Architecture — Web-First, Not Desktop"
      description="The Electron-to-web pivot, S3 storage design, and the Phase 2 remote MCP plan."
      backLink={{ href: "/portfolio/lorehaven", label: "Lore Haven Overview" }}
      nav={lorehavenNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
