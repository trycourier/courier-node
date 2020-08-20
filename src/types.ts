import { AxiosRequestConfig } from "axios";
import {
  ICourierBrand,
  ICourierBrandGetAllResponse,
  ICourierBrandParameters,
  ICourierBrandPostConfig,
  ICourierBrandPutParameters,
  ICourierClientBrands
} from "./brands/types";
import { ICourierClientMessages, ICourierMessage } from "./messages/types";
import {
  ICourierClientProfiles,
  ICourierProfileGetParameters,
  ICourierProfileGetResponse,
  ICourierProfilePostConfig,
  ICourierProfilePostParameters,
  ICourierProfilePostResponse,
  ICourierProfilePutParameters,
  ICourierProfilePutResponse
} from "./profiles/types";
import { ICourierClientTopics } from "./topics/types";

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
  eventId: string;
  recipientId: string;
  data?: object;
  brand?: string;
  preferences?: ICourierProfilePreferences;
  profile?: object;
  override?: object;
}

export interface ICourierSendConfig {
  idempotencyKey?: string;
}

export interface ICourierSendResponse {
  messageId: string;
}

export interface ICourierSendTopicOrPatternParams {
  eventId: string;
  data?: object;
  brand?: string;
  override?: object;
}

export interface ICourierSendTopicParams
  extends ICourierSendTopicOrPatternParams {
  topic: string;
}

export interface ICourierSendPatternParams
  extends ICourierSendTopicOrPatternParams {
  pattern: string;
}

export interface ICourierPaging {
  cursor?: string;
  more: boolean;
}

export type ICourierChannelClassification =
  | "direct_message"
  | "email"
  | "push"
  | "webhook";

export interface ICourierProfilePreferences {
  preferred_channel?: ICourierChannelClassification;
}

export interface ICourierClient {
  send: (
    params: ICourierSendParameters,
    config?: ICourierSendConfig
  ) => Promise<ICourierSendResponse>;
  sendTopicOrPattern: (
    params: ICourierSendTopicOrPatternParams,
    config?: ICourierSendConfig
  ) => Promise<ICourierSendResponse>;
  getMessage: (messageId: string) => Promise<ICourierMessage>;
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
  brands: ICourierClientBrands;
  messages: ICourierClientMessages;
  profiles: ICourierClientProfiles;
  topics: ICourierClientTopics;
}
