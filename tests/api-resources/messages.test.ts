// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from 'courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.messages.retrieve('message_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.messages.list();
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
      client.messages.list(
        {
          archived: true,
          cursor: 'cursor',
          enqueued_after: 'enqueued_after',
          event: 'event',
          list: 'list',
          messageId: 'messageId',
          notification: 'notification',
          provider: ['string'],
          recipient: 'recipient',
          status: ['string'],
          tag: ['string'],
          tags: 'tags',
          tenant_id: 'tenant_id',
          traceId: 'traceId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.messages.cancel('message_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('content', async () => {
    const responsePromise = client.messages.content('message_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('history', async () => {
    const responsePromise = client.messages.history('message_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('history: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messages.history('message_id', { type: 'type' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });
});
