import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AlgorithmService } from "./algorithm.service";
import { AlgorithmControllerBase } from "./base/algorithm.controller.base";

@swagger.ApiTags("algorithms")
@common.Controller("algorithms")
export class AlgorithmController extends AlgorithmControllerBase {
  constructor(protected readonly service: AlgorithmService) {
    super(service);
  }
}
