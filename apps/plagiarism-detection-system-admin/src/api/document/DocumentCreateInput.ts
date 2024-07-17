import { SimilarityCheckCreateNestedManyWithoutDocumentsInput } from "./SimilarityCheckCreateNestedManyWithoutDocumentsInput";
import { AnalysisResultCreateNestedManyWithoutDocumentsInput } from "./AnalysisResultCreateNestedManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  title?: string | null;
  content?: string | null;
  author?: string | null;
  similarityChecks?: SimilarityCheckCreateNestedManyWithoutDocumentsInput;
  analysisResults?: AnalysisResultCreateNestedManyWithoutDocumentsInput;
  user?: UserWhereUniqueInput | null;
  documentContent?: string | null;
  documentTitle?: string | null;
  documentAuthor?: string | null;
};
