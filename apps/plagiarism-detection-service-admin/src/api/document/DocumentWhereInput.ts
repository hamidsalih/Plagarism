import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  analysisResults?: AnalysisResultListRelationFilter;
};
