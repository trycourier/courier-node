import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierList,
  ICourierListGetAllResponse,
  ICourierListGetSubscriptionsResponse,
  ICourierListRecipient
} from "../lists/types";

import {
  ICourierSendListParams,
  ICourierSendPatternParams,
  ICourierSendResponse
} from "../types";

const mockSendResponse: ICourierSendResponse = {
  messageId: "1234"
};

const mockListResponse: ICourierList = {
  created: 1591814489093,
  id: "example.list.id",
  name: "Example List",
  updated: 1591814489143
};

const mockGetListsResponse: ICourierListGetAllResponse = {
  items: [mockListResponse],
  paging: {
    more: false
  }
};

const mockRecipientResponse: ICourierListRecipient = {
  recipient: "ABCD1234"
};

const mockGetListSubscriptionsResponse: ICourierListGetSubscriptionsResponse = {
  items: [mockRecipientResponse],
  paging: {
    more: false
  }
};

describe("CourierLists", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet("/lists").reply(200, mockGetListsResponse);
    mock
      .onGet(/\/lists\/.*\/subscriptions/)
      .reply(200, mockGetListSubscriptionsResponse);
    mock.onGet(/\/lists\/.*/).reply(200, mockListResponse);
    mock.onPost(/\/lists\/.*\/subscriptions/).reply(204);
    mock
      .onPut(/\/lists\/.*\/subscriptions\/.*/)
      .reply(200, mockRecipientResponse);
    mock.onPut(/\/lists\/.*\/restore/).reply(204);
    mock.onPut(/\/lists\/.*/).reply(200, mockListResponse);
    mock.onDelete(/\/lists\/.*\/subscriptions\/.*/).reply(204);
    mock.onDelete(/\/lists\/.*/).reply(204);
    mock.onPost("/send/list").reply(200, mockSendResponse);
    mock.onGet(/\/profiles\/.*\/lists/).reply(200, mockGetListsResponse);
  });

  test(".send with List", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const params: ICourierSendListParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      eventId: "EVENT_ID",
      list: "example.list.id"
    };

    await expect(lists.send(params)).resolves.toMatchObject(mockSendResponse);
  });

  test(".send with Pattern", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const params: ICourierSendPatternParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      eventId: "EVENT_ID",
      pattern: "example.list.*"
    };

    await expect(lists.send(params)).resolves.toMatchObject(mockSendResponse);
  });

  test(".list", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(lists.list()).resolves.toMatchObject(mockGetListsResponse);
  });

  test(".get", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(lists.get("example.list.id")).resolves.toMatchObject(
      mockListResponse
    );
  });

  test(".put", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.put("example.list.id", {
        id: "example.list.id",
        name: "Updated Example List"
      })
    ).resolves.toMatchObject(mockListResponse);
  });

  test(".delete", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(lists.delete("example.list.id")).resolves.toBeUndefined();
  });

  test(".restore", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(lists.restore("example.list.id")).resolves.toBeUndefined();
  });

  test(".getSubscriptions", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.getSubscriptions("example.list.id")
    ).resolves.toMatchObject(mockGetListSubscriptionsResponse);
  });

  test(".bulkSubscribe", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.bulkSubscribe("example.list.id", ["ABCD1234"])
    ).resolves.toBeUndefined();
  });

  test(".bulkSubscribe with Idempotency Key", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost(/\/lists\/.*\/subscriptions/).reply(async (config) => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [204];
    });

    await lists.bulkSubscribe("example.list.id", ["ABCD1234"], {
      idempotencyKey: "IDEMPOTENCY_KEY_UUID"
    });
  });

  test(".subscribe", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.subscribe("example.list.id", "ABCD1234")
    ).resolves.toMatchObject(mockRecipientResponse);
  });

  test(".unsubscribe", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.unsubscribe("example.list.id", "ABCD1234")
    ).resolves.toBeUndefined();
  });

  test(".findByRecipientId", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.findByRecipientId("RECIPIENT_ID")
    ).resolves.toMatchObject(mockGetListsResponse);
  });
});
