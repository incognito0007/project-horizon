import { Recommendation } from "./recommendation";

export interface DecisionSummary {
  prosScore: number;
  consScore: number;
  percentage: number;
  recommendation: Recommendation;
}
