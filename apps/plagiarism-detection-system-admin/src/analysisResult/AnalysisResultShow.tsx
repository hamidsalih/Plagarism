import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";
import { ANALYSISRESULT_TITLE_FIELD } from "./AnalysisResultTitle";

export const AnalysisResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="score" source="score" />
        <TextField label="checkedAt" source="checkedAt" />
        <TextField label="summary" source="summary" />
        <ReferenceField
          label="Document"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="SimilarityCheck"
          target="analysisResultId"
          label="SimilarityChecks"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
