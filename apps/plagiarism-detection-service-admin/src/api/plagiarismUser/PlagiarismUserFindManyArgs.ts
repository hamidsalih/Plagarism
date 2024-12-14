import { PlagiarismUserWhereInput } from "./PlagiarismUserWhereInput";
import { PlagiarismUserOrderByInput } from "./PlagiarismUserOrderByInput";

export type PlagiarismUserFindManyArgs = {
  where?: PlagiarismUserWhereInput;
  orderBy?: Array<PlagiarismUserOrderByInput>;
  skip?: number;
  take?: number;
};
