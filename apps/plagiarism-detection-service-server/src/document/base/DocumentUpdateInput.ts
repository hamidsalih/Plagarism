/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { AnalysisResultUpdateManyWithoutDocumentsInput } from "./AnalysisResultUpdateManyWithoutDocumentsInput";
import { ReportUpdateManyWithoutDocumentsInput } from "./ReportUpdateManyWithoutDocumentsInput";

@InputType()
class DocumentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  uploadedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => AnalysisResultUpdateManyWithoutDocumentsInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultUpdateManyWithoutDocumentsInput)
  @IsOptional()
  @Field(() => AnalysisResultUpdateManyWithoutDocumentsInput, {
    nullable: true,
  })
  analysisResults?: AnalysisResultUpdateManyWithoutDocumentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  uploadedBy?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReportUpdateManyWithoutDocumentsInput,
  })
  @ValidateNested()
  @Type(() => ReportUpdateManyWithoutDocumentsInput)
  @IsOptional()
  @Field(() => ReportUpdateManyWithoutDocumentsInput, {
    nullable: true,
  })
  reports?: ReportUpdateManyWithoutDocumentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  documentContent?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  uploadedByUser?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  documentTitle?: string | null;
}

export { DocumentUpdateInput as DocumentUpdateInput };
