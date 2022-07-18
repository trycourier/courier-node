import { ICourierClientConfiguration } from "../types";
import {
  DeleteUserTokenOpts,
  GetUserTokenOpts,
  GetUserTokenResponse,
  GetUserTokensOpts,
  PatchUserTokenOpts,
  PutUserTokenOpts,
  PutUserTokensOpts,
} from "./types";

/** Associate a group of tokens with the supplied :user_id. Will overwrite any existing tokens associated with that user. */
const putUserTokens = (options: ICourierClientConfiguration) => {
  return async (opts: PutUserTokensOpts): Promise<void> => {
    await options.httpClient.put(`/users/${opts.user_id}/tokens`, {
      tokens: opts.tokens,
    });
  };
};

/** Associate a token with the supplied :user_id. If token exists it's value will be replaced with the passed body, otherwise the token will be created. */
const putUserToken = (options: ICourierClientConfiguration) => {
  return async (opts: PutUserTokenOpts): Promise<void> => {
    await options.httpClient.put(
      `/users/${opts.user_id}/tokens/${opts.token.token}`,
      opts.token
    );
  };
};

const patchUserToken = (options: ICourierClientConfiguration) => {
  return async (opts: PatchUserTokenOpts): Promise<void> => {
    await options.httpClient.patch(
      `/users/${opts.user_id}/tokens/${opts.token}`,
      { patch: opts.patch }
    );
  };
};

const getUserToken = (options: ICourierClientConfiguration) => {
  return async (opts: GetUserTokenOpts): Promise<GetUserTokenResponse> => {
    const res = await options.httpClient.get(
      `/users/${opts.user_id}/tokens/${opts.token}`
    );
    return res.data as GetUserTokenResponse;
  };
};

const getUserTokens = (options: ICourierClientConfiguration) => {
  return async (
    opts: GetUserTokensOpts
  ): Promise<{ tokens: GetUserTokenResponse[] }> => {
    const res = await options.httpClient.get(`/users/${opts.user_id}/tokens`);
    return res.data as { tokens: GetUserTokenResponse[] };
  };
};

const deleteUserToken = (options: ICourierClientConfiguration) => {
  return async (opts: DeleteUserTokenOpts): Promise<void> => {
    await options.httpClient.delete(
      `/users/${opts.user_id}/tokens/${opts.token}`
    );
  };
};

export const tokenManagement = (options: ICourierClientConfiguration) => {
  return {
    putUserTokens: putUserTokens(options),
    putUserToken: putUserToken(options),
    patchUserToken: patchUserToken(options),
    getUserToken: getUserToken(options),
    getUserTokens: getUserTokens(options),
    deleteUserToken: deleteUserToken(options),
  };
};
