import {
  ICourierPaging,
  ICourierSendConfig,
  ICourierSendListOrPatternParams,
  ICourierSendResponse
} from "../types";

export interface ICourierList {
  created?: number;
  id: string;
  name: string;
  updated?: number;
}

export interface ICourierListPutParams {
  name: string;
}

export interface ICourierListGetAllParams {
  cursor?: string;
  pattern?: string;
}

export interface ICourierListGetAllResponse {
  paging: ICourierPaging;
  items: ICourierList[];
}

export interface ICourierListGetSubscriptionsParams {
  cursor?: string;
}

export interface ICourierListRecipient {
  recipient: string;
  created?: string;
}

export interface ICourierListGetSubscriptionsResponse {
  paging: ICourierPaging;
  items: ICourierListRecipient[];
}

export interface ICourierListFindByRecipientIdParams {
  curser?: string;
}

export interface ICourierListFindByRecipientIdResponse {
  paging: ICourierPaging;
  results: ICourierList[];
}

export interface ICourierClientLists {
  delete: (listId: string) => Promise<void>;
  findByRecipientId: (
    recipientId: string,
    params?: ICourierListFindByRecipientIdParams
  ) => Promise<ICourierListFindByRecipientIdResponse>;
  get: (listId: string) => Promise<ICourierList>;
  getSubscriptions: (
    listId: string,
    params?: ICourierListGetSubscriptionsParams
  ) => Promise<ICourierListGetSubscriptionsResponse>;
  list: (
    params?: ICourierListGetAllParams
  ) => Promise<ICourierListGetAllResponse>;
  put: (listId: string, parms: ICourierListPutParams) => Promise<void>;
  putSubscriptions: (listId: string, recipients: string[]) => Promise<void>;
  restore: (listId: string) => Promise<void>;
  send: (
    params: ICourierSendListOrPatternParams,
    config?: ICourierSendConfig
  ) => Promise<ICourierSendResponse>;
  subscribe: (listId: string, recipientId: string) => Promise<void>;
  unsubscribe: (listId: string, recipientId: string) => Promise<void>;
}
