// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.tenants.preferences.items.update('topic_id', {
      tenant_id: 'tenant_id',
      status: 'OPTED_IN',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.tenants.preferences.items.update('topic_id', {
      tenant_id: 'tenant_id',
      status: 'OPTED_IN',
      custom_routing: ['inbox'],
      has_custom_routing: true,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.tenants.preferences.items.delete('topic_id', { tenant_id: 'tenant_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.tenants.preferences.items.delete('topic_id', { tenant_id: 'tenant_id' });
  });
});
