// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource templates', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.journeys.templates.create('x', {
      channel: 'email',
      notification: {
        brand: { id: 'id' },
        content: { elements: [{}], version: '2022-01-01' },
        name: 'Welcome email',
        subscription: { topic_id: 'topic_id' },
        tags: ['string'],
      },
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
    const response = await client.journeys.templates.create('x', {
      channel: 'email',
      notification: {
        brand: { id: 'id' },
        content: {
          elements: [
            {
              channels: ['string'],
              if: 'if',
              loop: 'loop',
              ref: 'ref',
              type: 'text',
            },
          ],
          version: '2022-01-01',
          scope: 'default',
        },
        name: 'Welcome email',
        subscription: { topic_id: 'topic_id' },
        tags: ['string'],
      },
      providerKey: 'x',
      state: 'state',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.journeys.templates.retrieve('x', { templateId: 'x' });
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
    const response = await client.journeys.templates.retrieve('x', { templateId: 'x' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.journeys.templates.list('x');
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
      client.journeys.templates.list(
        'x',
        { cursor: 'cursor', limit: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.journeys.templates.archive('x', { templateId: 'x' });
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
    const response = await client.journeys.templates.archive('x', { templateId: 'x' });
  });

  // Mock server tests are disabled
  test.skip('listVersions: only required params', async () => {
    const responsePromise = client.journeys.templates.listVersions('x', { templateId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listVersions: required and optional params', async () => {
    const response = await client.journeys.templates.listVersions('x', { templateId: 'x' });
  });

  // Mock server tests are disabled
  test.skip('publish: only required params', async () => {
    const responsePromise = client.journeys.templates.publish('x', { templateId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish: required and optional params', async () => {
    const response = await client.journeys.templates.publish('x', {
      templateId: 'x',
      version: 'v321669910225',
    });
  });

  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.journeys.templates.replace('x', {
      templateId: 'x',
      notification: {
        brand: { id: 'id' },
        content: { elements: [{}], version: '2022-01-01' },
        name: 'name',
        subscription: { topic_id: 'topic_id' },
        tags: ['string'],
      },
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
    const response = await client.journeys.templates.replace('x', {
      templateId: 'x',
      notification: {
        brand: { id: 'id' },
        content: {
          elements: [
            {
              channels: ['string'],
              if: 'if',
              loop: 'loop',
              ref: 'ref',
              type: 'text',
            },
          ],
          version: '2022-01-01',
          scope: 'default',
        },
        name: 'name',
        subscription: { topic_id: 'topic_id' },
        tags: ['string'],
      },
      state: 'state',
    });
  });
});
