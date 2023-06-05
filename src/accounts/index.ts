import { ICourierClientConfiguration } from "../types";
import * as AccountTypes from "./types";

const deleteAccount = (options: ICourierClientConfiguration) => async (
  accountId: string
): Promise<void> => {
  await options.httpClient.delete<void>(`/accounts/${accountId}`);
};

const getAccount = (options: ICourierClientConfiguration) => {
  return async (accountId: string): Promise<AccountTypes.IAccount> => {
    const response = await options.httpClient.get<AccountTypes.IAccount>(
      `/accounts/${accountId}`
    );
    return response.data;
  };
};

const listAccounts = (options: ICourierClientConfiguration) => {
  return async (
    listOptions?: AccountTypes.IAccountListOptions
  ): Promise<AccountTypes.IPaginatedResult<AccountTypes.IAccount>> => {
    const response = await options.httpClient.get<
      AccountTypes.IPaginatedResult<AccountTypes.IAccount>
    >("/accounts", undefined, {
      params: {
        limit: listOptions?.limit || "20",
        start_after: listOptions?.startAfter || "",
      },
    });
    return response.data;
  };
};

const putAccount = (options: ICourierClientConfiguration) => {
  return async (
    account: Omit<AccountTypes.IAccount, "type">
  ): Promise<AccountTypes.IAccount> => {
    const response = await options.httpClient.put<AccountTypes.IAccount>(
      `/accounts/${account.id}`,
      account
    );
    return response.data;
  };
};

export const accounts = (options: ICourierClientConfiguration) => ({
  delete: deleteAccount(options),
  get: getAccount(options),
  listAccounts: listAccounts(options),
  put: putAccount(options),
});
