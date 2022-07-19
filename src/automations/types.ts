import { Message } from "../send/types";

export type AutomationStepAction =
  | "cancel"
  | "delay"
  | "send"
  | "send-list"
  | "update-profile";

export type MergeAlgorithm = "replace" | "none" | "overwrite" | "soft-merge";

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
  data?: Record<string, unknown>;
  override?: Record<string, unknown>;
  profile?: object;
  recipient?: string;
  template?: string;
}

export interface IAutomationV2SendStep extends IAutomationStep {
  action: "send";
  message: Message;
}

export interface IAutomationSendListStep extends IAutomationStep {
  action: "send-list";
  brand?: string;
  data?: Record<string, unknown>;
  list: string;
  override?: Record<string, unknown>;
  template?: string;
}

export interface IAutomationUpdateProfileStep extends IAutomationStep {
  action: "update-profile";
  recipient_id: string;
  profile: object;
  merge: MergeAlgorithm;
}

export type AutomationStep =
  | IAutomationCancelStep
  | IAutomationDelayStep
  | IAutomationSendStep
  | IAutomationV2SendStep
  | IAutomationSendListStep
  | IAutomationUpdateProfileStep;

export interface IAutomation {
  cancelation_token?: string;
  steps: AutomationStep[];
}

export interface ICourierAutomationInvokeParams {
  brand?: string;
  data?: Record<string, unknown>;
  profile?: object;
  recipient?: string;
  template?: string;
}

export interface ICourierAutomationAdHocInvokeParams
  extends ICourierAutomationInvokeParams {
  automation: IAutomation;
}

export interface ICourierAutomationConfig {
  idempotencyKey?: string;
  idempotencyExpiry?: number;
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
    params: ICourierAutomationAdHocInvokeParams,
    config?: ICourierAutomationConfig
  ) => Promise<ICourierAutomationInvokeResponse>;
  invokeAutomationTemplate: (
    params: ICourierAutomationInvokeTemplateParams,
    config?: ICourierAutomationConfig
  ) => Promise<ICourierAutomationInvokeResponse>;
}
