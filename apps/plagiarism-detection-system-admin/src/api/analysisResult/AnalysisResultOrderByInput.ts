import { SortOrder } from "../../util/SortOrder";

export type AnalysisResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  checkedAt?: SortOrder;
  summary?: SortOrder;
  documentId?: SortOrder;
};
