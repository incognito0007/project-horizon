import { Stack } from "./stack";
import { Mood } from "./mood";

export default interface JournalEntry {
  id: string;
  date: string;
  title: string;
  summary: string;
  stack: Stack[];
  mood: Mood;
  timeSpentMins: number;
}
