export interface ICourierAuthIssueTokenParameters {
  scope: string;
  expires_in: string;
}

export interface ICourierAuthIssueTokenResponse {
  token?: string;
}

export interface ICourierClientAuth {
  postIssueToken: (
    scope: string,
    expires_in?: string
  ) => Promise<ICourierAuthIssueTokenResponse>;
}
