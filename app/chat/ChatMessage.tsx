"use client";

import { motion } from "framer-motion";
import ReasoningBlock from "./ReasoningBlock";

export interface Message {
  role: "user" | "assistant";
  content: string;
  reasoning?: string | null;
}

interface ChatMessageProps {
  message: Message;
  isStreaming?: boolean;
}

export default function ChatMessage({ message, isStreaming }: ChatMessageProps) {
  if (message.role === "user") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="ml-12 md:ml-24"
      >
        <div className="bg-[#f0eeeb] px-4 py-3 rounded">
          <p className="text-sm text-[#1a1a1a] leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="border-l-[3px] border-[#b45309] pl-4"
    >
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#a69e95] mb-1">
        AI
      </p>
      <div className="text-sm text-[#4a4540] leading-[1.7] whitespace-pre-wrap">
        {message.content}
        {isStreaming && (
          <span className="inline-block w-[2px] h-[14px] bg-[#b45309] ml-[1px] animate-pulse align-text-bottom" />
        )}
      </div>
      {message.reasoning && <ReasoningBlock reasoning={message.reasoning} />}
    </motion.div>
  );
}
