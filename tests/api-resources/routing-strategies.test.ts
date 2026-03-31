// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routingStrategies', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.routingStrategies.create({
      name: 'Email via SendGrid',
      routing: { channels: ['email'], method: 'single' },
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
    const response = await client.routingStrategies.create({
      name: 'Email via SendGrid',
      routing: { channels: ['email'], method: 'single' },
      channels: {
        email: {
          brand_id: 'brand_id',
          if: 'if',
          metadata: {
            utm: {
              campaign: 'campaign',
              content: 'content',
              medium: 'medium',
              source: 'source',
              term: 'term',
            },
          },
          override: { foo: 'bar' },
          providers: ['sendgrid', 'ses'],
          routing_method: 'all',
          timeouts: { channel: 0, provider: 0 },
        },
      },
      description: 'Routes email through sendgrid with SES failover',
      providers: {
        sendgrid: {
          if: 'if',
          metadata: {
            utm: {
              campaign: 'campaign',
              content: 'content',
              medium: 'medium',
              source: 'source',
              term: 'term',
            },
          },
          override: {},
          timeouts: 0,
        },
      },
      tags: ['production', 'email'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.routingStrategies.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.routingStrategies.list();
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
      client.routingStrategies.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.routingStrategies.archive('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.routingStrategies.replace('id', {
      name: 'Email via SendGrid v2',
      routing: { channels: ['email'], method: 'single' },
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
    const response = await client.routingStrategies.replace('id', {
      name: 'Email via SendGrid v2',
      routing: { channels: ['email'], method: 'single' },
      channels: {
        email: {
          brand_id: 'brand_id',
          if: 'if',
          metadata: {
            utm: {
              campaign: 'campaign',
              content: 'content',
              medium: 'medium',
              source: 'source',
              term: 'term',
            },
          },
          override: { foo: 'bar' },
          providers: ['ses', 'sendgrid'],
          routing_method: 'all',
          timeouts: { channel: 0, provider: 0 },
        },
      },
      description: 'Updated routing with SES primary',
      providers: {
        ses: {
          if: 'if',
          metadata: {
            utm: {
              campaign: 'campaign',
              content: 'content',
              medium: 'medium',
              source: 'source',
              term: 'term',
            },
          },
          override: {},
          timeouts: 0,
        },
      },
      tags: ['production', 'email', 'v2'],
    });
  });
});
