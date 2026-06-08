import Link from "next/link";
import type { JournalEntry } from "@/types/journal";
import { StackBadge } from "./StackBadge";
import { MoodIndicator } from "./MoodIndicator";
import { formatDate } from "@/utils/formatDate";

export interface EntryCardProps {
  entry: Pick<
    JournalEntry,
    "id" | "title" | "date" | "stack" | "mood" | "timeSpentMins"
  >;
}

export function EntryCard({ entry }: EntryCardProps) {
  return (
    <Link href={`/entry/${entry.id}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "16px 20px",
          background: "var(--surface)",
          cursor: "pointer",
          transition: "border-color 0.15s",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "10px",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {entry.title}
          </h3>
          <span
            style={{
              fontSize: "12px",
              color: "var(--text-muted)",
              flexShrink: 0,
              marginLeft: "16px",
            }}
          >
            {formatDate(entry.date)}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            marginBottom: "12px",
          }}
        >
          {entry.stack.map((s) => (
            <StackBadge key={s} stack={s} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MoodIndicator mood={entry.mood} />
          <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            ⏱ {entry.timeSpentMins} mins
          </span>
        </div>
      </div>
    </Link>
  );
}
