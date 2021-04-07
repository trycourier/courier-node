export type AutomationStepAction = "cancel" | "delay" | "send" | "send-list";

export interface IAutomationStep {
  action: AutomationStepAction;
  if?: string;
  ref?: string;
}

export interface IAutomationCancelStep extends IAutomationStep {
  action: "cancel";
  cancelation_token?: string;
}

export interface IAutomationDelayStep extends IAutomationStep {
  action: "delay";
  duration?: string;
  until?: string;
}

export interface IAutomationSendStep extends IAutomationStep {
  action: "send";
  brand?: string;
  data?: object;
  override?: object;
  profile?: object;
  recipient?: string;
  template?: string;
}

export interface IAutomationSendListStep extends IAutomationStep {
  action: "send-list";
  brand?: string;
  data?: object;
  list: string;
  override?: object;
  template?: string;
}

export type AutomationStep =
  | IAutomationCancelStep
  | IAutomationDelayStep
  | IAutomationSendStep
  | IAutomationSendListStep;

export interface IAutomation {
  cancelation_token?: string;
  steps: AutomationStep[];
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
