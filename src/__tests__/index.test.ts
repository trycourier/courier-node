import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierSendListParams,
  ICourierSendPatternParams,
  ICourierSendResponse
} from "../types";

const mockSendResponse: ICourierSendResponse = {
  messageId: "1234"
};

describe("CourierClient", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onPost("/send/list").reply(200, mockSendResponse);
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

  test(".sendList with List", async () => {
    const { sendList } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const params: ICourierSendListParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      eventId: "EVENT_ID",
      list: "example.list.id"
    };

    await expect(sendList(params)).resolves.toMatchObject(mockSendResponse);
  });

  test(".sendList with Pattern", async () => {
    const { sendList } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    const params: ICourierSendPatternParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      eventId: "EVENT_ID",
      pattern: "example.list.*"
    };

    await expect(sendList(params)).resolves.toMatchObject(mockSendResponse);
  });

  test(".sendList with Idempotency Key", async () => {
    const { sendList } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost("/send").reply(async (config) => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [200];
    });

    const params: ICourierSendListParams = {
      data: {
        example: "EXAMPLE_DATA"
      },
      eventId: "EVENT_ID",
      list: "example.list.id"
    };

    await sendList(params, {
      idempotencyKey: "IDEMPOTENCY_KEY_UUID"
    });
  });
});
