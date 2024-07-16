import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  author?: SortOrder;
  userId?: SortOrder;
  documentContent?: SortOrder;
  documentTitle?: SortOrder;
  documentAuthor?: SortOrder;
};
