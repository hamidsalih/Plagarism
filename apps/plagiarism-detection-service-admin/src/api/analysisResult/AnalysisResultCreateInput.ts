import { InputJsonValue } from "../../types";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AnalysisResultCreateInput = {
  result?: InputJsonValue;
  document?: DocumentWhereUniqueInput | null;
};
