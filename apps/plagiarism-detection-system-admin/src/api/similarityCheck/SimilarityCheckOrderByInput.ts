import { SortOrder } from "../../util/SortOrder";

export type SimilarityCheckOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  similarityScore?: SortOrder;
  checkDate?: SortOrder;
  documentId?: SortOrder;
  analysisResultId?: SortOrder;
};
