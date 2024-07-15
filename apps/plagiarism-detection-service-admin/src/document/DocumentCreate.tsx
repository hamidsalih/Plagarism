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
import { ReportTitle } from "../report/ReportTitle";

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
        <TextInput label="uploadedBy" source="uploadedBy" />
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <TextInput label="documentContent" multiline source="documentContent" />
        <TextInput label="uploadedByUser" source="uploadedByUser" />
        <TextInput label="documentTitle" source="documentTitle" />
      </SimpleForm>
    </Create>
  );
};
