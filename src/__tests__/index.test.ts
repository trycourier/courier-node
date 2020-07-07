import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";
import {
  ICourierBrand,
  ICourierBrandGetAllResponse,
  ICourierMessageGetResponse,
  ICourierProfileGetResponse,
  ICourierProfilePostResponse,
  ICourierProfilePutResponse,
  ICourierSendResponse,
} from "../types";

const mockSendResponse: ICourierSendResponse = {
  messageId: "1234",
};

const mockReplaceProfileResponse: ICourierProfilePutResponse = {
  status: "SUCCESS",
};

const mockMergeProfileResponse: ICourierProfilePostResponse = {
  status: "SUCCESS",
};

const mockGetProfileResponse: ICourierProfileGetResponse = {
  profile: {
    name: "Troy",
  },
};

const mockGetMessageResponse: ICourierMessageGetResponse = {
  id: "mockMessageId",
  recipient: "mockRecipient",
  status: "mockStatus",
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
        barColor: "#9D3789",
      },
    },
  },
  updated: 1591814489143,
  version: "2020-06-10T18:41:29.093Z",
};

const mockGetBrandsResponse: ICourierBrandGetAllResponse = {
  paging: {
    more: false,
  },
  results: [mockBrandResponse],
};

describe("CourierClient", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onPost("/send").reply(200, mockSendResponse);
    mock.onPut(/\/profiles\/.*/).reply(200, mockReplaceProfileResponse);
    mock.onPost(/\/profiles\/.*/).reply(200, mockMergeProfileResponse);
    mock.onGet(/\/profiles\/.*/).reply(200, mockGetProfileResponse);
    mock.onGet(/\/messages\/.*/).reply(200, mockGetMessageResponse);
    mock.onGet("/brands").reply(200, mockGetBrandsResponse);
    mock.onGet(/\/brands\/.*/).reply(200, mockBrandResponse);
    mock.onPost("/brands").reply(200, mockBrandResponse);
    mock.onPut(/\/brands\/.*/).reply(200, mockBrandResponse);
    mock.onDelete(/\/brands\/.*/).reply(204, {});
  });

  test(".send", async () => {
    const { send } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      send({
        data: {
          example: "EXAMPLE_DATA",
        },
        eventId: "EVENT_ID",
        profile: {
          sms: "PHONE_NUMBER",
        },
        recipientId: "RECIPIENT_ID",
      })
    ).resolves.toMatchObject(mockSendResponse);
  });

  test(".getMessage", async () => {
    const { getMessage } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(getMessage(mockGetMessageResponse.id)).resolves.toMatchObject(
      mockGetMessageResponse
    );
  });

  test(".replaceProfile", async () => {
    const { replaceProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      replaceProfile({
        profile: {
          foo: "bar",
        },
        recipientId: "RECIPIENT_ID",
      })
    ).resolves.toMatchObject(mockReplaceProfileResponse);
  });

  test(".mergeProfile", async () => {
    const { mergeProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      mergeProfile({
        profile: {
          foo: "bar",
        },
        recipientId: "RECIPIENT_ID",
      })
    ).resolves.toMatchObject(mockMergeProfileResponse);
  });

  test(".getProfile", async () => {
    const { getProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      getProfile({
        recipientId: "RECIPIENT_ID",
      })
    ).resolves.toMatchObject(mockGetProfileResponse);
  });

  test(".getBrands", async () => {
    const { getBrands } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(getBrands()).resolves.toMatchObject(mockGetBrandsResponse);
  });

  test(".getBrand", async () => {
    const { getBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      getBrand("VHEGJ8NQEB4T3JM3SZJ8TWD27JPG")
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".createBrand", async() => {
    const { createBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      createBrand({
        id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
        name: "Default Brand",
        settings: {
          email: {
            footer: {},
            header: {
              barColor: "#9D3789",
            },
          },
        }
      })
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".replaceBrand", async() => {
    const { replaceBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      replaceBrand({
        id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
        name: "Default Brand",
        settings: {
          email: {
            footer: {},
            header: {
              barColor: "#9D3789",
            },
          },
        }
      })
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".deleteBrand", async() => {
    const { deleteBrand } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      deleteBrand("VHEGJ8NQEB4T3JM3SZJ8TWD27JPG")
    ).resolves.toMatchObject({});
  });
});
