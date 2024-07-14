import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AnalysisResultTitle } from "../analysisResult/AnalysisResultTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
        <ReferenceArrayInput
          source="analysisResults"
          reference="AnalysisResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisResultTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
