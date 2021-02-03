import axios from "axios";
import { client } from "./client";
import { ICourierClientOptions } from "./types";

// cannot be `import` as it's not under TS root dir
// tslint:disable-next-line:no-var-requires
const { version } = require("../package.json");

const DEFAULTS = {
  BASE_URL: "https://api.courier.com"
};

export const CourierClient = (options: ICourierClientOptions = {}) => {
  // Bearer Auth Scheme takes a precedence
  let authScheme = "Bearer";
  let authorizationToken =
    options.authorizationToken || process.env.COURIER_AUTH_TOKEN;

  // Try falling back to Basic Auth Scheme
  if (!authorizationToken) {
    const username = options.username || process.env.COURIER_AUTH_USERNAME;
    const password = options.password || process.env.COURIER_AUTH_PASSWORD;
    if (username && password) {
      authScheme = "Basic";
      authorizationToken = Buffer.from(
        `${username}:${password}`,
        "utf8"
      ).toString("base64");
    } else {
      throw new Error("Courier Auth Token OR Username & Password is required.");
    }
  }

  const baseURL =
    options.baseUrl || process.env.COURIER_BASE_URL || DEFAULTS.BASE_URL;

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `${authScheme} ${authorizationToken}`,
      "User-Agent": `courier-node/${version}`
    }
  });

  const courier = client({
    httpClient: axiosInstance
  });

  return courier;
};
