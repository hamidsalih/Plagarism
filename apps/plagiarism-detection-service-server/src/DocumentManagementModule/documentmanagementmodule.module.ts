import { Module } from "@nestjs/common";
import { DocumentManagementModuleService } from "./documentmanagementmodule.service";
import { DocumentManagementModuleController } from "./documentmanagementmodule.controller";
import { DocumentManagementModuleResolver } from "./documentmanagementmodule.resolver";

@Module({
  controllers: [DocumentManagementModuleController],
  providers: [DocumentManagementModuleService, DocumentManagementModuleResolver],
  exports: [DocumentManagementModuleService],
})
export class DocumentManagementModuleModule {}
