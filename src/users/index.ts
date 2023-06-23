import { ICourierClientConfiguration } from "../types";
import { IUser, IUserAccount } from "./types";

const put = (options: ICourierClientConfiguration) => {
  return async (id: string, user: IUser): Promise<void> => {
    await options.httpClient.put<IUser>(`/users/${id}`, user);
  };
};
const putAccounts = (options: ICourierClientConfiguration) => {
  return async (id: string, accounts: IUserAccount[]): Promise<void> => {
    await options.httpClient.put<{
      accounts: IUserAccount[];
    }>(`/users/${id}/accounts`, accounts);
  };
};

export const users = (options: ICourierClientConfiguration) => ({
  put: put(options),
  putAccounts: putAccounts(options),
});
