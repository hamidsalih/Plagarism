import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  analysis?: SortOrder;
  similarityScore?: SortOrder;
  documentId?: SortOrder;
};
