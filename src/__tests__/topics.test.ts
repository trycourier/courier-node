import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import { ICourierTopic } from "../topics/types";

const mockTopicResponse: ICourierTopic = {
  created: 1591814489093,
  id: "example.topic.id",
  name: "Example Topic",
  updated: 1591814489143
};

describe("CourierTopics", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet(/\/topics\/.*/).reply(200, mockTopicResponse);
  });

  test(".getTopic", async () => {
    const { topics } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(topics.getTopic("example.topic.id")).resolves.toMatchObject(
      mockTopicResponse
    );
  });
});
