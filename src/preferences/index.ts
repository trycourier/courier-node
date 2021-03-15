import { ICourierClientConfiguration } from "../types";
import {
  ICourierClientPreferences,
  ICourierPreferencesGetResponse,
  ICourierPreferencesListResponse,
  ICourierPreferencesPutResponse,
  IRecipientPreferences
} from "./types";

const list = (options: ICourierClientConfiguration) => {
  return async (): Promise<ICourierPreferencesListResponse> => {
    const res = await options.httpClient.get<ICourierPreferencesListResponse>(
      `/preferences`
    );
    return res.data;
  };
};

const get = (options: ICourierClientConfiguration) => {
  return async (
    recipientId: string
  ): Promise<ICourierPreferencesGetResponse> => {
    const res = await options.httpClient.get<ICourierPreferencesGetResponse>(
      `/preferences/${recipientId}`
    );
    return res.data;
  };
};

const put = (options: ICourierClientConfiguration) => {
  return async (
    recipientId: string,
    params?: IRecipientPreferences
  ): Promise<ICourierPreferencesPutResponse> => {
    const categories = params?.categories ?? {};
    const notifications = params?.notifications ?? {};

    const res = await options.httpClient.put<ICourierPreferencesPutResponse>(
      `/preferences/${recipientId}`,
      {
        categories,
        notifications
      }
    );
    return res.data;
  };
};

export const preferences = (
  options: ICourierClientConfiguration
): ICourierClientPreferences => {
  return {
    get: get(options),
    list: list(options),
    put: put(options)
  };
};
