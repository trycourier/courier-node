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
  headers: object,
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
    { headers }
  );

  return res.data;
};

const sendMessageCall = async (
  options: ICourierClientConfiguration,
  headers: object,
  params: ICourierSendMessageParameters
) => {
  const res = await options.httpClient.post<ICourierSendMessageResponse>(
    "/send",
    {
      message: params.message
    },
    { headers }
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
    const headers: Record<string, string> = {};

    if (config && config.idempotencyKey) {
      headers["Idempotency-Key"] = config.idempotencyKey;
    }

    if (config && config.idempotencyExpiry) {
      headers["x-idempotency-expiration"] = String(config.idempotencyExpiry);
    }

    if ((params as ICourierSendMessageParameters).message) {
      const v2Response = await sendMessageCall(
        options,
        headers,
        params as ICourierSendMessageParameters
      );
      return v2Response as SendResponse<T>;
    }

    const v1Response = await sendCall(
      options,
      headers,
      params as ICourierSendParameters
    );
    return v1Response as SendResponse<T>;
  };
};
