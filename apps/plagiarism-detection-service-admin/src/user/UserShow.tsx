import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="email" source="email" />
        <TextField label="password" source="password" />
        <TextField label="username" source="username" />
        <TextField label="roles" source="roles" />
        <TextField label="userEmail" source="userEmail" />
      </SimpleShowLayout>
    </Show>
  );
};
