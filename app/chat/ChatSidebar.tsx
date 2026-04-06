"use client";

import DeepDiveBrowser from "./DeepDiveBrowser";
import type { Message } from "./ChatMessage";

interface ChatSidebarProps {
  onStarterClick: (text: string) => void;
  messageCount: number;
  maxMessages: number;
  consent: boolean;
  onConsentChange: (value: boolean) => void;
  showConsent: boolean;
  selectedDocs: Set<string>;
  onToggleDoc: (docId: string) => void;
  messages: Message[];
}

const STARTERS = [
  "What's Nick's experience with regulated software?",
  "Tell me about Lore Haven",
  "What AI skills does Nick have?",
  "What are Nick's leadership gaps?",
  "Describe Nick's team management experience",
];

function generateTranscript(messages: Message[]): string {
  const date = new Date().toISOString().split("T")[0];
  const lines = [
    "# Conversation with Nick Carter's AI",
    `**Date:** ${date}`,
    "**Source:** nickcarter.ai/chat",
    "",
    "---",
    "",
  ];

  for (const msg of messages) {
    if (msg.role === "user") {
      lines.push(`**You:** ${msg.content}`, "");
    } else {
      lines.push(`**AI:** ${msg.content}`, "");
      if (msg.reasoning) {
        lines.push(
          "> **How I arrived at this:**",
          ...msg.reasoning.split("\n").map((l) => `> ${l}`),
          ""
        );
      }
      lines.push("---", "");
    }
  }

  lines.push(
    "Want to connect? nick.carter@hey.com | linkedin.com/in/yes-nick-carter"
  );
  return lines.join("\n");
}

export default function ChatSidebar({
  onStarterClick,
  messageCount,
  maxMessages,
  consent,
  onConsentChange,
  showConsent,
  selectedDocs,
  onToggleDoc,
  messages,
}: ChatSidebarProps) {
  function handleDownloadTranscript() {
    const transcript = generateTranscript(messages);
    const blob = new Blob([transcript], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nick-carter-chat-${new Date().toISOString().split("T")[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <aside className="w-[280px] shrink-0 border-r border-[#e8e4df] pr-6 hidden md:flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-120px)] sticky top-6">
      <div>
        <h1 className="text-xl font-[family-name:var(--font-serif)] text-[#1a1a1a]">
          Ask AI About Nick
        </h1>
        <p className="mt-2 text-xs text-[#6b6560] leading-relaxed">
          Get honest, calibrated answers about Nick&apos;s engineering background,
          AI projects, and leadership.
        </p>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#a69e95] mb-3">
          Try asking
        </p>
        <div className="space-y-2">
          {STARTERS.map((text) => (
            <button
              key={text}
              onClick={() => onStarterClick(text)}
              className="block w-full text-left text-xs text-[#6b6560] hover:text-[#1a1a1a] border border-[#e8e4df] hover:border-[#b45309] px-3 py-2 transition-colors leading-relaxed"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      <DeepDiveBrowser
        selectedDocs={selectedDocs}
        onToggleDoc={onToggleDoc}
      />

      <div className="border-t border-[#e8e4df] pt-4">
        <p className="text-xs font-medium text-[#4a4540] mb-2">
          Like what you hear?
        </p>
        <p className="text-xs text-[#6b6560] leading-relaxed">
          <a
            href="mailto:nick.carter@hey.com"
            className="text-[#b45309] hover:text-[#92400e] transition-colors"
          >
            nick.carter@hey.com
          </a>
          {" · "}
          <a
            href="https://linkedin.com/in/yes-nick-carter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b45309] hover:text-[#92400e] transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </div>

      {/* Consent banner — prominent, appears after first AI response */}
      {showConsent && (
        <div className="border border-[#e8e4df] px-4 py-3 bg-white">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => onConsentChange(e.target.checked)}
              className="accent-[#b45309] w-3.5 h-3.5 mt-0.5 shrink-0"
            />
            <div>
              <p className="text-xs font-medium text-[#4a4540]">
                Share this conversation?
              </p>
              <p className="text-[11px] text-[#6b6560] leading-relaxed mt-1">
                Help Nick improve this tool — opt in to share for quality
                improvements. Off by default.
              </p>
            </div>
          </label>
        </div>
      )}

      <div className="text-[11px] text-[#a69e95] space-y-2">
        <p>
          Message {messageCount} of {maxMessages}
        </p>

        {messages.length > 1 && (
          <button
            onClick={handleDownloadTranscript}
            className="text-[#b45309] hover:text-[#92400e] transition-colors"
          >
            Download transcript
          </button>
        )}
      </div>
    </aside>
  );
}
