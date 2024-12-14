import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AnalysisResultWhereInput = {
  id?: StringFilter;
  result?: JsonFilter;
  document?: DocumentWhereUniqueInput;
};
