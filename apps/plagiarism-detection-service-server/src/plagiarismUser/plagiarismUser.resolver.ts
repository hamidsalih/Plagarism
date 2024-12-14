import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlagiarismUserResolverBase } from "./base/plagiarismUser.resolver.base";
import { PlagiarismUser } from "./base/PlagiarismUser";
import { PlagiarismUserService } from "./plagiarismUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlagiarismUser)
export class PlagiarismUserResolver extends PlagiarismUserResolverBase {
  constructor(
    protected readonly service: PlagiarismUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
