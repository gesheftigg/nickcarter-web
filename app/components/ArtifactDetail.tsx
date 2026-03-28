"use client";
import { motion } from "framer-motion";
import type { Artifact } from "@/lib/artifacts";

interface ArtifactDetailProps {
  artifact: Artifact;
}

export default function ArtifactDetail({ artifact }: ArtifactDetailProps) {
  const paragraphs = artifact.detail.split("\n\n");

  return (
    <article
      id={artifact.id}
      className="py-10 relative pl-6 mb-10"
    >
      {/* Animated accent bar */}
      <motion.div
        className="absolute left-0 top-0 w-[3px] bg-[#b45309]"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <h3 className="text-xl font-[family-name:var(--font-serif)] font-normal text-[#1a1a1a]">
        {artifact.title}
      </h3>
      <p className="mt-2 text-base text-[#6b6560] italic">{artifact.oneLiner}</p>

      <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-[#a69e95]">
        {artifact.skills.join(" \u00B7 ")}
      </p>

      <div className="mt-6 space-y-4 max-w-[65ch]">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base leading-[1.7] text-[#4a4540]">
            {paragraph}
          </p>
        ))}
      </div>

      {artifact.links && artifact.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {artifact.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#b45309] px-5 py-2 text-sm font-medium text-[#1a1a1a] hover:bg-[#b45309] hover:text-white transition-colors"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
