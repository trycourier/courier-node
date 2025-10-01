// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inbound', () => {
  // Prism tests are disabled
  test.skip('trackEvent: only required params', async () => {
    const responsePromise = client.inbound.trackEvent({
      event: 'New Order Placed',
      messageId: '4c62c457-b329-4bea-9bfc-17bba86c393f',
      properties: { order_id: 'bar', total_orders: 'bar', last_order_id: 'bar' },
      type: 'track',
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
  test.skip('trackEvent: required and optional params', async () => {
    const response = await client.inbound.trackEvent({
      event: 'New Order Placed',
      messageId: '4c62c457-b329-4bea-9bfc-17bba86c393f',
      properties: { order_id: 'bar', total_orders: 'bar', last_order_id: 'bar' },
      type: 'track',
      userId: '1234',
    });
  });
});
