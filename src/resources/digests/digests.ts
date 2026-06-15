// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SchedulesAPI from './schedules';
import { ScheduleListInstancesParams, Schedules } from './schedules';

export class Digests extends APIResource {
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
}

export interface DigestCategory {
  /**
   * The key that identifies the category within the digest.
   */
  category_key: string;

  /**
   * Which events to keep when the number of events exceeds the retention limit for
   * the category.
   */
  retain: 'first' | 'last' | 'highest' | 'lowest' | 'none';

  /**
   * The data key used to order events when `retain` is `highest` or `lowest`.
   */
  sort_key?: string;
}

export interface DigestInstance {
  /**
   * A unique identifier for the digest instance.
   */
  digest_instance_id: string;

  /**
   * The total number of events received for this instance.
   */
  event_count: number;

  /**
   * The status of the digest instance. `IN_PROGRESS` instances are still
   * accumulating events; `COMPLETED` instances have been released.
   */
  status: 'IN_PROGRESS' | 'COMPLETED';

  /**
   * The ID of the user this digest instance belongs to.
   */
  user_id: string;

  /**
   * The categories configured for the digest.
   */
  categories?: Array<DigestCategory>;

  /**
   * A map of category key to the number of events received for that category.
   */
  category_key_counts?: { [key: string]: number };

  /**
   * An ISO 8601 timestamp of when the digest instance was created.
   */
  created_at?: string;

  /**
   * Whether the digest instance has been disabled.
   */
  disabled?: boolean;

  /**
   * The ID of the tenant this digest instance belongs to, if any.
   */
  tenant_id?: string | null;
}

export interface DigestInstanceListResponse {
  /**
   * Whether there are more digest instances to fetch using the cursor.
   */
  has_more: boolean;

  /**
   * The digest instances for this page of results.
   */
  items: Array<DigestInstance>;

  /**
   * Always `list` for a paginated list response.
   */
  type: 'list';

  /**
   * A cursor token for fetching the next page of results, or null when there are
   * none.
   */
  cursor?: string | null;

  /**
   * The path to fetch the next page of results, or null when there are none.
   */
  next_url?: string | null;

  /**
   * The path of the current request.
   */
  url?: string;
}

Digests.Schedules = Schedules;

export declare namespace Digests {
  export {
    type DigestCategory as DigestCategory,
    type DigestInstance as DigestInstance,
    type DigestInstanceListResponse as DigestInstanceListResponse,
  };

  export { Schedules as Schedules, type ScheduleListInstancesParams as ScheduleListInstancesParams };
}
