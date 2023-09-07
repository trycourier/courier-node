export interface ICourierAuthIssueTokenParameters {
  scope: string;
  expiresIn: string;
}

export interface ICourierAuthIssueTokenResponse {
  token?: string;
}

export interface ICourierClientAuth {
  postIssueToken: (
    scope: string,
    expiresIn?: string
  ) => Promise<ICourierAuthIssueTokenResponse>;
}
