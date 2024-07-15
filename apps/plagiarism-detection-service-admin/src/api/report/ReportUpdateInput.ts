import { InputJsonValue } from "../../types";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type ReportUpdateInput = {
  analysis?: InputJsonValue;
  similarityScore?: number | null;
  document?: DocumentWhereUniqueInput | null;
};
