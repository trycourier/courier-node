import { AxiosRequestConfig } from "axios";
import { ICourierClientConfiguration } from "../types";
import {
  ICourierAutomationAdHocInvokeParams,
  ICourierAutomationConfig,
  ICourierAutomationInvokeResponse,
  ICourierAutomationInvokeTemplateParams,
  ICourierClientAutomations,
} from "./types";

const invokeAdHocAutomation = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierAutomationAdHocInvokeParams,
    config?: ICourierAutomationConfig
  ): Promise<ICourierAutomationInvokeResponse> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {},
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
    }

    if (config && config.idempotencyExpiry) {
      axiosConfig.headers["x-idempotency-expiration"] =
        config.idempotencyExpiry;
    }
    const res = await options.httpClient.post<ICourierAutomationInvokeResponse>(
      "/automations/invoke",
      {
        automation: params.automation,
        brand: params.brand,
        data: params.data,
        profile: params.profile,
        recipient: params.recipient,
        template: params.template,
      },
      axiosConfig
    );

    return res.data;
  };
};

const invokeAutomationTemplate = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierAutomationInvokeTemplateParams,
    config?: ICourierAutomationConfig
  ): Promise<ICourierAutomationInvokeResponse> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {},
    };

    if (config && config.idempotencyKey) {
      axiosConfig.headers["Idempotency-Key"] = config.idempotencyKey;
      axiosConfig.headers["x-idempotency-expiration"] =
        config.idempotencyExpiry;
    }

    const res = await options.httpClient.post<ICourierAutomationInvokeResponse>(
      `/automations/${params.templateId}/invoke`,
      {
        brand: params.brand,
        data: params.data,
        profile: params.profile,
        recipient: params.recipient,
        template: params.template,
      },
      axiosConfig
    );

    return res.data;
  };
};

export const automations = (
  options: ICourierClientConfiguration
): ICourierClientAutomations => {
  return {
    invokeAdHocAutomation: invokeAdHocAutomation(options),
    invokeAutomationTemplate: invokeAutomationTemplate(options),
  };
};
