// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from 'courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.tenants.defaultPreferences.items.update('topic_id', {
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.tenants.defaultPreferences.items.update('topic_id', {
      tenant_id: 'tenant_id',
      status: 'OPTED_IN',
      custom_routing: ['inbox'],
      has_custom_routing: true,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.tenants.defaultPreferences.items.delete('topic_id', {
      tenant_id: 'tenant_id',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.tenants.defaultPreferences.items.delete('topic_id', {
      tenant_id: 'tenant_id',
    });
  });
});
