import { ICourierClientConfiguration } from "../types";
import {
  ICourierClientMessages,
  ICourierMessage,
  ICourierMessageGetAllResponse,
  ICourierMessageHistory
} from "./types";

export const getMessage = (options: ICourierClientConfiguration) => {
  return async (messageId: string): Promise<ICourierMessage> => {
    const res = await options.httpClient.get<ICourierMessage>(
      `/messages/${messageId}`
    );
    return res.data;
  };
};

const getMessages = (options: ICourierClientConfiguration) => {
  return async (params?: {
    cursor: string;
    recipient: string;
  }): Promise<ICourierMessageGetAllResponse> => {
    const res = await options.httpClient.get<ICourierMessageGetAllResponse>(
      `/messages`,
      params
    );
    return res.data;
  };
};

const getMessageHistory = (options: ICourierClientConfiguration) => {
  return async (messageId: string): Promise<ICourierMessageHistory> => {
    const res = await options.httpClient.get<ICourierMessageHistory>(
      `/messages/${messageId}/history`
    );
    return res.data;
  };
};

export const messages = (
  options: ICourierClientConfiguration
): ICourierClientMessages => {
  return {
    getMessage: getMessage(options),
    getMessageHistory: getMessageHistory(options),
    getMessages: getMessages(options)
  };
};
