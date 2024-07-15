import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlagiarismUserServiceBase } from "./base/plagiarismUser.service.base";

@Injectable()
export class PlagiarismUserService extends PlagiarismUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
