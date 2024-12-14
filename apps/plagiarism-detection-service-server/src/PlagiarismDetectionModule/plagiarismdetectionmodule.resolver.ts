import * as graphql from "@nestjs/graphql";
import { AnalyzeDocumentDto } from "../plagiarismDetectionModule/AnalyzeDocumentDto";
import { AnalysisResultDto } from "../plagiarismDetectionModule/AnalysisResultDto";
import { PlagiarismDetectionModuleService } from "./plagiarismdetectionmodule.service";

export class PlagiarismDetectionModuleResolver {
  constructor(protected readonly service: PlagiarismDetectionModuleService) {}

  @graphql.Mutation(() => AnalysisResultDto)
  async AnalyzeDocument(
    @graphql.Args()
    args: AnalyzeDocumentDto
  ): Promise<AnalysisResultDto> {
    return this.service.AnalyzeDocument(args);
  }
}
