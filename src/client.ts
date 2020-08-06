import { AxiosRequestConfig } from "axios";
import {
  ICourierClient,
  ICourierClientConfiguration,
  ICourierMessageGetResponse,
  ICourierProfileGetParameters,
  ICourierProfileGetResponse,
  ICourierProfilePostConfig,
  ICourierProfilePostParameters,
  ICourierProfilePostResponse,
  ICourierProfilePutParameters,
  ICourierProfilePutResponse,
  ICourierSendConfig,
  ICourierSendParameters,
  ICourierSendResponse
} from "./types";

import {
  createBrand,
  deleteBrand,
  getBrand,
  getBrands,
  replaceBrand
} from "./brands";

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

const replaceProfile = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierProfilePutParameters
  ): Promise<ICourierProfilePutResponse> => {
    const res = await options.httpClient.put<ICourierProfilePutResponse>(
      `/profiles/${params.recipientId}`,
      {
        profile: params.profile
      }
    );
    return res.data;
  };
};

const mergeProfile = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierProfilePostParameters,
    config?: ICourierProfilePostConfig
  ): Promise<ICourierProfilePostResponse> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {}
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }
    const res = await options.httpClient.post<ICourierProfilePostResponse>(
      `/profiles/${params.recipientId}`,
      {
        profile: params.profile
      },
      axiosConfig
    );
    return res.data;
  };
};

const getProfile = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierProfileGetParameters
  ): Promise<ICourierProfileGetResponse> => {
    const res = await options.httpClient.get<ICourierProfileGetResponse>(
      `/profiles/${params.recipientId}`
    );
    return res.data;
  };
};

export const client = (
  options: ICourierClientConfiguration
): ICourierClient => {
  return {
    createBrand: createBrand(options),
    deleteBrand: deleteBrand(options),
    getBrand: getBrand(options),
    getBrands: getBrands(options),
    getMessage: getMessage(options),
    getProfile: getProfile(options),
    mergeProfile: mergeProfile(options),
    replaceBrand: replaceBrand(options),
    replaceProfile: replaceProfile(options),
    send: send(options)
  };
};
