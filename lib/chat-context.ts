// lib/chat-context.ts
// Note: The system prompt text lives in functions/api/chat.ts (the authoritative copy).
// This file only exports the client-side reasoning parser.

/**
 * Parse the AI response to separate the main answer from the reasoning block.
 * Returns { answer, reasoning } where reasoning may be null.
 */
export function parseReasoningBlock(text: string): {
  answer: string;
  reasoning: string | null;
} {
  const reasoningStart = text.indexOf("---reasoning---");
  const reasoningEnd = text.indexOf("---end-reasoning---");

  if (reasoningStart === -1 || reasoningEnd === -1) {
    return { answer: text.trim(), reasoning: null };
  }

  const answer = text.slice(0, reasoningStart).trim();
  const reasoning = text
    .slice(reasoningStart + "---reasoning---".length, reasoningEnd)
    .trim();

  return { answer, reasoning };
}
