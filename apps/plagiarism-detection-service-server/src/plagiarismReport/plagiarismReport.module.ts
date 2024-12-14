import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlagiarismReportModuleBase } from "./base/plagiarismReport.module.base";
import { PlagiarismReportService } from "./plagiarismReport.service";
import { PlagiarismReportController } from "./plagiarismReport.controller";
import { PlagiarismReportResolver } from "./plagiarismReport.resolver";

@Module({
  imports: [PlagiarismReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlagiarismReportController],
  providers: [PlagiarismReportService, PlagiarismReportResolver],
  exports: [PlagiarismReportService],
})
export class PlagiarismReportModule {}
