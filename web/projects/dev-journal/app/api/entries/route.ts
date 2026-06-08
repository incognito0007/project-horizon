import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getEntriesByUser, createEntry } from "@/lib/db/entries";
import { revalidatePath } from "next/cache";
import type { NewEntryInput, ApiResponse, JournalEntry } from "@/types/journal";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const entries = await getEntriesByUser(session.user.id);
  const response: ApiResponse<JournalEntry[]> = { data: entries, status: 200 };
  return NextResponse.json(response.data, { status: 200 });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as NewEntryInput;

  if (!body.title || !body.summary || body.stack.length === 0) {
    return NextResponse.json(
      { error: "Title, summary and at least one stack tag are required" },
      { status: 400 },
    );
  }

  const newEntry = await createEntry(body, session.user.id);

  // Tell Next.js to re-fetch the home page data on next visit
  revalidatePath("/");

  const response: ApiResponse<JournalEntry> = { data: newEntry, status: 201 };
  return NextResponse.json(response.data, { status: 201 });
}
