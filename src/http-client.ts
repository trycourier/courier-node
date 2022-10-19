import crossFetch from "cross-fetch";

import { HttpMethodClient, IHttpClient, IInitHttpClientOptions } from "./types";

const fetch = globalThis.fetch ?? crossFetch;

export class CourierHttpClientError extends Error {
  public response?: Response;
  public data?: any;

  constructor(
    message: string,
    { response, data }: { response?: Response; data?: any }
  ) {
    super(message);
    Object.setPrototypeOf(this, CourierHttpClientError.prototype);

    this.response = response;
    this.data = data;
  }
}

export const initHttpClient = ({
  baseUrl,
  version,
  authorizationToken
}: IInitHttpClientOptions): IHttpClient => {
  const createHttpMethodClient = (method: string): HttpMethodClient => {
    return async <T>(...[url, body, config]: Parameters<HttpMethodClient>) => {
      const searchParams = String(new URLSearchParams(config?.params));
      const searchQueryString = searchParams && `?${searchParams}`;
      const fullUrl = encodeURI(`${baseUrl ?? ''}${url}${searchQueryString}`);
      const contentTypeHeader =
        body == null ? null : { "Content-Type": "application/json" };
      const idempotencyKeyHeader = config?.idempotencyKey
        ? { "Idempotency-Key": config.idempotencyKey }
        : null;
      const idempotencyExpiryHeader =
        config?.idempotencyExpiry == null
          ? null
          : { "x-idempotency-expiration": String(config.idempotencyExpiry) };

      const response = await fetch(fullUrl, {
        body: body != null ? JSON.stringify(body) : undefined,
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
          "User-Agent": `courier-node/${version}`,
          ...contentTypeHeader,
          ...idempotencyKeyHeader,
          ...idempotencyExpiryHeader
        },
        method
      });

      const parseAsJson =
        response.headers.get("content-length") !== "0" &&
        response.headers.get("content-type") === "application/json";

      const data = await (parseAsJson ? response.json() : response.text());

      if (!response.ok) {
        throw new CourierHttpClientError(
          data.message || "An unexpected error has occurred",
          { response, data }
        );
      }

      return { data } as { data: T };
    };
  };

  return {
    delete: createHttpMethodClient("delete"),
    get: (url, config) => createHttpMethodClient("get")(url, undefined, config),
    patch: createHttpMethodClient("patch"),
    post: createHttpMethodClient("post"),
    put: createHttpMethodClient("put")
  };
};
