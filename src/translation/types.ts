export interface IGetTranslationOpts {
  app: string;
  locale: string;
}

export type TranslationStatus = "DRAFT" | "TRANSLATING" | "PUBLISHED";

export interface ITranslation {
  app: string; // "default" initially
  createdAt: string;
  locale: string;
  json: Object;
  po: string;
  status: TranslationStatus;
  version: string;
  workspaceId: string;
  updatedAt: string;
}

export interface IPutTranslationOpts {
  app: string;
  locale: string;
  translation: string;
}
