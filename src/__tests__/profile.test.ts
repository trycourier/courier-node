import mockRequests from "./lib/mock-requests";

import { CourierClient } from "../index";
import { ICourierRecipientSubscriptionsResponse } from "../lists/types";
import { ICourierProfilePostResponse, List } from "../types";

const mockGetProfileListResponse: ICourierRecipientSubscriptionsResponse = {
  paging: {
    cursor: "",
    more: false
  },
  results: [
    {
      id: "example.list1",
      name: "Courier Feature update list"
    }
  ]
};

const mockPostResponse: ICourierProfilePostResponse = {
  status: "SUCCESS"
};

const additionalMocklists: List[] = [
  {
    listId: "example.list1",
    name: "Courier Feature updates",
    preferences: {
      notifications: {
        "1231123": {
          status: "OPTED_IN"
        }
      }
    }
  },
  {
    listId: "example.list2",
    name: "Courier API updates",
    preferences: {
      notifications: {
        "1231123": {
          status: "OPTED_IN"
        }
      }
    }
  }
];

describe("Courier Recipient Profile", () => {
  beforeEach(() => {
    mockRequests([
      {
        method: "GET",
        path: /\/profiles\/.*\/lists/,
        body: mockGetProfileListResponse
      },
      {
        method: "POST",
        path: /\/profiles\/.*\/lists/,
        body: mockPostResponse
      },
      {
        method: "DELETE",
        path: /\/profiles\/.*\/lists/,
        body: mockPostResponse
      },
      {
        method: "DELETE",
        path: /\/profiles\/.*/,
        status: 200
      }
    ]);
  });

  test("should delete profile", async () => {
    const { deleteProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      deleteProfile({ recipientId: "12345" })
    ).resolves.toBeUndefined();
  });

  test("should return lists associated with recipient", async () => {
    const { getRecipientSubscriptions } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      getRecipientSubscriptions({ recipientId: "12345" })
    ).resolves.toMatchObject(mockGetProfileListResponse);
  });

  test("should subscribe recipient to provided lists", async () => {
    const { addRecipientToLists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      addRecipientToLists({
        lists: additionalMocklists,
        recipientId: "12345"
      })
    ).resolves.toMatchObject(mockPostResponse);
  });

  test("should remove recipient from all the lists subscription", async () => {
    const { removeRecipientFromAllLists } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      removeRecipientFromAllLists({
        recipientId: "12345"
      })
    ).resolves.toMatchObject(mockPostResponse);
  });
});
