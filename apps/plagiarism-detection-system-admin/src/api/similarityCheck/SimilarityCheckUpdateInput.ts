import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type SimilarityCheckUpdateInput = {
  similarityScore?: number | null;
  checkDate?: Date | null;
  document?: DocumentWhereUniqueInput | null;
  analysisResult?: AnalysisResultWhereUniqueInput | null;
};
