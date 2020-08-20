import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierMessage,
  ICourierMessageGetAllResponse,
  ICourierMessageHistory
} from "../messages/types";

const mockGetMessageResponse: ICourierMessage = {
  id: "mockMessageId",
  recipient: "mockRecipient",
  status: "mockStatus"
};

const mockGetAllMessageResponse: ICourierMessageGetAllResponse = {
  paging: { more: false },
  results: [mockGetMessageResponse]
};

const mockGetMessageHisoryResponse: ICourierMessageHistory = {
  results: [
    {
      event_id: "EVENT",
      notification_id: "WRAH2X01T84QFAND9G9BYY646DHJ",
      ts: 1597864615572,
      type: "MAPPED"
    }
  ]
};

describe("CourierMessages", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock
      .onGet(/\/messages\/.*\/history/)
      .reply(200, mockGetMessageHisoryResponse);
    mock.onGet(/\/messages\/.*/).reply(200, mockGetMessageResponse);
    mock.onGet(/\/messages/).reply(200, mockGetAllMessageResponse);
  });

  test(".getMessages", async () => {
    const { messages } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(messages.getMessages()).resolves.toMatchObject(
      mockGetAllMessageResponse
    );
  });

  test(".getMessage", async () => {
    const { messages } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      messages.getMessage(mockGetMessageResponse.id)
    ).resolves.toMatchObject(mockGetMessageResponse);
  });

  test(".getMessageHistory", async () => {
    const { messages } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      messages.getMessageHistory(mockGetMessageResponse.id)
    ).resolves.toMatchObject(mockGetMessageHisoryResponse);
  });
});
