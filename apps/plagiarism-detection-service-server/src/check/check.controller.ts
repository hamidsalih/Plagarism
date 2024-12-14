import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CheckService } from "./check.service";
import { CheckControllerBase } from "./base/check.controller.base";

@swagger.ApiTags("checks")
@common.Controller("checks")
export class CheckController extends CheckControllerBase {
  constructor(
    protected readonly service: CheckService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
