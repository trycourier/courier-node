export interface IAutomation {
  cancelation_token?: string;
  steps: any[];
}

export interface ICourierAutomationInvokeParams {
  brand?: string;
  data?: object;
  profile?: object;
  recipient?: string;
  template?: string;
}

export interface ICourierAutomationAdHocInvokeParams
  extends ICourierAutomationInvokeParams {
  automation: IAutomation;
}

export interface ICourierAutomationInvokeTemplateParams
  extends ICourierAutomationInvokeParams {
  templateId: string;
}

export interface ICourierAutomationInvokeResponse {
  runId: string;
}

export interface ICourierClientAutomations {
  invokeAdHocAutomation: (
    params: ICourierAutomationAdHocInvokeParams
  ) => Promise<ICourierAutomationInvokeResponse>;
  invokeAutomationTemplate: (
    params: ICourierAutomationInvokeTemplateParams
  ) => Promise<ICourierAutomationInvokeResponse>;
}
