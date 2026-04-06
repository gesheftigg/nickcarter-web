import type { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import ChatClient from "./ChatClient";

export const metadata: Metadata = {
  title: "Ask AI About Nick — Nick Carter",
  description:
    "Have a conversation with an AI that deeply knows Nick Carter's engineering background, AI projects, and leadership experience. Honest, calibrated answers.",
};

export default function ChatPage() {
  return (
    <PageTransition>
      <div className="py-8">
        <ChatClient />
      </div>
    </PageTransition>
  );
}
