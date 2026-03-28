import type { Metadata } from "next";
import SectionHeader from "../components/SectionHeader";
import ArtifactDetail from "../components/ArtifactDetail";
import ScrollReveal from "../components/ScrollReveal";
import PageTransition from "../components/PageTransition";
import { artifacts } from "@/lib/artifacts";

export const metadata: Metadata = {
  title: "Portfolio — Nick Carter",
  description:
    "AI systems, regulated medical device platforms, and creative projects. Full portfolio of what Nick Carter builds and how.",
};

export default function PortfolioPage() {
  const buildArtifacts = artifacts.filter((a) => a.section === "build");
  const createArtifacts = artifacts.filter((a) => a.section === "create");

  const externalLinks = [
    { label: "Ship With Intent (Substack)", href: "https://shipwithintent.substack.com" },
    { label: "Ship With Intent (YouTube)", href: "https://www.youtube.com/@ShipWithIntent" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yes-nick-carter" },
    { label: "Email", href: "mailto:nick.carter@hey.com" },
  ];

  return (
    <PageTransition>
      <div className="py-16">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] font-normal text-[#1a1a1a] leading-tight">
            Portfolio
          </h1>
          <p className="mt-3 text-base text-[#6b6560] max-w-2xl">
            A closer look at how I build and create with AI.
          </p>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <SectionHeader title="How I Build with AI" />
          </ScrollReveal>
          {buildArtifacts.map((artifact, i) => (
            <ScrollReveal key={artifact.id} delay={i * 0.1}>
              <ArtifactDetail artifact={artifact} />
            </ScrollReveal>
          ))}
        </div>

        <div>
          <ScrollReveal>
            <SectionHeader title="How I Create with AI" />
          </ScrollReveal>
          {createArtifacts.map((artifact, i) => (
            <ScrollReveal key={artifact.id} delay={i * 0.1}>
              <ArtifactDetail artifact={artifact} />
            </ScrollReveal>
          ))}
        </div>

        <div>
          <ScrollReveal>
            <SectionHeader title="Links" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-4">
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="inline-block border-2 border-[#b45309] px-5 py-3 text-sm font-medium text-[#1a1a1a] hover:bg-[#b45309] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
