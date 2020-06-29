import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";
import {
  ICourierSendResponse,
  ICourierProfilePutResponse,
  ICourierProfilePostResponse,
  ICourierProfileGetResponse,
  ICourierMessageGetResponse,
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

describe("CourierClient", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onPost("/send").reply(200, mockSendResponse);
    mock.onPut(/\/profiles\/.*/).reply(200, mockReplaceProfileResponse);
    mock.onPost(/\/profiles\/.*/).reply(200, mockMergeProfileResponse);
    mock.onGet(/\/profiles\/.*/).reply(200, mockGetProfileResponse);
    mock.onGet(/\/messages\/.*/).reply(200, mockGetMessageResponse);
  });

  test(".send", async () => {
    const { send } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      send({
        eventId: "EVENT_ID",
        recipientId: "RECIPIENT_ID",
        profile: {
          sms: "PHONE_NUMBER"
        },
        data: {
          example: "EXAMPLE_DATA"
        }
      })
    ).resolves.toMatchObject(mockSendResponse);
  });

  test(".getMessage", async () => {
    const { getMessage } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      getMessage(mockGetMessageResponse.id)
    ).resolves.toMatchObject(mockGetMessageResponse);
  });

  test(".replaceProfile", async () => {
    const { replaceProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      replaceProfile({
        recipientId: "RECIPIENT_ID",
        profile: {
          foo: "bar"
        }
      })
    ).resolves.toMatchObject(mockReplaceProfileResponse);
  });

  test(".mergeProfile", async () => {
    const { mergeProfile } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      mergeProfile({
        recipientId: "RECIPIENT_ID",
        profile: {
          foo: "bar"
        }
      })
    ).resolves.toMatchObject(mockMergeProfileResponse);
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
});
