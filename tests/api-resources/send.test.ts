// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CourierDocs from 'courier-docs';

const client = new CourierDocs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource send', () => {
  // Prism tests are disabled
  test.skip('sendMessage: only required params', async () => {
    const responsePromise = client.send.sendMessage({
      message: { content: { elements: [{}], version: 'version' } },
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
  test.skip('sendMessage: required and optional params', async () => {
    const response = await client.send.sendMessage({
      message: {
        brand_id: 'brand_id',
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
        context: { tenant_id: 'tenant_id' },
        data: { foo: 'bar' },
        delay: { duration: 0, until: 'until' },
        expiry: { expires_in: 'string', expires_at: 'expires_at' },
        metadata: {
          event: 'event',
          tags: ['string'],
          trace_id: 'trace_id',
          utm: { campaign: 'campaign', content: 'content', medium: 'medium', source: 'source', term: 'term' },
        },
        preferences: { subscription_topic_id: 'subscription_topic_id' },
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
        routing: {
          channels: [
            {
              channel: 'channel',
              config: { foo: 'bar' },
              if: 'if',
              method: 'all',
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
            },
          ],
          method: 'all',
        },
        timeout: {
          channel: { foo: 0 },
          criteria: 'no-escalation',
          escalation: 0,
          message: 0,
          provider: { foo: 0 },
        },
        to: {
          audience_id: 'audience_id',
          data: { foo: 'bar' },
          filters: [{ operator: 'MEMBER_OF', path: 'account_id', value: 'value' }],
        },
        content: {
          elements: [{ channels: ['string'], if: 'if', loop: 'loop', ref: 'ref', type: 'text' }],
          version: 'version',
          brand: {},
        },
      },
    });
  });
});
