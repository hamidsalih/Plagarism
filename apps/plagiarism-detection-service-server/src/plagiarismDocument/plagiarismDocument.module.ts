import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlagiarismDocumentModuleBase } from "./base/plagiarismDocument.module.base";
import { PlagiarismDocumentService } from "./plagiarismDocument.service";
import { PlagiarismDocumentController } from "./plagiarismDocument.controller";
import { PlagiarismDocumentResolver } from "./plagiarismDocument.resolver";

@Module({
  imports: [PlagiarismDocumentModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlagiarismDocumentController],
  providers: [PlagiarismDocumentService, PlagiarismDocumentResolver],
  exports: [PlagiarismDocumentService],
})
export class PlagiarismDocumentModule {}
