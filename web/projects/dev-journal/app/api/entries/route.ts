import { NextResponse } from "next/server";
import { entries } from "@/lib/entries";
import type { JournalEntry, NewEntryInput, ApiResponse } from "@/types/journal";

export async function GET() {
  const readonlyEntries: Readonly<JournalEntry[]> = entries;
  const sorted = [...readonlyEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const response: ApiResponse<JournalEntry[]> = { data: sorted, status: 200 };
  return NextResponse.json(response.data, { status: response.status });
}

export async function POST(request: Request) {
  const body = (await request.json()) as NewEntryInput;

  if (!body.title || !body.summary || body.stack.length === 0) {
    const response: ApiResponse<never> = {
      error: "Title, summary and at least one stack tag are required",
      status: 400,
    };
    return NextResponse.json(
      { error: response.error },
      { status: response.status },
    );
  }

  const newEntry: JournalEntry = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    ...body,
  };

  entries.push(newEntry);

  const response: ApiResponse<JournalEntry> = { data: newEntry, status: 201 };
  return NextResponse.json(response.data, { status: response.status });
}
