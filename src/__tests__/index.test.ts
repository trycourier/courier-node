import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";
import {
  ICourierBrand,
  ICourierBrandGetAllResponse,
  ICourierMessageGetHistoryResponse,
  ICourierMessageGetOutputResponse,
  ICourierMessageGetResponse,
  ICourierMessagesGetResponse,
  ICourierProfileGetResponse,
  ICourierProfilePostResponse,
  ICourierProfilePutResponse,
  ICourierSendResponse,
  ICourierSendMessageResponse
} from "../types";

const mockSendResponse: ICourierSendResponse = {
  messageId: "1234"
};

const mockSendV2Response: ICourierSendMessageResponse = {
  requestId: "1234"
};

const mockReplaceProfileResponse: ICourierProfilePutResponse = {
  status: "SUCCESS"
};

const mockMergeProfileResponse: ICourierProfilePostResponse = {
  status: "SUCCESS"
};

const mockGetProfileResponse: ICourierProfileGetResponse = {
  profile: {
    name: "Troy"
  }
};

const mockGetMessageResponse: ICourierMessageGetResponse = {
  id: "mockMessageId",
  recipient: "mockRecipient",
  status: "SENT"
};

const mockGetMessageHistoryResponse: ICourierMessageGetHistoryResponse = {
  results: [
    {
      data: '{"favoriteAdjective":"awesomeness"}',
      event: "courier-quickstart",
      recipient: "Google_107913066099530916297",
      ts: 1621286334939,
      type: "ENQUEUED"
    },
    {
      event_id: "courier-quickstart",
      notification_id: "courier-quickstart",
      ts: 1621286335117,
      type: "MAPPED"
    },
    {
      merged_profile: {
        email: "tejas.kumthekar26@gmail.com",
        email_verified: true,
        family_name: "K",
        given_name: "Tejas",
        name: "Tejas K",
        sub: "Google_107913066099530916297"
      },
      stored_profile: {
        email: "tejas.kumthekar26@gmail.com",
        email_verified: true,
        family_name: "K",
        given_name: "Tejas",
        name: "Tejas K",
        sub: "Google_107913066099530916297"
      },
      ts: 1621286335173,
      type: "PROFILE_LOADED"
    },
    {
      channel: {
        id: "5371fee1-8d74-4e00-bf45-037637168a07"
      },
      integration: {
        id: "courier-internal-sendgrid",
        provider: "sendgrid"
      },
      output: {
        html:
          "/messages/1-60a2ddbe-51a48d9c5fd0866e2495ce11/output/ffdc6d0d-2fc8-4447-a3b3-7d7e07e10689/html",
        subject:
          "/messages/1-60a2ddbe-51a48d9c5fd0866e2495ce11/output/ffdc6d0d-2fc8-4447-a3b3-7d7e07e10689/subject",
        text:
          "/messages/1-60a2ddbe-51a48d9c5fd0866e2495ce11/output/ffdc6d0d-2fc8-4447-a3b3-7d7e07e10689/text"
      },
      ts: 1621286335562,
      type: "RENDERED"
    },
    {
      channel: {
        id: "5371fee1-8d74-4e00-bf45-037637168a07"
      },
      integration: {
        id: "courier-internal-sendgrid",
        provider: "sendgrid"
      },
      ts: 1621286335715,
      type: "SENT"
    },
    {
      channel: {
        id: "5371fee1-8d74-4e00-bf45-037637168a07"
      },
      integration: {
        id: "courier-internal-sendgrid",
        provider: "sendgrid"
      },
      reference: {},
      ts: 1621286337000,
      type: "DELIVERED"
    }
  ]
};

const mockGetMessageOutputResponse: ICourierMessageGetOutputResponse = {
  results: [
    {
      channel: "email",
      channel_id: "02db680f-38c2-4203-b1f2-ec4e31dc7362",
      content: {
        html: "",
        subject: "foo bar",
        text: "Lorem ipsum dolor, sit amet"
      }
    },
    {
      channel: "push",
      channel_id: "8f2494bb-480f-49a3-b601-86f13d651d0d",
      content: {
        blocks: [
          {
            text: "Lorem ipsum dolor, sit amet.",
            type: "text"
          }
        ],
        body: "Lorem ipsum dolor, sit amet",
        title: "foo bar"
      }
    }
  ]
};

const mockGetMessagesResponse: ICourierMessagesGetResponse = {
  paging: {
    more: false
  },
  results: [
    {
      id: "mockMessageId",
      enqueued: 1632840573355,
      sent: 1632840580620,
      recipient: "mockRecipient",
      status: "SENT",
      event: "mockEvent",
      notification: "mockNotification"
    }
  ]
};

const mockBrandResponse: ICourierBrand = {
  created: 1591814489093,
  id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
  name: "Default Brand",
  published: 1591814489121,
  settings: {
    email: {
      footer: {},
      header: {
        barColor: "#9D3789"
      }
    }
  },
  updated: 1591814489143,
  version: "2020-06-10T18:41:29.093Z"
};

const mockGetBrandsResponse: ICourierBrandGetAllResponse = {
  paging: {
    more: false
  },
  results: [mockBrandResponse]
};

describe("CourierClient - send with V2 schema", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onPost("/send").reply(200, mockSendV2Response);
  });

  test(".send", async () => {
    const { send } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      send({
        message: {
          data: {
            example: "EXAMPLE_DATA"
          },
          template: "EVENT_ID",
          to: {
            phone_number: "PHONE_NUMBER"
          }
        }
      })
    ).resolves.toMatchObject(mockSendV2Response);
  });

  test(".send with Idempotency Key", async () => {
    const { send } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost("/send").reply(async config => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [200];
    });

    await send(
      {
        message: {
          data: {
            example: "EXAMPLE_DATA"
          },
          template: "EVENT_ID",
          to: {
            phone_number: "PHONE_NUMBER"
          }
        }
      },
      {
        idempotencyKey: "IDEMPOTENCY_KEY_UUID",
        // e.g. expiration date in epoch time, 30 mins from now
        idempotencyExpiry: Date.now() + 30 * 60 * 1000
      }
    );
  });
});

describe("CourierClient", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onPost("/send").reply(200, mockSendResponse);
    mock.onPut(/\/profiles\/.*/).reply(200, mockReplaceProfileResponse);
    mock.onPost(/\/profiles\/.*/).reply(200, mockMergeProfileResponse);
    mock.onGet(/\/profiles\/.*/).reply(200, mockGetProfileResponse);
    mock
      .onGet(/\/messages\/.*\/history/)
      .reply(200, mockGetMessageHistoryResponse);
    mock
      .onGet(/\/messages\/.*\/output/)
      .reply(200, mockGetMessageOutputResponse);
    mock.onGet(/\/messages\/.*/).reply(200, mockGetMessageResponse);
    mock.onGet("/messages").reply(200, mockGetMessagesResponse);
    mock.onGet("/brands").reply(200, mockGetBrandsResponse);
    mock.onGet(/\/brands\/.*/).reply(200, mockBrandResponse);
    mock.onPost("/brands").reply(200, mockBrandResponse);
    mock.onPut(/\/brands\/.*/).reply(200, mockBrandResponse);
    mock.onDelete(/\/brands\/.*/).reply(204);
  });

  test(".send", async () => {
    const { send } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      send({
        data: {
          example: "EXAMPLE_DATA"
        },
        eventId: "EVENT_ID",
        profile: {
          sms: "PHONE_NUMBER"
        },
        recipientId: "RECIPIENT_ID"
      })
    ).resolves.toMatchObject(mockSendResponse);
  });

  test(".send with Idempotency Key", async () => {
    const { send } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost("/send").reply(async config => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [200];
    });

    await send(
      {
        data: {
          example: "EXAMPLE_DATA"
        },
        eventId: "EVENT_ID",
        profile: {
          sms: "PHONE_NUMBER"
        },
        recipientId: "RECIPIENT_ID"
      },
      {
        idempotencyKey: "IDEMPOTENCY_KEY_UUID",
        // e.g. expiration date in epoch time, 30 mins from now
        idempotencyExpiry: Date.now() + 30 * 60 * 1000
      }
    );
  });

  test(".getMessage", async () => {
    const { getMessage } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(getMessage(mockGetMessageResponse.id)).resolves.toMatchObject(
      mockGetMessageResponse
    );
  });

  test(".getMessageHistory", async () => {
    const { getMessageHistory } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(getMessageHistory("MESSAGE_ID")).resolves.toMatchObject(
      mockGetMessageHistoryResponse
    );
  });

  test(".getMessageOutput", async () => {
    const { getMessageOutput } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(getMessageOutput("MESSAGE_ID")).resolves.toMatchObject(
      mockGetMessageOutputResponse
    );
  });

  test(".getMessages", async () => {
    const { getMessages } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(getMessages()).resolves.toMatchObject(mockGetMessagesResponse);
  });

  test(".replaceProfile", async () => {
    const { replaceProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      replaceProfile({
        profile: {
          foo: "bar"
        },
        recipientId: "RECIPIENT_ID"
      })
    ).resolves.toMatchObject(mockReplaceProfileResponse);
  });

  test(".mergeProfile", async () => {
    const { mergeProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      mergeProfile({
        profile: {
          foo: "bar"
        },
        recipientId: "RECIPIENT_ID"
      })
    ).resolves.toMatchObject(mockMergeProfileResponse);
  });

  test(".mergeProfile with Idempotency Key", async () => {
    const { mergeProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost(/\/profiles\/.*/).reply(async config => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [200];
    });

    await mergeProfile(
      {
        profile: {
          foo: "bar"
        },
        recipientId: "RECIPIENT_ID"
      },
      {
        idempotencyKey: "IDEMPOTENCY_KEY_UUID"
      }
    );
  });

  test(".getProfile", async () => {
    const { getProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      getProfile({
        recipientId: "RECIPIENT_ID"
      })
    ).resolves.toMatchObject(mockGetProfileResponse);
  });

  test(".getBrands", async () => {
    const { getBrands } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(getBrands()).resolves.toMatchObject(mockGetBrandsResponse);
  });

  test(".getBrand", async () => {
    const { getBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      getBrand("VHEGJ8NQEB4T3JM3SZJ8TWD27JPG")
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".createBrand", async () => {
    const { createBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      createBrand({
        id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
        name: "Default Brand",
        settings: {
          email: {
            footer: {},
            header: {
              barColor: "#9D3789"
            }
          }
        }
      })
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".createBrand with Idempotency Key", async () => {
    const { createBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost("/brands").reply(async config => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [200];
    });

    await createBrand(
      {
        id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
        name: "Default Brand",
        settings: {
          email: {
            footer: {},
            header: {
              barColor: "#9D3789"
            }
          }
        }
      },
      {
        idempotencyKey: "IDEMPOTENCY_KEY_UUID"
      }
    );
  });

  test(".replaceBrand", async () => {
    const { replaceBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      replaceBrand({
        id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
        name: "Default Brand",
        settings: {
          email: {
            footer: {},
            header: {
              barColor: "#9D3789"
            }
          }
        }
      })
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".deleteBrand", async () => {
    const { deleteBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      deleteBrand("VHEGJ8NQEB4T3JM3SZJ8TWD27JPG")
    ).resolves.toBeUndefined();
  });
});
