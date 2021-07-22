import { AxiosRequestConfig } from "axios";

import { ICourierClientAutomations } from "./automations/types";
import { ICourierClientLists, ICourierList } from "./lists/types";
import {
  ICourierClientPreferences,
  IRecipientPreferences
} from "./preferences/types";

export type HttpMethodClient = <T>(
  url: string,
  body?: object,
  config?: AxiosRequestConfig
) => Promise<{ data: T }>;

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
  brand?: string;
  data?: object;
  eventId: string;
  locale?: string;
  override?: object;
  preferences?: IRecipientPreferences;
  profile?: object;
  recipientId: string;
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
// POST /profiles/{id}/lists
export type List = Omit<ICourierList, "id"> & {
  listId: string;
  preferences?: IRecipientPreferences;
};

export interface ICourierProfileListsPostParameters {
  recipientId: string;
  lists: List[];
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
  addRecipientToLists: (
    params: ICourierProfileListsPostParameters
  ) => Promise<ICourierProfilePostResponse>;
  automations: ICourierClientAutomations;
  createBrand: (
    params: ICourierBrandParameters,
    config?: ICourierBrandPostConfig
  ) => Promise<ICourierBrand>;
  deleteBrand: (brandId: string) => Promise<void>;
  getBrand: (brandId: string) => Promise<ICourierBrand>;
  getBrands: (params?: {
    cursor: string;
  }) => Promise<ICourierBrandGetAllResponse>;
  getMessage: (messageId: string) => Promise<ICourierMessageGetResponse>;
  getProfile: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierProfileGetResponse>;
  getRecipientSubscriptions: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierList[]>;
  lists: ICourierClientLists;
  mergeProfile: (
    params: ICourierProfilePostParameters,
    config?: ICourierProfilePostConfig
  ) => Promise<ICourierProfilePostResponse>;
  preferences: ICourierClientPreferences;
  removeRecipientFromAllLists: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierProfilePostResponse>;
  replaceBrand: (params: ICourierBrandPutParameters) => Promise<ICourierBrand>;
  replaceProfile: (
    params: ICourierProfilePutParameters
  ) => Promise<ICourierProfilePutResponse>;
  send: (
    params: ICourierSendParameters,
    config?: ICourierSendConfig
  ) => Promise<ICourierSendResponse>;
}
