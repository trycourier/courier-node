// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Courier from '@trycourier/courier';

const client = new Courier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brands', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.brands.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.brands.create({
      name: 'name',
      id: 'id',
      settings: {
        colors: { primary: 'primary', secondary: 'secondary' },
        email: {
          footer: { content: {}, inheritDefault: true },
          head: { inheritDefault: true, content: 'content' },
          header: { logo: { href: 'href', image: 'image' }, barColor: 'barColor', inheritDefault: true },
          templateOverride: {
            enabled: true,
            backgroundColor: 'backgroundColor',
            blocksBackgroundColor: 'blocksBackgroundColor',
            footer: 'footer',
            head: 'head',
            header: 'header',
            width: 'width',
            mjml: {
              enabled: true,
              backgroundColor: 'backgroundColor',
              blocksBackgroundColor: 'blocksBackgroundColor',
              footer: 'footer',
              head: 'head',
              header: 'header',
              width: 'width',
            },
            footerBackgroundColor: 'footerBackgroundColor',
            footerFullWidth: true,
          },
        },
        inapp: {
          colors: { primary: 'primary', secondary: 'secondary' },
          icons: { bell: 'bell', message: 'message' },
          widgetBackground: { bottomColor: 'bottomColor', topColor: 'topColor' },
          borderRadius: 'borderRadius',
          disableMessageIcon: true,
          fontFamily: 'fontFamily',
          placement: 'top',
        },
      },
      snippets: { items: [{ name: 'name', value: 'value' }] },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.brands.retrieve('brand_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.brands.update('brand_id', { name: 'name' });
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
    const response = await client.brands.update('brand_id', {
      name: 'name',
      settings: {
        colors: { primary: 'primary', secondary: 'secondary' },
        email: {
          footer: { content: {}, inheritDefault: true },
          head: { inheritDefault: true, content: 'content' },
          header: { logo: { href: 'href', image: 'image' }, barColor: 'barColor', inheritDefault: true },
          templateOverride: {
            enabled: true,
            backgroundColor: 'backgroundColor',
            blocksBackgroundColor: 'blocksBackgroundColor',
            footer: 'footer',
            head: 'head',
            header: 'header',
            width: 'width',
            mjml: {
              enabled: true,
              backgroundColor: 'backgroundColor',
              blocksBackgroundColor: 'blocksBackgroundColor',
              footer: 'footer',
              head: 'head',
              header: 'header',
              width: 'width',
            },
            footerBackgroundColor: 'footerBackgroundColor',
            footerFullWidth: true,
          },
        },
        inapp: {
          colors: { primary: 'primary', secondary: 'secondary' },
          icons: { bell: 'bell', message: 'message' },
          widgetBackground: { bottomColor: 'bottomColor', topColor: 'topColor' },
          borderRadius: 'borderRadius',
          disableMessageIcon: true,
          fontFamily: 'fontFamily',
          placement: 'top',
        },
      },
      snippets: { items: [{ name: 'name', value: 'value' }] },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.brands.list();
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
      client.brands.list({ cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Courier.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.brands.delete('brand_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
