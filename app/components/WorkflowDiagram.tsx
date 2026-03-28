"use client";

import { motion } from "framer-motion";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const steps = [
  {
    label: "Brainstorm",
    desc: "Explore the idea. Ask questions one at a time. Propose 2-3 approaches. Pick one.",
    detail: "Visual companion for design decisions",
  },
  {
    label: "Spec",
    desc: "Write the design document. Automated review catches issues before code exists.",
    detail: "4 issues caught on this site's spec",
  },
  {
    label: "Plan",
    desc: "Break into bite-sized tasks. Each one self-contained, testable, committable.",
    detail: "8 tasks for this site",
  },
  {
    label: "Build",
    desc: "Fresh AI agent per task. Curated context — only what the task needs. Review after each.",
    detail: "Subagent-driven development",
  },
  {
    label: "Review",
    desc: "Spec compliance check, then code quality check. Fix issues. Re-review until clean.",
    detail: "Two-stage review loop",
  },
  {
    label: "Ship",
    desc: "Deploy. Verify live. Document the process. The documentation is itself an artifact.",
    detail: "The meta-artifact",
  },
];

export default function WorkflowDiagram() {
  return (
    <div className="my-12">
      <FadeIn>
        <h2 className="font-[family-name:var(--font-serif)] text-xl text-[#b45309] mb-1">
          How I Work with AI
        </h2>
        <p className="text-sm text-[#6b6560] mb-8">
          The pipeline that produced everything on this site
        </p>
      </FadeIn>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:block">
        <FadeIn delay={0.1}>
          <div className="flex items-start gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-start flex-1">
                <div className="flex flex-col items-center w-full">
                  {/* Node */}
                  <div className="w-10 h-10 rounded-full bg-[#b45309] text-white flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </div>
                  {/* Label */}
                  <div className="mt-3 font-[family-name:var(--font-serif)] text-[14px] text-[#1a1a1a] text-center">
                    {step.label}
                  </div>
                  {/* Description */}
                  <div className="mt-1 text-[11px] text-[#6b6560] text-center leading-tight max-w-[120px]">
                    {step.desc}
                  </div>
                  {/* Detail */}
                  <div className="mt-2 text-[10px] text-[#b45309] text-center uppercase tracking-wider max-w-[120px]">
                    {step.detail}
                  </div>
                </div>
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="flex items-center mt-4 -mx-1">
                    <div className="w-full h-0.5 bg-[#b45309] min-w-[12px]" />
                    <div className="text-[#b45309] text-xs">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden">
        {steps.map((step, i) => (
          <FadeIn key={step.label} delay={i * 0.08}>
            <div className="flex gap-4 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#b45309] text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-[#e8e4df] mt-1" />}
              </div>
              <div className="pb-2">
                <div className="font-[family-name:var(--font-serif)] text-[14px] text-[#1a1a1a]">
                  {step.label}
                </div>
                <div className="text-[12px] text-[#6b6560] leading-relaxed mt-1">
                  {step.desc}
                </div>
                <div className="text-[10px] text-[#b45309] uppercase tracking-wider mt-1">
                  {step.detail}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
