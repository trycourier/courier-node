import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierSendPatternParams,
  ICourierSendResponse,
  ICourierSendTopicParams
} from "../types";

const mockSendResponse: ICourierSendResponse = {
  messageId: "1234"
};

describe("CourierClient", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onPost("/send/topic").reply(200, mockSendResponse);
    mock.onPost("/send").reply(200, mockSendResponse);
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

  test(".sendTopicOrPattern with Topic", async () => {
    const { sendTopicOrPattern } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const params: ICourierSendTopicParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      eventId: "EVENT_ID",
      topic: "example.topic.id"
    };

    await expect(sendTopicOrPattern(params)).resolves.toMatchObject(
      mockSendResponse
    );
  });

  test(".sendTopicOrPattern with Pattern", async () => {
    const { sendTopicOrPattern } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const params: ICourierSendPatternParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      eventId: "EVENT_ID",
      pattern: "example.topic.*"
    };

    await expect(sendTopicOrPattern(params)).resolves.toMatchObject(
      mockSendResponse
    );
  });

  test(".sendTopicOrPattern with Idempotency Key", async () => {
    const { sendTopicOrPattern } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost("/send").reply(async (config) => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [200];
    });

    const params: ICourierSendTopicParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      eventId: "EVENT_ID",
      topic: "example.topic.id"
    };

    await sendTopicOrPattern(params, {
      idempotencyKey: "IDEMPOTENCY_KEY_UUID"
    });
  });
});
