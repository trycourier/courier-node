import { AxiosRequestConfig } from "axios";
import {
  ICourierClient,
  ICourierClientConfiguration,
  ICourierSendConfig,
  ICourierSendParameters,
  ICourierSendResponse,
  ICourierSendTopicOrPatternParams
} from "./types";

import {
  brands,
  createBrand,
  deleteBrand,
  getBrand,
  getBrands,
  replaceBrand
} from "./brands";
import { getMessage, messages } from "./messages";
import { getProfile, mergeProfile, profiles, replaceProfile } from "./profiles";
import { topics } from "./topics";

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

const sendTopicOrPattern = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierSendTopicOrPatternParams,
    config?: ICourierSendConfig
  ): Promise<ICourierSendResponse> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {}
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }

    const res = await options.httpClient.post<ICourierSendResponse>(
      `/send/topic`,
      params,
      axiosConfig
    );
    return res.data;
  };
};

export const client = (
  options: ICourierClientConfiguration
): ICourierClient => {
  return {
    brands: brands(options),
    createBrand: createBrand(options),
    deleteBrand: deleteBrand(options),
    getBrand: getBrand(options),
    getBrands: getBrands(options),
    getMessage: getMessage(options),
    getProfile: getProfile(options),
    mergeProfile: mergeProfile(options),
    messages: messages(options),
    profiles: profiles(options),
    replaceBrand: replaceBrand(options),
    replaceProfile: replaceProfile(options),
    send: send(options),
    sendTopicOrPattern: sendTopicOrPattern(options),
    topics: topics(options)
  };
};
