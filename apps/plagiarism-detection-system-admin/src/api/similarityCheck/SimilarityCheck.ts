import { Document } from "../document/Document";
import { AnalysisResult } from "../analysisResult/AnalysisResult";

export type SimilarityCheck = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  similarityScore: number | null;
  checkDate: Date | null;
  document?: Document | null;
  analysisResult?: AnalysisResult | null;
};
