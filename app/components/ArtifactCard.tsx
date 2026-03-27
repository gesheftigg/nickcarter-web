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
        className="absolute left-0 top-0 w-[3px] bg-black"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <h3 className="text-lg font-[family-name:var(--font-serif)] font-normal text-[#111] group-hover:text-[#555]">
        {artifact.title}
      </h3>
      <p className="mt-2 text-sm text-[#777] leading-relaxed">
        {artifact.oneLiner}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-[#999]">
        {artifact.skills.join(" \u00B7 ")}
      </p>
      <p className="mt-3 text-sm font-medium text-[#111] group-hover:text-[#555] transition-colors view-details-link">
        View Details <span className="view-details-arrow">&rarr;</span>
      </p>
    </Link>
  );
}
