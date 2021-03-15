import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";
import { ICourierList } from "../lists/types";
import { ICourierProfilePostResponse, List } from "../types";

const mockGetProfileListResponse: ICourierList[] = [
  {
    id: "example.list1",
    name: "Courier Feature update list"
  }
];

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
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet(/\/profiles\/.*\/lists/).reply(200, mockGetProfileListResponse);
    mock.onPost(/\/profiles\/.*\/lists/).reply(200, mockPostResponse);
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
});
