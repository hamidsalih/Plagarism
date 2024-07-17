import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SimilarityCheckResolverBase } from "./base/similarityCheck.resolver.base";
import { SimilarityCheck } from "./base/SimilarityCheck";
import { SimilarityCheckService } from "./similarityCheck.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SimilarityCheck)
export class SimilarityCheckResolver extends SimilarityCheckResolverBase {
  constructor(
    protected readonly service: SimilarityCheckService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
