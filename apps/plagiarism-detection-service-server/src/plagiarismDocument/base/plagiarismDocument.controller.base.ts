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
import { PlagiarismDocumentService } from "../plagiarismDocument.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlagiarismDocumentCreateInput } from "./PlagiarismDocumentCreateInput";
import { PlagiarismDocument } from "./PlagiarismDocument";
import { PlagiarismDocumentFindManyArgs } from "./PlagiarismDocumentFindManyArgs";
import { PlagiarismDocumentWhereUniqueInput } from "./PlagiarismDocumentWhereUniqueInput";
import { PlagiarismDocumentUpdateInput } from "./PlagiarismDocumentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlagiarismDocumentControllerBase {
  constructor(
    protected readonly service: PlagiarismDocumentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlagiarismDocument })
  @nestAccessControl.UseRoles({
    resource: "PlagiarismDocument",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPlagiarismDocument(
    @common.Body() data: PlagiarismDocumentCreateInput
  ): Promise<PlagiarismDocument> {
    return await this.service.createPlagiarismDocument({
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
  @swagger.ApiOkResponse({ type: [PlagiarismDocument] })
  @ApiNestedQuery(PlagiarismDocumentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PlagiarismDocument",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async plagiarismDocuments(
    @common.Req() request: Request
  ): Promise<PlagiarismDocument[]> {
    const args = plainToClass(PlagiarismDocumentFindManyArgs, request.query);
    return this.service.plagiarismDocuments({
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
  @swagger.ApiOkResponse({ type: PlagiarismDocument })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlagiarismDocument",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async plagiarismDocument(
    @common.Param() params: PlagiarismDocumentWhereUniqueInput
  ): Promise<PlagiarismDocument | null> {
    const result = await this.service.plagiarismDocument({
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
  @swagger.ApiOkResponse({ type: PlagiarismDocument })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlagiarismDocument",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePlagiarismDocument(
    @common.Param() params: PlagiarismDocumentWhereUniqueInput,
    @common.Body() data: PlagiarismDocumentUpdateInput
  ): Promise<PlagiarismDocument | null> {
    try {
      return await this.service.updatePlagiarismDocument({
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
  @swagger.ApiOkResponse({ type: PlagiarismDocument })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlagiarismDocument",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePlagiarismDocument(
    @common.Param() params: PlagiarismDocumentWhereUniqueInput
  ): Promise<PlagiarismDocument | null> {
    try {
      return await this.service.deletePlagiarismDocument({
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
