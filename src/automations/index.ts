import { ICourierClientConfiguration } from "../types";
import {
  ICourierAutomationAdHocInvokeParams,
  ICourierAutomationConfig,
  ICourierAutomationInvokeResponse,
  ICourierAutomationInvokeTemplateParams,
  ICourierClientAutomations
} from "./types";

const invokeAdHocAutomation = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierAutomationAdHocInvokeParams,
    config?: ICourierAutomationConfig
  ): Promise<ICourierAutomationInvokeResponse> => {
    const headers: Record<string, string> = {};

    if (config && config.idempotencyKey) {
      headers["Idempotency-Key"] = config.idempotencyKey;
    }

    if (config && config.idempotencyExpiry) {
      headers["x-idempotency-expiration"] = String(config.idempotencyExpiry);
    }
    const res = await options.httpClient.post<ICourierAutomationInvokeResponse>(
      "/automations/invoke",
      {
        automation: params.automation,
        brand: params.brand,
        data: params.data,
        profile: params.profile,
        recipient: params.recipient,
        template: params.template
      },
      { headers }
    );

    return res.data;
  };
};

const invokeAutomationTemplate = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierAutomationInvokeTemplateParams,
    config?: ICourierAutomationConfig
  ): Promise<ICourierAutomationInvokeResponse> => {
    const headers: Record<string, string> = {};

    if (config && config.idempotencyKey) {
      headers["Idempotency-Key"] = config.idempotencyKey;
      headers["x-idempotency-expiration"] = String(config.idempotencyExpiry);
    }

    const res = await options.httpClient.post<ICourierAutomationInvokeResponse>(
      `/automations/${params.templateId}/invoke`,
      {
        brand: params.brand,
        data: params.data,
        profile: params.profile,
        recipient: params.recipient,
        template: params.template
      },
      { headers }
    );

    return res.data;
  };
};

export const automations = (
  options: ICourierClientConfiguration
): ICourierClientAutomations => {
  return {
    invokeAdHocAutomation: invokeAdHocAutomation(options),
    invokeAutomationTemplate: invokeAutomationTemplate(options)
  };
};
