// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from 'courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoke', () => {
  // Prism tests are disabled
  test.skip('invokeAdHoc: only required params', async () => {
    const responsePromise = client.automations.invoke.invokeAdHoc({
      automation: { steps: [{ action: 'delay' }, { action: 'send' }] },
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
    const response = await client.automations.invoke.invokeAdHoc({
      automation: {
        steps: [
          { action: 'delay', duration: 'duration', until: '20240408T080910.123' },
          {
            action: 'send',
            brand: 'brand',
            data: { foo: 'bar' },
            profile: { foo: 'bar' },
            recipient: 'recipient',
            template: '64TP5HKPFTM8VTK1Y75SJDQX9JK0',
          },
        ],
        cancelation_token: 'delay-send--user-yes--abc-123',
      },
      brand: 'brand',
      data: { name: 'bar' },
      profile: { tenant_id: 'bar' },
      recipient: 'user-yes',
      template: 'template',
    });
  });

  // Prism tests are disabled
  test.skip('invokeByTemplate: only required params', async () => {
    const responsePromise = client.automations.invoke.invokeByTemplate('templateId', {
      recipient: 'recipient',
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
  test.skip('invokeByTemplate: required and optional params', async () => {
    const response = await client.automations.invoke.invokeByTemplate('templateId', {
      recipient: 'recipient',
      brand: 'brand',
      data: { foo: 'bar' },
      profile: { foo: 'bar' },
      template: 'template',
    });
  });
});
