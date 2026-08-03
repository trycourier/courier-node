// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource journeys', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.journeys.create({
      name: 'Welcome Journey',
      nodes: [
        { trigger_type: 'api-invoke', type: 'trigger' },
        {
          message: {},
          type: 'send',
        },
        { type: 'exit' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.journeys.create({
      name: 'Welcome Journey',
      nodes: [
        {
          trigger_type: 'api-invoke',
          type: 'trigger',
          id: 'trigger-1',
          conditions: ['string', 'string'],
          schema: { foo: 'bar' },
        },
        {
          message: {
            context: { tenant_id: 'x' },
            data: { foo: 'bar' },
            delay: { until: 'x', timezone: 'x' },
            template: 'nt_01kx4h2jdafq8bk9aftxak4b40',
            to: {
              email_override: 'x',
              phone_number_override: 'x',
              user_id_override: 'x',
            },
          },
          type: 'send',
          id: 'send-1',
          conditions: ['string', 'string'],
          experiment: {
            bucketingKey: 'x',
            variants: [
              {
                id: 'x',
                templateId: 'x',
                weight: 0,
                name: 'name',
              },
              {
                id: 'x',
                templateId: 'x',
                weight: 0,
                name: 'name',
              },
            ],
            id: 'x',
            name: 'name',
          },
        },
        { type: 'exit', id: 'exit-1' },
      ],
      enabled: true,
      state: 'DRAFT',
      'Idempotency-Key': 'order-ORD-456-user-123',
      'x-idempotency-expiration': '1785312000',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.journeys.retrieve('x');
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
      client.journeys.retrieve('x', { version: 'published' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.journeys.list();
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
      client.journeys.list({ cursor: 'cursor', version: 'published' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.journeys.archive('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.journeys.cancel({ cancelation_token: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancel: required and optional params', async () => {
    const response = await client.journeys.cancel({
      cancelation_token: 'x',
      'Idempotency-Key': 'order-ORD-456-user-123',
      'x-idempotency-expiration': '1785312000',
    });
  });

  // Mock server tests are disabled
  test.skip('invoke', async () => {
    const responsePromise = client.journeys.invoke('templateId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listVersions', async () => {
    const responsePromise = client.journeys.listVersions('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish', async () => {
    const responsePromise = client.journeys.publish('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.journeys.publish(
        'x',
        {
          version: 'v321669910225',
          'Idempotency-Key': 'order-ORD-456-user-123',
          'x-idempotency-expiration': '1785312000',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.journeys.replace('x', {
      name: 'Welcome Journey v2',
      nodes: [{ trigger_type: 'api-invoke', type: 'trigger' }],
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
    const response = await client.journeys.replace('x', {
      name: 'Welcome Journey v2',
      nodes: [
        {
          trigger_type: 'api-invoke',
          type: 'trigger',
          id: 'x',
          conditions: ['string', 'string'],
          schema: { foo: 'bar' },
        },
      ],
      enabled: true,
      state: 'DRAFT',
    });
  });
});
