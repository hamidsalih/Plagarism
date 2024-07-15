import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlagiarismDetectionModuleService } from "./plagiarismdetectionmodule.service";
import { AnalyzeDocumentDto } from "../plagiarismDetectionModule/AnalyzeDocumentDto";
import { AnalysisResultDto } from "../plagiarismDetectionModule/AnalysisResultDto";

@swagger.ApiTags("plagiarismDetectionModules")
@common.Controller("plagiarismDetectionModules")
export class PlagiarismDetectionModuleController {
  constructor(protected readonly service: PlagiarismDetectionModuleService) {}

  @common.Post("/analyze")
  @swagger.ApiOkResponse({
    type: AnalysisResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnalyzeDocument(
    @common.Body()
    body: AnalyzeDocumentDto
  ): Promise<AnalysisResultDto> {
        return this.service.AnalyzeDocument(body);
      }
}
