"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useEntry } from "@/hooks/useEntry";
import { StackBadge } from "@/components/StackBadge";
import { MoodIndicator } from "@/components/MoodIndicator";
import { formatDate } from "@/utils/formatDate";
import type { Stack } from "@/types/journal";
import { signOut } from "next-auth/react";

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
        <p style={{ color: "var(--text-muted)" }}>Loading entry...</p>
      </main>
    );
  }

  if (error || !entry) {
    return (
      <main
        style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 20px" }}
      >
        <p style={{ color: "#C0392B", marginBottom: "16px" }}>
          {error ?? "Entry not found."}
        </p>
        <button
          onClick={() => router.push("/")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-secondary)",
            fontSize: "14px",
            padding: 0,
          }}
        >
          ← Back to Journal
        </button>
        <button
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
          style={{
            background: "none",
            border: "1px solid var(--btn-outline-border)",
            padding: "8px 14px",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
            color: "var(--btn-outline-text)",
          }}
        >
          Sign out
        </button>
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
          color: "var(--text-secondary)",
          fontSize: "14px",
          marginBottom: "28px",
          padding: 0,
        }}
      >
        ← Back to Journal
      </button>

      {/* Title + date */}
      <div style={{ marginBottom: "20px" }}>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "0 0 6px",
          }}
        >
          {entry.title}
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "13px", margin: 0 }}>
          {formatDate(entry.date)}
        </p>
      </div>

      {/* Stack badges */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {entry.stack.map((s: Stack) => (
          <StackBadge key={s} stack={s} />
        ))}
      </div>

      {/* Mood + time — fixed colors */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          marginBottom: "28px",
          padding: "14px 18px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          fontSize: "13px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: "var(--text-secondary)" }}>Mood</span>
          <MoodIndicator mood={entry.mood} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: "var(--text-secondary)" }}>Time spent</span>
          <span style={{ fontWeight: 500, color: "var(--text-primary)" }}>
            ⏱ {entry.timeSpentMins} mins
          </span>
        </div>
      </div>

      {/* Summary — fixed color */}
      <div
        style={{
          fontSize: "15px",
          lineHeight: "1.75",
          color: "var(--text-primary)",
          borderLeft: "3px solid var(--border)",
          paddingLeft: "18px",
        }}
      >
        {entry.summary}
      </div>
    </main>
  );
}
