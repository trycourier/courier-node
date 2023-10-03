import mockRequests from "./lib/mock-requests";
import { CourierClient } from "../index";

const mockUserId = "user-1";

describe("CourierUsers", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "PUT",
        path: `/users/${mockUserId}`,
        response: { status: 204 },
      },
      {
        method: "PUT",
        path: `/users/${mockUserId}/accounts`,
        response: { status: 204 },
      },
      {
        method: "PUT",
        path: `/users/${mockUserId}/preferences/topic-1`,
        response: { status: 200 },
      },
      {
        method: "GET",
        path: `/users/${mockUserId}/preferences/topic-1`,
        response: {
          body: {
            topic: {
              default_status: "OPT_IN",
              has_custom_routing: true,
              custom_routing: ["email"],
              status: "OPTED_OUT",
              topic_id: "FW0YU64P4TMYKMMHH67D6FENX8VS",
              topic_name: "Invitations",
            },
          },
        },
      },
      {
        method: "GET",
        path: `/users/${mockUserId}/preferences`,
        response: {
          body: {
            paging: {
              cursor:
                "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA==",
              more: true,
            },
            items: [
              {
                default_status: "OPT_IN",
                has_custom_routing: true,
                custom_routing: ["email"],
                status: "OPTED_OUT",
                topic_id: "FW0YU64P4TMYKMMHH67D6FENX8VS",
                topic_name: "Invitations",
              },
            ],
          },
        },
      },
    ]);
  });

  test(".put", async () => {
    const { users } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      users.put(mockUserId, {
        accounts: [{ account_id: "account-1", profile: { foo: "bar" } }],
        profile: { name: "John Doe" },
      })
    ).resolves.not.toThrow();
  });

  test(".putAccounts", async () => {
    const { users } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      users.putAccounts(mockUserId, [
        { account_id: "account-1", profile: { foo: "bar" } },
      ])
    ).resolves.not.toThrow();
  });

  test(".putUserPreferences", async () => {
    const { users } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      users.putUserPreferenceByTopic(mockUserId, "topic-1", {
        default_status: "OPTED_IN",
        status: "OPTED_OUT",
      })
    ).resolves.not.toThrow();
  });

  test(".getPrefsByTopic", async () => {
    const { users } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      users.getUserPreferenceByTopic(mockUserId, "topic-1")
    ).resolves.not.toThrow();
  });

  test(".getUserPreferences", async () => {
    const { users } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      users.getUserPreferenceByTopics(mockUserId)
    ).resolves.not.toThrow();
  });
});
