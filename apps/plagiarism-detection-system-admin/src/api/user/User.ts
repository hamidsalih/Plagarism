import { JsonValue } from "type-fest";
import { Document } from "../document/Document";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  documents?: Array<Document>;
};
