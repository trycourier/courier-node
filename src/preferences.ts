import { AxiosRequestConfig } from 'axios';
import {
  ICourierPreferencesGetParameters,
  ICourierPreferencesGetResponse,
  ICourierPreferencesGetAllResponse,
  ICourierPreferencesPutParameters,
  ICourierClientConfiguration,
  ICourierPreferencesPutResponse,
  ICourierSendConfig,
} from './types';

export const getPreferences = (options: ICourierClientConfiguration) => {
  return async (params?: {
    cursor: string;
  }): Promise<ICourierPreferencesGetAllResponse> => {
    const res = await options.httpClient.get<ICourierPreferencesGetAllResponse>(
      `/preferences`,
      params
    );
    return res.data;
  };
};

export const getProfilePreferences = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierPreferencesGetParameters
  ): Promise<ICourierPreferencesGetResponse> => {
    const res = await options.httpClient.get<ICourierPreferencesGetResponse>(
      `/preferences/${params.recipientId}`
    );
    return res.data;
  };
};

export const updateProfilePreferences = (
  options: ICourierClientConfiguration
) => {
  return async (
    params: ICourierPreferencesPutParameters,
    config?: ICourierSendConfig
  ): Promise<ICourierPreferencesPutResponse> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {},
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers['Idempotency-Key'] = config.idempotencyKey;
    }

    const res = await options.httpClient.post<ICourierPreferencesPutResponse>(
      `/preferences/${params.recipientId}`,
      {
        notification: params.notification,
      },
      axiosConfig
    );
    return res.data;
  };
};
