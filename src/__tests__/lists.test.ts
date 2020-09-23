import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierList,
  ICourierListFindByRecipientIdResponse,
  ICourierListGetAllResponse,
  ICourierListGetSubscriptionsResponse
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

const mockFindByRecipientIdResponse: ICourierListFindByRecipientIdResponse = {
  paging: {
    more: false
  },
  results: [mockListResponse]
};

const mockGetListSubscriptionsResponse: ICourierListGetSubscriptionsResponse = {
  items: [
    {
      recipient: "ABCD1234"
    }
  ],
  paging: {
    more: false
  }
};

describe("CourierLists", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    // GET /lists
    mock.onGet("/lists").reply(200, mockGetListsResponse);
    // GET /lists/{list_id}/subscriptions
    mock
      .onGet(/\/lists\/.*\/subscriptions/)
      .reply(200, mockGetListSubscriptionsResponse);
    // GET /lists/{list_id}
    mock.onGet(/\/lists\/.*/).reply(200, mockListResponse);
    // PUT /lists/{list_id}/subscriptions
    mock.onPut(/\/lists\/.*\/subscriptions/).reply(204);
    // PUT /lists/{list_id}/subscriptions/{recipient_id}
    mock.onPut(/\/lists\/.*\/subscriptions\/.*/).reply(204);
    // PUT /lists/{list_id}/restore
    mock.onPut(/\/lists\/.*\/restore/).reply(204);
    // PUT /lists/{list_id}
    mock.onPut(/\/lists\/.*/).reply(204);
    // DELETE /lists/{list_id}/subscriptions/{recipient_id}
    mock.onDelete(/\/lists\/.*\/subscriptions\/.*/).reply(204);
    // DELETE /lists/{list_id}
    mock.onDelete(/\/lists\/.*/).reply(204);
    // POST /send/list
    mock.onPost("/send/list").reply(200, mockSendResponse);
    // GET /profiles/{recipient_id}/lists
    mock
      .onGet(/\/profiles\/.*\/lists/)
      .reply(200, mockFindByRecipientIdResponse);
  });

  test(".send with List", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const params: ICourierSendListParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      event: "EVENT_ID",
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
      event: "EVENT_ID",
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
    ).resolves.toBeUndefined();
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

  test(".putSubscriptions", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.putSubscriptions("example.list.id", ["ABCD1234"])
    ).resolves.toBeUndefined();
  });

  test(".subscribe", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.subscribe("example.list.id", "ABCD1234")
    ).resolves.toBeUndefined();
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
    ).resolves.toMatchObject(mockFindByRecipientIdResponse);
  });
});
