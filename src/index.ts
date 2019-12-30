import axios from "axios";
import { client } from "./client";
import { ICourierClientOptions } from "./types";

// cannot be `import` as it's not under TS root dir
// tslint:disable-next-line:no-var-requires
const { name, version } = require("../package.json");

const DEFAULTS = {
  BASE_URL: "https://api.trycourier.app"
};

export const CourierClient = (options: ICourierClientOptions) => {
  const axiosInstance = axios.create({
    baseURL: options.baseUrl || DEFAULTS.BASE_URL,
    headers: {
      Authorization: `Bearer ${options.authorizationToken}`,
      "User-Agent": `${name}/${version}`
    }
  });

  const courier = client({
    httpClient: axiosInstance
  });

  return courier;
};
