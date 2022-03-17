import { IRecipientPreferences } from "../preferences/types";
import { Message, UserRecipient } from "../send/types";
interface IInboundBulkMessageApiV1 {
  brand?: string;
  data?: object;
  event: string;
  locale?: string;
  override?: object;
}

type InboundBulkMessageApiV2 = Omit<Message, "to">;

export interface IInboundBulkMessage extends IInboundBulkMessageApiV1 {
  message?: InboundBulkMessageApiV2;
}

export type InboundBulkMessage = IInboundBulkMessage;

export interface ICourierBulkConfig {
  idempotencyKey?: string;
  idempotencyExpiry?: number;
}

export interface ICourierBulkCreateJobParams {
  message: IInboundBulkMessage;
}

export interface ICourierBulkCreateJobResponse {
  jobId: string;
}

export interface IInboundBulkMessageUser {
  preferences?: IRecipientPreferences;
  profile?: object;
  recipient?: string;
  data?: object;
  to?: UserRecipient;
}

export type InboundBulkMessageUser = IInboundBulkMessageUser;

export interface ICourierBulkIngestUsersParams {
  jobId: string;
  users: InboundBulkMessageUser[];
}

export interface ICourierBulkIngestError {
  user: any;
  error: any;
}

export interface ICourierBulkIngestUsersResponse {
  total: number;
  errors?: ICourierBulkIngestError[];
}

export interface ICourierBulkRunJobParams {
  jobId: string;
}

export interface ICourierBulkGetJobParams {
  jobId: string;
}

export type BulkJobStatus = "CREATED" | "PROCESSING" | "COMPLETED" | "ERROR";
export type BulkJobUserStatus = "PENDING" | "ENQUEUED" | "ERROR";

export interface ICourierBulkGetJobResponse {
  job: {
    definition: IInboundBulkMessage;
    enqueued: number;
    failures: number;
    received: number;
    status: BulkJobStatus;
  };
}

export interface ICourierBulkGetJobUsersParams {
  jobId: string;
  cursor?: string;
}

export interface ICourierBulkMessageUserResponse
  extends InboundBulkMessageUser {
  status: BulkJobUserStatus;
  messageId?: string;
}

export interface ICourierBulkGetJobUsersResponse {
  items: ICourierBulkMessageUserResponse[];
  paging: {
    cursor?: string;
    more: boolean;
  };
}

export interface ICourierClientBulk {
  createJob: (
    params: ICourierBulkCreateJobParams,
    config?: ICourierBulkConfig
  ) => Promise<ICourierBulkCreateJobResponse>;
  ingestUsers: (
    params: ICourierBulkIngestUsersParams,
    config?: ICourierBulkConfig
  ) => Promise<ICourierBulkIngestUsersResponse>;
  runJob: (
    params: ICourierBulkRunJobParams,
    config?: ICourierBulkConfig
  ) => Promise<void>;
  getJob: (
    params: ICourierBulkGetJobParams
  ) => Promise<ICourierBulkGetJobResponse>;
  getJobUsers: (
    params: ICourierBulkGetJobUsersParams
  ) => Promise<ICourierBulkGetJobUsersResponse>;
}
