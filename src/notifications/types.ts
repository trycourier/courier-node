import { ICourierPaging } from "../types";

export type MessageRoutingMethod = "all" | "single";
export type MessageRoutingChannel = string | IMessageRouting;
export interface IMessageRouting {
  method: MessageRoutingMethod;
  channels: MessageRoutingChannel[];
}

export interface ICourierNotificationListResponse {
  paging: ICourierPaging;
  results: Array<{
    created_at: number;
    id: string;
    routing: IMessageRouting;
    tags: {
      data: string[];
    };
    title: string;
    updated_at: number;
  }>;
}

export interface ICourierNotificationListParams {
  cursor?: string;
}

export type BlockType =
  | "action"
  | "divider"
  | "image"
  | "jsonnet"
  | "list"
  | "markdown"
  | "quote"
  | "template"
  | "text";

export interface ICourierNotificationBlock {
  alias?: string;
  context?: string;
  id: string;
  type: BlockType;
  content?: string | { parent?: string; children?: string };
  locales?: {
    [locale: string]:
      | string
      | {
          parent?: string;
          children?: string;
        };
  };
  checksum?: string;
}

export interface ICourierNotificationChannel {
  id: string;
  type?: string;
  content?: {
    subject?: string;
    title?: string;
  };
  locales?: {
    [locale: string]: {
      subject?: string;
      title?: string;
    };
  };
  checksum?: string;
}

export interface ICourierNotificationGetContentResponse {
  blocks?: ICourierNotificationBlock[];
  channels?: ICourierNotificationChannel[];
  checksum?: string;
}

export interface ICourierNotificationPostVariationsParams {
  blocks?: ICourierNotificationBlock[];
  channels?: ICourierNotificationChannel[];
}

export interface ICourierNotificationPostDraftVariationsParams {
  blocks?: ICourierNotificationBlock[];
  channels?: ICourierNotificationChannel[];
}

export type CheckStatus = "RESOLVED" | "FAILED" | "PENDING";

export interface ICheck {
  id: string;
  status: CheckStatus;
  type: "custom";
  updated: number;
}

export interface ICourierNotificationGetSubmissionChecksResponse {
  checks: ICheck[];
}

export interface ICourierNotificationPutSubmissionChecksParams {
  checks: Array<Omit<ICheck, "updated">>;
}

export interface ICourierNotificationPutSubmissionChecksResponse {
  checks: ICheck[];
}

export interface ICourierClientNotifications {
  list: (
    params: ICourierNotificationListParams
  ) => Promise<ICourierNotificationListResponse>;

  getContent: (id: string) => Promise<ICourierNotificationGetContentResponse>;

  getDraftContent: (
    id: string
  ) => Promise<ICourierNotificationGetContentResponse>;

  postVariations: (
    id: string,
    params: ICourierNotificationPostVariationsParams
  ) => Promise<void>;

  postDraftVariations: (
    id: string,
    params: ICourierNotificationPostDraftVariationsParams
  ) => Promise<void>;

  getSubmissionChecks: (
    id: string,
    submissionId: string
  ) => Promise<ICourierNotificationGetSubmissionChecksResponse>;

  putSubmissionChecks: (
    id: string,
    submissionId: string,
    params: ICourierNotificationPutSubmissionChecksParams
  ) => Promise<ICourierNotificationPutSubmissionChecksResponse>;

  cancelSubmission: (id: string, submissionId: string) => Promise<void>;
}
