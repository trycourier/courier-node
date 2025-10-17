// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvokeAPI from './invoke';
import { Invoke, InvokeInvokeAdHocParams, InvokeInvokeByTemplateParams } from './invoke';

export class Automations extends APIResource {
  invoke: InvokeAPI.Invoke = new InvokeAPI.Invoke(this._client);
}

export interface AutomationInvokeResponse {
  runId: string;
}

Automations.Invoke = Invoke;

export declare namespace Automations {
  export { type AutomationInvokeResponse as AutomationInvokeResponse };

  export {
    Invoke as Invoke,
    type InvokeInvokeAdHocParams as InvokeInvokeAdHocParams,
    type InvokeInvokeByTemplateParams as InvokeInvokeByTemplateParams,
  };
}
