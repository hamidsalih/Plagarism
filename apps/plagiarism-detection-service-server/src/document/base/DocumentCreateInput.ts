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
import { AnalysisResultCreateNestedManyWithoutDocumentsInput } from "./AnalysisResultCreateNestedManyWithoutDocumentsInput";

@InputType()
class DocumentCreateInput {
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
    type: () => AnalysisResultCreateNestedManyWithoutDocumentsInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultCreateNestedManyWithoutDocumentsInput)
  @IsOptional()
  @Field(() => AnalysisResultCreateNestedManyWithoutDocumentsInput, {
    nullable: true,
  })
  analysisResults?: AnalysisResultCreateNestedManyWithoutDocumentsInput;
}

export { DocumentCreateInput as DocumentCreateInput };
