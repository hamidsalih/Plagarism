import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SimilarityCheckServiceBase } from "./base/similarityCheck.service.base";

@Injectable()
export class SimilarityCheckService extends SimilarityCheckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
