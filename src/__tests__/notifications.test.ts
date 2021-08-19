import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierNotificationGetContentResponse,
  ICourierNotificationGetSubmissionChecksResponse,
  ICourierNotificationListResponse,
  ICourierNotificationPutSubmissionChecksResponse
} from "../notifications/types";

const mockListNotificationsResponse: ICourierNotificationListResponse = {
  paging: {
    more: false
  },
  results: [
    { id: "notification1", title: "Hello, World" },
    { id: "notification2", title: "Goodbye, World" }
  ]
};

const mockGetNotificationContentResponse: ICourierNotificationGetContentResponse = {
  blocks: [
    {
      id: "block_00d0bcb0-aba1-443f-a8dd-daac505500fe",
      type: "text",
      content: "Lorem ipsum dolor, sit amet.",
      locales: {
        fr_FR: "french text block"
      }
    },
    {
      id: "block_41f7d5c0-bfeb-49fb-b3be-fee7c84f4d45",
      type: "action",
      content: "Click Here",
      locales: {
        fr_FR: "french action block"
      }
    }
  ],
  channels: [
    {
      id: "channel_79d25574-83be-4da1-a5c3-3d4e2ab5f154",
      email: {
        subject: "Hey hey!"
      },
      locales: {
        fr_FR: {
          email: {
            subject: "French hey!"
          },
          push: {}
        }
      }
    },
    {
      id: "channel_76051a88-9fd6-4fde-9d9f-4f77f83d0fea",
      push: {
        title: "tk"
      },
      locales: {
        fr_FR: {
          email: {},
          push: {
            title: "French tk"
          }
        }
      }
    }
  ]
};

const mockGetNotificationDraftContentResponse: ICourierNotificationGetContentResponse = {
  blocks: [
    {
      id: "block_00d0bcb0-aba1-443f-a8dd-daac505500fe",
      type: "text",
      content: "Lorem ipsum dolor, sit amet.",
      locales: {
        fr_FR: "french text block"
      }
    },
    {
      id: "block_41f7d5c0-bfeb-49fb-b3be-fee7c84f4d45",
      type: "action",
      content: "Click Here",
      locales: {
        fr_FR: "french action block"
      }
    }
  ],
  channels: [
    {
      id: "channel_79d25574-83be-4da1-a5c3-3d4e2ab5f154",
      email: {
        subject: "Hey hey!"
      },
      locales: {
        fr_FR: {
          email: {
            subject: "French hey!"
          },
          push: {}
        }
      }
    },
    {
      id: "channel_76051a88-9fd6-4fde-9d9f-4f77f83d0fea",
      push: {
        title: "tk"
      },
      locales: {
        fr_FR: {
          email: {},
          push: {
            title: "French tk"
          }
        }
      }
    }
  ]
};

const mockGetNotificationSubmissionChecksResponse: ICourierNotificationGetSubmissionChecksResponse = {
  checks: [
    {
      id: "check1",
      status: "PENDING",
      type: "custom",
      updated: 1629169195778
    }
  ]
};

const mockPutNotificationSubmissionChecksResponse: ICourierNotificationPutSubmissionChecksResponse = {
  checks: [
    {
      id: "check1",
      status: "RESOLVED",
      type: "custom",
      updated: 1629169195779
    }
  ]
};

describe("CourierNotifications", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet("/notifications").reply(200, mockListNotificationsResponse);
    mock
      .onGet(/\/notifications\/.*\/content/)
      .reply(200, mockGetNotificationContentResponse);
    mock
      .onGet(/\/notifications\/.*\/draft\/content/)
      .reply(200, mockGetNotificationDraftContentResponse);
    mock.onPost(/\/notifications\/.*\/variations/).reply(204);
    mock.onPost(/\/notifications\/.*\/draft\/variations/).reply(204);
    mock
      .onGet(/\/notifications\/.*\/.*\/checks/)
      .reply(200, mockGetNotificationSubmissionChecksResponse);
    mock
      .onPut(/\/notifications\/.*\/.*\/checks/)
      .reply(200, mockPutNotificationSubmissionChecksResponse);
    mock.onDelete(/\/notifications\/.*\/.*\/checks/).reply(204);
  });

  test(".list notifications", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(notifications.list({})).resolves.toMatchObject(
      mockListNotificationsResponse
    );
  });

  test(".get notification content", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      notifications.getContent("notification1")
    ).resolves.toMatchObject(mockGetNotificationContentResponse);
  });

  test(".get notification draft content", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      notifications.getDraftContent("notification1")
    ).resolves.toMatchObject(mockGetNotificationDraftContentResponse);
  });

  test(".post notification variations", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      notifications.postVariations("notification1", {
        blocks: [
          {
            id: "block_00d0bcb0-aba1-443f-a8dd-daac505500fe",
            type: "text",
            locales: {
              fr_FR: "french text block"
            }
          },
          {
            id: "block_41f7d5c0-bfeb-49fb-b3be-fee7c84f4d45",
            type: "action",
            locales: {
              fr_FR: "french action block"
            }
          }
        ],
        channels: [
          {
            id: "channel_79d25574-83be-4da1-a5c3-3d4e2ab5f154",
            locales: {
              fr_FR: {
                email: {
                  subject: "French hey!"
                }
              }
            }
          },
          {
            id: "channel_76051a88-9fd6-4fde-9d9f-4f77f83d0fea",
            locales: {
              fr_FR: {
                push: {
                  title: "French tk"
                }
              }
            }
          }
        ]
      })
    ).resolves.toBeUndefined();
  });

  test(".post notification draft variations", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      notifications.postDraftVariations("notification1", {
        blocks: [
          {
            id: "block_00d0bcb0-aba1-443f-a8dd-daac505500fe",
            type: "text",
            locales: {
              fr_FR: "french text block"
            }
          },
          {
            id: "block_41f7d5c0-bfeb-49fb-b3be-fee7c84f4d45",
            type: "action",
            locales: {
              fr_FR: "french action block"
            }
          }
        ],
        channels: [
          {
            id: "channel_79d25574-83be-4da1-a5c3-3d4e2ab5f154",
            locales: {
              fr_FR: {
                email: {
                  subject: "French hey!"
                }
              }
            }
          },
          {
            id: "channel_76051a88-9fd6-4fde-9d9f-4f77f83d0fea",
            locales: {
              fr_FR: {
                push: {
                  title: "French tk"
                }
              }
            }
          }
        ]
      })
    ).resolves.toBeUndefined();
  });

  test(".get notification submission checks", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      notifications.getSubmissionChecks("notification1", "submission1")
    ).resolves.toMatchObject(mockGetNotificationSubmissionChecksResponse);
  });

  test(".put notification submission checks", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      notifications.putSubmissionChecks("notification1", "submission1", {
        checks: [
          {
            id: "check1",
            status: "RESOLVED",
            type: "custom"
          }
        ]
      })
    ).resolves.toMatchObject(mockPutNotificationSubmissionChecksResponse);
  });

  test(".cancel notification submission", async () => {
    const { notifications } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      notifications.cancelSubmission("notification1", "submission1")
    ).resolves.toBeUndefined();
  });
});
