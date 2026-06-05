import JournalEntry from "./journalEntry";

export type NewEntryInput = Omit<JournalEntry, "id" | "date">;

export type DraftEntry = Partial<NewEntryInput>;
