import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DocumentTitle } from "../document/DocumentTitle";

export const AnalysisResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
