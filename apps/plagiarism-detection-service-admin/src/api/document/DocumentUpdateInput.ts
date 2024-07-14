import { AnalysisResultUpdateManyWithoutDocumentsInput } from "./AnalysisResultUpdateManyWithoutDocumentsInput";
import { ReportUpdateManyWithoutDocumentsInput } from "./ReportUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  title?: string | null;
  content?: string | null;
  uploadedAt?: Date | null;
  analysisResults?: AnalysisResultUpdateManyWithoutDocumentsInput;
  uploadedBy?: string | null;
  reports?: ReportUpdateManyWithoutDocumentsInput;
  documentContent?: string | null;
  uploadedByUser?: string | null;
  documentTitle?: string | null;
};
