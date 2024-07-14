import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AlgorithmShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="description" source="description" />
        <TextField label="createdAt" source="createdAt" />
        <TextField label="name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
