import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AlgorithmServiceBase } from "./base/algorithm.service.base";

@Injectable()
export class AlgorithmService extends AlgorithmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
