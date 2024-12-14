import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOCUMENT_TITLE_FIELD } from "./DocumentTitle";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="AnalysisResult"
          target="documentId"
          label="AnalysisResults"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="result" source="result" />
            <ReferenceField
              label="document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Report"
          target="documentId"
          label="Reports"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="analysis" source="analysis" />
            <TextField label="similarityScore" source="similarityScore" />
            <ReferenceField
              label="document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
