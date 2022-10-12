import fetchMock from "jest-fetch-mock";

interface MockConfig {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string | RegExp;
  headers?: Record<string, string | null>;
  response: {
    status?: number;
    body?: any;
  };
}

const mockRequests = (configs: MockConfig[]) => {
  const findMatchingConfig = (request: Request) => {
    const { url, method } = request;
    const { pathname } = new URL(url);

    const matchingConfig = configs.find(config => {
      const matchingMethod = config.method === method;
      const matchingPath =
        typeof config.path === "string"
          ? pathname === config.path
          : config.path.test(pathname);

      const matchingHeaders = config.headers
        ? Object.entries(config.headers).every(
            ([key, value]) => request.headers.get(key) === value
          )
        : true;

      return matchingMethod && matchingPath && matchingHeaders;
    });

    return matchingConfig;
  };

  fetchMock.doMockIf(
    request => !!findMatchingConfig(request),
    async request => {
      const config = findMatchingConfig(request)!;

      return {
        status: config.response.status || 200,
        body: config.response.body ? JSON.stringify(config.response.body) : "",
        headers: config.response.body
          ? { "content-type": "application/json" }
          : undefined
      };
    }
  );
};

export default mockRequests;
