// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from 'courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lists', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.profiles.lists.retrieve('user_id');
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
      client.profiles.lists.retrieve('user_id', { cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.profiles.lists.delete('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.profiles.lists.subscribe('user_id', { lists: [{ listId: 'listId' }] });
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
    const response = await client.profiles.lists.subscribe('user_id', {
      lists: [
        {
          listId: 'listId',
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
});
