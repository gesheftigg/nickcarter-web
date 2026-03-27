"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroAnimated() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -25]);

  return (
    <motion.section className="pt-20 pb-16" style={{ y }}>
      {/* Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-[family-name:var(--font-serif)] font-normal text-[#111] tracking-tight leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Nick Carter
      </motion.h1>

      {/* Positioning line with accent bar */}
      <motion.div
        className="mt-6 border-l-[3px] border-[#111] pl-5"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        <p className="text-lg md:text-xl text-[#555] leading-relaxed">
          Engineering leader who builds AI systems — and teaches teams to build them too
        </p>
      </motion.div>

      {/* Action buttons */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <motion.a
          href="#artifacts"
          className="hero-btn inline-block border-2 border-[#111] px-7 py-3 text-sm font-medium text-[#111] tracking-wide hover:bg-[#111] hover:text-white transition-colors text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
        >
          See the work
        </motion.a>
        <motion.div
          className="hero-btn inline-block border border-[#ddd] px-7 py-3 text-sm text-[#aaa] tracking-wide text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.75, ease: "easeOut" }}
        >
          Ask AI &middot; soon
        </motion.div>
        <motion.div
          className="hero-btn inline-block border border-[#ddd] px-7 py-3 text-sm text-[#aaa] tracking-wide text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
        >
          Check Fit &middot; soon
        </motion.div>
      </div>
    </motion.section>
  );
}
