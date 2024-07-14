import { JsonValue } from "type-fest";
import { Document } from "../document/Document";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  analysis: JsonValue;
  similarityScore: number | null;
  document?: Document | null;
};
