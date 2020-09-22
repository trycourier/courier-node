import { AxiosRequestConfig } from "axios";
import {
  ICourierClientConfiguration,
  ICourierSendConfig,
  ICourierSendListOrPatternParams,
  ICourierSendResponse
} from "../types";
import {
  ICourierClientLists,
  ICourierList,
  ICourierListFindByRecipientIdParams,
  ICourierListGetAllParams,
  ICourierListGetAllResponse,
  ICourierListGetSubscriptionsParams,
  ICourierListGetSubscriptionsResponse,
  ICourierListPostConfig,
  ICourierListRecipient
} from "./types";

const list = (options: ICourierClientConfiguration) => {
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

const get = (options: ICourierClientConfiguration) => {
  return async (listId: string): Promise<ICourierList> => {
    const res = await options.httpClient.get<ICourierList>(`/lists/${listId}`);
    return res.data;
  };
};

const put = (options: ICourierClientConfiguration) => {
  // tslint:disable-next-line: no-shadowed-variable
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

const restore = (options: ICourierClientConfiguration) => {
  return async (listId: string): Promise<void> => {
    await options.httpClient.put<void>(`/lists/${listId}/restore`);
  };
};

const getSubscriptions = (options: ICourierClientConfiguration) => {
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

const putSubscriptions = (options: ICourierClientConfiguration) => {
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
    await options.httpClient.put<void>(
      `/lists/${listId}/subscriptions`,
      {
        recipients
      },
      axiosConfig
    );
  };
};

const subscribe = (options: ICourierClientConfiguration) => {
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

const unsubscribe = (options: ICourierClientConfiguration) => {
  return async (listId: string, recipientId: string): Promise<void> => {
    await options.httpClient.delete<void>(
      `/lists/${listId}/subscriptions/${recipientId}`
    );
  };
};

const findByRecipientId = (options: ICourierClientConfiguration) => {
  return async (
    recipientId: string,
    params?: ICourierListFindByRecipientIdParams
  ): Promise<ICourierListGetAllResponse> => {
    const res = await options.httpClient.get<ICourierListGetAllResponse>(
      `/profiles/${recipientId}/lists`,
      params
    );
    return res.data;
  };
};

const send = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierSendListOrPatternParams,
    config?: ICourierSendConfig
  ): Promise<ICourierSendResponse> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {}
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }

    const res = await options.httpClient.post<ICourierSendResponse>(
      `/send/list`,
      params,
      axiosConfig
    );
    return res.data;
  };
};

export const lists = (
  options: ICourierClientConfiguration
): ICourierClientLists => {
  return {
    delete: deleteList(options),
    findByRecipientId: findByRecipientId(options),
    get: get(options),
    getSubscriptions: getSubscriptions(options),
    list: list(options),
    put: put(options),
    putSubscriptions: putSubscriptions(options),
    restore: restore(options),
    send: send(options),
    subscribe: subscribe(options),
    unsubscribe: unsubscribe(options)
  };
};
