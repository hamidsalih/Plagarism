import { AnalysisResultCreateNestedManyWithoutDocumentsInput } from "./AnalysisResultCreateNestedManyWithoutDocumentsInput";
import { ReportCreateNestedManyWithoutDocumentsInput } from "./ReportCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  title?: string | null;
  content?: string | null;
  uploadedAt?: Date | null;
  analysisResults?: AnalysisResultCreateNestedManyWithoutDocumentsInput;
  uploadedBy?: string | null;
  reports?: ReportCreateNestedManyWithoutDocumentsInput;
  documentContent?: string | null;
  uploadedByUser?: string | null;
  documentTitle?: string | null;
};
