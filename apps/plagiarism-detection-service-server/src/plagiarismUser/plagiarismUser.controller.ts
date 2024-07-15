import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlagiarismUserService } from "./plagiarismUser.service";
import { PlagiarismUserControllerBase } from "./base/plagiarismUser.controller.base";

@swagger.ApiTags("plagiarismUsers")
@common.Controller("plagiarismUsers")
export class PlagiarismUserController extends PlagiarismUserControllerBase {
  constructor(
    protected readonly service: PlagiarismUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
