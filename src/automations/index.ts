import { ICourierClientConfiguration } from "../types";
import {
  ICourierAutomationAdHocInvokeParams,
  ICourierAutomationInvokeResponse,
  ICourierAutomationInvokeTemplateParams,
  ICourierClientAutomations
} from "./types";

const invokeAdHocAutomation = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierAutomationAdHocInvokeParams
  ): Promise<ICourierAutomationInvokeResponse> => {
    const res = await options.httpClient.post<ICourierAutomationInvokeResponse>(
      "/automations/invoke",
      {
        automation: params.automation,
        brand: params.brand,
        data: params.data,
        profile: params.profile,
        recipient: params.recipient,
        template: params.template
      }
    );

    return res.data;
  };
};

const invokeAutomationTemplate = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierAutomationInvokeTemplateParams
  ): Promise<ICourierAutomationInvokeResponse> => {
    const res = await options.httpClient.post<ICourierAutomationInvokeResponse>(
      `/automations/${params.templateId}/invoke`,
      {
        brand: params.brand,
        data: params.data,
        profile: params.profile,
        recipient: params.recipient,
        template: params.template
      }
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
