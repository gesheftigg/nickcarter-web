import type { Metadata } from "next";
import Link from "next/link";
import { artifacts } from "@/lib/artifacts";
import ScrollReveal from "@/app/components/ScrollReveal";
import PageTransition from "@/app/components/PageTransition";
import ArchitectureDiagram from "./architecture-diagram";

export const metadata: Metadata = {
  title: "Lore Haven — AI Forgets Who You Are — Nick Carter",
  description:
    "A deep dive into Lore Haven: a consumer web app that solves the AI cold start problem — portable context for non-technical users, cloud-first architecture, and product design lessons.",
};

const documents = [
  {
    title: "Context Architecture",
    href: "/portfolio/lorehaven/context-architecture",
    description:
      "Lore document design, Haven vault, pricing tiers, language-as-architecture",
  },
  {
    title: "Product Design",
    href: "/portfolio/lorehaven/product-design",
    description:
      "Lore Builder wizard, starter packs, cross-vendor portability, design constraints",
  },
  {
    title: "Cloud Architecture",
    href: "/portfolio/lorehaven/cloud-architecture",
    description:
      "The Electron-to-web pivot, S3 storage design, Phase 2 remote MCP",
  },
  {
    title: "Lessons Learned",
    href: "/portfolio/lorehaven/lessons-learned",
    description:
      "What broke, what was redesigned, and why the pivot was the right call",
  },
];

export default function LoreHavenPage() {
  const artifact = artifacts.find((a) => a.id === "lorehaven");
  if (!artifact) return null;

  const paragraphs = artifact.detail.split("\n\n");

  return (
    <PageTransition>
      <div className="py-16">
        <Link
          href="/portfolio"
          className="text-xs uppercase tracking-[0.12em] text-[#a69e95] hover:text-[#1a1a1a] transition-colors"
        >
          &larr; Back to Portfolio
        </Link>

        <ScrollReveal>
          <h1 className="mt-8 text-3xl md:text-4xl font-[family-name:var(--font-serif)] font-normal text-[#1a1a1a] leading-tight">
            Lore Haven — AI Forgets Who You Are. Every Single Time.
          </h1>

          <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-[#a69e95]">
            {artifact.skills.join(" \u00B7 ")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 max-w-[65ch] space-y-4">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-[1.7] text-[#4a4540]">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ArchitectureDiagram />

        <ScrollReveal delay={0.2}>
          <div className="mt-20 border-t-2 border-[#1a1a1a] pt-6">
            <h2 className="text-2xl font-[family-name:var(--font-serif)] font-normal text-[#1a1a1a] mb-8">
              Documents
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {documents.map((doc, i) => (
                <ScrollReveal key={doc.href} delay={i * 0.08}>
                  <Link
                    href={doc.href}
                    className="group block border-t border-[#e8e4df] pt-5 hover:border-[#b45309] transition-colors"
                  >
                    <h3 className="text-base font-[family-name:var(--font-serif)] font-normal text-[#1a1a1a] group-hover:text-[#6b6560]">
                      {doc.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6b6560] leading-relaxed">
                      {doc.description}
                    </p>
                    <p className="mt-3 text-sm font-medium text-[#b45309] group-hover:text-[#92400e] transition-colors view-details-link">
                      Read <span className="view-details-arrow">&rarr;</span>
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
