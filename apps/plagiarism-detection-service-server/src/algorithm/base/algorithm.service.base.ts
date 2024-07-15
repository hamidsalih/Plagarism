/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Algorithm as PrismaAlgorithm } from "@prisma/client";

export class AlgorithmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AlgorithmCountArgs, "select">
  ): Promise<number> {
    return this.prisma.algorithm.count(args);
  }

  async algorithms(
    args: Prisma.AlgorithmFindManyArgs
  ): Promise<PrismaAlgorithm[]> {
    return this.prisma.algorithm.findMany(args);
  }
  async algorithm(
    args: Prisma.AlgorithmFindUniqueArgs
  ): Promise<PrismaAlgorithm | null> {
    return this.prisma.algorithm.findUnique(args);
  }
  async createAlgorithm(
    args: Prisma.AlgorithmCreateArgs
  ): Promise<PrismaAlgorithm> {
    return this.prisma.algorithm.create(args);
  }
  async updateAlgorithm(
    args: Prisma.AlgorithmUpdateArgs
  ): Promise<PrismaAlgorithm> {
    return this.prisma.algorithm.update(args);
  }
  async deleteAlgorithm(
    args: Prisma.AlgorithmDeleteArgs
  ): Promise<PrismaAlgorithm> {
    return this.prisma.algorithm.delete(args);
  }
}
