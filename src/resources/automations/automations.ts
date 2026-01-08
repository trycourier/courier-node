// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvokeAPI from './invoke';
import { Invoke, InvokeInvokeAdHocParams, InvokeInvokeByTemplateParams } from './invoke';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Automations extends APIResource {
  invoke: InvokeAPI.Invoke = new InvokeAPI.Invoke(this._client);

  /**
   * Get the list of automations.
   *
   * @example
   * ```ts
   * const automationTemplateListResponse =
   *   await client.automations.list();
   * ```
   */
  list(
    query: AutomationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutomationTemplateListResponse> {
    return this._client.get('/automations', { query, ...options });
  }
}

export interface AutomationInvokeResponse {
  runId: string;
}

export interface AutomationTemplate {
  /**
   * The unique identifier of the automation template.
   */
  id: string;

  /**
   * The name of the automation template.
   */
  name: string;

  /**
   * The version of the template published, draft.
   */
  version: 'published' | 'draft';

  /**
   * ISO 8601 timestamp when the template was created.
   */
  createdAt?: string;

  /**
   * ISO 8601 timestamp when the template was last updated.
   */
  updatedAt?: string;
}

export interface AutomationTemplateListResponse {
  /**
   * A cursor token for pagination. Present when there are more results available.
   */
  cursor?: string;

  templates?: Array<AutomationTemplate>;
}

export interface AutomationListParams {
  /**
   * A cursor token for pagination. Use the cursor from the previous response to
   * fetch the next page of results.
   */
  cursor?: string;

  /**
   * The version of templates to retrieve. Accepted values are published (for
   * published templates) or draft (for draft templates). Defaults to published.
   */
  version?: 'published' | 'draft';
}

Automations.Invoke = Invoke;

export declare namespace Automations {
  export {
    type AutomationInvokeResponse as AutomationInvokeResponse,
    type AutomationTemplate as AutomationTemplate,
    type AutomationTemplateListResponse as AutomationTemplateListResponse,
    type AutomationListParams as AutomationListParams,
  };

  export {
    Invoke as Invoke,
    type InvokeInvokeAdHocParams as InvokeInvokeAdHocParams,
    type InvokeInvokeByTemplateParams as InvokeInvokeByTemplateParams,
  };
}
