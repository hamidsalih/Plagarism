import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlagiarismDocumentServiceBase } from "./base/plagiarismDocument.service.base";

@Injectable()
export class PlagiarismDocumentService extends PlagiarismDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
