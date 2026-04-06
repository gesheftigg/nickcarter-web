"use client";

import { useState, useRef, useEffect } from "react";

interface FitInputProps {
  onSubmit: (jobDescription: string) => void;
  disabled: boolean;
}

const MIN_CHARS = 50;

export default function FitInput({ onSubmit, disabled }: FitInputProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const charCount = text.trim().length;
  const canSubmit = charCount >= MIN_CHARS && !disabled;

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  function handleSubmit() {
    if (!canSubmit) return;
    onSubmit(text.trim());
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] text-[#1a1a1a] tracking-tight">
          Check Fit
        </h1>
        <p className="mt-3 text-sm text-[#6b6560] leading-relaxed max-w-md mx-auto">
          Paste a job description. Get an honest assessment of how well Nick
          fits the role — including where he doesn&apos;t.
        </p>
      </div>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Paste the full job description — the more detail, the better the assessment"
        className="w-full border border-[#e8e4df] px-4 py-4 text-sm text-[#1a1a1a] placeholder-[#a69e95] bg-white focus:outline-none focus:border-[#b45309] transition-colors resize-none disabled:opacity-50"
        rows={12}
      />

      <div className="flex items-center justify-between mt-3">
        <span className={`text-xs ${charCount >= MIN_CHARS ? "text-[#a69e95]" : "text-[#a69e95]"}`}>
          {charCount < MIN_CHARS
            ? `${MIN_CHARS - charCount} more characters needed`
            : `${charCount} characters`}
        </span>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="px-6 py-3 bg-[#b45309] text-white text-sm font-medium hover:bg-[#92400e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Assess Fit
        </button>
      </div>
    </div>
  );
}
