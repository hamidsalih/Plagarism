import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlagiarismDocumentService } from "./plagiarismDocument.service";
import { PlagiarismDocumentControllerBase } from "./base/plagiarismDocument.controller.base";

@swagger.ApiTags("plagiarismDocuments")
@common.Controller("plagiarismDocuments")
export class PlagiarismDocumentController extends PlagiarismDocumentControllerBase {
  constructor(
    protected readonly service: PlagiarismDocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
