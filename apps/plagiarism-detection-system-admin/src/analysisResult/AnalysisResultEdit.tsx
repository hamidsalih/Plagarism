import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { SimilarityCheckTitle } from "../similarityCheck/SimilarityCheckTitle";

export const AnalysisResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="score" source="score" />
        <DateTimeInput label="checkedAt" source="checkedAt" />
        <TextInput label="summary" multiline source="summary" />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="similarityChecks"
          reference="SimilarityCheck"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SimilarityCheckTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
