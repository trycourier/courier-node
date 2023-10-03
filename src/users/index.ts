import { ICourierClientConfiguration } from "../types";
import {
  IGetTopicPreferencesResponse,
  ITopicPreference,
  IUser,
  IUserAccount,
} from "./types";

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

const putUserPreferenceByTopic = (options: ICourierClientConfiguration) => {
  return async (
    userId: string,
    topicId: string,
    topic: Omit<ITopicPreference, "topic_id" | "topic_name">
  ): Promise<void> => {
    await options.httpClient.put<object>(
      `/users/${userId}/preferences/${topicId}`,
      {
        topic,
      }
    );
  };
};

const getUserPreferenceByTopic = (options: ICourierClientConfiguration) => {
  return async (userId: string, topicId: string): Promise<ITopicPreference> => {
    const res = await options.httpClient.get<IGetTopicPreferencesResponse>(
      `/users/${userId}/preferences/${topicId}`
    );
    return res.data?.topic;
  };
};

const getUserPreferenceByTopics = (options: ICourierClientConfiguration) => {
  return async (userId: string): Promise<object> => {
    const res = await options.httpClient.get<{}>(
      `/users/${userId}/preferences`
    );
    return res.data;
  };
};

export const users = (options: ICourierClientConfiguration) => ({
  getUserPreferenceByTopic: getUserPreferenceByTopic(options),
  getUserPreferenceByTopics: getUserPreferenceByTopics(options),
  put: put(options),
  putAccounts: putAccounts(options),
  putUserPreferenceByTopic: putUserPreferenceByTopic(options),
});
