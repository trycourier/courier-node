import { ICourierPaging } from "../types";

export interface ICourierList {
  created?: number;
  id: string;
  name: string;
  updated?: number;
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

export interface ICourierListPostConfig {
  idempotencyKey?: string;
}

export interface ICourierListGetSubscriptionsResponse {
  paging: ICourierPaging;
  results: ICourierListRecipient[];
}

export interface ICourierClientLists {
  bulkSubscribeToList: (
    listId: string,
    recipients: string[],
    config?: ICourierListPostConfig
  ) => Promise<void>;
  deleteList: (listId: string) => Promise<void>;
  getList: (listId: string) => Promise<ICourierList>;
  getListSubscriptions: (
    listId: string,
    params?: ICourierListGetSubscriptionsParams
  ) => Promise<ICourierListGetSubscriptionsResponse>;
  getLists: (
    params?: ICourierListGetAllParams
  ) => Promise<ICourierListGetAllResponse>;
  replaceList: (listId: string, list: ICourierList) => Promise<ICourierList>;
  restoreList: (listId: string) => Promise<void>;
  subscribeToList: (
    listId: string,
    recipientId: string
  ) => Promise<ICourierListRecipient>;
  unsubscribeFromList: (listId: string, recipientId: string) => Promise<void>;
}
