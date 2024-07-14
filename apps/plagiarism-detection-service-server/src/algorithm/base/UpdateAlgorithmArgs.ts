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
import { AlgorithmWhereUniqueInput } from "./AlgorithmWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AlgorithmUpdateInput } from "./AlgorithmUpdateInput";

@ArgsType()
class UpdateAlgorithmArgs {
  @ApiProperty({
    required: true,
    type: () => AlgorithmWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AlgorithmWhereUniqueInput)
  @Field(() => AlgorithmWhereUniqueInput, { nullable: false })
  where!: AlgorithmWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AlgorithmUpdateInput,
  })
  @ValidateNested()
  @Type(() => AlgorithmUpdateInput)
  @Field(() => AlgorithmUpdateInput, { nullable: false })
  data!: AlgorithmUpdateInput;
}

export { UpdateAlgorithmArgs as UpdateAlgorithmArgs };