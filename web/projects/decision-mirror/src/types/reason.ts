export type ReasonType = "PRO" | "CON";

export interface Reason {
  id: string;
  text: string;
  weight: number;
  type: ReasonType;
}
