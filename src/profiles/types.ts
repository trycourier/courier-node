import { ICourierList } from "../lists/types";
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

export interface ICourierProfileGetRecipientListsParams {
  curser?: string;
}

export interface ICourierProfileGetRecipientListsResponse {
  paging: ICourierPaging;
  items: ICourierList[];
}

export interface ICourierClientProfiles {
  getProfile: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierProfileGetResponse>;
  getRecipientLists: (
    recipientId: string,
    params?: ICourierProfileGetRecipientListsParams
  ) => Promise<ICourierProfileGetRecipientListsResponse>;
  mergeProfile: (
    params: ICourierProfilePostParameters,
    config?: ICourierProfilePostConfig
  ) => Promise<ICourierProfilePostResponse>;
  replaceProfile: (
    params: ICourierProfilePutParameters
  ) => Promise<ICourierProfilePutResponse>;
}
