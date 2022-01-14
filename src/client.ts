import { AxiosRequestConfig } from "axios";

import { automations } from "./automations";
import {
  createBrand,
  deleteBrand,
  getBrand,
  getBrands,
  replaceBrand
} from "./brands";
import { lists } from "./lists";
import { notifications } from "./notifications";
import { preferences } from "./preferences";
import {
  addRecipientToLists,
  deleteProfile,
  getProfile,
  getRecipientSubscriptions,
  mergeProfile,
  removeRecipientFromAllLists,
  replaceProfile
} from "./profile";

import {
  ICourierClient,
  ICourierClientConfiguration,
  ICourierMessageGetHistoryResponse,
  ICourierMessageGetOutputResponse,
  ICourierMessageGetResponse,
  ICourierMessagesGetParameters,
  ICourierMessagesGetResponse,
  ICourierSendConfig,
  ICourierSendParameters,
  ICourierSendResponse
} from "./types";

const send = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierSendParameters,
    config?: ICourierSendConfig
  ): Promise<ICourierSendResponse> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {}
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }

    if (config && config.idempotencyExpiry) {
      axiosConfig.headers["x-idempotency-expiration"] =
        config.idempotencyExpiry;
    }

    const res = await options.httpClient.post<ICourierSendResponse>(
      "/send",
      {
        brand: params.brand,
        data: params.data,
        event: params.eventId,
        override: params.override,
        preferences: params.preferences,
        profile: params.profile,
        recipient: params.recipientId
      },
      axiosConfig
    );
    return res.data;
  };
};

const getMessage = (options: ICourierClientConfiguration) => {
  return async (messageId: string): Promise<ICourierMessageGetResponse> => {
    const res = await options.httpClient.get<ICourierMessageGetResponse>(
      `/messages/${messageId}`
    );
    return res.data;
  };
};

const getMessageHistory = (options: ICourierClientConfiguration) => {
  return async (
    messageId: string
  ): Promise<ICourierMessageGetHistoryResponse> => {
    const res = await options.httpClient.get<ICourierMessageGetHistoryResponse>(
      `/messages/${messageId}/history`
    );
    return res.data;
  };
};

const getMessageOutput = (options: ICourierClientConfiguration) => {
  return async (
    messageId: string
  ): Promise<ICourierMessageGetOutputResponse> => {
    const res = await options.httpClient.get<ICourierMessageGetOutputResponse>(
      `/messages/${messageId}/output`
    );
    return res.data;
  };
};

const getMessages = (options: ICourierClientConfiguration) => {
  return async (
    params?: ICourierMessagesGetParameters
  ): Promise<ICourierMessagesGetResponse> => {
    const res = await options.httpClient.get<ICourierMessagesGetResponse>(
      "/messages",
      {
        params: {
          cursor: params?.cursor,
          event: params?.eventId,
          list: params?.listId,
          messageId: params?.messageId,
          notification: params?.notificationId,
          recipient: params?.recipientId,
          status: params?.status
        }
      }
    );
    return res.data;
  };
};

export const client = (
  options: ICourierClientConfiguration
): ICourierClient => {
  return {
    addRecipientToLists: addRecipientToLists(options),
    automations: automations(options),
    createBrand: createBrand(options),
    deleteBrand: deleteBrand(options),
    deleteProfile: deleteProfile(options),
    getBrand: getBrand(options),
    getBrands: getBrands(options),
    getMessage: getMessage(options),
    getMessageHistory: getMessageHistory(options),
    getMessageOutput: getMessageOutput(options),
    getMessages: getMessages(options),
    getProfile: getProfile(options),
    getRecipientSubscriptions: getRecipientSubscriptions(options),
    lists: lists(options),
    mergeProfile: mergeProfile(options),
    notifications: notifications(options),
    preferences: preferences(options),
    removeRecipientFromAllLists: removeRecipientFromAllLists(options),
    replaceBrand: replaceBrand(options),
    replaceProfile: replaceProfile(options),
    send: send(options)
  };
};
