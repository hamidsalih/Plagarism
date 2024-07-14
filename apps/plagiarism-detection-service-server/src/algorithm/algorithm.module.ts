import { Module } from "@nestjs/common";
import { AlgorithmModuleBase } from "./base/algorithm.module.base";
import { AlgorithmService } from "./algorithm.service";
import { AlgorithmController } from "./algorithm.controller";
import { AlgorithmResolver } from "./algorithm.resolver";

@Module({
  imports: [AlgorithmModuleBase],
  controllers: [AlgorithmController],
  providers: [AlgorithmService, AlgorithmResolver],
  exports: [AlgorithmService],
})
export class AlgorithmModule {}
