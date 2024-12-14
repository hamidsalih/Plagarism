import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AlgorithmList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Algorithms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="description" source="description" />
        <TextField label="createdAt" source="createdAt" />
        <TextField label="name" source="name" />
      </Datagrid>
    </List>
  );
};
