import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DocumentManagementModuleService } from "./documentmanagementmodule.service";
import { UploadDocumentDto } from "../documentManagementModule/UploadDocumentDto";
import { UploadResponseDto } from "../documentManagementModule/UploadResponseDto";

@swagger.ApiTags("documentManagementModules")
@common.Controller("documentManagementModules")
export class DocumentManagementModuleController {
  constructor(protected readonly service: DocumentManagementModuleService) {}

  @common.Post("/upload")
  @swagger.ApiOkResponse({
    type: UploadResponseDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadDocument(
    @common.Body()
    body: UploadDocumentDto
  ): Promise<UploadResponseDto> {
        return this.service.UploadDocument(body);
      }
}
