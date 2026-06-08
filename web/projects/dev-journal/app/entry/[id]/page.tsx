"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useEntry } from "@/hooks/useEntry";
import { StackBadge } from "@/components/StackBadge";
import { MoodIndicator } from "@/components/MoodIndicator";
import { Button } from "@/components/Button";
import { formatDate } from "@/utils/formatDate";
import type { Stack } from "@/types/journal";

interface EntryPageProps {
  params: Promise<{ id: string }>;
}

export default function EntryPage({ params }: EntryPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const { entry, loading, error } = useEntry(id);

  if (loading) {
    return (
      <main
        style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 20px" }}
      >
        <p style={{ color: "#888" }}>Loading entry...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main
        style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 20px" }}
      >
        <p style={{ color: "#C0392B", marginBottom: "16px" }}>{error}</p>
        <Button label="← Back" onClick={() => router.push("/")} />
      </main>
    );
  }

  if (!entry) {
    return (
      <main
        style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 20px" }}
      >
        <p style={{ color: "#888", marginBottom: "16px" }}>Entry not found.</p>
        <Button label="← Back to Journal" onClick={() => router.push("/")} />
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 20px" }}>
      {/* Back */}
      <button
        onClick={() => router.push("/")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#888",
          fontSize: "14px",
          marginBottom: "24px",
          padding: 0,
        }}
      >
        ← Back to Journal
      </button>

      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 6px" }}>
          {entry.title}
        </h1>
        <p style={{ color: "#888", fontSize: "13px", margin: 0 }}>
          {formatDate(entry.date)}
        </p>
      </div>

      {/* Stack badges */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
          marginBottom: "16px",
        }}
      >
        {entry.stack.map((s: Stack) => (
          <StackBadge key={s} stack={s} />
        ))}
      </div>

      {/* Mood + time */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "24px",
          padding: "12px 16px",
          background: "#f9f9f9",
          borderRadius: "8px",
          fontSize: "13px",
        }}
      >
        <div>
          <span style={{ color: "#aaa", marginRight: "6px" }}>Mood</span>
          <MoodIndicator mood={entry.mood} />
        </div>
        <div>
          <span style={{ color: "#aaa", marginRight: "6px" }}>Time spent</span>
          <span style={{ fontWeight: 500 }}>⏱ {entry.timeSpentMins} mins</span>
        </div>
      </div>

      {/* Summary */}
      <div
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#333",
          borderLeft: "3px solid #e2e2e2",
          paddingLeft: "16px",
        }}
      >
        {entry.summary}
      </div>
    </main>
  );
}
