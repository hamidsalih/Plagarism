import { SimilarityCheckWhereInput } from "./SimilarityCheckWhereInput";
import { SimilarityCheckOrderByInput } from "./SimilarityCheckOrderByInput";

export type SimilarityCheckFindManyArgs = {
  where?: SimilarityCheckWhereInput;
  orderBy?: Array<SimilarityCheckOrderByInput>;
  skip?: number;
  take?: number;
};
