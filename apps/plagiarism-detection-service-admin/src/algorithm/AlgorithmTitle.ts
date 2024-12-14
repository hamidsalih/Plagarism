import { Algorithm as TAlgorithm } from "../api/algorithm/Algorithm";

export const ALGORITHM_TITLE_FIELD = "name";

export const AlgorithmTitle = (record: TAlgorithm): string => {
  return record.name?.toString() || String(record.id);
};
