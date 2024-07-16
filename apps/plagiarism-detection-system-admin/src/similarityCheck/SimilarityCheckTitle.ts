import { SimilarityCheck as TSimilarityCheck } from "../api/similarityCheck/SimilarityCheck";

export const SIMILARITYCHECK_TITLE_FIELD = "id";

export const SimilarityCheckTitle = (record: TSimilarityCheck): string => {
  return record.id?.toString() || String(record.id);
};
