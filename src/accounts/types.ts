import { ISubscriptionTopic } from "../preferences/types";

export interface IAccount {
  brand_id?: string;
  id: string;
  name: string;
  parent_account_id?: string;
  preferences?: IAccountPreferences;
  properties?: { [key: string]: any };
  user_profile?: Record<string, any>;
  type: "account";
}

export interface IPaginatedResult<T> {
  cursor?: string;
  has_more: boolean;
  items: T[];
  type: "list";
}

export interface IAccountListOptions {
  cursor?: string;
  limit?: string;
}

export interface IAccountPreferences {
  custom_routing?: ISubscriptionTopic["routingPreferences"];
  has_custom_routing?: ISubscriptionTopic["hasCustomRouting"];
  topics: Array<{
    default_status: ISubscriptionTopic["defaultStatus"];
    id: string;
  }>;
}

export interface ICourierClientAccounts {
  delete: (id: string) => Promise<void>;
  get: (id: string) => Promise<IAccount>;
  listAccounts: (
    options?: IAccountListOptions
  ) => Promise<IPaginatedResult<IAccount>>;
  put: (account: Omit<IAccount, "type">) => Promise<IAccount>;
}
