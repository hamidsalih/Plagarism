import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { SimilarityCheckUpdateManyWithoutAnalysisResultsInput } from "./SimilarityCheckUpdateManyWithoutAnalysisResultsInput";

export type AnalysisResultUpdateInput = {
  score?: number | null;
  checkedAt?: Date | null;
  summary?: string | null;
  document?: DocumentWhereUniqueInput | null;
  similarityChecks?: SimilarityCheckUpdateManyWithoutAnalysisResultsInput;
};
