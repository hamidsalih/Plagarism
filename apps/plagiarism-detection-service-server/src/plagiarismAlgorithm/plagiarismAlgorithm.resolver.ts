import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlagiarismAlgorithmResolverBase } from "./base/plagiarismAlgorithm.resolver.base";
import { PlagiarismAlgorithm } from "./base/PlagiarismAlgorithm";
import { PlagiarismAlgorithmService } from "./plagiarismAlgorithm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlagiarismAlgorithm)
export class PlagiarismAlgorithmResolver extends PlagiarismAlgorithmResolverBase {
  constructor(
    protected readonly service: PlagiarismAlgorithmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
