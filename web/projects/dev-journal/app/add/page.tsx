"use client";

import { useRouter } from "next/navigation";
import { useJournalForm } from "@/hooks/useJournalForm";
import { Button } from "@/components/Button";
import type { Stack } from "@/types/journal";
import type { Mood } from "@/types/journal";

const ALL_STACKS: Stack[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Storybook",
  "C#",
  "Java",
];
const ALL_MOODS: Mood[] = ["great", "okay", "struggling"];

const moodEmoji: Record<Mood, string> = {
  great: "😊 Great",
  okay: "😐 Okay",
  struggling: "😤 Struggling",
};

export default function AddEntryPage() {
  const router = useRouter();
  const {
    draft,
    submitting,
    error,
    isValid,
    setTitle,
    setSummary,
    toggleStack,
    setMood,
    setTime,
    submit,
  } = useJournalForm();

  const handleSubmit = async () => {
    const result = await submit();
    if (result) router.push("/");
  };

  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
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

      <h1 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "32px" }}>
        Log Today&apos;s Learning
      </h1>

      {/* Title */}
      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle}>Title *</label>
        <input
          value={draft.title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What did you learn today?"
          style={inputStyle}
        />
      </div>

      {/* Summary */}
      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle}>
          Summary * &nbsp;
          <span style={{ color: "#aaa", fontWeight: 400 }}>
            ({draft.summary?.length ?? 0} chars — min 20)
          </span>
        </label>
        <textarea
          value={draft.summary ?? ""}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Describe what you learned, what clicked, what you struggled with..."
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {/* Stack badges */}
      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle}>Stack Tags * (select all that apply)</label>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginTop: "8px",
          }}
        >
          {ALL_STACKS.map((stack) => {
            const selected = draft.stack?.includes(stack) ?? false;
            return (
              <button
                key={stack}
                onClick={() => toggleStack(stack)}
                style={{
                  padding: "8px 14px",
                  fontSize: "13px",
                  fontWeight: selected ? 600 : 400,
                  border: selected
                    ? "1.5px solid #1a1a1a"
                    : "1.5px solid #e2e2e2",
                  borderRadius: "6px",
                  background: selected ? "#1a1a1a" : "#fff",
                  color: selected ? "#fff" : "#555",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {stack}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mood */}
      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle}>Mood</label>
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          {ALL_MOODS.map((mood) => {
            const selected = draft.mood === mood;
            return (
              <button
                key={mood}
                onClick={() => setMood(mood)}
                style={{
                  padding: "8px 14px",
                  fontSize: "13px",
                  fontWeight: selected ? 600 : 400,
                  border: selected
                    ? "1.5px solid #1a1a1a"
                    : "1.5px solid #e2e2e2",
                  borderRadius: "6px",
                  background: selected ? "#1a1a1a" : "#fff",
                  color: selected ? "#fff" : "#555",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {moodEmoji[mood]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time spent */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>Time Spent (minutes) *</label>
        <input
          type="number"
          min={1}
          value={draft.timeSpentMins ?? 30}
          onChange={(e) => setTime(Number(e.target.value))}
          style={{ ...inputStyle, width: "120px" }}
        />
      </div>

      {/* Error */}
      {error && (
        <p style={{ color: "#C0392B", fontSize: "13px", marginBottom: "16px" }}>
          {error}
        </p>
      )}

      {/* Actions */}
      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          label={submitting ? "Saving..." : "Save Entry"}
          disabled={!isValid || submitting}
          onClick={handleSubmit}
        />
        <Button
          label="Cancel"
          variant="secondary"
          onClick={() => router.push("/")}
        />
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 500,
  color: "#444",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  fontSize: "14px",
  border: "1px solid #e2e2e2",
  borderRadius: "6px",
  outline: "none",
  fontFamily: "inherit",
};
