// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SendAPI from '../send';
import * as InvokeAPI from './invoke';
import {
  AutomationInvokeParams,
  AutomationInvokeResponse,
  AutomationStep,
  Invoke,
  MergeAlgorithm,
} from './invoke';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Automations extends APIResource {
  invoke: InvokeAPI.Invoke = new InvokeAPI.Invoke(this._client);

  /**
   * Invoke an ad hoc automation run. This endpoint accepts a JSON payload with a
   * series of automation steps. For information about what steps are available,
   * checkout the ad hoc automation guide
   * [here](https://www.courier.com/docs/automations/steps/).
   *
   * @example
   * ```ts
   * const automationInvokeResponse =
   *   await client.automations.invokeAdHoc({
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
    body: AutomationInvokeAdHocParams,
    options?: RequestOptions,
  ): APIPromise<InvokeAPI.AutomationInvokeResponse> {
    return this._client.post('/automations/invoke', { body, ...options });
  }

  /**
   * Invoke an automation run from an automation template.
   *
   * @example
   * ```ts
   * const automationInvokeResponse =
   *   await client.automations.invokeByTemplate('templateId');
   * ```
   */
  invokeByTemplate(
    templateID: string,
    body: AutomationInvokeByTemplateParams,
    options?: RequestOptions,
  ): APIPromise<InvokeAPI.AutomationInvokeResponse> {
    return this._client.post(path`/automations/${templateID}/invoke`, { body, ...options });
  }
}

export interface AutomationInvokeAdHocParams {
  automation: AutomationInvokeAdHocParams.Automation;

  brand?: string | null;

  data?: { [key: string]: unknown } | null;

  profile?: unknown;

  recipient?: string | null;

  template?: string | null;
}

export namespace AutomationInvokeAdHocParams {
  export interface Automation {
    steps: Array<
      | Automation.AutomationAddToDigestStep
      | Automation.AutomationAddToBatchStep
      | Automation.AutomationThrottleStep
      | Automation.AutomationCancelStep
      | Automation.AutomationDelayStep
      | Automation.AutomationFetchDataStep
      | Automation.AutomationInvokeStep
      | Automation.AutomationSendStep
      | Automation.AutomationV2SendStep
      | Automation.AutomationSendListStep
      | Automation.AutomationUpdateProfileStep
    >;

    cancelation_token?: string | null;
  }

  export namespace Automation {
    export interface AutomationAddToDigestStep extends InvokeAPI.AutomationStep {
      action: 'add-to-digest';

      /**
       * The subscription topic that has digests enabled
       */
      subscription_topic_id: string;
    }

    export interface AutomationAddToBatchStep extends InvokeAPI.AutomationStep {
      action: 'add-to-batch';

      /**
       * Defines the maximum wait time before the batch should be released. Must be less
       * than wait period. Maximum of 60 days. Specified as an
       * [ISO 8601 duration](https://en.wikipedia.org/wiki/ISO_8601#Durations)
       */
      max_wait_period: string;

      /**
       * Defines what items should be retained and passed along to the next steps when
       * the batch is released
       */
      retain: AutomationAddToBatchStep.Retain;

      /**
       * Defines the period of inactivity before the batch is released. Specified as an
       * [ISO 8601 duration](https://en.wikipedia.org/wiki/ISO_8601#Durations)
       */
      wait_period: string;

      batch_id?: string | null;

      /**
       * If using scope=dynamic, provide the key or a reference (e.g.,
       * refs.data.batch_key)
       */
      batch_key?: string | null;

      /**
       * Defines the field of the data object the batch is set to when complete. Defaults
       * to `batch`
       */
      category_key?: string | null;

      /**
       * If specified, the batch will release as soon as this number is reached
       */
      max_items?: string | number | null;

      /**
       * Determine the scope of the batching. If user, chosen in this order: recipient,
       * profile.user_id, data.user_id, data.userId. If dynamic, then specify where the
       * batch_key or a reference to the batch_key
       */
      scope?: 'user' | 'global' | 'dynamic' | null;
    }

    export namespace AutomationAddToBatchStep {
      /**
       * Defines what items should be retained and passed along to the next steps when
       * the batch is released
       */
      export interface Retain {
        /**
         * The number of records to keep in batch. Default is 10 and only configurable by
         * requesting from support. When configurable minimum is 2 and maximum is 100.
         */
        count: number;

        /**
         * Keep N number of notifications based on the type. First/Last N based on
         * notification received. highest/lowest based on a scoring key providing in the
         * data accessed by sort_key
         */
        type: 'first' | 'last' | 'highest' | 'lowest';

        /**
         * Defines the data value data[sort_key] that is used to sort the stored items.
         * Required when type is set to highest or lowest.
         */
        sort_key?: string | null;
      }
    }

    export interface AutomationThrottleStep extends InvokeAPI.AutomationStep {
      action: 'throttle';

      /**
       * Maximum number of allowed notifications in that timeframe
       */
      max_allowed: number;

      on_throttle: AutomationThrottleStep.OnThrottle;

      /**
       * Defines the throttle period which corresponds to the max_allowed. Specified as
       * an ISO 8601 duration, https://en.wikipedia.org/wiki/ISO_8601#Durations
       */
      period: string;

      scope: 'user' | 'global' | 'dynamic';

      /**
       * Value must be true
       */
      should_alert: boolean;

      /**
       * If using scope=dynamic, provide the reference (e.g., refs.data.throttle_key) to
       * the how the throttle should be identified
       */
      throttle_key?: string | null;
    }

    export namespace AutomationThrottleStep {
      export interface OnThrottle {
        /**
         * The node to go to if the request is throttled
         */
        $node_id: string;
      }
    }

    export interface AutomationCancelStep extends InvokeAPI.AutomationStep {
      action: 'cancel';

      cancelation_token?: string | null;
    }

    export interface AutomationDelayStep extends InvokeAPI.AutomationStep {
      action: 'delay';

      /**
       * The [ISO 8601 duration](https://en.wikipedia.org/wiki/ISO_8601#Durations) string
       * for how long to delay for
       */
      duration?: string | null;

      /**
       * The ISO 8601 timestamp for when the delay should end
       */
      until?: string | null;
    }

    export interface AutomationFetchDataStep extends InvokeAPI.AutomationStep {
      action: 'fetch-data';

      merge_strategy: InvokeAPI.MergeAlgorithm;

      webhook: AutomationFetchDataStep.Webhook;

      idempotency_expiry?: string | null;

      idempotency_key?: string | null;
    }

    export namespace AutomationFetchDataStep {
      export interface Webhook {
        method: 'GET' | 'POST';

        url: string;

        body?: { [key: string]: unknown } | null;

        headers?: { [key: string]: unknown } | null;

        params?: { [key: string]: unknown } | null;
      }
    }

    export interface AutomationInvokeStep extends InvokeAPI.AutomationStep {
      action: 'invoke';

      template: string;
    }

    export interface AutomationSendStep extends InvokeAPI.AutomationStep {
      action: 'send';

      brand?: string | null;

      data?: { [key: string]: unknown } | null;

      override?: { [key: string]: unknown } | null;

      profile?: unknown;

      recipient?: string | null;

      template?: string | null;
    }

    export interface AutomationV2SendStep extends InvokeAPI.AutomationStep {
      action: 'send';

      /**
       * Describes the content of the message in a way that will work for email, push,
       * chat, or any channel.
       */
      message: SendAPI.Message;
    }

    export interface AutomationSendListStep extends InvokeAPI.AutomationStep {
      action: 'send-list';

      list: string;

      brand?: string | null;

      data?: { [key: string]: unknown } | null;

      override?: { [key: string]: unknown } | null;

      template?: string | null;
    }

    export interface AutomationUpdateProfileStep {
      action: 'update-profile';

      merge: InvokeAPI.MergeAlgorithm;

      profile: unknown;

      recipient_id: string;
    }
  }
}

export interface AutomationInvokeByTemplateParams {
  brand?: string | null;

  data?: { [key: string]: unknown } | null;

  profile?: unknown;

  recipient?: string | null;

  template?: string | null;
}

Automations.Invoke = Invoke;

export declare namespace Automations {
  export {
    type AutomationInvokeAdHocParams as AutomationInvokeAdHocParams,
    type AutomationInvokeByTemplateParams as AutomationInvokeByTemplateParams,
  };

  export {
    Invoke as Invoke,
    type AutomationInvokeParams as AutomationInvokeParams,
    type AutomationInvokeResponse as AutomationInvokeResponse,
    type AutomationStep as AutomationStep,
    type MergeAlgorithm as MergeAlgorithm,
  };
}
