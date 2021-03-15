import { AxiosRequestConfig } from "axios";

import { ICourierClientLists } from "./lists/types";
import {
  ICourierClientPreferences,
  IRecipientPreferences
} from "./preferences/types";

export type HttpMethodClient = <T>(
  url: string,
  body?: object,
  config?: AxiosRequestConfig
) => Promise<{ data: T, status: number, statusText: string }>;

export interface IHttpClient {
  post: HttpMethodClient;
  patch: HttpMethodClient;
  put: HttpMethodClient;
  get: HttpMethodClient;
  delete: HttpMethodClient;
}

export interface ICourierClientOptions {
  baseUrl?: string;
  authorizationToken?: string;
}

export interface ICourierClientConfiguration {
  httpClient: IHttpClient;
}

// POST /send

export interface ICourierSendParameters {
  eventId: string;
  recipientId: string;
  data?: object;
  brand?: string;
  preferences?: IRecipientPreferences;
  profile?: object;
  override?: object;
}

export interface ICourierSendConfig {
  idempotencyKey?: string;
}

export interface ICourierSendResponse {
  messageId: string;
}

export interface ICourierSendParams {
  event: string;
  data?: object;
  brand?: string;
  override?: object;
}
export interface ICourierSendListParams extends ICourierSendParams {
  list: string;
}
export interface ICourierSendPatternParams extends ICourierSendParams {
  pattern: string;
}

export type ICourierSendListOrPatternParams =
  | ICourierSendListParams
  | ICourierSendPatternParams;
// PUT /profiles/{id}

export interface ICourierProfilePutParameters {
  recipientId: string;
  profile: object;
}

export interface ICourierProfilePutResponse {
  status: "SUCCESS";
}

// POST /profiles/{id}

export interface ICourierProfilePostParameters {
  recipientId: string;
  profile: object;
}

export interface ICourierProfilePostConfig {
  idempotencyKey?: string;
}

export interface ICourierProfilePostResponse {
  status: "SUCCESS";
}

// GET /profiles/{id}

export interface ICourierProfileGetParameters {
  recipientId: string;
}

export interface ICourierProfileGetResponse {
  profile: object;
}

export interface ICourierMessageGetResponse {
  enqueued?: number;
  event?: string;
  id: string;
  notification?: string;
  providers?: Array<{
    channel: {
      name: string;
      template: string;
    };
    provider: string;
    reference: {
      "x-message-id": string;
    };
    sent: number;
    status: string;
  }>;
  recipient: string;
  sent?: number;
  status: string;
}

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

export interface ICourierPaging {
  cursor?: string;
  more: boolean;
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

export interface ICourierClient {
  send: (
    params: ICourierSendParameters,
    config?: ICourierSendConfig
  ) => Promise<ICourierSendResponse>;
  getMessage: (messageId: string) => Promise<ICourierMessageGetResponse>;
  replaceProfile: (
    params: ICourierProfilePutParameters
  ) => Promise<ICourierProfilePutResponse>;
  mergeProfile: (
    params: ICourierProfilePostParameters,
    config?: ICourierProfilePostConfig
  ) => Promise<ICourierProfilePostResponse>;
  getProfile: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierProfileGetResponse>;
  getBrands: (params?: {
    cursor: string;
  }) => Promise<ICourierBrandGetAllResponse>;
  getBrand: (brandId: string) => Promise<ICourierBrand>;
  createBrand: (
    params: ICourierBrandParameters,
    config?: ICourierBrandPostConfig
  ) => Promise<ICourierBrand>;
  replaceBrand: (params: ICourierBrandPutParameters) => Promise<ICourierBrand>;
  deleteBrand: (brandId: string) => Promise<void>;
  lists: ICourierClientLists;
  preferences: ICourierClientPreferences;
}
