import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  analysisResults?: AnalysisResultListRelationFilter;
  uploadedBy?: StringNullableFilter;
  reports?: ReportListRelationFilter;
  documentContent?: StringNullableFilter;
  uploadedByUser?: StringNullableFilter;
  documentTitle?: StringNullableFilter;
};
