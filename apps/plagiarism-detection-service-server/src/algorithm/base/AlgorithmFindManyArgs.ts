/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AlgorithmWhereInput } from "./AlgorithmWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AlgorithmOrderByInput } from "./AlgorithmOrderByInput";

@ArgsType()
class AlgorithmFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AlgorithmWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AlgorithmWhereInput, { nullable: true })
  @Type(() => AlgorithmWhereInput)
  where?: AlgorithmWhereInput;

  @ApiProperty({
    required: false,
    type: [AlgorithmOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AlgorithmOrderByInput], { nullable: true })
  @Type(() => AlgorithmOrderByInput)
  orderBy?: Array<AlgorithmOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AlgorithmFindManyArgs as AlgorithmFindManyArgs };
