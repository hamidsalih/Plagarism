import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  uploadedAt?: SortOrder;
  uploadedBy?: SortOrder;
  documentContent?: SortOrder;
  uploadedByUser?: SortOrder;
  documentTitle?: SortOrder;
};
