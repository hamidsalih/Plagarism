import { AnalysisResult } from "../analysisResult/AnalysisResult";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  uploadedAt: Date | null;
  analysisResults?: Array<AnalysisResult>;
};
