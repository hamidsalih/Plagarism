import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type SimilarityCheckWhereInput = {
  id?: StringFilter;
  similarityScore?: FloatNullableFilter;
  checkDate?: DateTimeNullableFilter;
  document?: DocumentWhereUniqueInput;
  analysisResult?: AnalysisResultWhereUniqueInput;
};
