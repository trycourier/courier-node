// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tenants', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.users.tenants.list('user_id');
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
      client.users.tenants.list(
        'user_id',
        { cursor: 'cursor', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('addMultiple: only required params', async () => {
    const responsePromise = client.users.tenants.addMultiple('user_id', {
      tenants: [{ tenant_id: 'tenant_id' }],
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
  test.skip('addMultiple: required and optional params', async () => {
    const response = await client.users.tenants.addMultiple('user_id', {
      tenants: [
        {
          tenant_id: 'tenant_id',
          profile: { foo: 'bar' },
          type: 'user',
          user_id: 'user_id',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('addSingle: only required params', async () => {
    const responsePromise = client.users.tenants.addSingle('tenant_id', { user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addSingle: required and optional params', async () => {
    const response = await client.users.tenants.addSingle('tenant_id', {
      user_id: 'user_id',
      profile: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('removeAll', async () => {
    const responsePromise = client.users.tenants.removeAll('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('removeSingle: only required params', async () => {
    const responsePromise = client.users.tenants.removeSingle('tenant_id', { user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('removeSingle: required and optional params', async () => {
    const response = await client.users.tenants.removeSingle('tenant_id', { user_id: 'user_id' });
  });
});
