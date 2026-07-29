// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DigestsAPI from './digests';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Inspect what has accumulated in a digest schedule and release a digest ahead of its next scheduled delivery.
 */
export class Schedules extends APIResource {
  /**
   * Returns the digest instances for a schedule, one per user, with cursor paging.
   * Use it to see what has accumulated before a digest releases.
   */
  listInstances(
    scheduleID: string,
    query: ScheduleListInstancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DigestsAPI.DigestInstanceListResponse> {
    return this._client.get(path`/digests/schedules/${scheduleID}/instances`, { query, ...options });
  }

  /**
   * Send a digest now instead of waiting for its scheduled time, so your users get
   * what they have collected so far right away.
   */
  release(scheduleID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/digests/schedules/${scheduleID}/trigger`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ScheduleListInstancesParams {
  /**
   * A cursor token from a previous response, used to fetch the next page of results.
   */
  cursor?: string;

  /**
   * The maximum number of digest instances to return. Defaults to 20, with a maximum
   * of 100.
   */
  limit?: number;
}

export declare namespace Schedules {
  export { type ScheduleListInstancesParams as ScheduleListInstancesParams };
}
