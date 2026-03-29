import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { localBrainNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "MCP Tools — Nine Operations, One Protocol — Local Brain — Nick Carter",
  description:
    "The nine MCP tools in Local Brain: capture, search, list, stats, connections, archive, export, usage tracking, and system health.",
};

export default function McpToolsPage() {
  const html = renderMarkdown("local-brain/mcp-tools.md");

  return (
    <DocumentPage
      title="MCP Tools — Nine Operations, One Protocol"
      description="Capture, search, list, stats, connections, archive, export, usage, and health — all through MCP."
      backLink={{ href: "/portfolio/local-brain", label: "Local Brain Overview" }}
      nav={localBrainNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
