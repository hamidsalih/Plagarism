import * as graphql from "@nestjs/graphql";
import { UploadDocumentDto } from "../documentManagementModule/UploadDocumentDto";
import { UploadResponseDto } from "../documentManagementModule/UploadResponseDto";
import { DocumentManagementModuleService } from "./documentmanagementmodule.service";

export class DocumentManagementModuleResolver {
  constructor(protected readonly service: DocumentManagementModuleService) {}

  @graphql.Mutation(() => UploadResponseDto)
  async UploadDocument(
    @graphql.Args()
    args: UploadDocumentDto
  ): Promise<UploadResponseDto> {
    return this.service.UploadDocument(args);
  }
}
