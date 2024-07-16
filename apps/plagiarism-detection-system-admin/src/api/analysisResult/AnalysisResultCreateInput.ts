import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { SimilarityCheckCreateNestedManyWithoutAnalysisResultsInput } from "./SimilarityCheckCreateNestedManyWithoutAnalysisResultsInput";

export type AnalysisResultCreateInput = {
  score?: number | null;
  checkedAt?: Date | null;
  summary?: string | null;
  document?: DocumentWhereUniqueInput | null;
  similarityChecks?: SimilarityCheckCreateNestedManyWithoutAnalysisResultsInput;
};
