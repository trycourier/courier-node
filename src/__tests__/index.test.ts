import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";
import {
  ICourierBrand,
  ICourierBrandGetAllResponse,
  ICourierMessageGetResponse,
  ICourierPreferencesGetAllResponse,
  ICourierPreferencesGetResponse,
  ICourierPreferencesPutResponse,
  ICourierProfileGetResponse,
  ICourierProfilePostResponse,
  ICourierProfilePutResponse,
  ICourierSendResponse
} from "../types";

const mockSendResponse: ICourierSendResponse = {
  messageId: "1234"
};

const mockReplaceProfileResponse: ICourierProfilePutResponse = {
  status: "SUCCESS"
};

const mockMergeProfileResponse: ICourierProfilePostResponse = {
  status: "SUCCESS"
};

const mockPutPreferenceResponse: ICourierPreferencesPutResponse = {
  status: 'SUCCESS',
};

const mockGetProfileResponse: ICourierProfileGetResponse = {
  profile: {
    name: "Troy"
  }
};

const mockGetMessageResponse: ICourierMessageGetResponse = {
  id: "mockMessageId",
  recipient: "mockRecipient",
  status: "mockStatus"
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
const mockGetAllPreferenceResponse: ICourierPreferencesGetAllResponse = {
  uncategorized: [
    {
      id: '9e5bb2cf-1ad4-4151-8f57-78e9754ce7dc',
      title: 'Untitled Notification',
      config: {
        type: 'OPT_IN',
      },
    },
  ],
  categories: [
    {
      id: '6ab6f268-d60c-43d9-9987-93f6ed835b94',
      title: 'New Category',
      config: {
        type: 'REQUIRED',
      },
    },
  ],
};

const mockGetProfilePreferenceResponse: ICourierPreferencesGetResponse = {
  notifications: {
    '0089248b-2ce8-423e-838e-f29f938d658b': {
      status: 'OPTED_OUT',
    },
  },
  categories: {
    '1341fdf3-f34r-fss3-fs23-fsfdsv233be3': {
      status: 'OPTED_IN',
    },
  },
};


describe("CourierClient", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onPost("/send").reply(200, mockSendResponse);
    mock.onPut(/\/profiles\/.*/).reply(200, mockReplaceProfileResponse);
    mock.onPost(/\/profiles\/.*/).reply(200, mockMergeProfileResponse);
    mock.onGet(/\/profiles\/.*/).reply(200, mockGetProfileResponse);
    mock.onGet(/\/messages\/.*/).reply(200, mockGetMessageResponse);
    mock.onGet("/brands").reply(200, mockGetBrandsResponse);
    mock.onGet(/\/brands\/.*/).reply(200, mockBrandResponse);
    mock.onPost("/brands").reply(200, mockBrandResponse);
    mock.onPut(/\/brands\/.*/).reply(200, mockBrandResponse);
    mock.onDelete(/\/brands\/.*/).reply(204);
    mock.onPut(/\/preferences\/.*/).reply(200, mockPutPreferenceResponse);
    mock.onGet('/preferences').reply(200, mockGetAllPreferenceResponse);
    mock.onGet(/\/preferences\/.*/).reply(200, mockGetProfilePreferenceResponse);
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

    mock.onPost("/send").reply(async (config) => {
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
        idempotencyKey: "IDEMPOTENCY_KEY_UUID"
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

    mock.onPost(/\/profiles\/.*/).reply(async (config) => {
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

  test('.getPreferences', async () => {
    const { getPreferences } = CourierClient({
      authorizationToken: 'AUTH_TOKEN',
    });

    await expect(getPreferences()).resolves.toMatchObject(
      mockGetAllPreferenceResponse
    );
  });

   test('.getProfilePreferences', async () => {
     const { getProfilePreferences } = CourierClient({
       authorizationToken: 'AUTH_TOKEN',
     });

     await expect(
       getProfilePreferences({
         recipientId: 'RECIPIENT_ID',
       })
     ).resolves.toMatchObject(mockGetProfilePreferenceResponse);
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

    mock.onPost("/brands").reply(async (config) => {
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
