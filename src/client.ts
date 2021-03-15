import { AxiosRequestConfig } from "axios";
import {
  createBrand,
  deleteBrand,
  getBrand,
  getBrands,
  replaceBrand
} from "./brands";
import { lists } from "./lists";
import { preferences } from "./preferences";
import {
  addRecipientToLists,
  getProfile,
  getRecipientSubscriptions,
  mergeProfile,
  removeRecipientFromAllLists,
  replaceProfile
} from "./profile";

import {
  ICourierClient,
  ICourierClientConfiguration,
  ICourierMessageGetResponse,
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

export const client = (
  options: ICourierClientConfiguration
): ICourierClient => {
  return {
    addRecipientToLists: addRecipientToLists(options),
    createBrand: createBrand(options),
    deleteBrand: deleteBrand(options),
    getBrand: getBrand(options),
    getBrands: getBrands(options),
    getMessage: getMessage(options),
    getProfile: getProfile(options),
    getRecipientSubscriptions: getRecipientSubscriptions(options),
    lists: lists(options),
    mergeProfile: mergeProfile(options),
    preferences: preferences(options),
    removeRecipientFromAllLists: removeRecipientFromAllLists(options),
    replaceBrand: replaceBrand(options),
    replaceProfile: replaceProfile(options),
    send: send(options)
  };
};
