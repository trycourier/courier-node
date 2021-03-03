import { ErrorHandlerFunction } from "../exceptions";
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
    ).catch(ErrorHandlerFunction);
    return res.data;
  };
};

const get = (options: ICourierClientConfiguration) => {
  return async (
    recipientId: string
  ): Promise<ICourierPreferencesGetResponse> => {
    const res = await options.httpClient.get<ICourierPreferencesGetResponse>(
      `/preferences/${recipientId}`
    ).catch(ErrorHandlerFunction);
    return res.data;
  };
};

const put = (options: ICourierClientConfiguration) => {
  return async (
    recipientId: string,
    params: IRecipientPreferences
  ): Promise<ICourierPreferencesPutResponse> => {
    const res = await options.httpClient.put<ICourierPreferencesPutResponse>(
      `/preferences/${recipientId}`,
      {
        notifications: params.notifications
      }
    ).catch(ErrorHandlerFunction);
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
