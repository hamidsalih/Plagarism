import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
};
