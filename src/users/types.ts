export interface IUserAccount {
  account_id: string;
  profile: Record<string, any>;
}

export interface IUser {
  accounts: IUserAccount[];
  profile: Record<string, any>;
}

export type ChannelClassification =
  | "direct_message"
  | "email"
  | "push"
  | "sms"
  | "webhook"
  | "inbox";

export interface ITopicPreference {
  /**
   * Should contain unique items.
   */
  custom_routing?: ChannelClassification[];
  default_status: "OPTED_IN" | "OPTED_OUT";
  has_custom_routing?: boolean;
  status: "OPTED_IN" | "OPTED_OUT";
  topic_id: string;
  topic_name: string;
}

interface IPagingInfo {
  cursor: string;
  more: boolean;
}

export interface IGetTopicPreferencesResponse {
  topic: ITopicPreference;
}

export interface IGetTopicsResponse {
  paging: IPagingInfo;
  items: ITopicPreference[];
}

export interface ICourierClientUsers {
  getUserPreferenceByTopic: (
    userId: string,
    topicId: string
  ) => Promise<IGetTopicPreferencesResponse>;
  getUserPreferenceByTopics: (userId: string) => Promise<IGetTopicsResponse>;
  put: (id: string, user: IUser) => Promise<void>;
  putAccounts: (id: string, accounts: IUserAccount[]) => Promise<void>;
  putUserPreferenceByTopic: (
    userId: string,
    topicId: string,
    topic: Omit<ITopicPreference, "topic_id" | "topic_name">
  ) => Promise<void>;
}
