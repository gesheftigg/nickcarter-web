import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { localBrainNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Architecture — Five Services, One Compose File — Local Brain — Nick Carter",
  description:
    "Docker Compose architecture, PostgreSQL + pgvector, Cloudflare Tunnel, encrypted backups, and the admin panel for Local Brain.",
};

export default function ArchitecturePage() {
  const html = renderMarkdown("local-brain/architecture.md");

  return (
    <DocumentPage
      title="Architecture — Five Services, One Compose File"
      description="Docker Compose stack, data flow, database schema, and what's deliberately not here."
      backLink={{ href: "/portfolio/local-brain", label: "Local Brain Overview" }}
      nav={localBrainNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
