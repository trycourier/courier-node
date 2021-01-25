export enum NOTIF_STATUS {
  OPTED_IN = "OPTED_IN",
  OPTED_OUT = "OPTED_OUT"
}

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

export interface ICourierPreferencesPutParameters {
  notification: { [notificationId: string]: NOTIF_STATUS };
  categories?: { [categoryId: string]: NOTIF_STATUS };
}

export interface ICourierPreferencesPutResponse {
  status: "SUCCESS";
}

export type ICourierChannelClassification =
  | "direct_message"
  | "email"
  | "push"
  | "webhook";

export interface ICourierProfilePreferences {
  preferred_channel?: ICourierChannelClassification;
}

export interface ICourierClientPreferences {
  get: (recipientId: string) => Promise<ICourierPreferencesGetResponse>;
  list: () => Promise<ICourierPreferencesListResponse>;
  put: (
    recipientId: string,
    params: ICourierPreferencesPutParameters
  ) => Promise<ICourierPreferencesPutResponse>;
}
