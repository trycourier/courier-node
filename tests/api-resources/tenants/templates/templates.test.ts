// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource templates', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.tenants.templates.retrieve('template_id', { tenant_id: 'tenant_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.tenants.templates.retrieve('template_id', { tenant_id: 'tenant_id' });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.tenants.templates.list('tenant_id');
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
      client.tenants.templates.list(
        'tenant_id',
        { cursor: 'cursor', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('publish: only required params', async () => {
    const responsePromise = client.tenants.templates.publish('template_id', { tenant_id: 'tenant_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('publish: required and optional params', async () => {
    const response = await client.tenants.templates.publish('template_id', {
      tenant_id: 'tenant_id',
      version: 'version',
    });
  });

  // Prism tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.tenants.templates.replace('template_id', {
      tenant_id: 'tenant_id',
      template: { content: { elements: [{}], version: 'version' } },
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.tenants.templates.replace('template_id', {
      tenant_id: 'tenant_id',
      template: {
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
          version: 'version',
          brand: 'brand',
        },
        channels: {
          foo: {
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
            providers: ['string'],
            routing_method: 'all',
            timeouts: { channel: 0, provider: 0 },
          },
        },
        providers: {
          foo: {
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
            timeouts: 0,
          },
        },
        routing: { channels: ['string'], method: 'all' },
      },
      published: true,
    });
  });
});
