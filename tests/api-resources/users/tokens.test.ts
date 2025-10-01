// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokens', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.users.tokens.update('token', {
      user_id: 'user_id',
      patch: [{ op: 'op', path: 'path' }],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.users.tokens.update('token', {
      user_id: 'user_id',
      patch: [{ op: 'op', path: 'path', value: 'value' }],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.users.tokens.list('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.users.tokens.delete('token', { user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.users.tokens.delete('token', { user_id: 'user_id' });
  });

  // Prism tests are disabled
  test.skip('addMultiple', async () => {
    const responsePromise = client.users.tokens.addMultiple('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addSingle: only required params', async () => {
    const responsePromise = client.users.tokens.addSingle('token', {
      user_id: 'user_id',
      provider_key: 'firebase-fcm',
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
  test.skip('addSingle: required and optional params', async () => {
    const response = await client.users.tokens.addSingle('token', {
      user_id: 'user_id',
      provider_key: 'firebase-fcm',
      body_token: 'token',
      device: {
        ad_id: 'ad_id',
        app_id: 'app_id',
        device_id: 'device_id',
        manufacturer: 'manufacturer',
        model: 'model',
        platform: 'platform',
      },
      expiry_date: 'string',
      properties: {},
      tracking: { ip: 'ip', lat: 'lat', long: 'long', os_version: 'os_version' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieveSingle: only required params', async () => {
    const responsePromise = client.users.tokens.retrieveSingle('token', { user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSingle: required and optional params', async () => {
    const response = await client.users.tokens.retrieveSingle('token', { user_id: 'user_id' });
  });
});
