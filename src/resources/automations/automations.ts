// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvokeAPI from './invoke';
import {
  AutomationInvokeParams,
  AutomationInvokeResponse,
  AutomationStep,
  Invoke,
  InvokeInvokeAdHocParams,
  InvokeInvokeByTemplateParams,
  MergeAlgorithm,
} from './invoke';

export class Automations extends APIResource {
  invoke: InvokeAPI.Invoke = new InvokeAPI.Invoke(this._client);
}

Automations.Invoke = Invoke;

export declare namespace Automations {
  export {
    Invoke as Invoke,
    type AutomationInvokeParams as AutomationInvokeParams,
    type AutomationInvokeResponse as AutomationInvokeResponse,
    type AutomationStep as AutomationStep,
    type MergeAlgorithm as MergeAlgorithm,
    type InvokeInvokeAdHocParams as InvokeInvokeAdHocParams,
    type InvokeInvokeByTemplateParams as InvokeInvokeByTemplateParams,
  };
}
