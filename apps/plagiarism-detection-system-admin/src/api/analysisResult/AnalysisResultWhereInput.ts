import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { SimilarityCheckListRelationFilter } from "../similarityCheck/SimilarityCheckListRelationFilter";

export type AnalysisResultWhereInput = {
  id?: StringFilter;
  score?: FloatNullableFilter;
  checkedAt?: DateTimeNullableFilter;
  summary?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
  similarityChecks?: SimilarityCheckListRelationFilter;
};
