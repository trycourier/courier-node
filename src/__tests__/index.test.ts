import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import CourierClient from "../index";

const mockSendResponse = {
  messageId: "1234"
};

describe("send", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onPost("/send").reply(200, mockSendResponse);
  });

  test("works", async () => {
    const { send } = CourierClient({
      authenticationCode: "AUTH_TOKEN"
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
});
