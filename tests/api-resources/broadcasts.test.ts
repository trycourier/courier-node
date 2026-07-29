// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource broadcasts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.broadcasts.create({ channel: 'email', name: 'Spring Sale Announcement' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.broadcasts.create({ channel: 'email', name: 'Spring Sale Announcement' });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.broadcasts.retrieve('broadcastId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.broadcasts.update('broadcastId', {
      name: 'Spring Sale Announcement (v2)',
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
    const response = await client.broadcasts.update('broadcastId', { name: 'Spring Sale Announcement (v2)' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.broadcasts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.broadcasts.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.broadcasts.archive('broadcastId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.broadcasts.cancel('broadcastId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('duplicate', async () => {
    const responsePromise = client.broadcasts.duplicate('broadcastId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('putContent: only required params', async () => {
    const responsePromise = client.broadcasts.putContent('broadcastId', { content: { elements: [{}, {}] } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('putContent: required and optional params', async () => {
    const response = await client.broadcasts.putContent('broadcastId', {
      content: {
        elements: [
          {
            channels: ['string'],
            if: 'if',
            loop: 'loop',
            ref: 'ref',
            type: 'meta',
          },
          {
            channels: ['string'],
            if: 'if',
            loop: 'loop',
            ref: 'ref',
            type: 'text',
          },
        ],
        version: '2022-01-01',
      },
      state: 'DRAFT',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveContent', async () => {
    const responsePromise = client.broadcasts.retrieveContent('broadcastId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveContent: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.broadcasts.retrieveContent(
        'broadcastId',
        { version: 'version' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('schedule: only required params', async () => {
    const responsePromise = client.broadcasts.schedule('broadcastId', {
      recipient_id: 'aud_01kx4h2jdafq8bk9amzvy6hbv0',
      recipient_type: 'audience',
      scheduled_to: '2026-08-01T15:00:00',
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
  test.skip('schedule: required and optional params', async () => {
    const response = await client.broadcasts.schedule('broadcastId', {
      recipient_id: 'aud_01kx4h2jdafq8bk9amzvy6hbv0',
      recipient_type: 'audience',
      scheduled_to: '2026-08-01T15:00:00',
      timezone: 'America/New_York',
    });
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.broadcasts.send('broadcastId', {
      recipient_id: 'cool-customers',
      recipient_type: 'list',
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
  test.skip('send: required and optional params', async () => {
    const response = await client.broadcasts.send('broadcastId', {
      recipient_id: 'cool-customers',
      recipient_type: 'list',
    });
  });
});
