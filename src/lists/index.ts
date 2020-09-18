import { AxiosRequestConfig } from "axios";
import { ICourierClientConfiguration } from "../types";
import {
  ICourierClientLists,
  ICourierList,
  ICourierListGetAllParams,
  ICourierListGetAllResponse,
  ICourierListGetSubscriptionsParams,
  ICourierListGetSubscriptionsResponse,
  ICourierListPostConfig,
  ICourierListRecipient
} from "./types";

const getLists = (options: ICourierClientConfiguration) => {
  return async (
    params?: ICourierListGetAllParams
  ): Promise<ICourierListGetAllResponse> => {
    const res = await options.httpClient.get<ICourierListGetAllResponse>(
      `/lists`,
      params
    );
    return res.data;
  };
};

const getList = (options: ICourierClientConfiguration) => {
  return async (listId: string): Promise<ICourierList> => {
    const res = await options.httpClient.get<ICourierList>(`/lists/${listId}`);
    return res.data;
  };
};

const replaceList = (options: ICourierClientConfiguration) => {
  return async (listId: string, list: ICourierList): Promise<ICourierList> => {
    const res = await options.httpClient.put<ICourierList>(
      `/lists/${listId}`,
      list
    );
    return res.data;
  };
};

const deleteList = (options: ICourierClientConfiguration) => {
  return async (listId: string): Promise<void> => {
    await options.httpClient.delete<void>(`/lists/${listId}`);
  };
};

const restoreList = (options: ICourierClientConfiguration) => {
  return async (listId: string): Promise<void> => {
    await options.httpClient.put<void>(`/lists/${listId}/restore`);
  };
};

const getListSubscriptions = (options: ICourierClientConfiguration) => {
  return async (
    listId: string,
    params?: ICourierListGetSubscriptionsParams
  ): Promise<ICourierListGetSubscriptionsResponse> => {
    const res = await options.httpClient.get<
      ICourierListGetSubscriptionsResponse
    >(`/lists/${listId}/subscriptions`, params);
    return res.data;
  };
};

const bulkSubscribeToList = (options: ICourierClientConfiguration) => {
  return async (
    listId: string,
    recipients: string[],
    config?: ICourierListPostConfig
  ): Promise<void> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {}
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }
    await options.httpClient.post<void>(
      `/lists/${listId}/subscriptions`,
      {
        recipients
      },
      axiosConfig
    );
  };
};

const subscribeToList = (options: ICourierClientConfiguration) => {
  return async (
    listId: string,
    recipientId: string
  ): Promise<ICourierListRecipient> => {
    const res = await options.httpClient.put<ICourierListRecipient>(
      `/lists/${listId}/subscriptions/${recipientId}`
    );
    return res.data;
  };
};

const unsubscribeFromList = (options: ICourierClientConfiguration) => {
  return async (listId: string, recipientId: string): Promise<void> => {
    await options.httpClient.delete<void>(
      `/lists/${listId}/subscriptions/${recipientId}`
    );
  };
};

export const lists = (
  options: ICourierClientConfiguration
): ICourierClientLists => {
  return {
    bulkSubscribeToList: bulkSubscribeToList(options),
    deleteList: deleteList(options),
    getList: getList(options),
    getListSubscriptions: getListSubscriptions(options),
    getLists: getLists(options),
    replaceList: replaceList(options),
    restoreList: restoreList(options),
    subscribeToList: subscribeToList(options),
    unsubscribeFromList: unsubscribeFromList(options)
  };
};
