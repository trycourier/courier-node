export interface IGetTranslationOpts {
  domain: string;
  locale: string;
}

export interface IPutTranslationOpts {
  domain: string;
  locale: string;
  translation: string;
}
