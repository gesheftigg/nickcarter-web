"use client";

import { useState } from "react";
import { deepDiveGroups } from "@/lib/deep-dive-docs";
import DocumentModal from "./DocumentModal";

interface DeepDiveBrowserProps {
  selectedDocs: Set<string>;
  onToggleDoc: (docId: string) => void;
}

export default function DeepDiveBrowser({
  selectedDocs,
  onToggleDoc,
}: DeepDiveBrowserProps) {
  const [previewDoc, setPreviewDoc] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  function toggleGroup(artifact: string) {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(artifact)) {
        next.delete(artifact);
      } else {
        next.add(artifact);
      }
      return next;
    });
  }

  return (
    <>
      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#a69e95] mb-3">
          Deep Dive Documents
        </p>
        <p className="text-xs text-[#6b6560] mb-4 leading-relaxed">
          Load portfolio documents into the conversation for deeper answers.
        </p>
        <div className="space-y-2">
          {deepDiveGroups.map((group) => (
            <div key={group.artifact}>
              <button
                onClick={() => toggleGroup(group.artifact)}
                className="flex items-center gap-1 w-full text-left text-xs font-medium text-[#4a4540] hover:text-[#1a1a1a] transition-colors py-1"
              >
                <span
                  className="inline-block transition-transform duration-150 text-[10px]"
                  style={{
                    transform: expandedGroups.has(group.artifact)
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                  }}
                >
                  ▸
                </span>
                {group.artifact}
                {group.docs.some((d) => selectedDocs.has(d.id)) && (
                  <span className="ml-1 w-1.5 h-1.5 rounded-full bg-[#b45309] inline-block" />
                )}
              </button>
              {expandedGroups.has(group.artifact) && (
                <div className="ml-3 mt-1 space-y-1">
                  {group.docs.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center gap-2 text-xs"
                    >
                      <input
                        type="checkbox"
                        checked={selectedDocs.has(doc.id)}
                        onChange={() => onToggleDoc(doc.id)}
                        className="accent-[#b45309] w-3 h-3"
                      />
                      <span
                        className="text-[#6b6560] flex-1 cursor-pointer hover:text-[#1a1a1a] transition-colors"
                        onClick={() => onToggleDoc(doc.id)}
                      >
                        {doc.title}
                      </span>
                      <button
                        onClick={() =>
                          setPreviewDoc({ id: doc.id, title: doc.title })
                        }
                        className="text-[#a69e95] hover:text-[#b45309] transition-colors"
                        title="Preview document"
                      >
                        ⊡
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {previewDoc && (
        <DocumentModal
          docId={previewDoc.id}
          title={previewDoc.title}
          onClose={() => setPreviewDoc(null)}
        />
      )}
    </>
  );
}
