import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AlgorithmWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  name?: StringNullableFilter;
};
