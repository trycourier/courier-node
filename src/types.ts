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
  authenticationCode: string;
}

export interface ICourierClientConfiguration {
  httpClient: IHttpClient;
}

// POST /send

export interface ICourierSendParameters {
  eventId: string;
  recipientId: string;
  data?: object;
  profile?: object;
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
