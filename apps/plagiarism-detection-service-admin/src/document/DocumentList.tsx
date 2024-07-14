import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Documents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="content" source="content" />
        <TextField label="uploadedAt" source="uploadedAt" />
        <TextField label="uploadedBy" source="uploadedBy" />
        <TextField label="documentContent" source="documentContent" />
        <TextField label="uploadedByUser" source="uploadedByUser" />
        <TextField label="documentTitle" source="documentTitle" />
      </Datagrid>
    </List>
  );
};
