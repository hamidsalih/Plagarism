/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AlgorithmService } from "../algorithm.service";
import { AlgorithmCreateInput } from "./AlgorithmCreateInput";
import { Algorithm } from "./Algorithm";
import { AlgorithmFindManyArgs } from "./AlgorithmFindManyArgs";
import { AlgorithmWhereUniqueInput } from "./AlgorithmWhereUniqueInput";
import { AlgorithmUpdateInput } from "./AlgorithmUpdateInput";

export class AlgorithmControllerBase {
  constructor(protected readonly service: AlgorithmService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Algorithm })
  async createAlgorithm(
    @common.Body() data: AlgorithmCreateInput
  ): Promise<Algorithm> {
    return await this.service.createAlgorithm({
      data: data,
      select: {
        id: true,
        description: true,
        createdAt: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Algorithm] })
  @ApiNestedQuery(AlgorithmFindManyArgs)
  async algorithms(@common.Req() request: Request): Promise<Algorithm[]> {
    const args = plainToClass(AlgorithmFindManyArgs, request.query);
    return this.service.algorithms({
      ...args,
      select: {
        id: true,
        description: true,
        createdAt: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Algorithm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async algorithm(
    @common.Param() params: AlgorithmWhereUniqueInput
  ): Promise<Algorithm | null> {
    const result = await this.service.algorithm({
      where: params,
      select: {
        id: true,
        description: true,
        createdAt: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Algorithm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAlgorithm(
    @common.Param() params: AlgorithmWhereUniqueInput,
    @common.Body() data: AlgorithmUpdateInput
  ): Promise<Algorithm | null> {
    try {
      return await this.service.updateAlgorithm({
        where: params,
        data: data,
        select: {
          id: true,
          description: true,
          createdAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Algorithm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAlgorithm(
    @common.Param() params: AlgorithmWhereUniqueInput
  ): Promise<Algorithm | null> {
    try {
      return await this.service.deleteAlgorithm({
        where: params,
        select: {
          id: true,
          description: true,
          createdAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
