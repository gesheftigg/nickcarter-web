"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Artifact } from "@/lib/artifacts";

interface ArtifactCardProps {
  artifact: Artifact;
}

export default function ArtifactCard({ artifact }: ArtifactCardProps) {
  const href = artifact.deepDivePath || `/portfolio#${artifact.id}`;

  return (
    <Link
      href={href}
      className="artifact-card group block relative pl-6 py-4 transition-all"
    >
      {/* Animated accent bar */}
      <motion.div
        className="absolute left-0 top-0 w-[3px] bg-[#b45309]"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <h3 className="text-lg font-[family-name:var(--font-serif)] font-normal text-[#1a1a1a] group-hover:text-[#6b6560]">
        {artifact.title}
      </h3>
      <p className="mt-2 text-sm text-[#6b6560] leading-relaxed">
        {artifact.oneLiner}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-[#a69e95]">
        {artifact.skills.join(" \u00B7 ")}
      </p>
      <p className="mt-3 text-sm font-medium text-[#b45309] group-hover:text-[#92400e] transition-colors view-details-link">
        View Details <span className="view-details-arrow">&rarr;</span>
      </p>
    </Link>
  );
}
