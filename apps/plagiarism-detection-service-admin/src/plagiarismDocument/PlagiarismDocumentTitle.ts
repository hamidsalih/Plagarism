import { PlagiarismDocument as TPlagiarismDocument } from "../api/plagiarismDocument/PlagiarismDocument";

export const PLAGIARISMDOCUMENT_TITLE_FIELD = "id";

export const PlagiarismDocumentTitle = (
  record: TPlagiarismDocument
): string => {
  return record.id?.toString() || String(record.id);
};
