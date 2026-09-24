// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource previews', () => {
  // Mock server tests are disabled
  test.skip('archiveDeviceSet', async () => {
    const responsePromise = client.previews.archiveDeviceSet('deviceSetId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createDeviceSet: only required params', async () => {
    const responsePromise = client.previews.createDeviceSet({
      device_ids: ['pvd_1w6dgafr3aaycvv9a8bm996pkc'],
      name: 'Mobile',
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
  test.skip('createDeviceSet: required and optional params', async () => {
    const response = await client.previews.createDeviceSet({
      device_ids: ['pvd_1w6dgafr3aaycvv9a8bm996pkc'],
      name: 'Mobile',
    });
  });

  // Mock server tests are disabled
  test.skip('listDeviceSets', async () => {
    const responsePromise = client.previews.listDeviceSets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listDevices', async () => {
    const responsePromise = client.previews.listDevices();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveDeviceSet', async () => {
    const responsePromise = client.previews.retrieveDeviceSet('deviceSetId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateDeviceSet: only required params', async () => {
    const responsePromise = client.previews.updateDeviceSet('deviceSetId', {
      device_ids: ['pvd_1w6dgafr3aaycvv9a8bm996pkc', 'pvd_34qvmj6p4dbqaa5mpys1ekt9jx'],
      name: 'Mobile and desktop',
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
  test.skip('updateDeviceSet: required and optional params', async () => {
    const response = await client.previews.updateDeviceSet('deviceSetId', {
      device_ids: ['pvd_1w6dgafr3aaycvv9a8bm996pkc', 'pvd_34qvmj6p4dbqaa5mpys1ekt9jx'],
      name: 'Mobile and desktop',
    });
  });
});
