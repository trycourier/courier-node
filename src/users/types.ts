export interface IUserAccount {
  account_id: string;
  profile: Record<string, any>;
}

export interface IUser {
  accounts: IUserAccount[];
  profile: Record<string, any>;
}

export interface ICourierClientUsers {
  put: (id: string, user: IUser) => Promise<void>;
  putAccounts: (id: string, accounts: IUserAccount[]) => Promise<void>;
}
