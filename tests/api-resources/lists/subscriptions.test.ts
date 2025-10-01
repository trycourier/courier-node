// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.lists.subscriptions.list('list_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.lists.subscriptions.list('list_id', { cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.lists.subscriptions.add('list_id', {
      recipients: [{ recipientId: 'recipientId' }],
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
  test.skip('add: required and optional params', async () => {
    const response = await client.lists.subscriptions.add('list_id', {
      recipients: [
        {
          recipientId: 'recipientId',
          preferences: {
            categories: {
              foo: {
                status: 'OPTED_IN',
                channel_preferences: [{ channel: 'direct_message' }],
                rules: [{ until: 'until', start: 'start' }],
              },
            },
            notifications: {
              foo: {
                status: 'OPTED_IN',
                channel_preferences: [{ channel: 'direct_message' }],
                rules: [{ until: 'until', start: 'start' }],
              },
            },
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.lists.subscriptions.subscribe('list_id', {
      recipients: [{ recipientId: 'recipientId' }],
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
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.lists.subscriptions.subscribe('list_id', {
      recipients: [
        {
          recipientId: 'recipientId',
          preferences: {
            categories: {
              foo: {
                status: 'OPTED_IN',
                channel_preferences: [{ channel: 'direct_message' }],
                rules: [{ until: 'until', start: 'start' }],
              },
            },
            notifications: {
              foo: {
                status: 'OPTED_IN',
                channel_preferences: [{ channel: 'direct_message' }],
                rules: [{ until: 'until', start: 'start' }],
              },
            },
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('subscribeUser: only required params', async () => {
    const responsePromise = client.lists.subscriptions.subscribeUser('user_id', { list_id: 'list_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('subscribeUser: required and optional params', async () => {
    const response = await client.lists.subscriptions.subscribeUser('user_id', {
      list_id: 'list_id',
      preferences: {
        categories: {
          foo: {
            status: 'OPTED_IN',
            channel_preferences: [{ channel: 'direct_message' }],
            rules: [{ until: 'until', start: 'start' }],
          },
        },
        notifications: {
          foo: {
            status: 'OPTED_IN',
            channel_preferences: [{ channel: 'direct_message' }],
            rules: [{ until: 'until', start: 'start' }],
          },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('unsubscribeUser: only required params', async () => {
    const responsePromise = client.lists.subscriptions.unsubscribeUser('user_id', { list_id: 'list_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unsubscribeUser: required and optional params', async () => {
    const response = await client.lists.subscriptions.unsubscribeUser('user_id', { list_id: 'list_id' });
  });
});
