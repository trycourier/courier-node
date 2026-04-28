// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Mock server tests are disabled
  test.skip('issueToken: only required params', async () => {
    const responsePromise = client.auth.issueToken({
      expires_in: '$YOUR_NUMBER days',
      scope:
        'user_id:$YOUR_USER_ID write:user-tokens inbox:read:messages inbox:write:events read:preferences write:preferences read:brands',
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
  test.skip('issueToken: required and optional params', async () => {
    const response = await client.auth.issueToken({
      expires_in: '$YOUR_NUMBER days',
      scope:
        'user_id:$YOUR_USER_ID write:user-tokens inbox:read:messages inbox:write:events read:preferences write:preferences read:brands',
    });
  });
});
