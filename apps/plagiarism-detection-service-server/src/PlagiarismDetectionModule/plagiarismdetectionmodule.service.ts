import { Injectable } from "@nestjs/common";
import { AnalyzeDocumentDto } from "../plagiarismDetectionModule/AnalyzeDocumentDto";
import { AnalysisResultDto } from "../plagiarismDetectionModule/AnalysisResultDto";

@Injectable()
export class PlagiarismDetectionModuleService {
  constructor() {}
  async AnalyzeDocument(args: AnalyzeDocumentDto): Promise<AnalysisResultDto> {
    throw new Error("Not implemented");
  }
}
