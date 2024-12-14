import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlagiarismDocumentResolverBase } from "./base/plagiarismDocument.resolver.base";
import { PlagiarismDocument } from "./base/PlagiarismDocument";
import { PlagiarismDocumentService } from "./plagiarismDocument.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlagiarismDocument)
export class PlagiarismDocumentResolver extends PlagiarismDocumentResolverBase {
  constructor(
    protected readonly service: PlagiarismDocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
