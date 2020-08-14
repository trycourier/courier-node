import { AxiosRequestConfig } from "axios";
import { ICourierClientConfiguration } from "../types";
import {
  ICourierClientTopics,
  ICourierTopic,
  ICourierTopicGetAllParams,
  ICourierTopicGetAllResponse,
  ICourierTopicGetSubscribersParams,
  ICourierTopicGetSubscribersResponse,
  ICourierTopicPostConfig,
  ICourierTopicRecipient
} from "./types";

const getTopics = (options: ICourierClientConfiguration) => {
  return async (
    params?: ICourierTopicGetAllParams
  ): Promise<ICourierTopicGetAllResponse> => {
    const res = await options.httpClient.get<ICourierTopicGetAllResponse>(
      `/topics`,
      params
    );
    return res.data;
  };
};

const getTopic = (options: ICourierClientConfiguration) => {
  return async (topicId: string): Promise<ICourierTopic> => {
    const res = await options.httpClient.get<ICourierTopic>(
      `/topics/${topicId}`
    );
    return res.data;
  };
};

const replaceTopic = (options: ICourierClientConfiguration) => {
  return async (
    topicId: string,
    topic: ICourierTopic
  ): Promise<ICourierTopic> => {
    const res = await options.httpClient.put<ICourierTopic>(
      `/topics/${topicId}`,
      topic
    );
    return res.data;
  };
};

const deleteTopic = (options: ICourierClientConfiguration) => {
  return async (topicId: string): Promise<void> => {
    await options.httpClient.delete<void>(`/topics/${topicId}`);
  };
};

const getTopicSubscribers = (options: ICourierClientConfiguration) => {
  return async (
    topicId: string,
    params?: ICourierTopicGetSubscribersParams
  ): Promise<ICourierTopicGetSubscribersResponse> => {
    const res = await options.httpClient.get<
      ICourierTopicGetSubscribersResponse
    >(`/topics/${topicId}/subscribers`, params);
    return res.data;
  };
};

const bulkSubscribeToTopic = (options: ICourierClientConfiguration) => {
  return async (
    topicId: string,
    subscribers: string[],
    config?: ICourierTopicPostConfig
  ): Promise<void> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {}
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }
    await options.httpClient.post<void>(
      `/topics/${topicId}/subscribers`,
      {
        subscribers
      },
      axiosConfig
    );
  };
};

const subscribeToTopic = (options: ICourierClientConfiguration) => {
  return async (
    topicId: string,
    recipientId: string,
    preferences?: object
  ): Promise<ICourierTopicRecipient> => {
    const res = await options.httpClient.put<ICourierTopicRecipient>(
      `/topics/${topicId}/subscribers/${recipientId}`,
      { preferences }
    );
    return res.data;
  };
};

const unsubscribeFromTopic = (options: ICourierClientConfiguration) => {
  return async (topicId: string, recipientId: string): Promise<void> => {
    await options.httpClient.delete<void>(
      `/topics/${topicId}/subscribers/${recipientId}`
    );
  };
};

export const topics = (
  options: ICourierClientConfiguration
): ICourierClientTopics => {
  return {
    bulkSubscribeToTopic: bulkSubscribeToTopic(options),
    deleteTopic: deleteTopic(options),
    getTopic: getTopic(options),
    getTopicSubscribers: getTopicSubscribers(options),
    getTopics: getTopics(options),
    replaceTopic: replaceTopic(options),
    subscribeToTopic: subscribeToTopic(options),
    unsubscribeFromTopic: unsubscribeFromTopic(options)
  };
};
