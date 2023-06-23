export type RuleType = "snooze";

export interface IRule<T extends RuleType> {
  type: T;
}

export interface ISnoozeRule extends IRule<"snooze"> {
  start?: string;
  until: string;
}

export type ChannelClassification = "direct_message" | "email" | "push";

export type Rule = ISnoozeRule;

export type PreferenceStatus = "OPTED_OUT" | "OPTED_IN";

export interface ICourierNotificationPreferences {
  [id: string]: {
    status: PreferenceStatus;
    rules?: Rule[];
    channel_preferences?: Array<{
      channel: ChannelClassification;
    }>;
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
