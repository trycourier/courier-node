import { ICourierClientConfiguration } from "../types";
import {
  IDeleteUserTokenOpts,
  IGetUserTokenOpts,
  IGetUserTokenResponse,
  IGetUserTokensOpts,
  IPatchUserTokenOpts,
  IPutUserTokenOpts,
  IPutUserTokensOpts
} from "./types";

/** Associate a group of tokens with the supplied :user_id. Will overwrite any existing tokens associated with that user. */
const putUserTokens = (options: ICourierClientConfiguration) => {
  return async (opts: IPutUserTokensOpts): Promise<void> => {
    await options.httpClient.put(`/users/${opts.user_id}/tokens`, {
      tokens: opts.tokens
    });
  };
};

/** Associate a token with the supplied :user_id. If token exists it's value will be replaced with the passed body, otherwise the token will be created. */
const putUserToken = (options: ICourierClientConfiguration) => {
  return async (opts: IPutUserTokenOpts): Promise<void> => {
    await options.httpClient.put(
      `/users/${opts.user_id}/tokens/${opts.token.token}`,
      opts.token
    );
  };
};

const patchUserToken = (options: ICourierClientConfiguration) => {
  return async (opts: IPatchUserTokenOpts): Promise<void> => {
    await options.httpClient.patch(
      `/users/${opts.user_id}/tokens/${opts.token}`,
      { patch: opts.patch }
    );
  };
};

const getUserToken = (options: ICourierClientConfiguration) => {
  return async (opts: IGetUserTokenOpts): Promise<IGetUserTokenResponse> => {
    const res = await options.httpClient.get(
      `/users/${opts.user_id}/tokens/${opts.token}`
    );
    return res.data as IGetUserTokenResponse;
  };
};

const getUserTokens = (options: ICourierClientConfiguration) => {
  return async (
    opts: IGetUserTokensOpts
  ): Promise<{ tokens: IGetUserTokenResponse[] }> => {
    const res = await options.httpClient.get(`/users/${opts.user_id}/tokens`);
    return res.data as { tokens: IGetUserTokenResponse[] };
  };
};

const deleteUserToken = (options: ICourierClientConfiguration) => {
  return async (opts: IDeleteUserTokenOpts): Promise<void> => {
    await options.httpClient.delete(
      `/users/${opts.user_id}/tokens/${opts.token}`
    );
  };
};

export const tokenManagement = (options: ICourierClientConfiguration) => {
  return {
    deleteUserToken: deleteUserToken(options),
    getUserToken: getUserToken(options),
    getUserTokens: getUserTokens(options),
    patchUserToken: patchUserToken(options),
    putUserToken: putUserToken(options),
    putUserTokens: putUserTokens(options)
  };
};
