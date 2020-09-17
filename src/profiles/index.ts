import { AxiosRequestConfig } from "axios";
import { ICourierClientConfiguration } from "../types";
import {
  ICourierClientProfiles,
  ICourierProfileGetParameters,
  ICourierProfileGetRecipientListsParams,
  ICourierProfileGetRecipientListsResponse,
  ICourierProfileGetResponse,
  ICourierProfilePostConfig,
  ICourierProfilePostParameters,
  ICourierProfilePostResponse,
  ICourierProfilePutParameters,
  ICourierProfilePutResponse
} from "./types";

export const replaceProfile = (options: ICourierClientConfiguration) => {
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

export const mergeProfile = (options: ICourierClientConfiguration) => {
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

export const getProfile = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierProfileGetParameters
  ): Promise<ICourierProfileGetResponse> => {
    const res = await options.httpClient.get<ICourierProfileGetResponse>(
      `/profiles/${params.recipientId}`
    );
    return res.data;
  };
};

const getRecipientLists = (options: ICourierClientConfiguration) => {
  return async (
    recipientId: string,
    params?: ICourierProfileGetRecipientListsParams
  ): Promise<ICourierProfileGetRecipientListsResponse> => {
    const res = await options.httpClient.get<
      ICourierProfileGetRecipientListsResponse
    >(`/profiles/${recipientId}/lists`, params);
    return res.data;
  };
};

export const profiles = (
  options: ICourierClientConfiguration
): ICourierClientProfiles => {
  return {
    getProfile: getProfile(options),
    getRecipientLists: getRecipientLists(options),
    mergeProfile: mergeProfile(options),
    replaceProfile: replaceProfile(options)
  };
};
