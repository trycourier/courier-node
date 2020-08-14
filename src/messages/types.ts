export interface ICourierMessageGetResponse {
  enqueued?: number;
  event?: string;
  id: string;
  notification?: string;
  providers?: Array<{
    channel: {
      name: string;
      template: string;
    };
    provider: string;
    reference: {
      "x-message-id": string;
    };
    sent: number;
    status: string;
  }>;
  recipient: string;
  sent?: number;
  status: string;
}

export interface ICourierClientMessages {
  getMessage: (messageId: string) => Promise<ICourierMessageGetResponse>;
}
