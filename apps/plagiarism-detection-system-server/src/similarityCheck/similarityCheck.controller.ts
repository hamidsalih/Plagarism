import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SimilarityCheckService } from "./similarityCheck.service";
import { SimilarityCheckControllerBase } from "./base/similarityCheck.controller.base";

@swagger.ApiTags("similarityChecks")
@common.Controller("similarityChecks")
export class SimilarityCheckController extends SimilarityCheckControllerBase {
  constructor(
    protected readonly service: SimilarityCheckService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
