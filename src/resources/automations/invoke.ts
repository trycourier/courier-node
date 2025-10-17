// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutomationsAPI from './automations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invoke extends APIResource {
  /**
   * Invoke an ad hoc automation run. This endpoint accepts a JSON payload with a
   * series of automation steps. For information about what steps are available,
   * checkout the ad hoc automation guide
   * [here](https://www.courier.com/docs/automations/steps/).
   *
   * @example
   * ```ts
   * const automationInvokeResponse =
   *   await client.automations.invoke.invokeAdHoc({
   *     automation: {
   *       cancelation_token: 'delay-send--user-yes--abc-123',
   *       steps: [
   *         { action: 'delay', until: '20240408T080910.123' },
   *         {
   *           action: 'send',
   *           template: '64TP5HKPFTM8VTK1Y75SJDQX9JK0',
   *         },
   *       ],
   *     },
   *     data: { name: 'Foo' },
   *     profile: { tenant_id: 'abc-123' },
   *     recipient: 'user-yes',
   *   });
   * ```
   */
  invokeAdHoc(
    body: InvokeInvokeAdHocParams,
    options?: RequestOptions,
  ): APIPromise<AutomationsAPI.AutomationInvokeResponse> {
    return this._client.post('/automations/invoke', { body, ...options });
  }

  /**
   * Invoke an automation run from an automation template.
   *
   * @example
   * ```ts
   * const automationInvokeResponse =
   *   await client.automations.invoke.invokeByTemplate(
   *     'templateId',
   *     { recipient: 'recipient' },
   *   );
   * ```
   */
  invokeByTemplate(
    templateID: string,
    body: InvokeInvokeByTemplateParams,
    options?: RequestOptions,
  ): APIPromise<AutomationsAPI.AutomationInvokeResponse> {
    return this._client.post(path`/automations/${templateID}/invoke`, { body, ...options });
  }
}

export interface InvokeInvokeAdHocParams {
  automation: InvokeInvokeAdHocParams.Automation;

  brand?: string | null;

  data?: { [key: string]: unknown } | null;

  profile?: { [key: string]: unknown } | null;

  recipient?: string | null;

  template?: string | null;
}

export namespace InvokeInvokeAdHocParams {
  export interface Automation {
    steps: Array<
      | Automation.AutomationDelayStep
      | Automation.AutomationSendStep
      | Automation.AutomationSendListStep
      | Automation.AutomationUpdateProfileStep
      | Automation.AutomationCancelStep
      | Automation.AutomationFetchDataStep
      | Automation.AutomationInvokeStep
    >;

    cancelation_token?: string | null;
  }

  export namespace Automation {
    export interface AutomationDelayStep {
      action: 'delay';

      duration?: string | null;

      until?: string | null;
    }

    export interface AutomationSendStep {
      action: 'send';

      brand?: string | null;

      data?: { [key: string]: unknown } | null;

      profile?: { [key: string]: unknown } | null;

      recipient?: string | null;

      template?: string | null;
    }

    export interface AutomationSendListStep {
      action: 'send-list';

      list: string;

      brand?: string | null;

      data?: { [key: string]: unknown } | null;
    }

    export interface AutomationUpdateProfileStep {
      action: 'update-profile';

      profile: { [key: string]: unknown };

      merge?: 'none' | 'overwrite' | 'soft-merge' | 'replace' | null;

      recipient_id?: string | null;
    }

    export interface AutomationCancelStep {
      action: 'cancel';

      cancelation_token: string;
    }

    export interface AutomationFetchDataStep {
      action: 'fetch-data';

      webhook: AutomationFetchDataStep.Webhook;

      merge_strategy?: 'replace' | 'overwrite' | 'soft-merge' | null;
    }

    export namespace AutomationFetchDataStep {
      export interface Webhook {
        method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

        url: string;

        body?: string | null;

        headers?: { [key: string]: string } | null;
      }
    }

    export interface AutomationInvokeStep {
      action: 'invoke';

      template: string;
    }
  }
}

export interface InvokeInvokeByTemplateParams {
  recipient: string | null;

  brand?: string | null;

  data?: { [key: string]: unknown } | null;

  profile?: { [key: string]: unknown } | null;

  template?: string | null;
}

export declare namespace Invoke {
  export {
    type InvokeInvokeAdHocParams as InvokeInvokeAdHocParams,
    type InvokeInvokeByTemplateParams as InvokeInvokeByTemplateParams,
  };
}
