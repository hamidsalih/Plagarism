import { AnalysisResultCreateNestedManyWithoutDocumentsInput } from "./AnalysisResultCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  title?: string | null;
  content?: string | null;
  uploadedAt?: Date | null;
  analysisResults?: AnalysisResultCreateNestedManyWithoutDocumentsInput;
};
