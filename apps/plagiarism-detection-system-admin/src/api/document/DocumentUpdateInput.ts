import { SimilarityCheckUpdateManyWithoutDocumentsInput } from "./SimilarityCheckUpdateManyWithoutDocumentsInput";
import { AnalysisResultUpdateManyWithoutDocumentsInput } from "./AnalysisResultUpdateManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  title?: string | null;
  content?: string | null;
  author?: string | null;
  similarityChecks?: SimilarityCheckUpdateManyWithoutDocumentsInput;
  analysisResults?: AnalysisResultUpdateManyWithoutDocumentsInput;
  user?: UserWhereUniqueInput | null;
  documentContent?: string | null;
  documentTitle?: string | null;
  documentAuthor?: string | null;
};
