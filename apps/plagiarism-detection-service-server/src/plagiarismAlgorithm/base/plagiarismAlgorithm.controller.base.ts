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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PlagiarismAlgorithmService } from "../plagiarismAlgorithm.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlagiarismAlgorithmCreateInput } from "./PlagiarismAlgorithmCreateInput";
import { PlagiarismAlgorithm } from "./PlagiarismAlgorithm";
import { PlagiarismAlgorithmFindManyArgs } from "./PlagiarismAlgorithmFindManyArgs";
import { PlagiarismAlgorithmWhereUniqueInput } from "./PlagiarismAlgorithmWhereUniqueInput";
import { PlagiarismAlgorithmUpdateInput } from "./PlagiarismAlgorithmUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlagiarismAlgorithmControllerBase {
  constructor(
    protected readonly service: PlagiarismAlgorithmService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlagiarismAlgorithm })
  @nestAccessControl.UseRoles({
    resource: "PlagiarismAlgorithm",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPlagiarismAlgorithm(
    @common.Body() data: PlagiarismAlgorithmCreateInput
  ): Promise<PlagiarismAlgorithm> {
    return await this.service.createPlagiarismAlgorithm({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PlagiarismAlgorithm] })
  @ApiNestedQuery(PlagiarismAlgorithmFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PlagiarismAlgorithm",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async plagiarismAlgorithms(
    @common.Req() request: Request
  ): Promise<PlagiarismAlgorithm[]> {
    const args = plainToClass(PlagiarismAlgorithmFindManyArgs, request.query);
    return this.service.plagiarismAlgorithms({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlagiarismAlgorithm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlagiarismAlgorithm",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async plagiarismAlgorithm(
    @common.Param() params: PlagiarismAlgorithmWhereUniqueInput
  ): Promise<PlagiarismAlgorithm | null> {
    const result = await this.service.plagiarismAlgorithm({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PlagiarismAlgorithm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlagiarismAlgorithm",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePlagiarismAlgorithm(
    @common.Param() params: PlagiarismAlgorithmWhereUniqueInput,
    @common.Body() data: PlagiarismAlgorithmUpdateInput
  ): Promise<PlagiarismAlgorithm | null> {
    try {
      return await this.service.updatePlagiarismAlgorithm({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: PlagiarismAlgorithm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlagiarismAlgorithm",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePlagiarismAlgorithm(
    @common.Param() params: PlagiarismAlgorithmWhereUniqueInput
  ): Promise<PlagiarismAlgorithm | null> {
    try {
      return await this.service.deletePlagiarismAlgorithm({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
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
