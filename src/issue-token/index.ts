import { ICourierClientConfiguration } from "../types";
import { ICourierAuthIssueTokenParameters, ICourierAuthIssueTokenResponse } from "./types";

export const postIssueToken = (options: ICourierClientConfiguration) => {
  return async (params: ICourierAuthIssueTokenParameters): Promise<ICourierAuthIssueTokenResponse> => {
    const res = await options.httpClient.post<ICourierAuthIssueTokenResponse>(`/auth/issue-token`, {
      expires_in: params.expiresIn,
      scope: params.scope,
    });
    return res.data;
  };
};