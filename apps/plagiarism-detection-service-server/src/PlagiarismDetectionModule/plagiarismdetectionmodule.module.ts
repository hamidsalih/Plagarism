import { Module } from "@nestjs/common";
import { PlagiarismDetectionModuleService } from "./plagiarismdetectionmodule.service";
import { PlagiarismDetectionModuleController } from "./plagiarismdetectionmodule.controller";
import { PlagiarismDetectionModuleResolver } from "./plagiarismdetectionmodule.resolver";

@Module({
  controllers: [PlagiarismDetectionModuleController],
  providers: [PlagiarismDetectionModuleService, PlagiarismDetectionModuleResolver],
  exports: [PlagiarismDetectionModuleService],
})
export class PlagiarismDetectionModuleModule {}
