import { Document } from "../document/Document";
import { SimilarityCheck } from "../similarityCheck/SimilarityCheck";

export type AnalysisResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  checkedAt: Date | null;
  summary: string | null;
  document?: Document | null;
  similarityChecks?: Array<SimilarityCheck>;
};
