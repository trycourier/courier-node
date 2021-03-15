import { AxiosRequestConfig } from "axios";
import { ErrorHandlerFunction } from "../exceptions";
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
  ICourierListFindByRecipientIdResponse,
  ICourierListGetAllParams,
  ICourierListGetAllResponse,
  ICourierListGetSubscriptionsParams,
  ICourierListGetSubscriptionsResponse,
  ICourierListPutParams,
  ICourierPutSubscriptionsRecipient,
  ICourierRecipientPreferences
} from "./types";

const list = (options: ICourierClientConfiguration) => {
  return async (
    params?: ICourierListGetAllParams
  ): Promise<ICourierListGetAllResponse> => {
    const res = await options.httpClient.get<ICourierListGetAllResponse>(
      `/lists`,
      params
    ).catch(ErrorHandlerFunction);
    return res.data;
  };
};

const get = (options: ICourierClientConfiguration) => {
  return async (listId: string): Promise<ICourierList> => {
    const res = await options.httpClient.get<ICourierList>(
      `/lists/${listId}`
      ).catch(ErrorHandlerFunction);
    return res.data;
  }
};

const put = (options: ICourierClientConfiguration) => {
  // tslint:disable-next-line: no-shadowed-variable
  return async (
    listId: string,
    params: ICourierListPutParams
  ): Promise<void> => {
    await options.httpClient.put<void>(
      `/lists/${listId}`, params).catch(ErrorHandlerFunction);
  };
};

const deleteList = (options: ICourierClientConfiguration) => {
  return async (listId: string): Promise<void> => {
    await options.httpClient.delete<void>(`/lists/${listId}`).catch(ErrorHandlerFunction);
  };
};

const restore = (options: ICourierClientConfiguration) => {
  return async (listId: string): Promise<void> => {
    await options.httpClient.put<void>(`/lists/${listId}/restore`).catch(ErrorHandlerFunction);
  };
};

const getSubscriptions = (options: ICourierClientConfiguration) => {
  return async (
    listId: string,
    params?: ICourierListGetSubscriptionsParams
  ): Promise<ICourierListGetSubscriptionsResponse> => {
    const res = await options.httpClient.get<
      ICourierListGetSubscriptionsResponse
    >(`/lists/${listId}/subscriptions`, params).catch(ErrorHandlerFunction);
    return res.data;
  };
};

const putSubscriptions = (options: ICourierClientConfiguration) => {
  return async (
    listId: string,
    recipients: ICourierPutSubscriptionsRecipient[]
  ): Promise<void> => {
    await options.httpClient.put<void>(`/lists/${listId}/subscriptions`, {
      recipients
    }).catch(ErrorHandlerFunction);
  };
};

const subscribe = (options: ICourierClientConfiguration) => {
  return async (
    listId: string,
    recipientId: string,
    preferences?: ICourierRecipientPreferences
  ): Promise<void> => {
    await options.httpClient.put<ICourierRecipientPreferences>(
      `/lists/${listId}/subscriptions/${recipientId}`,
      {
        preferences
      }
    ).catch(ErrorHandlerFunction);
  };
};

const unsubscribe = (options: ICourierClientConfiguration) => {
  return async (listId: string, recipientId: string): Promise<void> => {
    await options.httpClient.delete<void>(
      `/lists/${listId}/subscriptions/${recipientId}`
    ).catch(ErrorHandlerFunction);
  };
};

const findByRecipientId = (options: ICourierClientConfiguration) => {
  return async (
    recipientId: string,
    params?: ICourierListFindByRecipientIdParams
  ): Promise<ICourierListFindByRecipientIdResponse> => {
    const res = await options.httpClient.get<
      ICourierListFindByRecipientIdResponse
    >(`/profiles/${recipientId}/lists`, params).catch(ErrorHandlerFunction);
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
    ).catch(ErrorHandlerFunction);
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
