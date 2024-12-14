import { InputJsonValue } from "../../types";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type ReportCreateInput = {
  analysis?: InputJsonValue;
  similarityScore?: number | null;
  document?: DocumentWhereUniqueInput | null;
};
