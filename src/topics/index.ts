import { ICourierClientConfiguration } from "../types";

import {
  ICourierClientTopics,
  ICourierTopic,
  ICourierTopicGetAllParams,
  ICourierTopicGetAllResponse
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

export const topics = (
  options: ICourierClientConfiguration
): ICourierClientTopics => {
  return {
    getTopic: getTopic(options),
    getTopics: getTopics(options)
  };
};
