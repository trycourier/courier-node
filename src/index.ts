import axios from "axios";
import { client } from "./client";
import { ICourierClientOptions } from "./types";

const DEFAULTS = {
  BASE_URL: "https://api.trycourier.app"
};

export default (options: ICourierClientOptions) => {
  const axiosInstance = axios.create({
    baseURL: options.baseUrl || DEFAULTS.BASE_URL,
    headers: {
      Authorization: `Bearer ${options.authenticationCode}`
    }
  });

  const courier = client({
    httpClient: axiosInstance
  });

  return courier;
};
