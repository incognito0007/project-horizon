import { supabase } from "@/lib/supabase";
import type { JournalEntry, NewEntryInput } from "@/types/journal";
import type { Stack, Mood } from "@/types/journal";

// Row shape coming from Supabase
interface EntryRow {
  id: string;
  user_id: string;
  title: string;
  summary: string;
  stack: string[];
  mood: string;
  time_spent_mins: number;
  created_at: string;
}

function rowToEntry(row: EntryRow): JournalEntry {
  return {
    id: row.id,
    date: row.created_at,
    title: row.title,
    summary: row.summary,
    stack: row.stack as Stack[],
    mood: row.mood as Mood,
    timeSpentMins: row.time_spent_mins,
  };
}

export async function getEntriesByUser(
  userId: string,
): Promise<JournalEntry[]> {
  const { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data as EntryRow[]).map(rowToEntry);
}

export async function getEntryByIdAndUser(
  id: string,
  userId: string,
): Promise<JournalEntry | null> {
  const { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("id", id)
    .eq("user_id", userId)
    .single();

  if (error) return null;
  return rowToEntry(data as EntryRow);
}

export async function createEntry(
  input: NewEntryInput,
  userId: string,
): Promise<JournalEntry> {
  const { data, error } = await supabase
    .from("entries")
    .insert({
      user_id: userId,
      title: input.title,
      summary: input.summary,
      stack: input.stack,
      mood: input.mood,
      time_spent_mins: input.timeSpentMins,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return rowToEntry(data as EntryRow);
}
