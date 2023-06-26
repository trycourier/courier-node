import mockRequests from "./lib/mock-requests";

import * as AccountTypes from "../accounts/types";
import { CourierClient } from "../index";

const mockAccountId = "a83b4d91-fe15-4f9d-b049-16e47d177312";

const mockPutAccountResponse: AccountTypes.IAccount = {
  id: mockAccountId,
  name: "test account",
  type: "account"
};

const mockGetAccountResponse: AccountTypes.IAccount = {
  id: mockAccountId,
  name: "test account",
  type: "account"
};

const mockAccountListResponse: AccountTypes.IPaginatedResult<AccountTypes.IAccount> = {
  items: [
    {
      id: mockAccountId,
      name: "test account",
      type: "account"
    }
  ],
  has_more: false,
  type: "list"
};

describe("CourierAccounts", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "PUT",
        path: `/accounts/${mockAccountId}`,
        response: { body: mockPutAccountResponse }
      },
      {
        method: "DELETE",
        path: `/accounts/${mockAccountId}`,
        response: { status: 204 }
      },
      {
        method: "GET",
        path: `/accounts/${mockAccountId}`,
        response: { body: mockGetAccountResponse }
      },
      {
        method: "GET",
        path: `/accounts`,
        response: { body: mockAccountListResponse }
      }
    ]);
  });

  test(".putAccount", async () => {
    const { accounts } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      accounts.put({
        id: mockAccountId,
        name: "My favorite software engineers"
      })
    ).resolves.toMatchObject({});
  });

  test(".getAccount", async () => {
    const { accounts } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(accounts.get(mockAccountId)).resolves.toMatchObject({
      id: mockAccountId,
      name: "test account",
      type: "account"
    });
  });

  test(".listAccounts", async () => {
    const { accounts } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(accounts.listAccounts({ limit: "10" })).resolves.toMatchObject(
      {
        items: [
          {
            id: mockAccountId,
            name: "test account",
            type: "account"
          }
        ],
        has_more: false,
        type: "list"
      }
    );
  });

  test(".deleteAccount", async () => {
    const { accounts } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(accounts.delete(mockAccountId)).resolves.not.toThrow();
  });
});
