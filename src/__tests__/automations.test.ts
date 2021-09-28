import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import { ICourierAutomationInvokeResponse } from "../automations/types";

const mockAutomationInvokeResponse: ICourierAutomationInvokeResponse = {
  runId: "1234"
};

describe("CourierAutomations", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onPost("/automations/invoke").reply(200, mockAutomationInvokeResponse);
    mock
      .onPost(/\/automations\/.*\/invoke/)
      .reply(200, mockAutomationInvokeResponse);
  });

  test(".invokeAdHocAutomation", async () => {
    const { automations } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      automations.invokeAdHocAutomation({
          automation: {
            cancelation_token: "I_AM_TOKEN",
            steps: [
              {
                action: "send"
              },
              {
                action: "cancel"
              },
              {
                action: "send-list",
                list: "my-list"
              },
              {
                action: "delay"
              },
              {
                action: "update-profile",
                recipient_id: "RECIPIENT_ID",
                profile: {
                  email: "foo@bar.com"
                },
                merge: "none"
              },
            ],
          },
          brand: "BRAND_ID",
          data: {
            example: "EXAMPLE_DATA"
          },
          profile: {
            email: "foo@bar.com"
          },
          recipient: "RECIPIENT_ID",
          template: "TEMPLATE_NAME_OR_ID"
        },
        {
          idempotencyKey: "IDEMPOTENCY_KEY",
          // e.g. expiration date in epoch time, 30 mins from now
          idempotencyExpiry: Date.now() + 30 * 60 * 1000,
        }
      )
    ).resolves.toMatchObject(mockAutomationInvokeResponse);
  });

  test(".invokeAutomationTemplate", async () => {
    const { automations } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      automations.invokeAutomationTemplate({
        templateId: "AUTOMATION_TEMPLATE_ID",
        brand: "BRAND_ID",
        data: {
          example: "EXAMPLE_DATA"
        },
        profile: {
          email: "foo@bar.com"
        },
        recipient: "RECIPIENT_ID",
        template: "TEMPLATE_NAME_OR_ID"
      })
    ).resolves.toMatchObject(mockAutomationInvokeResponse);
  });
});
