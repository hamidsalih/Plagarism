import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";
import { ANALYSISRESULT_TITLE_FIELD } from "../analysisResult/AnalysisResultTitle";

export const SimilarityCheckList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SimilarityChecks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="similarityScore" source="similarityScore" />
        <TextField label="checkDate" source="checkDate" />
        <ReferenceField
          label="Document"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="AnalysisResult"
          source="analysisresult.id"
          reference="AnalysisResult"
        >
          <TextField source={ANALYSISRESULT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
