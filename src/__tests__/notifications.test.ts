import mockRequests from "./lib/mock-requests";

import { CourierClient } from "../index";

import {
  ICourierNotificationGetContentResponse,
  ICourierNotificationGetSubmissionChecksResponse,
  ICourierNotificationListResponse,
  ICourierNotificationPutSubmissionChecksResponse,
} from "../notifications/types";

const mockListNotificationsResponse: ICourierNotificationListResponse = {
  paging: {
    more: false,
  },
  results: [
    {
      created_at: 1677027399190,
      id: "notification1",
      routing: {
        channels: ["email"],
        method: "single",
      },
      tags: {
        data: [],
      },
      title: "Hello, World",
      updated_at: 1677027399190,
    },
    {
      created_at: 1677027447248,
      id: "notification2",
      routing: {
        channels: ["email"],
        method: "single",
      },
      tags: {
        data: [],
      },
      title: "Goodbye, World",
      updated_at: 1677027447248,
    },
  ],
};

const mockGetNotificationContentResponse: ICourierNotificationGetContentResponse = {
  blocks: [
    {
      id: "block_1d4c32e0-bca8-43f6-b5d5-8c043199bce6",
      type: "text",
      content: "block 1",
      checksum: "64e9e6003f89e45da9eba83c34549e7c",
      locales: {
        fr_FR: "block fr 1",
      },
    },
    {
      id: "block_6d50a6e3-ecc3-4815-bf51-0202c6bf54e2",
      type: "text",
      content: "block 2",
      checksum: "82206013038af7af93e9eab07b2ae536",
      locales: {
        fr_FR: "block fr 2",
      },
    },
  ],
  channels: [
    {
      id: "channel_1ba46024-f156-4ed7-893b-cb1cdcfbd36e",
      type: "email",
      content: {
        subject: "New Subject",
      },
      checksum: "440b32881f59bdf5af1a5db71f2aa433",
      locales: {
        fr_FR: {
          subject: "French Subject",
        },
      },
    },
  ],
  checksum: "b7345b0e9e6391a0b19a350165e421c9",
};

const mockGetNotificationDraftContentResponse: ICourierNotificationGetContentResponse = {
  blocks: [
    {
      id: "block_1d4c32e0-bca8-43f6-b5d5-8c043199bce6",
      type: "text",
      content: "block 1",
      checksum: "64e9e6003f89e45da9eba83c34549e7c",
      locales: {
        fr_FR: "block fr 1",
      },
    },
    {
      id: "block_6d50a6e3-ecc3-4815-bf51-0202c6bf54e2",
      type: "text",
      content: "block 2",
      checksum: "82206013038af7af93e9eab07b2ae536",
      locales: {
        fr_FR: "block fr 2",
      },
    },
  ],
  channels: [
    {
      id: "channel_1ba46024-f156-4ed7-893b-cb1cdcfbd36e",
      type: "email",
      content: {
        subject: "New Subject",
      },
      checksum: "440b32881f59bdf5af1a5db71f2aa433",
      locales: {
        fr_FR: {
          subject: "French Subject",
        },
      },
    },
  ],
  checksum: "b7345b0e9e6391a0b19a350165e421c9",
};

const mockGetNotificationSubmissionChecksResponse: ICourierNotificationGetSubmissionChecksResponse = {
  checks: [
    {
      id: "check1",
      status: "PENDING",
      type: "custom",
      updated: 1629169195778,
    },
  ],
};

const mockPutNotificationSubmissionChecksResponse: ICourierNotificationPutSubmissionChecksResponse = {
  checks: [
    {
      id: "check1",
      status: "RESOLVED",
      type: "custom",
      updated: 1629169195779,
    },
  ],
};

describe("CourierNotifications", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "GET",
        path: "/notifications",
        response: { body: mockListNotificationsResponse },
      },
      {
        method: "GET",
        path: /\/notifications\/.*\/content/,
        response: { body: mockGetNotificationContentResponse },
      },
      {
        method: "GET",
        path: /\/notifications\/.*\/draft\/content/,
        response: { body: mockGetNotificationDraftContentResponse },
      },
      {
        method: "POST",
        path: /\/notifications\/.*\/variations/,
        response: { status: 204 },
      },
      {
        method: "POST",
        path: /\/notifications\/.*\/draft\/variations/,
        response: { status: 204 },
      },
      {
        method: "GET",
        path: /\/notifications\/.*\/.*\/checks/,
        response: { body: mockGetNotificationSubmissionChecksResponse },
      },
      {
        method: "PUT",
        path: /\/notifications\/.*\/.*\/checks/,
        response: { body: mockPutNotificationSubmissionChecksResponse },
      },
      {
        method: "DELETE",
        path: /\/notifications\/.*\/.*\/checks/,
        response: { status: 204 },
      },
    ]);
  });

  test(".list notifications", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(notifications.list({})).resolves.toMatchObject(
      mockListNotificationsResponse
    );
  });

  test(".get notification content", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      notifications.getContent("notification1")
    ).resolves.toMatchObject(mockGetNotificationContentResponse);
  });

  test(".get notification draft content", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      notifications.getDraftContent("notification1")
    ).resolves.toMatchObject(mockGetNotificationDraftContentResponse);
  });

  test(".post notification variations", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      notifications.postVariations("notification1", {
        blocks: [
          {
            id: "block_1d4c32e0-bca8-43f6-b5d5-8c043199bce6",
            type: "text",
            locales: {
              fr_FR: "block fr 1",
            },
          },
          {
            id: "block_6d50a6e3-ecc3-4815-bf51-0202c6bf54e2",
            type: "text",
            locales: {
              fr_FR: "block fr 2",
            },
          },
        ],
        channels: [
          {
            id: "channel_1ba46024-f156-4ed7-893b-cb1cdcfbd36e",
            type: "email",
            locales: {
              fr_FR: {
                subject: "French Subject",
              },
            },
          },
          {
            id: "channel_2c2aad1c-30f0-4a55-8d8f-d213f32147bc",
            type: "push",
            locales: {
              fr_FR: {
                title: "French Title",
              },
            },
          },
        ],
      })
    ).resolves.toBeUndefined();
  });

  test(".post notification draft variations", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      notifications.postDraftVariations("notification1", {
        blocks: [
          {
            id: "block_1d4c32e0-bca8-43f6-b5d5-8c043199bce6",
            type: "text",
            locales: {
              fr_FR: "block fr 1",
            },
          },
          {
            id: "block_6d50a6e3-ecc3-4815-bf51-0202c6bf54e2",
            type: "text",
            locales: {
              fr_FR: "block fr 2",
            },
          },
        ],
        channels: [
          {
            id: "channel_1ba46024-f156-4ed7-893b-cb1cdcfbd36e",
            type: "email",
            locales: {
              fr_FR: {
                subject: "French Subject",
              },
            },
          },
          {
            id: "channel_2c2aad1c-30f0-4a55-8d8f-d213f32147bc",
            type: "push",
            locales: {
              fr_FR: {
                title: "French Title",
              },
            },
          },
        ],
      })
    ).resolves.toBeUndefined();
  });

  test(".get notification submission checks", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      notifications.getSubmissionChecks("notification1", "submission1")
    ).resolves.toMatchObject(mockGetNotificationSubmissionChecksResponse);
  });

  test(".put notification submission checks", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      notifications.putSubmissionChecks("notification1", "submission1", {
        checks: [
          {
            id: "check1",
            status: "RESOLVED",
            type: "custom",
          },
        ],
      })
    ).resolves.toMatchObject(mockPutNotificationSubmissionChecksResponse);
  });

  test(".cancel notification submission", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      notifications.cancelSubmission("notification1", "submission1")
    ).resolves.toBeUndefined();
  });
});
