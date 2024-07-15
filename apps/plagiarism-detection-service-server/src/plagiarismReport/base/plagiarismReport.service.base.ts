/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PlagiarismReport as PrismaPlagiarismReport,
} from "@prisma/client";

export class PlagiarismReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PlagiarismReportCountArgs, "select">
  ): Promise<number> {
    return this.prisma.plagiarismReport.count(args);
  }

  async plagiarismReports(
    args: Prisma.PlagiarismReportFindManyArgs
  ): Promise<PrismaPlagiarismReport[]> {
    return this.prisma.plagiarismReport.findMany(args);
  }
  async plagiarismReport(
    args: Prisma.PlagiarismReportFindUniqueArgs
  ): Promise<PrismaPlagiarismReport | null> {
    return this.prisma.plagiarismReport.findUnique(args);
  }
  async createPlagiarismReport(
    args: Prisma.PlagiarismReportCreateArgs
  ): Promise<PrismaPlagiarismReport> {
    return this.prisma.plagiarismReport.create(args);
  }
  async updatePlagiarismReport(
    args: Prisma.PlagiarismReportUpdateArgs
  ): Promise<PrismaPlagiarismReport> {
    return this.prisma.plagiarismReport.update(args);
  }
  async deletePlagiarismReport(
    args: Prisma.PlagiarismReportDeleteArgs
  ): Promise<PrismaPlagiarismReport> {
    return this.prisma.plagiarismReport.delete(args);
  }
}
