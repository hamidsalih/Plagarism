import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlagiarismAlgorithmServiceBase } from "./base/plagiarismAlgorithm.service.base";

@Injectable()
export class PlagiarismAlgorithmService extends PlagiarismAlgorithmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
