import { AlgorithmWhereInput } from "./AlgorithmWhereInput";
import { AlgorithmOrderByInput } from "./AlgorithmOrderByInput";

export type AlgorithmFindManyArgs = {
  where?: AlgorithmWhereInput;
  orderBy?: Array<AlgorithmOrderByInput>;
  skip?: number;
  take?: number;
};
