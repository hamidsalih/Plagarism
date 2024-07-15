import { InputJsonValue } from "../../types";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AnalysisResultUpdateInput = {
  result?: InputJsonValue;
  document?: DocumentWhereUniqueInput | null;
};
