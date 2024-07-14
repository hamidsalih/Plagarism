import { Injectable } from "@nestjs/common";
import { UploadDocumentDto } from "../documentManagementModule/UploadDocumentDto";
import { UploadResponseDto } from "../documentManagementModule/UploadResponseDto";

@Injectable()
export class DocumentManagementModuleService {
  constructor() {}
  async UploadDocument(args: UploadDocumentDto): Promise<UploadResponseDto> {
    throw new Error("Not implemented");
  }
}
