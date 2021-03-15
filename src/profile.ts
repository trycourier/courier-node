import { AxiosRequestConfig } from "axios";
import { ICourierList } from "./lists/types";
import {
  ICourierClientConfiguration,
  ICourierProfileGetParameters,
  ICourierProfileGetResponse,
  ICourierProfileListsPostParameters,
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

export const getRecipientSubscriptions = (
  options: ICourierClientConfiguration
) => {
  return async (
    params: ICourierProfileGetParameters
  ): Promise<ICourierList[]> => {
    const res = await options.httpClient.get<ICourierList[]>(
      `/profiles/${params.recipientId}/lists`
    );
    return res.data;
  };
};

export const addRecipientToLists = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierProfileListsPostParameters
  ): Promise<ICourierProfilePostResponse> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {}
    };

    const res = await options.httpClient.post<ICourierProfilePostResponse>(
      `/profiles/${params.recipientId}/lists`,
      {
        lists: params.lists
      },
      axiosConfig
    );
    return res.data;
  };
};
