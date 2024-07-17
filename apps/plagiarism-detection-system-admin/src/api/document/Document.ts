import { SimilarityCheck } from "../similarityCheck/SimilarityCheck";
import { AnalysisResult } from "../analysisResult/AnalysisResult";
import { User } from "../user/User";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  author: string | null;
  similarityChecks?: Array<SimilarityCheck>;
  analysisResults?: Array<AnalysisResult>;
  user?: User | null;
  documentContent: string | null;
  documentTitle: string | null;
  documentAuthor: string | null;
};
