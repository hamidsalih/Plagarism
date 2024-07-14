/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Report } from "./Report";
import { ReportCountArgs } from "./ReportCountArgs";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportFindUniqueArgs } from "./ReportFindUniqueArgs";
import { DeleteReportArgs } from "./DeleteReportArgs";
import { ReportDto } from "../ReportDto";
import { ReportService } from "../report.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Report)
export class ReportResolverBase {
  constructor(
    protected readonly service: ReportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async _reportsMeta(
    @graphql.Args() args: ReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Report])
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async reports(@graphql.Args() args: ReportFindManyArgs): Promise<Report[]> {
    return this.service.reports(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Report, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "own",
  })
  async report(
    @graphql.Args() args: ReportFindUniqueArgs
  ): Promise<Report | null> {
    const result = await this.service.report(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Report)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "delete",
    possession: "any",
  })
  async deleteReport(
    @graphql.Args() args: DeleteReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ReportDto)
  async CreateReport(
    @graphql.Args()
    args: ReportDto
  ): Promise<ReportDto> {
    return this.service.CreateReport(args);
  }

  @graphql.Query(() => ReportDto)
  async GetReport(
    @graphql.Args()
    args: string
  ): Promise<ReportDto> {
    return this.service.GetReport(args);
  }
}