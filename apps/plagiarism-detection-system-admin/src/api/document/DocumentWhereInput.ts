import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SimilarityCheckListRelationFilter } from "../similarityCheck/SimilarityCheckListRelationFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  similarityChecks?: SimilarityCheckListRelationFilter;
  analysisResults?: AnalysisResultListRelationFilter;
  user?: UserWhereUniqueInput;
  documentContent?: StringNullableFilter;
  documentTitle?: StringNullableFilter;
  documentAuthor?: StringNullableFilter;
};
