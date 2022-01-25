import { AxiosRequestConfig } from "axios";
import { ICourierClientConfiguration, ICourierSendConfig, ICourierSendParameters, ICourierSendResponse, ICourierSendV2Parameters, ICourierSendV2Response, SendResponse } from "../types";

const sendCall = async (options: ICourierClientConfiguration, config: AxiosRequestConfig, params: ICourierSendParameters) => {
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
}

const sendV2Call = async (options: ICourierClientConfiguration, config: AxiosRequestConfig, params: ICourierSendV2Parameters) => {
  const res = await options.httpClient.post<ICourierSendV2Response>(
    "/send",
    {
      message: params.message,
    },
    config
  );

  return res.data;
}

export const send = (options: ICourierClientConfiguration) => {
  return async <T extends ICourierSendParameters | ICourierSendV2Parameters>(
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

    if((params as ICourierSendV2Parameters).message) {
      const v2Response = await sendV2Call(options, axiosConfig, (params as ICourierSendV2Parameters));
      return v2Response as SendResponse<T>;
    }

    const v1Response = await sendCall(options, axiosConfig, (params as ICourierSendParameters));
    return v1Response as SendResponse<T>;
  };
};