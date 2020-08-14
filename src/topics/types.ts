import { ICourierPaging } from "../types";

export interface ICourierTopic {
  created?: number;
  id: string;
  name: string;
  updated?: number;
}

export interface ICourierTopicGetAllParams {
  cursor?: string;
  pattern?: string;
}

export interface ICourierTopicGetAllResponse {
  paging: ICourierPaging;
  results: ICourierTopic[];
}

export interface ICourierTopicGetSubscribersParams {
  cursor?: string;
}

export interface ICourierTopicRecipient {
  recipient: string;
  preferences: object;
}

export interface ICourierTopicPostConfig {
  idempotencyKey?: string;
}

export interface ICourierTopicGetSubscribersResponse {
  paging: ICourierPaging;
  results: ICourierTopicRecipient[];
}

export interface ICourierClientTopics {
  bulkSubscribeToTopic: (
    topicId: string,
    subscribers: string[],
    config?: ICourierTopicPostConfig
  ) => Promise<void>;
  deleteTopic: (topicId: string) => Promise<void>;
  getTopic: (topicId: string) => Promise<ICourierTopic>;
  getTopicSubscribers: (
    topicId: string,
    params?: ICourierTopicGetSubscribersParams
  ) => Promise<ICourierTopicGetSubscribersResponse>;
  getTopics: (
    params?: ICourierTopicGetAllParams
  ) => Promise<ICourierTopicGetAllResponse>;
  replaceTopic: (
    topicId: string,
    topic: ICourierTopic
  ) => Promise<ICourierTopic>;
  subscribeToTopic: (
    topicId: string,
    recipientId: string,
    preferences?: object
  ) => Promise<ICourierTopicRecipient>;
  unsubscribeFromTopic: (topicId: string, recipientId: string) => Promise<void>;
}
