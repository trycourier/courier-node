// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CourierDocs from 'courier-docs';

const client = new CourierDocs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource draft', () => {
  // Prism tests are disabled
  test.skip('retrieveContent', async () => {
    const responsePromise = client.notifications.draft.retrieveContent('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
