import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierTopic,
  ICourierTopicGetAllResponse,
  ICourierTopicGetSubscribersResponse,
  ICourierTopicRecipient
} from "../topics/types";

const mockTopicResponse: ICourierTopic = {
  created: 1591814489093,
  id: "example.topic.id",
  name: "Example Topic",
  updated: 1591814489143
};

const mockGetTopicsResponse: ICourierTopicGetAllResponse = {
  paging: {
    more: false
  },
  results: [mockTopicResponse]
};

const mockRecipientResponse: ICourierTopicRecipient = {
  preferences: [],
  recipient: "ABCD1234"
};

const mockGetTopicSubscribersResponse: ICourierTopicGetSubscribersResponse = {
  paging: {
    more: false
  },
  results: [mockRecipientResponse]
};

describe("CourierTopics", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet("/topics").reply(200, mockGetTopicsResponse);
    mock
      .onGet(/\/topics\/.*\/subscribers/)
      .reply(200, mockGetTopicSubscribersResponse);
    mock.onGet(/\/topics\/.*/).reply(200, mockTopicResponse);
    mock.onPost(/\/topics\/.*\/subscribers/).reply(204);
    mock
      .onPut(/\/topics\/.*\/subscribers\/.*/)
      .reply(200, mockRecipientResponse);
    mock.onPut(/\/topics\/.*/).reply(200, mockTopicResponse);
    mock.onDelete(/\/topics\/.*\/subscribers\/.*/).reply(204);
    mock.onDelete(/\/topics\/.*/).reply(204);
  });

  test(".getTopics", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(topics.getTopics()).resolves.toMatchObject(
      mockGetTopicsResponse
    );
  });

  test(".getTopic", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(topics.getTopic("example.topic.id")).resolves.toMatchObject(
      mockTopicResponse
    );
  });

  test(".replaceTopics", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      topics.replaceTopic("example.topic.id", {
        id: "example.topic.id",
        name: "Updated Example Topic"
      })
    ).resolves.toMatchObject(mockTopicResponse);
  });

  test(".deleteTopic", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      topics.deleteTopic("example.topic.id")
    ).resolves.toBeUndefined();
  });

  test(".getTopicSubscribers", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      topics.getTopicSubscribers("example.topic.id")
    ).resolves.toMatchObject(mockGetTopicSubscribersResponse);
  });

  test(".bulkSubscribeToTopic", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      topics.bulkSubscribeToTopic("example.topic.id", ["ABCD1234"])
    ).resolves.toBeUndefined();
  });

  test(".bulkSubscribeToTopic with Idempotency Key", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost(/\/topics\/.*\/subscribers/).reply(async (config) => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [204];
    });

    await topics.bulkSubscribeToTopic("example.topic.id", ["ABCD1234"], {
      idempotencyKey: "IDEMPOTENCY_KEY_UUID"
    });
  });

  test(".subscribeToTopic", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      topics.subscribeToTopic("example.topic.id", "ABCD1234")
    ).resolves.toMatchObject(mockRecipientResponse);
  });

  test(".unsubscribeFromTopic", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      topics.unsubscribeFromTopic("example.topic.id", "ABCD1234")
    ).resolves.toBeUndefined();
  });
});
