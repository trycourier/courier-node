type HttpPostClient = <T>(url: string, body?: object) => Promise<{ data: T }>;

export interface ICourierClientConfiguration {
  httpPostClient: HttpPostClient;
}

export interface ICourierSendParameters {
  eventId: string;
  recipientId: string;
  data?: object;
  profile?: object;
}

export interface ICourierSendResponse {
  messageId: string;
}

export const client = (options: ICourierClientConfiguration) => {
  return {
    send: async (
      params: ICourierSendParameters
    ): Promise<ICourierSendResponse> => {
      const res = await options.httpPostClient<ICourierSendResponse>("/send", {
        data: params.data,
        event: params.eventId,
        profile: params.profile,
        recipient: params.recipientId
      });
      return res.data;
    }
  };
};
