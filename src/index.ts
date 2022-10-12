import { client } from "./client";
import { ICourierClientOptions } from "./types";
export { ICourierClient } from "./types";
import { initHttpClient } from "./http-client";
export { CourierHttpClientError } from "./http-client";

// cannot be `import` as it's not under TS root dir
// tslint:disable-next-line:no-var-requires
const { version } = require("../package.json");

const DEFAULTS = {
  BASE_URL: "https://api.courier.com"
};

const getEnvVariable = (name: string) => globalThis?.process?.env?.[name];

export const CourierClient = (options: ICourierClientOptions = {}) => {
  const authorizationToken =
    options.authorizationToken || getEnvVariable("COURIER_AUTH_TOKEN");

  if (!authorizationToken) {
    throw new Error("Courier Auth Token is required.");
  }

  const baseUrl =
    options.baseUrl || getEnvVariable("COURIER_BASE_URL") || DEFAULTS.BASE_URL;

  const httpClient = initHttpClient({
    authorizationToken,
    baseUrl,
    version
  });

  const courier = client({
    httpClient
  });

  return courier;
};
