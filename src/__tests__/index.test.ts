import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";
import {
  ICourierSendResponse,
  ICourierProfilePutResponse,
  ICourierProfilePostResponse,
  ICourierProfileGetResponse
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

describe("CourierClient", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onPost("/send").reply(200, mockSendResponse);
    mock.onPut(/\/profiles\/.*/).reply(200, mockReplaceProfileResponse);
    mock.onPost(/\/profiles\/.*/).reply(200, mockMergeProfileResponse);
    mock.onGet(/\/profiles\/.*/).reply(200, mockGetProfileResponse);
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
