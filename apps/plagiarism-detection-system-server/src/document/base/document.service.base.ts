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
  Document as PrismaDocument,
  SimilarityCheck as PrismaSimilarityCheck,
  AnalysisResult as PrismaAnalysisResult,
  User as PrismaUser,
} from "@prisma/client";

export class DocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DocumentCountArgs, "select">): Promise<number> {
    return this.prisma.document.count(args);
  }

  async documents(
    args: Prisma.DocumentFindManyArgs
  ): Promise<PrismaDocument[]> {
    return this.prisma.document.findMany(args);
  }
  async document(
    args: Prisma.DocumentFindUniqueArgs
  ): Promise<PrismaDocument | null> {
    return this.prisma.document.findUnique(args);
  }
  async createDocument(
    args: Prisma.DocumentCreateArgs
  ): Promise<PrismaDocument> {
    return this.prisma.document.create(args);
  }
  async updateDocument(
    args: Prisma.DocumentUpdateArgs
  ): Promise<PrismaDocument> {
    return this.prisma.document.update(args);
  }
  async deleteDocument(
    args: Prisma.DocumentDeleteArgs
  ): Promise<PrismaDocument> {
    return this.prisma.document.delete(args);
  }

  async findSimilarityChecks(
    parentId: string,
    args: Prisma.SimilarityCheckFindManyArgs
  ): Promise<PrismaSimilarityCheck[]> {
    return this.prisma.document
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .similarityChecks(args);
  }

  async findAnalysisResults(
    parentId: string,
    args: Prisma.AnalysisResultFindManyArgs
  ): Promise<PrismaAnalysisResult[]> {
    return this.prisma.document
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .analysisResults(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.document
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
