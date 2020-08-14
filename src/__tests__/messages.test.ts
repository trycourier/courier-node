import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import { ICourierMessageGetResponse } from "../messages/types";

const mockGetMessageResponse: ICourierMessageGetResponse = {
  id: "mockMessageId",
  recipient: "mockRecipient",
  status: "mockStatus"
};

describe("CourierMessages", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet(/\/messages\/.*/).reply(200, mockGetMessageResponse);
  });

  test(".getMessage", async () => {
    const { messages } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      messages.getMessage(mockGetMessageResponse.id)
    ).resolves.toMatchObject(mockGetMessageResponse);
  });
});
