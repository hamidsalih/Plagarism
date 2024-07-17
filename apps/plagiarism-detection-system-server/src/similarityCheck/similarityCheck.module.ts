import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SimilarityCheckModuleBase } from "./base/similarityCheck.module.base";
import { SimilarityCheckService } from "./similarityCheck.service";
import { SimilarityCheckController } from "./similarityCheck.controller";
import { SimilarityCheckResolver } from "./similarityCheck.resolver";

@Module({
  imports: [SimilarityCheckModuleBase, forwardRef(() => AuthModule)],
  controllers: [SimilarityCheckController],
  providers: [SimilarityCheckService, SimilarityCheckResolver],
  exports: [SimilarityCheckService],
})
export class SimilarityCheckModule {}
