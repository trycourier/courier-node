import axios from "axios";
import { client } from "./client";

const DEFAULTS = {
  BASE_URL: "https://api.trycourier.app"
};

export interface ICourierClientOptions {
  baseUrl?: string;
  authenticationCode: string;
}

export default (options: ICourierClientOptions) => {
  const axiosInstance = axios.create({
    baseURL: options.baseUrl || DEFAULTS.BASE_URL,
    headers: {
      Authorization: `Bearer ${options.authenticationCode}`
    }
  });

  const courier = client({
    httpPostClient: axiosInstance.post
  });

  return courier;
};
