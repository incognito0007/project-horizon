import Link from "next/link";
import JournalEntry from "@/types/journalEntry";
import { StackBadge } from "@/components/StackBadge";
import { MoodIndicator } from "@/components/MoodIndicator";
import { formatDate } from "@/utils/formatDate";

interface EntryCardProps {
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
          border: "1px solid #E2E2E2",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "12px",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            {entry.title}
          </h3>
          <span
            style={{
              fontSize: "12px",
              color: "#888",
              flexShrink: 0,
              marginLeft: "12px",
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
            margin: "10px 0",
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
          <span style={{ fontSize: "12px", color: "#888" }}>
            ⏱ {entry.timeSpentMins} mins
          </span>
        </div>
      </div>
    </Link>
  );
}
