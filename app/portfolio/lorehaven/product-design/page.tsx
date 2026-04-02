import type { Metadata } from "next";
import DocumentPage from "@/app/components/DocumentPage";
import { renderMarkdown } from "@/lib/markdown";
import { lorehavenNav } from "@/lib/document-nav";

export const metadata: Metadata = {
  title: "Product Design — Solving the Cold Start Problem — Lore Haven — Nick Carter",
  description:
    "Lore Builder wizard, starter packs, cross-vendor portability, and the design constraints behind Lore Haven.",
};

export default function ProductDesignPage() {
  const html = renderMarkdown("lorehaven/product-design.md");

  return (
    <DocumentPage
      title="Product Design — Solving the Cold Start Problem"
      description="Lore Builder wizard, starter packs, cross-vendor portability, and the design constraints that shape the product."
      backLink={{ href: "/portfolio/lorehaven", label: "Lore Haven Overview" }}
      nav={lorehavenNav}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentPage>
  );
}
