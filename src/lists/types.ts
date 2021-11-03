import {
  ICourierNotificationPreferences,
  IRecipientPreferences,
} from "../preferences/types";
import {
  ICourierPaging,
  ICourierSendConfig,
  ICourierSendListOrPatternParams,
  ICourierSendResponse,
} from "../types";

export interface ICourierList {
  created?: number;
  id: string;
  name: string;
  updated?: number;
}

export interface ICourierRecipientSubscriptionsResponse {
  paging: ICourierPaging;
  results: ICourierList[];
}

export interface ICourierListPutParams {
  name: string;
  preferences?: {
    notifications: IRecipientPreferences;
    categories?: IRecipientPreferences;
  };
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
  recipientId: string;
  created?: string;
  preferences?: ICourierRecipientPreferences;
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

export interface ICourierRecipientPreferences {
  categories?: ICourierNotificationPreferences;
  notifications: ICourierNotificationPreferences;
}

export interface ICourierPutSubscriptionsRecipient {
  recipientId: string;
  preferences?: ICourierRecipientPreferences;
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
  postSubscriptions: (
    listId: string,
    recipients: ICourierPutSubscriptionsRecipient[]
  ) => Promise<void>;
  put: (listId: string, params: ICourierListPutParams) => Promise<void>;
  putSubscriptions: (
    listId: string,
    recipients: ICourierPutSubscriptionsRecipient[]
  ) => Promise<void>;
  restore: (listId: string) => Promise<void>;
  send: (
    params: ICourierSendListOrPatternParams,
    config?: ICourierSendConfig
  ) => Promise<ICourierSendResponse>;
  subscribe: (
    listId: string,
    recipientId: string,
    preferences?: ICourierRecipientPreferences
  ) => Promise<void>;
  unsubscribe: (listId: string, recipientId: string) => Promise<void>;
}
