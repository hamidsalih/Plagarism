import { JsonValue } from "type-fest";
import { Document } from "../document/Document";

export type AnalysisResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  result: JsonValue;
  document?: Document | null;
};
