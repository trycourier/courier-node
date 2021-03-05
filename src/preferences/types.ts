export interface ICourierNotificationPreferences {
  [id: string]: {
    status: PreferenceStatus;
  };
}

export interface ICourierPreferencesGetResponse {
  categories?: ICourierNotificationPreferences;
  notifications: ICourierNotificationPreferences;
}

export interface ICourierPreferencesListResponse {
  uncategorized: Array<{}>;
  categories: Array<{
    id: string;
    title: string;
    config?: any; // TODO
    notifications?: Array<{}>;
  }>;
}

export type PreferenceStatus = "OPTED_OUT" | "OPTED_IN";

export interface IRecipientPreferences {
  categories?: ICourierNotificationPreferences;
  notifications: ICourierNotificationPreferences;
}

export interface ICourierPreferencesPutResponse {
  status: "SUCCESS";
}

export interface ICourierClientPreferences {
  get: (recipientId: string) => Promise<ICourierPreferencesGetResponse>;
  list: () => Promise<ICourierPreferencesListResponse>;
  put: (
    recipientId: string,
    params: IRecipientPreferences
  ) => Promise<ICourierPreferencesPutResponse>;
}
