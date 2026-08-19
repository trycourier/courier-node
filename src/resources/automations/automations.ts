// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvokeAPI from './invoke';
import { Invoke, InvokeInvokeAdHocParams, InvokeInvokeByTemplateParams } from './invoke';
import * as RunsAPI from './runs';
import { RunListParams, Runs } from './runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Invoke a stored automation template or an ad hoc automation defined in the request.
 */
export class Automations extends APIResource {
  invoke: InvokeAPI.Invoke = new InvokeAPI.Invoke(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Lists the workspace's saved automation templates, each with its id and a cursor
   * for paging to the next page of results.
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

/**
 * An Automation run as it appears in a list response.
 */
export interface AutomationRunListItem {
  /**
   * A unique identifier representing the run.
   */
  run_id: string;

  /**
   * Internal provenance strings describing what started the run, e.g.
   * `invoke/<template_id>` or `segment/page/Pricing Page`. Diagnostic only — the
   * format is unstable and should not be parsed.
   */
  source: Array<string>;

  /**
   * When the run started, as an ISO 8601 timestamp.
   */
  created_at?: string;

  /**
   * The state of the run: `PROCESSING`, `PROCESSED`, `WAITING`, `CANCELED`, `ERROR`,
   * `THROTTLED`, or `NOT PROCESSED`. Not an enum — new values have been added
   * before.
   */
  status?: string;

  /**
   * The id of the Automation Template this run belongs to.
   */
  template_id?: string;
}

/**
 * A page of Automation runs.
 */
export interface AutomationRunListResponse {
  runs: Array<AutomationRunListItem>;

  /**
   * Pass back as `cursor` to fetch the next page. Absent on the last page.
   */
  next_cursor?: string;
}

/**
 * One executed step of an Automation run.
 */
export interface AutomationRunStep {
  /**
   * The kind of step that ran, e.g. `send`, `delay`, or `update-profile`.
   */
  action: string;

  /**
   * The state of the step: the seven run statuses, plus `SKIPPED` and `COMPUTING`.
   * Not an enum — new values have been added before.
   */
  status: string;

  /**
   * When the step started, as an ISO 8601 timestamp.
   */
  created_at?: string;

  /**
   * The message this step produced, present on send steps. Pass it to
   * `GET /messages/{message_id}` for delivery status. A send to a List or an
   * Audience yields one id for the request, not one per recipient.
   */
  message_id?: string;

  /**
   * A unique identifier representing the step.
   */
  step_id?: string;

  /**
   * When the step last changed state, as an ISO 8601 timestamp.
   */
  updated_at?: string;
}

/**
 * Every step of an Automation run. Not paginated.
 */
export interface AutomationRunStepsResponse {
  steps: Array<AutomationRunStep>;
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
   * The version of the template published or drafted.
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
Automations.Runs = Runs;

export declare namespace Automations {
  export {
    type AutomationInvokeResponse as AutomationInvokeResponse,
    type AutomationRunListItem as AutomationRunListItem,
    type AutomationRunListResponse as AutomationRunListResponse,
    type AutomationRunStep as AutomationRunStep,
    type AutomationRunStepsResponse as AutomationRunStepsResponse,
    type AutomationTemplate as AutomationTemplate,
    type AutomationTemplateListResponse as AutomationTemplateListResponse,
    type AutomationListParams as AutomationListParams,
  };

  export {
    Invoke as Invoke,
    type InvokeInvokeAdHocParams as InvokeInvokeAdHocParams,
    type InvokeInvokeByTemplateParams as InvokeInvokeByTemplateParams,
  };

  export { Runs as Runs, type RunListParams as RunListParams };
}
