import { PlagiarismDocumentWhereInput } from "./PlagiarismDocumentWhereInput";
import { PlagiarismDocumentOrderByInput } from "./PlagiarismDocumentOrderByInput";

export type PlagiarismDocumentFindManyArgs = {
  where?: PlagiarismDocumentWhereInput;
  orderBy?: Array<PlagiarismDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
