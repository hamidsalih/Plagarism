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
import { SimilarityCheckService } from "../similarityCheck.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SimilarityCheckCreateInput } from "./SimilarityCheckCreateInput";
import { SimilarityCheck } from "./SimilarityCheck";
import { SimilarityCheckFindManyArgs } from "./SimilarityCheckFindManyArgs";
import { SimilarityCheckWhereUniqueInput } from "./SimilarityCheckWhereUniqueInput";
import { SimilarityCheckUpdateInput } from "./SimilarityCheckUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SimilarityCheckControllerBase {
  constructor(
    protected readonly service: SimilarityCheckService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SimilarityCheck })
  @nestAccessControl.UseRoles({
    resource: "SimilarityCheck",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SimilarityCheckCreateInput,
  })
  async createSimilarityCheck(
    @common.Body() data: SimilarityCheckCreateInput
  ): Promise<SimilarityCheck> {
    return await this.service.createSimilarityCheck({
      data: {
        ...data,

        document: data.document
          ? {
              connect: data.document,
            }
          : undefined,

        analysisResult: data.analysisResult
          ? {
              connect: data.analysisResult,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        similarityScore: true,
        checkDate: true,

        document: {
          select: {
            id: true,
          },
        },

        analysisResult: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SimilarityCheck] })
  @ApiNestedQuery(SimilarityCheckFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SimilarityCheck",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async similarityChecks(
    @common.Req() request: Request
  ): Promise<SimilarityCheck[]> {
    const args = plainToClass(SimilarityCheckFindManyArgs, request.query);
    return this.service.similarityChecks({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        similarityScore: true,
        checkDate: true,

        document: {
          select: {
            id: true,
          },
        },

        analysisResult: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SimilarityCheck })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SimilarityCheck",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async similarityCheck(
    @common.Param() params: SimilarityCheckWhereUniqueInput
  ): Promise<SimilarityCheck | null> {
    const result = await this.service.similarityCheck({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        similarityScore: true,
        checkDate: true,

        document: {
          select: {
            id: true,
          },
        },

        analysisResult: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: SimilarityCheck })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SimilarityCheck",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SimilarityCheckUpdateInput,
  })
  async updateSimilarityCheck(
    @common.Param() params: SimilarityCheckWhereUniqueInput,
    @common.Body() data: SimilarityCheckUpdateInput
  ): Promise<SimilarityCheck | null> {
    try {
      return await this.service.updateSimilarityCheck({
        where: params,
        data: {
          ...data,

          document: data.document
            ? {
                connect: data.document,
              }
            : undefined,

          analysisResult: data.analysisResult
            ? {
                connect: data.analysisResult,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          similarityScore: true,
          checkDate: true,

          document: {
            select: {
              id: true,
            },
          },

          analysisResult: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: SimilarityCheck })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SimilarityCheck",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSimilarityCheck(
    @common.Param() params: SimilarityCheckWhereUniqueInput
  ): Promise<SimilarityCheck | null> {
    try {
      return await this.service.deleteSimilarityCheck({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          similarityScore: true,
          checkDate: true,

          document: {
            select: {
              id: true,
            },
          },

          analysisResult: {
            select: {
              id: true,
            },
          },
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
