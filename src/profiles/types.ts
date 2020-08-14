import { ICourierTopic } from "../topics/types";
import { ICourierPaging } from "../types";
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

export interface ICourierProfileGetRecipientTopicsParams {
  curser?: string;
}

export interface ICourierProfileGetRecipientTopicsResponse {
  paging: ICourierPaging;
  results: ICourierTopic[];
}

export interface ICourierClientProfiles {
  getProfile: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierProfileGetResponse>;
  getRecipientTopics: (
    recipientId: string,
    params?: ICourierProfileGetRecipientTopicsParams
  ) => Promise<ICourierProfileGetRecipientTopicsResponse>;
  mergeProfile: (
    params: ICourierProfilePostParameters,
    config?: ICourierProfilePostConfig
  ) => Promise<ICourierProfilePostResponse>;
  replaceProfile: (
    params: ICourierProfilePutParameters
  ) => Promise<ICourierProfilePutResponse>;
}
