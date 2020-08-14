import { ICourierClientConfiguration } from "../types";
import { ICourierClientMessages, ICourierMessageGetResponse } from "./types";

export const getMessage = (options: ICourierClientConfiguration) => {
  return async (messageId: string): Promise<ICourierMessageGetResponse> => {
    const res = await options.httpClient.get<ICourierMessageGetResponse>(
      `/messages/${messageId}`
    );
    return res.data;
  };
};

export const messages = (
  options: ICourierClientConfiguration
): ICourierClientMessages => {
  return { getMessage: getMessage(options) };
};
