import axios from "axios";
import { client } from "./client";
import { ICourierClientOptions } from "./types";

// cannot be `import` as it's not under TS root dir
// tslint:disable-next-line:no-var-requires
const { name, version } = require("../package.json");

const DEFAULTS = {
  BASE_URL: "https://api.trycourier.app"
};

export const CourierClient = (options: ICourierClientOptions = {}) => {
  const authorizationToken =
    options.authorizationToken || process.env.COURIER_AUTH_TOKEN;

  if (!authorizationToken) {
    throw new Error("Courier Auth Token is required.");
  }

  const axiosInstance = axios.create({
    baseURL: options.baseUrl || DEFAULTS.BASE_URL,
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      "User-Agent": `${name}/${version}`
    }
  });

  const courier = client({
    httpClient: axiosInstance
  });

  return courier;
};
