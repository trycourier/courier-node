import fetch from "cross-fetch";

import { IInitHttpClientOptions, IHttpClient, HttpMethodClient } from "./types";

export class CourierHttpClientError extends Error {
  response?: Response;
  data?: any;

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
    return async <T>(
      url: string,
      body?: object,
      config?: { params?: any; headers?: object }
    ) => {
      const searchParams = String(new URLSearchParams(config?.params));
      const searchQueryString = searchParams && `?${searchParams}`;
      const fullUrl = String(new URL(`${url}${searchQueryString}`, baseUrl));
      const contentTypeHeader =
        body == null ? null : { "Content-Type": "application/json" };

      const response = await fetch(fullUrl, {
        method,
        body: body != null ? JSON.stringify(body) : undefined,
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
          "User-Agent": `courier-node/${version}`,
          ...contentTypeHeader,
          ...config?.headers
        }
      });
      const parseAsJson =
        response.headers.get("content-type") === "application/json";

      const data = await (parseAsJson ? response.json() : response.text());

      if (!response.ok) {
        throw new CourierHttpClientError(
          data.message || "Un unexpected error has occurred",
          { response, data }
        );
      }

      return { data } as { data: T };
    };
  };

  return {
    post: createHttpMethodClient("post"),
    patch: createHttpMethodClient("patch"),
    put: createHttpMethodClient("put"),
    get: (url, config) => createHttpMethodClient("get")(url, undefined, config),
    delete: createHttpMethodClient("delete")
  };
};
