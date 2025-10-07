// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from 'courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource preferences', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.users.preferences.retrieve('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.preferences.retrieve(
        'user_id',
        { tenant_id: 'tenant_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveTopic: only required params', async () => {
    const responsePromise = client.users.preferences.retrieveTopic('topic_id', { user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveTopic: required and optional params', async () => {
    const response = await client.users.preferences.retrieveTopic('topic_id', {
      user_id: 'user_id',
      tenant_id: 'tenant_id',
    });
  });

  // Prism tests are disabled
  test.skip('updateOrCreateTopic: only required params', async () => {
    const responsePromise = client.users.preferences.updateOrCreateTopic('topic_id', {
      user_id: 'user_id',
      topic: { status: 'OPTED_IN' },
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
  test.skip('updateOrCreateTopic: required and optional params', async () => {
    const response = await client.users.preferences.updateOrCreateTopic('topic_id', {
      user_id: 'user_id',
      topic: { status: 'OPTED_IN', custom_routing: ['inbox', 'email'], has_custom_routing: true },
      tenant_id: 'tenant_id',
    });
  });
});
