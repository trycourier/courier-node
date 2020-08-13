import { ICourierPaging } from "../types";

export interface ICourierTopic {
  created: number;
  id: string;
  name: string;
  updated: number;
}

export interface ICourierTopicGetAllParams {
  cursor?: string;
  pattern?: string;
}

export interface ICourierTopicGetAllResponse {
  paging: ICourierPaging;
  results: ICourierTopic[];
}

export interface ICourierClientTopics {
  getTopics: (
    params?: ICourierTopicGetAllParams
  ) => Promise<ICourierTopicGetAllResponse>;
  getTopic: (topicId: string) => Promise<ICourierTopic>;
}
