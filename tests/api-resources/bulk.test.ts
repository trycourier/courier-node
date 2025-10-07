// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from 'courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // Prism tests are disabled
  test.skip('addUsers: only required params', async () => {
    const responsePromise = client.bulk.addUsers('job_id', { users: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addUsers: required and optional params', async () => {
    const response = await client.bulk.addUsers('job_id', {
      users: [
        {
          data: {},
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
          profile: {},
          recipient: 'recipient',
          to: {
            account_id: 'account_id',
            context: { tenant_id: 'tenant_id' },
            data: { foo: 'bar' },
            email: 'email',
            locale: 'locale',
            phone_number: 'phone_number',
            preferences: {
              notifications: {
                foo: {
                  status: 'OPTED_IN',
                  channel_preferences: [{ channel: 'direct_message' }],
                  rules: [{ until: 'until', start: 'start' }],
                  source: 'subscription',
                },
              },
              categories: {
                foo: {
                  status: 'OPTED_IN',
                  channel_preferences: [{ channel: 'direct_message' }],
                  rules: [{ until: 'until', start: 'start' }],
                  source: 'subscription',
                },
              },
              templateId: 'templateId',
            },
            tenant_id: 'tenant_id',
            user_id: 'user_id',
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('createJob: only required params', async () => {
    const responsePromise = client.bulk.createJob({ message: { template: 'template' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createJob: required and optional params', async () => {
    const response = await client.bulk.createJob({
      message: {
        template: 'template',
        brand: 'brand',
        data: { foo: 'bar' },
        event: 'event',
        locale: { foo: { foo: 'bar' } },
        override: { foo: 'bar' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('listUsers', async () => {
    const responsePromise = client.bulk.listUsers('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bulk.listUsers('job_id', { cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveJob', async () => {
    const responsePromise = client.bulk.retrieveJob('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('runJob', async () => {
    const responsePromise = client.bulk.runJob('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
