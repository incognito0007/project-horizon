export type Stack =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "Storybook"
  | "C#"
  | "Java";

export type Mood = "great" | "okay" | "struggling";

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  summary: string;
  stack: Stack[];
  mood: Mood;
  timeSpentMins: number;
}

// Used as POST request body — no id or date, those are set by the API
export type NewEntryInput = Omit<JournalEntry, "id" | "date">;

// Used for form state — all fields optional while user is filling in
export type DraftEntry = Partial<NewEntryInput>;

// Generic API response wrapper
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}
