// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutomationsAPI from './automations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Invoke a stored automation template or an ad hoc automation defined in the request.
 */
export class Invoke extends APIResource {
  /**
   * Runs a series of automation steps supplied inline, without a saved template, and
   * returns a runId.
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
    params: InvokeInvokeAdHocParams,
    options?: RequestOptions,
  ): APIPromise<AutomationsAPI.AutomationInvokeResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post('/automations/invoke', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(xIdempotencyExpiration != null ?
            { 'x-idempotency-expiration': xIdempotencyExpiration }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Starts an automation run from a saved template for one recipient, with optional
   * data and profile, and returns a runId.
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
    params: InvokeInvokeByTemplateParams,
    options?: RequestOptions,
  ): APIPromise<AutomationsAPI.AutomationInvokeResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post(path`/automations/${templateID}/invoke`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(xIdempotencyExpiration != null ?
            { 'x-idempotency-expiration': xIdempotencyExpiration }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface InvokeInvokeAdHocParams {
  /**
   * Body param
   */
  automation: InvokeInvokeAdHocParams.Automation;

  /**
   * Body param
   */
  brand?: string | null;

  /**
   * Body param
   */
  data?: { [key: string]: unknown } | null;

  /**
   * Body param
   */
  profile?: { [key: string]: unknown } | null;

  /**
   * Body param
   */
  recipient?: string | null;

  /**
   * Body param
   */
  template?: string | null;

  /**
   * Header param: A unique key that makes this request idempotent. If Courier
   * receives another request with the same `Idempotency-Key`, it returns the stored
   * response from the first request without performing the operation again
   * (including the original status code and any error). Use it to safely retry
   * `POST` requests after network failures without risking duplicate sends. The key
   * is scoped to this endpoint.
   */
  'Idempotency-Key'?: string;

  /**
   * Header param: How long the idempotency key remains valid, as a Unix epoch
   * timestamp in seconds or an ISO 8601 date string. Only applies when
   * `Idempotency-Key` is provided. If omitted, the key is retained for 25 hours; the
   * maximum is 1 year.
   */
  'x-idempotency-expiration'?: string;
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
  /**
   * Body param
   */
  recipient: string | null;

  /**
   * Body param
   */
  brand?: string | null;

  /**
   * Body param
   */
  data?: { [key: string]: unknown } | null;

  /**
   * Body param
   */
  profile?: { [key: string]: unknown } | null;

  /**
   * Body param
   */
  template?: string | null;

  /**
   * Header param: A unique key that makes this request idempotent. If Courier
   * receives another request with the same `Idempotency-Key`, it returns the stored
   * response from the first request without performing the operation again
   * (including the original status code and any error). Use it to safely retry
   * `POST` requests after network failures without risking duplicate sends. The key
   * is scoped to this endpoint.
   */
  'Idempotency-Key'?: string;

  /**
   * Header param: How long the idempotency key remains valid, as a Unix epoch
   * timestamp in seconds or an ISO 8601 date string. Only applies when
   * `Idempotency-Key` is provided. If omitted, the key is retained for 25 hours; the
   * maximum is 1 year.
   */
  'x-idempotency-expiration'?: string;
}

export declare namespace Invoke {
  export {
    type InvokeInvokeAdHocParams as InvokeInvokeAdHocParams,
    type InvokeInvokeByTemplateParams as InvokeInvokeByTemplateParams,
  };
}
