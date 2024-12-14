import { PlagiarismAlgorithm as TPlagiarismAlgorithm } from "../api/plagiarismAlgorithm/PlagiarismAlgorithm";

export const PLAGIARISMALGORITHM_TITLE_FIELD = "id";

export const PlagiarismAlgorithmTitle = (
  record: TPlagiarismAlgorithm
): string => {
  return record.id?.toString() || String(record.id);
};
