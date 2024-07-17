import { InputJsonValue } from "../../types";
import { DocumentCreateNestedManyWithoutUsersInput } from "./DocumentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  documents?: DocumentCreateNestedManyWithoutUsersInput;
};
