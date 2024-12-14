import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
