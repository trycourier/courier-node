// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class Invoke extends APIResource {}

export interface AutomationInvokeParams {
  brand?: string | null;

  data?: { [key: string]: unknown } | null;

  profile?: unknown;

  recipient?: string | null;

  template?: string | null;
}

export interface AutomationInvokeResponse {
  runId: string;
}

export interface AutomationStep {
  if?: string | null;

  ref?: string | null;
}

export type MergeAlgorithm = 'replace' | 'none' | 'overwrite' | 'soft-merge';

export declare namespace Invoke {
  export {
    type AutomationInvokeParams as AutomationInvokeParams,
    type AutomationInvokeResponse as AutomationInvokeResponse,
    type AutomationStep as AutomationStep,
    type MergeAlgorithm as MergeAlgorithm,
  };
}
