// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JourneysAPI from './journeys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Build, version, publish, invoke, and cancel multi-step notification workflows, along with the templates scoped to them.
 */
export class Runs extends APIResource {
  /**
   * Fetch one Journey run by id. Returns `404` for an unknown run, a run belonging
   * to another workspace, a run past the 95-day retention window, or an Automation
   * run id — the same body in every case, so the response never reveals whether a
   * run exists elsewhere.
   *
   * @example
   * ```ts
   * const journeyRunResponse =
   *   await client.journeys.runs.retrieve('x');
   * ```
   */
  retrieve(runID: string, options?: RequestOptions): APIPromise<JourneysAPI.JourneyRunResponse> {
    return this._client.get(path`/journeys/runs/${runID}`, options);
  }

  /**
   * List runs of the workspace's Journeys, newest first, filtered by status,
   * Journey, or date range and paged by cursor. Runs of v2 Automations are listed by
   * `GET /automations/runs` instead — the two surfaces never return each other's
   * runs. Runs are retained for 95 days.
   *
   * @example
   * ```ts
   * const journeyRunListResponse =
   *   await client.journeys.runs.list();
   * ```
   */
  list(
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JourneysAPI.JourneyRunListResponse> {
    return this._client.get('/journeys/runs', { query, ...options });
  }

  /**
   * List the per-node state of one Journey run, in full — this endpoint is not
   * paginated. Each step's `node_id` is the id of the node in the published Journey,
   * so a step maps directly onto the Journey graph. `message_id` is present on send
   * steps that produced a message; follow it to `GET /messages/{message_id}` for
   * delivery status.
   *
   * @example
   * ```ts
   * const journeyRunStepsResponse =
   *   await client.journeys.runs.listSteps('x');
   * ```
   */
  listSteps(runID: string, options?: RequestOptions): APIPromise<JourneysAPI.JourneyRunStepsResponse> {
    return this._client.get(path`/journeys/runs/${runID}/steps`, options);
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
   * A comma-separated list of Journey ids to filter on.
   */
  template_id?: string;
}

export declare namespace Runs {
  export { type RunListParams as RunListParams };
}
