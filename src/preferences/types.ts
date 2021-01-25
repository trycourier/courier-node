export interface ICourierPreferencesGetResponse {
  categories: {
    [notificationId: string]: {
      status: string;
    };
  };
  notifications: {
    [notificationId: string]: {
      status: string;
    };
  };
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

export type PreferenceStatus = "OPTED_OUT" | "OPTED_IN" | undefined;

export interface IRecipientPreferences {
  categories?: {
    [categoryId: string]: {
      status: PreferenceStatus;
    };
  };
  notifications: {
    [notificationId: string]: {
      status: PreferenceStatus;
    };
  };
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
