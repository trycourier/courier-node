import { ICourierPaging } from "../types";

interface ICourierBrandSettings {
  colors?: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  email?: {
    footer: object;
    header: object;
  };
}

interface ICourierBrandSnippets {
  items: Array<{
    format: string;
    name: string;
    value: string;
  }>;
}

export interface ICourierBrand {
  created: number;
  id?: string;
  name: string;
  published: number;
  settings: ICourierBrandSettings;
  updated: number;
  snippets?: ICourierBrandSnippets;
  version: string;
}

export interface ICourierBrandParameters {
  id?: string;
  name: string;
  settings: ICourierBrandSettings;
  snippets?: ICourierBrandSnippets;
}

export interface ICourierBrandPostConfig {
  idempotencyKey?: string;
}

export interface ICourierBrandPutParameters extends ICourierBrandParameters {
  id: string;
}

export interface ICourierBrandGetAllResponse {
  paging: ICourierPaging;
  results: ICourierBrand[];
}

export interface ICourierClientBrands {
  createBrand: (
    params: ICourierBrandParameters,
    config?: ICourierBrandPostConfig
  ) => Promise<ICourierBrand>;
  deleteBrand: (brandId: string) => Promise<void>;
  getBrand: (brandId: string) => Promise<ICourierBrand>;
  getBrands: (params?: {
    cursor: string;
  }) => Promise<ICourierBrandGetAllResponse>;
  replaceBrand: (params: ICourierBrandPutParameters) => Promise<ICourierBrand>;
}
