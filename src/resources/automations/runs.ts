// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutomationsAPI from './automations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Invoke a stored automation template or an ad hoc automation defined in the request.
 */
export class Runs extends APIResource {
  /**
   * List runs of the workspace's v2 Automations, newest first, filtered by status,
   * Template, or date range and paged by cursor. Journey (v3) runs are listed by
   * `GET /journeys/runs` instead — the two surfaces never return each other's runs.
   * Runs are retained for 95 days.
   *
   * @example
   * ```ts
   * const automationRunListResponse =
   *   await client.automations.runs.list();
   * ```
   */
  list(
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutomationsAPI.AutomationRunListResponse> {
    return this._client.get('/automations/runs', { query, ...options });
  }

  /**
   * List the per-step state of one Automation run, in full — this endpoint is not
   * paginated. `message_id` is present on send steps that produced a message; follow
   * it to `GET /messages/{message_id}` for delivery status. A send to a List or an
   * Audience yields one `message_id` for the request, not one per recipient.
   *
   * @example
   * ```ts
   * const automationRunStepsResponse =
   *   await client.automations.runs.listSteps('x');
   * ```
   */
  listSteps(id: string, options?: RequestOptions): APIPromise<AutomationsAPI.AutomationRunStepsResponse> {
    return this._client.get(path`/automations/runs/${id}/steps`, options);
  }
}

export interface RunListParams {
  /**
   * A cursor token for pagination. Use the `next_cursor` from the previous response
   * to fetch the next page of results. Treat it as opaque.
   */
  cursor?: string;

  /**
   * An inclusive upper bound on `created_at`, in the same format as `start_date`.
   */
  end_date?: string;

  /**
   * The number of runs to return per page, between `1` and `50`. Defaults to `20`.
   * Values outside the range are clamped, and a non-numeric value falls back to
   * `20`.
   */
  limit?: string;

  /**
   * An inclusive lower bound on `created_at`, as an ISO 8601 date or timestamp (e.g.
   * `2026-08-18` or `2026-08-18T20:06:36.259Z`). Any other format returns `400`.
   */
  start_date?: string;

  /**
   * A comma-separated list of run statuses to filter on, e.g. `PROCESSED,ERROR`.
   */
  status?: string;

  /**
   * A comma-separated list of Automation Template ids to filter on.
   */
  template_id?: string;
}

export declare namespace Runs {
  export { type RunListParams as RunListParams };
}
