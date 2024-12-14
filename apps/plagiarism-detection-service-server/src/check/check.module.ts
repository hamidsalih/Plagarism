import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CheckModuleBase } from "./base/check.module.base";
import { CheckService } from "./check.service";
import { CheckController } from "./check.controller";
import { CheckResolver } from "./check.resolver";

@Module({
  imports: [CheckModuleBase, forwardRef(() => AuthModule)],
  controllers: [CheckController],
  providers: [CheckService, CheckResolver],
  exports: [CheckService],
})
export class CheckModule {}
