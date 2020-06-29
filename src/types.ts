export type HttpMethodClient = <T>(
  url: string,
  body?: object
) => Promise<{ data: T }>;

export interface IHttpClient {
  post: HttpMethodClient;
  patch: HttpMethodClient;
  put: HttpMethodClient;
  get: HttpMethodClient;
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
  preferences?: ICourierProfilePreferences;
  profile?: object;
  override?: object;
}

export interface ICourierSendResponse {
  messageId: string;
}

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

export interface ICourierMessageGetResponse {
  enqueued?: number,
  event?: string,
  id: string,
  notification?: string,
  providers?: Array<{
    channel: {
      name: string;
      template: string;
    },
    provider: string;
    reference: {
      "x-message-id": string;
    },
    sent: number,
    status: string;
  }>;
  recipient: string;
  sent?: number;
  status: string;
}

export type ICourierChannelClassification =
  | "direct_message"
  | "email"
  | "push"
  | "webhook";

export interface ICourierProfilePreferences {
  preferred_channel?: ICourierChannelClassification;
}

export interface ICourierClient {
  send: (params: ICourierSendParameters) => Promise<ICourierSendResponse>;
  getMessage: (
    messageId: string
  ) => Promise<ICourierMessageGetResponse>;
  replaceProfile: (
    params: ICourierProfilePutParameters
  ) => Promise<ICourierProfilePutResponse>;
  mergeProfile: (
    params: ICourierProfilePostParameters
  ) => Promise<ICourierProfilePostResponse>;
  getProfile: (
    params: ICourierProfileGetParameters
  ) => Promise<ICourierProfileGetResponse>;
}
