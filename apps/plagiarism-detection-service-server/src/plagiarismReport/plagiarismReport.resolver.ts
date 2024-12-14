import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlagiarismReportResolverBase } from "./base/plagiarismReport.resolver.base";
import { PlagiarismReport } from "./base/PlagiarismReport";
import { PlagiarismReportService } from "./plagiarismReport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlagiarismReport)
export class PlagiarismReportResolver extends PlagiarismReportResolverBase {
  constructor(
    protected readonly service: PlagiarismReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
