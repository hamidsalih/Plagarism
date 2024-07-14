import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type ReportWhereInput = {
  id?: StringFilter;
  analysis?: JsonFilter;
  similarityScore?: IntNullableFilter;
  document?: DocumentWhereUniqueInput;
};
