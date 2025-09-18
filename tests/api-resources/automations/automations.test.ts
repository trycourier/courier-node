// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CourierDocs from 'courier-docs';

const client = new CourierDocs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource automations', () => {
  // Prism tests are disabled
  test.skip('invokeAdHoc: only required params', async () => {
    const responsePromise = client.automations.invokeAdHoc({
      automation: {
        steps: [{ action: 'add-to-digest', subscription_topic_id: 'RAJE97CMT04KDJJ88ZDS2TP1690S' }],
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('invokeAdHoc: required and optional params', async () => {
    const response = await client.automations.invokeAdHoc({
      automation: {
        steps: [
          {
            if: 'if',
            ref: 'ref',
            action: 'add-to-digest',
            subscription_topic_id: 'RAJE97CMT04KDJJ88ZDS2TP1690S',
          },
        ],
        cancelation_token: 'cancelation_token',
      },
      brand: 'brand',
      data: { foo: 'bar' },
      profile: {},
      recipient: 'recipient',
      template: 'template',
    });
  });

  // Prism tests are disabled
  test.skip('invokeByTemplate', async () => {
    const responsePromise = client.automations.invokeByTemplate('templateId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
