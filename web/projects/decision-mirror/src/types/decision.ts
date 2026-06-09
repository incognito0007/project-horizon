import { Reason } from "./reason";

export interface Decision {
  id: string;
  title: string;
  reasons: Reason[];
  createdAt: string;
  updatedAt: string;
}
