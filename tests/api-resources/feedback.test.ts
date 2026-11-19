// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedback', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.feedback.create({
      category: 'possible_bug',
      description:
        'GET /lists/{list_id}/subscriptions returned items: [] with paging.more set to true, and following the cursor returned the remaining subscribers.',
      surface: 'api',
      title: 'List subscriptions returns an empty page with a next cursor',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.feedback.create({
      category: 'possible_bug',
      description:
        'GET /lists/{list_id}/subscriptions returned items: [] with paging.more set to true, and following the cursor returned the remaining subscribers.',
      surface: 'api',
      title: 'List subscriptions returns an empty page with a next cursor',
      expected_behavior: 'Every page before the last one contains at least one item.',
      harness: 'Claude Code',
      location: 'GET /lists/{list_id}/subscriptions',
      model: 'claude-opus-5-5',
      request_id: '1-67f340b1-58b7b231d9485ef0cda0a38b',
    });
  });
});
