import fetchMock from "jest-fetch-mock";
import { initHttpClient } from "../http-client";


describe('HttpClient', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.doMockOnce();
  });

  test('should have auth token', async () => {
    const token = 'test-auth-token';
    const client = initHttpClient({
      baseUrl: '', version: '1', authorizationToken: token
    });
    await client.get('https://api.courier.com/lists/list-1');
    expect(fetchMock.mock.calls.length).toEqual(1);
    const expectedAuth = { headers: { Authorization: `Bearer ${token}` } }
    expect(fetchMock.mock.calls[0][1]).toMatchObject(expectedAuth);
  });

  test('should URI encode values', async () => {
    const client = initHttpClient({
      baseUrl: '', version: '1', authorizationToken: 'auth-token'
    })
    await client.put('https://api.courier.com/lists/list-1/subscriptions/subscriber|some-value+other-value');
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.courier.com/lists/list-1/subscriptions/subscriber%7Csome-value+other-value');
  })

  test('should prepend baseURL', async () => {
    const client = initHttpClient({
      baseUrl: 'https://execute-api.us-east-1.amazonaws.com/dev', version: '1', authorizationToken: 'auth-token'
    });
    await client.get('/lists/list1|test.list');
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual('https://execute-api.us-east-1.amazonaws.com/dev/lists/list1%7Ctest.list');
  });
});