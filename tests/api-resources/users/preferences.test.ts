// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource preferences', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('bulkReplace: only required params', async () => {
    const responsePromise = client.users.preferences.bulkReplace('user_id', {
      topics: [{ status: 'OPTED_IN', topic_id: 'pt_01kx4h2jdafq8bk996nn92357r' }],
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
  test.skip('bulkReplace: required and optional params', async () => {
    const response = await client.users.preferences.bulkReplace('user_id', {
      topics: [
        {
          status: 'OPTED_IN',
          topic_id: 'pt_01kx4h2jdafq8bk996nn92357r',
          custom_routing: ['inbox', 'email'],
          has_custom_routing: true,
        },
      ],
      tenant_id: 'tenant_id',
    });
  });

  // Mock server tests are disabled
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.users.preferences.bulkUpdate('user_id', {
      topics: [
        { status: 'OPTED_IN', topic_id: 'pt_01kx4h2jdafq8bk996nn92357r' },
        { status: 'OPTED_OUT', topic_id: 'pt_01kx4h2jdafq8bk99eyt3dx43x' },
      ],
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
  test.skip('bulkUpdate: required and optional params', async () => {
    const response = await client.users.preferences.bulkUpdate('user_id', {
      topics: [
        {
          status: 'OPTED_IN',
          topic_id: 'pt_01kx4h2jdafq8bk996nn92357r',
          custom_routing: ['inbox', 'email'],
          has_custom_routing: true,
        },
        {
          status: 'OPTED_OUT',
          topic_id: 'pt_01kx4h2jdafq8bk99eyt3dx43x',
          custom_routing: ['direct_message'],
          has_custom_routing: true,
        },
      ],
      tenant_id: 'tenant_id',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteTopic: only required params', async () => {
    const responsePromise = client.users.preferences.deleteTopic('topic_id', { user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteTopic: required and optional params', async () => {
    const response = await client.users.preferences.deleteTopic('topic_id', {
      user_id: 'user_id',
      tenant_id: 'tenant_id',
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('retrieveTopic: required and optional params', async () => {
    const response = await client.users.preferences.retrieveTopic('topic_id', {
      user_id: 'user_id',
      tenant_id: 'tenant_id',
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('updateOrCreateTopic: required and optional params', async () => {
    const response = await client.users.preferences.updateOrCreateTopic('topic_id', {
      user_id: 'user_id',
      topic: {
        status: 'OPTED_IN',
        custom_routing: ['inbox', 'email'],
        has_custom_routing: true,
      },
      tenant_id: 'tenant_id',
    });
  });
});
