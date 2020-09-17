import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierList,
  ICourierListGetAllResponse,
  ICourierListGetSubscriptionsResponse,
  ICourierListRecipient
} from "../lists/types";

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

const mockGetListSubscribersResponse: ICourierListGetSubscriptionsResponse = {
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
      .reply(200, mockGetListSubscribersResponse);
    mock.onGet(/\/lists\/.*/).reply(200, mockListResponse);
    mock.onPost(/\/lists\/.*\/subscriptions/).reply(204);
    mock
      .onPut(/\/lists\/.*\/subscriptions\/.*/)
      .reply(200, mockRecipientResponse);
    mock.onPut(/\/lists\/.*\/restore/).reply(204);
    mock.onPut(/\/lists\/.*/).reply(200, mockListResponse);
    mock.onDelete(/\/lists\/.*\/subscriptions\/.*/).reply(204);
    mock.onDelete(/\/lists\/.*/).reply(204);
  });

  test(".getLists", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(lists.getLists()).resolves.toMatchObject(mockGetListsResponse);
  });

  test(".getList", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(lists.getList("example.list.id")).resolves.toMatchObject(
      mockListResponse
    );
  });

  test(".replaceLists", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.replaceList("example.list.id", {
        id: "example.list.id",
        name: "Updated Example List"
      })
    ).resolves.toMatchObject(mockListResponse);
  });

  test(".deleteList", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(lists.deleteList("example.list.id")).resolves.toBeUndefined();
  });

  test(".restoreList", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(lists.restoreList("example.list.id")).resolves.toBeUndefined();
  });

  test(".getListSubscribers", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.getListSubscriptions("example.list.id")
    ).resolves.toMatchObject(mockGetListSubscribersResponse);
  });

  test(".bulkSubscribeToList", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.bulkSubscribeToList("example.list.id", ["ABCD1234"])
    ).resolves.toBeUndefined();
  });

  test(".bulkSubscribeToList with Idempotency Key", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost(/\/lists\/.*\/subscriptions/).reply(async (config) => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [204];
    });

    await lists.bulkSubscribeToList("example.list.id", ["ABCD1234"], {
      idempotencyKey: "IDEMPOTENCY_KEY_UUID"
    });
  });

  test(".subscribeToList", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.subscribeToList("example.list.id", "ABCD1234")
    ).resolves.toMatchObject(mockRecipientResponse);
  });

  test(".unsubscribeFromList", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.unsubscribeFromList("example.list.id", "ABCD1234")
    ).resolves.toBeUndefined();
  });
});
