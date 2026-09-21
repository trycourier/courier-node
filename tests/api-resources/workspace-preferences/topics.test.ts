// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource topics', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.workspacePreferences.topics.create('section_id', {
      default_status: 'OPTED_OUT',
      name: 'Marketing',
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
    const response = await client.workspacePreferences.topics.create('section_id', {
      default_status: 'OPTED_OUT',
      name: 'Marketing',
      allowed_preferences: ['snooze'],
      description: 'description',
      digest: {
        schedules: [
          {
            frequency: 'instant',
            day_of_month: 1,
            day_of_week: 'sunday',
            days_of_week: ['sunday'],
            disabled: true,
            is_default: true,
            schedule_id: 'schedule_id',
            time: 'time',
            timezone: 'timezone',
          },
        ],
        template_id: 'template_id',
        audience_id: 'audience_id',
        categories: [
          {
            category_key: 'category_key',
            limit: 1,
            retain: 'FIRST',
            sort_key: 'sort_key',
          },
        ],
        trigger_empty: true,
      },
      include_unsubscribe_header: true,
      routing_options: ['direct_message'],
      topic_data: { foo: 'bar' },
      'Idempotency-Key': 'order-ORD-456-user-123',
      'x-idempotency-expiration': '1785312000',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.workspacePreferences.topics.retrieve('topic_id', {
      section_id: 'section_id',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.workspacePreferences.topics.retrieve('topic_id', {
      section_id: 'section_id',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.workspacePreferences.topics.list('section_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.workspacePreferences.topics.archive('topic_id', {
      section_id: 'section_id',
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.workspacePreferences.topics.archive('topic_id', {
      section_id: 'section_id',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteDigest: only required params', async () => {
    const responsePromise = client.workspacePreferences.topics.deleteDigest('topic_id', {
      section_id: 'section_id',
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
  test.skip('deleteDigest: required and optional params', async () => {
    const response = await client.workspacePreferences.topics.deleteDigest('topic_id', {
      section_id: 'section_id',
    });
  });

  // Mock server tests are disabled
  test.skip('releaseDigest: only required params', async () => {
    const responsePromise = client.workspacePreferences.topics.releaseDigest('topic_id', {
      section_id: 'section_id',
      user_id: 'user_01h1p2c3d4e5f6g7h8',
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
  test.skip('releaseDigest: required and optional params', async () => {
    const response = await client.workspacePreferences.topics.releaseDigest('topic_id', {
      section_id: 'section_id',
      user_id: 'user_01h1p2c3d4e5f6g7h8',
      tenant_id: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.workspacePreferences.topics.replace('topic_id', {
      section_id: 'section_id',
      default_status: 'OPTED_IN',
      name: 'Product Updates',
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.workspacePreferences.topics.replace('topic_id', {
      section_id: 'section_id',
      default_status: 'OPTED_IN',
      name: 'Product Updates',
      allowed_preferences: ['channel_preferences'],
      description: 'description',
      digest: {
        template_id: 'template_id',
        audience_id: 'audience_id',
        categories: [
          {
            category_key: 'category_key',
            limit: 1,
            retain: 'FIRST',
            sort_key: 'sort_key',
          },
        ],
        schedules: [
          {
            frequency: 'instant',
            day_of_month: 1,
            day_of_week: 'sunday',
            days_of_week: ['sunday'],
            disabled: true,
            is_default: true,
            schedule_id: 'schedule_id',
            time: 'time',
            timezone: 'timezone',
          },
        ],
        trigger_empty: true,
      },
      include_unsubscribe_header: true,
      routing_options: ['email', 'inbox'],
      topic_data: { foo: 'bar' },
    });
  });
});
