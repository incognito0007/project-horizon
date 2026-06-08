import type { Mood } from "@/types/journal";

export interface MoodIndicatorProps {
  mood: Mood;
}

const moodMap: Record<Mood, { emoji: string; label: string; color: string }> = {
  great: { emoji: "😊", label: "Great", color: "#085041" },
  okay: { emoji: "😐", label: "Okay", color: "#633806" },
  struggling: { emoji: "😤", label: "Struggling", color: "#712B13" },
};

export function MoodIndicator({ mood }: MoodIndicatorProps) {
  const { emoji, label, color } = moodMap[mood];
  return (
    <span style={{ color, fontSize: "13px", fontWeight: 500 }}>
      {emoji} {label}
    </span>
  );
}
