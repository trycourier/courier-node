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
  params: ICourierSendParameters,
  config?: ICourierSendConfig
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
    {
      idempotencyExpiry: config?.idempotencyExpiry,
      idempotencyKey: config?.idempotencyKey
    }
  );

  return res.data;
};

const sendMessageCall = async (
  options: ICourierClientConfiguration,
  params: ICourierSendMessageParameters,
  config?: ICourierSendConfig
) => {
  const res = await options.httpClient.post<ICourierSendMessageResponse>(
    "/send",
    {
      message: params.message
    },
    {
      idempotencyExpiry: config?.idempotencyExpiry,
      idempotencyKey: config?.idempotencyKey
    }
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
    if ((params as ICourierSendMessageParameters).message) {
      const v2Response = await sendMessageCall(
        options,
        params as ICourierSendMessageParameters,
        config
      );
      return v2Response as SendResponse<T>;
    }

    const v1Response = await sendCall(
      options,
      params as ICourierSendParameters,
      config
    );
    return v1Response as SendResponse<T>;
  };
};
