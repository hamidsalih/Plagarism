import { AnalysisResultUpdateManyWithoutDocumentsInput } from "./AnalysisResultUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  title?: string | null;
  content?: string | null;
  uploadedAt?: Date | null;
  analysisResults?: AnalysisResultUpdateManyWithoutDocumentsInput;
};
