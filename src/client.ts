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
  ICourierSendResponse,
  ICourierSendV2Parameters,
  ICourierSendV2Response
} from "./types";

const sendCall = async (options: ICourierClientConfiguration, config: AxiosRequestConfig, params: ICourierSendParameters) => {
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
    config
  );

  return res.data;
}

const sendV2Call = async (options: ICourierClientConfiguration, config: AxiosRequestConfig, params: ICourierSendV2Parameters) => {
  const res = await options.httpClient.post<ICourierSendV2Response>(
    "/send",
    {
      message: params.message,
    },
    config
  );

  return res.data;
}

const send = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierSendParameters | ICourierSendV2Parameters,
    config?: ICourierSendConfig
  ): Promise<ICourierSendResponse | ICourierSendV2Response> => {
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

    if((params as ICourierSendV2Parameters).message) {
      const data = await sendV2Call(options, axiosConfig, (params as ICourierSendV2Parameters));
      return data;
    }

    const data = await sendCall(options, axiosConfig, (params as ICourierSendParameters));
    return data;
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
    send: send(options),
  };
};
