import mockRequests from "./lib/mock-requests";
import { CourierClient } from "../index";

const mockUserId = "user-1";

describe("CourierUsers", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "PUT",
        path: `/users/${mockUserId}`,
        response: { status: 204 }
      },
      {
        method: "PUT",
        path: `/users/${mockUserId}/accounts`,
        response: { status: 204 }
      }
    ]);
  });

  test(".put", async () => {
    const { users } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      users.put(mockUserId, {
        accounts: [{ account_id: "account-1", profile: { foo: "bar" } }],
        profile: { name: "John Doe" }
      })
    ).resolves.not.toThrow();
  });

  test(".putAccounts", async () => {
    const { users } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      users.putAccounts(mockUserId, [
        { account_id: "account-1", profile: { foo: "bar" } }
      ])
    ).resolves.not.toThrow();
  });
});
