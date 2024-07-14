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
import { PlagiarismReportWhereInput } from "./PlagiarismReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlagiarismReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlagiarismReportWhereInput,
  })
  @ValidateNested()
  @Type(() => PlagiarismReportWhereInput)
  @IsOptional()
  @Field(() => PlagiarismReportWhereInput, {
    nullable: true,
  })
  every?: PlagiarismReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlagiarismReportWhereInput,
  })
  @ValidateNested()
  @Type(() => PlagiarismReportWhereInput)
  @IsOptional()
  @Field(() => PlagiarismReportWhereInput, {
    nullable: true,
  })
  some?: PlagiarismReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlagiarismReportWhereInput,
  })
  @ValidateNested()
  @Type(() => PlagiarismReportWhereInput)
  @IsOptional()
  @Field(() => PlagiarismReportWhereInput, {
    nullable: true,
  })
  none?: PlagiarismReportWhereInput;
}
export { PlagiarismReportListRelationFilter as PlagiarismReportListRelationFilter };