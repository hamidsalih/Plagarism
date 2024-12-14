import { PlagiarismUser as TPlagiarismUser } from "../api/plagiarismUser/PlagiarismUser";

export const PLAGIARISMUSER_TITLE_FIELD = "id";

export const PlagiarismUserTitle = (record: TPlagiarismUser): string => {
  return record.id?.toString() || String(record.id);
};
