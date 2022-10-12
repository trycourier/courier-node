import mockRequests from "./lib/mock-requests";

import { CourierClient } from "../index";

import {
  ICourierList,
  ICourierListFindByRecipientIdResponse,
  ICourierListGetAllResponse,
  ICourierListGetSubscriptionsResponse,
  ICourierPutSubscriptionsRecipient
} from "../lists/types";

import {
  ICourierSendListOrPatternParams,
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
      preferences: {
        notifications: {
          W951R8G37V49KZMK8DEKW8Z588BZ: {
            status: "OPTED_IN"
          }
        }
      },
      recipientId: "ABCD1234"
    }
  ],
  paging: {
    more: false
  }
};

describe("CourierLists", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "GET",
        path: "/lists",
        response: { body: mockGetListsResponse }
      },
      {
        method: "GET",
        path: /\/lists\/.*\/subscriptions/,
        response: { body: mockGetListSubscriptionsResponse }
      },
      {
        method: "GET",
        path: /\/lists\/.*/,
        response: { body: mockListResponse }
      },
      {
        method: "PUT",
        path: /\/lists\/.*\/subscriptions/,
        response: { status: 204 }
      },
      {
        method: "PUT",
        path: /\/lists\/.*\/subscriptions\/.*/,
        response: { status: 204 }
      },
      {
        method: "POST",
        path: /\/lists\/.*\/subscriptions/,
        response: { status: 204 }
      },
      {
        method: "PUT",
        path: /\/lists\/.*\/restore/,
        response: { status: 204 }
      },
      {
        method: "PUT",
        path: /\/lists\/.*/,
        response: { status: 204 }
      },
      {
        method: "DELETE",
        path: /\/lists\/.*\/subscriptions\/.*/,
        response: { status: 204 }
      },
      {
        method: "DELETE",
        path: /\/lists\/.*/,
        response: { status: 204 }
      },
      {
        method: "POST",
        path: "/send/list",
        response: { body: mockSendResponse }
      },
      {
        method: "GET",
        path: /\/profiles\/.*\/lists/,
        response: { body: mockFindByRecipientIdResponse }
      }
    ]);
  });

  test(".send with List", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const params: ICourierSendListOrPatternParams = {
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

    const params: ICourierSendListOrPatternParams = {
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
      lists.putSubscriptions("example.list.id", [{ recipientId: "ABCD1234" }])
    ).resolves.toBeUndefined();
  });

  test(".putSubscriptions with subscription preferences", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const mockNotificationId = "8YA052Y5VV4EMQP2C4KW76WF3BC3";

    const mockRecipientWithPreferences: ICourierPutSubscriptionsRecipient = {
      preferences: {
        notifications: {
          [mockNotificationId]: {
            status: "OPTED_IN"
          }
        }
      },
      recipientId: "ABCD1234"
    };

    await expect(
      lists.putSubscriptions("example.list.id", [mockRecipientWithPreferences])
    ).resolves.toBeUndefined();
  });

  test(".postSubscriptions", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.postSubscriptions("example.list.id", [{ recipientId: "ABCD1234" }])
    ).resolves.toBeUndefined();
  });

  test(".subscribe", async () => {
    const { lists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      lists.subscribe("example.list.id", "ABCD1234", {
        notifications: {
          W951R8G37V49KZMK8DEKW8Z588BZ: {
            status: "OPTED_IN"
          }
        }
      })
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
