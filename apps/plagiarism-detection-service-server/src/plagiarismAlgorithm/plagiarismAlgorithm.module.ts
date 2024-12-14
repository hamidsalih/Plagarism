import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlagiarismAlgorithmModuleBase } from "./base/plagiarismAlgorithm.module.base";
import { PlagiarismAlgorithmService } from "./plagiarismAlgorithm.service";
import { PlagiarismAlgorithmController } from "./plagiarismAlgorithm.controller";
import { PlagiarismAlgorithmResolver } from "./plagiarismAlgorithm.resolver";

@Module({
  imports: [PlagiarismAlgorithmModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlagiarismAlgorithmController],
  providers: [PlagiarismAlgorithmService, PlagiarismAlgorithmResolver],
  exports: [PlagiarismAlgorithmService],
})
export class PlagiarismAlgorithmModule {}
