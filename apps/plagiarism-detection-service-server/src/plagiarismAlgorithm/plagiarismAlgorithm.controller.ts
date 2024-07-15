import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlagiarismAlgorithmService } from "./plagiarismAlgorithm.service";
import { PlagiarismAlgorithmControllerBase } from "./base/plagiarismAlgorithm.controller.base";

@swagger.ApiTags("plagiarismAlgorithms")
@common.Controller("plagiarismAlgorithms")
export class PlagiarismAlgorithmController extends PlagiarismAlgorithmControllerBase {
  constructor(
    protected readonly service: PlagiarismAlgorithmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
