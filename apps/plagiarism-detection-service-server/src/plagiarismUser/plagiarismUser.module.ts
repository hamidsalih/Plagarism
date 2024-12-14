import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlagiarismUserModuleBase } from "./base/plagiarismUser.module.base";
import { PlagiarismUserService } from "./plagiarismUser.service";
import { PlagiarismUserController } from "./plagiarismUser.controller";
import { PlagiarismUserResolver } from "./plagiarismUser.resolver";

@Module({
  imports: [PlagiarismUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlagiarismUserController],
  providers: [PlagiarismUserService, PlagiarismUserResolver],
  exports: [PlagiarismUserService],
})
export class PlagiarismUserModule {}
