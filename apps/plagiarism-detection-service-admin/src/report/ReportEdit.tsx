import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DocumentTitle } from "../document/DocumentTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput
          step={1}
          label="similarityScore"
          source="similarityScore"
        />
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
