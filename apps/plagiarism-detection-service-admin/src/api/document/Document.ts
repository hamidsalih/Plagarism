import { AnalysisResult } from "../analysisResult/AnalysisResult";
import { Report } from "../report/Report";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  uploadedAt: Date | null;
  analysisResults?: Array<AnalysisResult>;
  uploadedBy: string | null;
  reports?: Array<Report>;
  documentContent: string | null;
  uploadedByUser: string | null;
  documentTitle: string | null;
};
