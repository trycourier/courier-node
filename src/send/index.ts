import { AxiosRequestConfig } from "axios";
import {
  ICourierClientConfiguration,
  ICourierSendConfig,
  ICourierSendMessageParameters,
  ICourierSendMessageResponse,
  ICourierSendParameters,
  ICourierSendResponse,
  SendResponse
} from "../types";

const sendCall = async (
  options: ICourierClientConfiguration,
  config: AxiosRequestConfig,
  params: ICourierSendParameters
) => {
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
    config
  );

  return res.data;
};

const sendMessageCall = async (
  options: ICourierClientConfiguration,
  config: AxiosRequestConfig,
  params: ICourierSendMessageParameters
) => {
  const res = await options.httpClient.post<ICourierSendMessageResponse>(
    "/send",
    {
      message: params.message
    },
    config
  );

  return res.data;
};

export const send = (options: ICourierClientConfiguration) => {
  return async <
    T extends ICourierSendParameters | ICourierSendMessageParameters
  >(
    params: T,
    config?: ICourierSendConfig
  ): Promise<SendResponse<T>> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {}
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }

    if (config && config.idempotencyExpiry) {
      axiosConfig.headers["x-idempotency-expiration"] =
        config.idempotencyExpiry;
    }

    if ((params as ICourierSendMessageParameters).message) {
      const v2Response = await sendMessageCall(
        options,
        axiosConfig,
        params as ICourierSendMessageParameters
      );
      return v2Response as SendResponse<T>;
    }

    const v1Response = await sendCall(
      options,
      axiosConfig,
      params as ICourierSendParameters
    );
    return v1Response as SendResponse<T>;
  };
};
