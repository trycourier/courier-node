import { AxiosRequestConfig } from "axios";
import { ICourierRecipientSubscriptionsResponse } from "./lists/types";
import {
  ICourierClientConfiguration,
  ICourierProfileDeleteParameters,
  ICourierProfileGetParameters,
  ICourierProfileGetResponse,
  ICourierProfileListsPostParameters,
  ICourierProfilePostConfig,
  ICourierProfilePostParameters,
  ICourierProfilePostResponse,
  ICourierProfilePutParameters,
  ICourierProfilePutResponse,
} from "./types";

export const replaceProfile = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierProfilePutParameters
  ): Promise<ICourierProfilePutResponse> => {
    const res = await options.httpClient.put<ICourierProfilePutResponse>(
      `/profiles/${params.recipientId}`,
      {
        profile: params.profile,
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
      headers: {},
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }
    const res = await options.httpClient.post<ICourierProfilePostResponse>(
      `/profiles/${params.recipientId}`,
      {
        profile: params.profile,
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

export const deleteProfile = (options: ICourierClientConfiguration) => {
  return async (params: ICourierProfileDeleteParameters): Promise<void> => {
    await options.httpClient.delete<void>(`/profiles/${params.recipientId}`);
  };
};

export const getRecipientSubscriptions = (
  options: ICourierClientConfiguration
) => {
  return async (
    params: ICourierProfileGetParameters
  ): Promise<ICourierRecipientSubscriptionsResponse> => {
    const res = await options.httpClient.get<
      ICourierRecipientSubscriptionsResponse
    >(`/profiles/${params.recipientId}/lists`);
    return res.data;
  };
};

export const addRecipientToLists = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierProfileListsPostParameters
  ): Promise<ICourierProfilePostResponse> => {
    const res = await options.httpClient.post<ICourierProfilePostResponse>(
      `/profiles/${params.recipientId}/lists`,
      {
        lists: params.lists,
      }
    );
    return res.data;
  };
};

export const removeRecipientFromAllLists = (
  options: ICourierClientConfiguration
) => {
  return async (
    params: ICourierProfileGetParameters
  ): Promise<ICourierProfilePostResponse> => {
    const res = await options.httpClient.delete<ICourierProfilePostResponse>(
      `/profiles/${params.recipientId}/lists`
    );
    return res.data;
  };
};
