export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
  username?: string | null;
  roles?: Array<"Option1">;
  userEmail?: string | null;
};
