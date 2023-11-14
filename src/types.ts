import { ICourierClientAudiences } from "./audiences/types";
import { auditEvents } from "./audit-events";
import { ICourierClientAutomations } from "./automations/types";
import { ICourierClientBulk } from "./bulk/types";
import {
  ICourierAuthIssueTokenParameters,
  ICourierAuthIssueTokenResponse
} from "./issue-token/types";
import {
  ICourierClientLists,
  ICourierList,
  ICourierRecipientSubscriptionsResponse
} from "./lists/types";
import { ICourierClientNotifications } from "./notifications/types";
import {
  ICourierClientPreferences,
  IRecipientPreferences
} from "./preferences/types";
import { Message } from "./send/types";
import { ICourierClientTenants } from "./tenants/types";
import { tokenManagement } from "./token-management";
import { users } from "./users";

export interface IInitHttpClientOptions {
  baseUrl: string;
  version: string;
  authorizationToken: string;
}

export type HttpMethodClient = <T>(
  url: string,
  body?: object,
  config?: {
    params?: Record<string, string>;
    idempotencyKey?: string;
    idempotencyExpiry?: number;
  }
) => Promise<{ data: T }>;

export interface IHttpClient {
  post: HttpMethodClient;
  patch: HttpMethodClient;
  put: HttpMethodClient;
  get: HttpMethodClient;
  delete: HttpMethodClient;
}

export interface ICourierClientOptions {
  baseUrl?: string;
  authorizationToken?: string;
}

export interface ICourierClientConfiguration {
  httpClient: IHttpClient;
}

// POST /send

export interface ICourierSendParameters {
  eventId: string;
  recipientId: string;
  data?: object;
  brand?: string;
  preferences?: IRecipientPreferences;
  profile?: object;
  override?: object;
}

export interface ICourierSendMessageParameters {
  message: Message;
}

export interface ICourierSendConfig {
  idempotencyKey?: string;
  idempotencyExpiry?: number;
}

export interface ICourierSendResponse {
  messageId: string;
}

export interface ICourierSendMessageResponse {
  requestId: string;
}

export interface ICourierSendParams {
  event: string;
  data?: object;
  brand?: string;
  override?: object;
}
export interface ICourierSendListParams extends ICourierSendParams {
  list: string;
}
export interface ICourierSendPatternParams extends ICourierSendParams {
  pattern: string;
}

export type ICourierSendListOrPatternParams =
  | ICourierSendListParams
  | ICourierSendPatternParams;
// PUT /profiles/{id}

export interface ICourierProfilePutParameters {
  recipientId: string;
  profile: object;
}

export interface ICourierProfilePutResponse {
  status: "SUCCESS";
}

// POST /profiles/{id}

export interface ICourierProfilePostParameters {
  recipientId: string;
  profile: object;
}
// POST /profiles/{id}/lists
export type List = Omit<ICourierList, "id"> & {
  listId: string;
  preferences?: IRecipientPreferences;
};

export interface ICourierProfileListsPostParameters {
  recipientId: string;
  lists: List[];
}

export interface ICourierProfilePostConfig {
  idempotencyKey?: string;
  idempotencyExpiry?: number;
}

export interface ICourierProfilePostResponse {
  status: "SUCCESS";
}

// GET /profiles/{id}

export interface ICourierProfileGetParameters {
  recipientId: string;
}

export interface ICourierProfileGetResponse {
  profile: object;
}

export interface ICourierMessagesGetParameters {
  cursor?: string;
  eventId?: string;
  listId?: string;
  messageId?: string;
  notificationId?: string;
  recipientId?: string;
  status?: string | string[];
  tags?: string | string[];
  traceId?: string;
}

export interface ICourierMessagesGetResponse {
  paging: ICourierPaging;
  results: Array<{
    enqueued?: number;
    event?: string;
    id: string;
    notification?: string;
    recipient: string;
    sent?: number;
    status: string;
    tags?: string[];
  }>;
}

export interface ICourierMessageCancelResponse {
  canceledAt: number; // the milli second timestamp of the successful cancelation request
  event: string; // event id of the notification
  id: string; // the message id
  recipient: string; // the recipient email or id
  status: string; // the message status

  // optional
  clicked?: number; // the milli-second timestamp of the clicked event
  delivered?: number; // the milli-second timestamp of the deleivered event
  enqueued?: number; // the milli-second timestamp of the enqueued event
  error?: string; // the error message
  jobId?: string; // the bulk job id
  listId?: string; // the list id of the list
  listMessageId?: string; // the request id from the sucessful list send request
  notification?: string; // the notification id
  opened?: number; // the milli-second timestamp of the opened event
  runId?: string; // the automation run id
  sent?: number; // the milli-second timestamp of the sent event
}

export interface ICourierMessageGetResponse {
  clicked?: number;
  delivered?: number;
  enqueued?: number;
  error?: string;
  event?: string;
  id: string;
  idempotencyKey?: string;
  listId?: string;
  listMessageId?: string;
  notification?: string;
  opened?: number;
  providers?: Array<{
    channel: {
      key?: string;
      name?: string;
      template: string;
    };
    clicked?: number;
    delivered?: number;
    error?: string;
    provider: string;
    reference?: { [key: string]: string | number };
    sent: number;
    status: MessageStatus;
  }>;
  reason?: MessageStatusReason;
  reasonCode?: MessageStatusReasonCode;
  reasonDetails?: string;
  recipient: string;
  runId?: string;
  sent?: number;
  status: MessageStatus;
}

export type MessageStatus =
  | "CLICKED"
  | "DELIVERED"
  | "ENQUEUED"
  | "FILTERED"
  | "OPENED"
  | "SENT"
  | "SIMULATED"
  | "UNDELIVERABLE"
  | "UNMAPPED"
  | "UNROUTABLE";

export type MessageHistoryType =
  | MessageStatus
  | "DELIVERING"
  | "FILTERED"
  | "MAPPED"
  | "PROFILE_LOADED"
  | "RENDERED";

export type MessageStatusReason =
  | "BOUNCED"
  | "FAILED"
  | "FILTERED"
  | "NO_CHANNELS"
  | "NO_PROVIDERS"
  | "OPT_IN_REQUIRED"
  | "PROVIDER_ERROR"
  | "UNPUBLISHED"
  | "UNSUBSCRIBED";

export type MessageStatusReasonCode = "HARD" | "SOFT";

export interface IMessageHistory<T extends MessageHistoryType> {
  ts: number;
  type: T;
}

export interface IEnqueuedMessageHistory extends IMessageHistory<"ENQUEUED"> {
  data?: string | { [key: string]: string };
  event: string;
  profile?: { [key: string]: any };
  override?: { [key: string]: any };
  recipient: string;
}

export interface IMappedMessageHistory extends IMessageHistory<"MAPPED"> {
  event_id: string;
  notification_id: string;
}

export interface IProfileLoadedMessageHistory
  extends IMessageHistory<"PROFILE_LOADED"> {
  merged_profile?: { [key: string]: any };
  received_profile?: { [key: string]: any };
  stored_profile?: { [key: string]: any };
}

export interface IRenderedMessageHistory
  extends IRoutedMessageHistory<"RENDERED"> {
  output: {
    [key: string]: string;
  };
}

export interface IUnroutableMessageHistory
  extends IMessageHistory<"UNROUTABLE"> {
  reason: MessageStatusReason;
}

export interface IUndeliverableMessageHistory
  extends IMessageHistory<"UNDELIVERABLE">,
    Partial<Omit<IRoutedMessageHistory<"UNDELIVERABLE">, "ts" | "type">> {
  reason: MessageStatusReason;
  reasonCode?: MessageStatusReasonCode;
}

export type RoutedMessageHistoryTypes = Extract<
  MessageHistoryType,
  | "CLICKED"
  | "DELIVERED"
  | "DELIVERING"
  | "OPENED"
  | "RENDERED"
  | "SENT"
  | "UNDELIVERABLE"
>;

export interface IRoutedMessageHistory<T extends RoutedMessageHistoryTypes>
  extends IMessageHistory<T> {
  channel: { id: string; label?: string };
  integration: { id: string; provider: string };
}

export interface IDeliveredMessageHistory
  extends IRoutedMessageHistory<"DELIVERED"> {
  reference: { [key: string]: string };
}

export interface IProviderErrorMessageHistory
  extends IRoutedMessageHistory<"UNDELIVERABLE"> {
  error_message: string;
}

export interface ICourierMessageGetHistoryResponse {
  results: Array<
    | IEnqueuedMessageHistory
    | IMappedMessageHistory
    | IProfileLoadedMessageHistory
    | IRenderedMessageHistory
    | IRoutedMessageHistory<RoutedMessageHistoryTypes>
    | IDeliveredMessageHistory
    | IProviderErrorMessageHistory
    | IUndeliverableMessageHistory
    | IUnroutableMessageHistory
  >;
}

export interface IApiMessageOutputItem {
  channel: string;
  channel_id: string;
  content: {
    html?: string;
    title?: string;
    blocks?: any[];
    body?: string;
    subject?: string;
    text?: string;
  };
}

export interface ICourierMessageGetOutputResponse {
  results: IApiMessageOutputItem[];
}

// DELETE /profiles/{recipient_id}

export interface ICourierProfileDeleteParameters {
  recipientId: string;
}

interface ICourierBrandSettings {
  colors?: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  email?: {
    footer: object;
    header: object;
  };
}

interface ICourierBrandSnippets {
  items: Array<{
    format: string;
    name: string;
    value: string;
  }>;
}

export interface ICourierBrand {
  created: number;
  id?: string;
  name: string;
  published: number;
  settings: ICourierBrandSettings;
  updated: number;
  snippets?: ICourierBrandSnippets;
  version: string;
}

export interface ICourierPaging {
  cursor?: string;
  more: boolean;
}

export interface ICourierBrandParameters {
  id?: string;
  name: string;
  settings: ICourierBrandSettings;
  snippets?: ICourierBrandSnippets;
}

export interface ICourierBrandPostConfig {
  idempotencyKey?: string;
  idempotencyExpiry?: number;
}

export interface ICourierBrandPutParameters extends ICourierBrandParameters {
  id: string;
}

export interface ICourierBrandGetAllResponse {
  paging: ICourierPaging;
  results: ICourierBrand[];
}

export type SendResponse<
  T extends ICourierSendParameters | ICourierSendMessageParameters
> = T extends ICourierSendParameters
  ? ICourierSendResponse
  : ICourierSendMessageResponse;

export interface ICourierClient {
  addRecipientToLists: (
    params: ICourierProfileListsPostParameters
  ) => Promise<ICourierProfilePostResponse>;
  tenants: ICourierClientTenants;
  audiences: ICourierClientAudiences;
  auditEvents: ReturnType<typeof auditEvents>;
  automations: ICourierClientAutomations;
  bulk: ICourierClientBulk;
  cancelMessage: (messageId: string) => Promise<ICourierMessageCancelResponse>;
  createBrand: (
    params: ICourierBrandParameters,
    config?: ICourierBrandPostConfig
  ) => Promise<ICourierBrand>;
  deleteBrand: (brandId: string) => Promise<void>;
  getBrand: (brandId: string) => Promise<ICourierBrand>;
  getBrands: (params?: {
    cursor: string;
  }) => Promise<ICourierBrandGetAllResponse>;
  getMessage: (messageId: string) => Promise<ICourierMessageGetResponse>;
  getMessageHistory: (
    messageId: string
  ) => Promise<ICourierMessageGetHistoryResponse>;
  getMessageOutput: (
    messageId: string
  ) => Promise<ICourierMessageGetOutputResponse>;
  getMessages: (
    params?: ICourierMessagesGetParameters
  ) => Promise<ICourierMessagesGetResponse>;
  getProfile: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierProfileGetResponse>;
  deleteProfile: (params: ICourierProfileDeleteParameters) => Promise<void>;
  getRecipientSubscriptions: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierRecipientSubscriptionsResponse>;
  lists: ICourierClientLists;
  mergeProfile: (
    params: ICourierProfilePostParameters,
    config?: ICourierProfilePostConfig
  ) => Promise<ICourierProfilePostResponse>;
  notifications: ICourierClientNotifications;
  preferences: ICourierClientPreferences;
  removeRecipientFromAllLists: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierProfilePostResponse>;
  replaceBrand: (params: ICourierBrandPutParameters) => Promise<ICourierBrand>;
  replaceProfile: (
    params: ICourierProfilePutParameters
  ) => Promise<ICourierProfilePutResponse>;
  send: <T extends ICourierSendParameters | ICourierSendMessageParameters>(
    params: T,
    config?: ICourierSendConfig
  ) => Promise<SendResponse<T>>;
  tokenManagement: ReturnType<typeof tokenManagement>;
  users: ReturnType<typeof users>;
  issueToken: (
    params: ICourierAuthIssueTokenParameters
  ) => Promise<ICourierAuthIssueTokenResponse>;
}
