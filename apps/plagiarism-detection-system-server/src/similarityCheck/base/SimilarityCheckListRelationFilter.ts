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
import { SimilarityCheckWhereInput } from "./SimilarityCheckWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SimilarityCheckListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SimilarityCheckWhereInput,
  })
  @ValidateNested()
  @Type(() => SimilarityCheckWhereInput)
  @IsOptional()
  @Field(() => SimilarityCheckWhereInput, {
    nullable: true,
  })
  every?: SimilarityCheckWhereInput;

  @ApiProperty({
    required: false,
    type: () => SimilarityCheckWhereInput,
  })
  @ValidateNested()
  @Type(() => SimilarityCheckWhereInput)
  @IsOptional()
  @Field(() => SimilarityCheckWhereInput, {
    nullable: true,
  })
  some?: SimilarityCheckWhereInput;

  @ApiProperty({
    required: false,
    type: () => SimilarityCheckWhereInput,
  })
  @ValidateNested()
  @Type(() => SimilarityCheckWhereInput)
  @IsOptional()
  @Field(() => SimilarityCheckWhereInput, {
    nullable: true,
  })
  none?: SimilarityCheckWhereInput;
}
export { SimilarityCheckListRelationFilter as SimilarityCheckListRelationFilter };
