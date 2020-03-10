import axios from "axios";
import { client } from "./client";
import { ICourierClientOptions } from "./types";

// cannot be `import` as it's not under TS root dir
// tslint:disable-next-line:no-var-requires
const { version } = require("../package.json");

const DEFAULTS = {
  BASE_URL: "https://api.trycourier.app"
};

export const CourierClient = (options: ICourierClientOptions = {}) => {
  const authorizationToken =
    options.authorizationToken || process.env.COURIER_AUTH_TOKEN;

  if (!authorizationToken) {
    throw new Error("Courier Auth Token is required.");
  }

  const baseURL =
    options.baseUrl || process.env.COURIER_BASE_URL || DEFAULTS.BASE_URL;

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      "User-Agent": `courier-node/${version}`
    }
  });

  const courier = client({
    httpClient: axiosInstance
  });

  return courier;
};
