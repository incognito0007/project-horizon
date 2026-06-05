import { NextResponse } from "next/server";
import JournalEntry from "@/types/journalEntry";

type NewEntryInput = Omit<JournalEntry, "id" | "date">;

const entries: JournalEntry[] = [
  {
    id: "1",
    date: new Date("2026-06-01").toISOString(),
    title: "Learned JSX and Components",
    summary:
      "Understood how JSX compiles to React.createElement and built my first functional component with props.",
    stack: ["React", "TypeScript"],
    mood: "great",
    timeSpentMins: 60,
  },
  {
    id: "2",
    date: new Date("2026-06-02").toISOString(),
    title: "TypeScript Interfaces and Types",
    summary:
      "Explored the difference between type aliases and interfaces. Practised with generics.",
    stack: ["TypeScript"],
    mood: "okay",
    timeSpentMins: 45,
  },
  {
    id: "3",
    date: new Date("2026-06-03").toISOString(),
    title: "Next.js App Router",
    summary:
      "Set up App Router, understood layouts, loading.tsx and error.tsx.",
    stack: ["Next.js", "React"],
    mood: "struggling",
    timeSpentMins: 90,
  },
];

export async function GET() {
  const sorted = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return NextResponse.json(sorted, { status: 200 });
}

export async function POST(request: Request) {
  const body = (await request.json()) as NewEntryInput;

  // Basic validation
  if (!body.title || !body.summary || body.stack.length === 0) {
    return NextResponse.json(
      { error: "Title, summary and at least one stack tag are required" },
      { status: 400 },
    );
  }

  const newEntry: JournalEntry = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    ...body,
  };

  entries.push(newEntry);

  return NextResponse.json(newEntry, { status: 201 });
}
