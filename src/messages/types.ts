import { ICourierPaging } from "../types";

export interface ICourierMessage {
  clicked?: number;
  delivered?: number;
  error?: string;
  enqueued?: number;
  event?: string;
  id: string;
  notification?: string;
  opened?: number;
  providers?: Array<{
    channel: {
      key: string;
      name: string;
      template: string;
    };
    clicked?: number;
    delivered?: number;
    error?: string;
    opened?: number;
    provider: string;
    reference: {
      "x-message-id": string;
    };
    sent: number;
    status: string;
  }>;
  reason?: string;
  recipient: string;
  sent?: number;
  status: string;
}

export interface ICourierMessageHistory {
  results: object;
}

export interface ICourierMessageGetAllResponse {
  paging: ICourierPaging;
  results: ICourierMessage[];
}

export interface ICourierClientMessages {
  getMessage: (messageId: string) => Promise<ICourierMessage>;
  getMessageHistory: (messageId: string) => Promise<ICourierMessageHistory>;
  getMessages: (params?: {
    cursor: string;
    recipient: string;
  }) => Promise<ICourierMessageGetAllResponse>;
}
