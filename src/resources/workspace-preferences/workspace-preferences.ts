// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DigestsAPI from '../digests/digests';
import * as TopicsAPI from './topics';
import {
  TopicArchiveParams,
  TopicCreateParams,
  TopicDeleteDigestParams,
  TopicReleaseDigestParams,
  TopicReplaceParams,
  TopicRetrieveParams,
  Topics,
} from './topics';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage the workspace catalog of subscription topics, the sections that group them, and publishing the preference page.
 */
export class WorkspacePreferences extends APIResource {
  topics: TopicsAPI.Topics = new TopicsAPI.Topics(this._client);

  /**
   * Creates a workspace preference and returns its generated id. Add subscription
   * topics to it afterwards with the topics endpoint.
   *
   * @example
   * ```ts
   * const workspacePreferenceGetResponse =
   *   await client.workspacePreferences.create({
   *     name: 'Account Notifications',
   *   });
   * ```
   */
  create(
    params: WorkspacePreferenceCreateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferenceGetResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post('/preferences/sections', {
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
   * Returns one workspace preference by id, including its subscription topics,
   * routing options, and custom routing flag.
   *
   * @example
   * ```ts
   * const workspacePreferenceGetResponse =
   *   await client.workspacePreferences.retrieve('section_id');
   * ```
   */
  retrieve(sectionID: string, options?: RequestOptions): APIPromise<WorkspacePreferenceGetResponse> {
    return this._client.get(path`/preferences/sections/${sectionID}`, options);
  }

  /**
   * Returns the workspace's preferences, each embedding its subscription topics,
   * routing options, and whether custom routing is allowed.
   *
   * @example
   * ```ts
   * const workspacePreferenceListResponse =
   *   await client.workspacePreferences.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WorkspacePreferenceListResponse> {
    return this._client.get('/preferences/sections', options);
  }

  /**
   * Archive a workspace preference. The workspace preference must be empty: delete
   * its topics first, otherwise the request fails with 409.
   *
   * @example
   * ```ts
   * await client.workspacePreferences.archive('section_id');
   * ```
   */
  archive(sectionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/preferences/sections/${sectionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Publishes the workspace preference page, snapshotting every preference and
   * topic, and returns the page id and a preview URL.
   *
   * @example
   * ```ts
   * const publishPreferencesResponse =
   *   await client.workspacePreferences.publish({
   *     brand_id: 'bnd_01kx4mrd0pfzw8wt7pn7p2fzag',
   *     description: 'Choose what you hear from us about.',
   *     heading: 'Notification Preferences',
   *   });
   * ```
   */
  publish(
    params: WorkspacePreferencePublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublishPreferencesResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params ?? {};
    return this._client.post('/preferences/publish', {
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
   * Replace a workspace preference. Full document replacement; missing optional
   * fields are cleared. Topics attached to the workspace preference are unaffected.
   *
   * @example
   * ```ts
   * const workspacePreferenceGetResponse =
   *   await client.workspacePreferences.replace('section_id', {
   *     name: 'Account Notifications',
   *     has_custom_routing: true,
   *     routing_options: ['email', 'push'],
   *   });
   * ```
   */
  replace(
    sectionID: string,
    body: WorkspacePreferenceReplaceParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferenceGetResponse> {
    return this._client.put(path`/preferences/sections/${sectionID}`, { body, ...options });
  }
}

/**
 * Optional page metadata to apply when publishing the workspace's preferences
 * page. All fields are optional; omitted fields fall back to the page defaults
 * (and the workspace default brand).
 */
export interface PublishPreferencesRequest {
  /**
   * Brand for the hosted page - "default" (workspace default brand), "none" (no
   * brand), or a specific brand id. Defaults to "default".
   */
  brand_id?: string | null;

  /**
   * Description shown under the heading on the hosted preferences page.
   */
  description?: string | null;

  /**
   * Heading shown at the top of the hosted preferences page.
   */
  heading?: string | null;
}

/**
 * Result of publishing the workspace's preferences page.
 */
export interface PublishPreferencesResponse {
  /**
   * Id of the published page snapshot.
   */
  page_id: string;

  /**
   * ISO-8601 timestamp of the publish.
   */
  published_at: string;

  /**
   * Monotonic published version (epoch milliseconds).
   */
  published_version: number;

  /**
   * Draft-mode hosted preferences page URL for previewing.
   */
  preview_url?: string | null;

  /**
   * Id of the publisher.
   */
  published_by?: string | null;
}

/**
 * How events collected under a category key are retained when a digest holds more
 * than it will render.
 */
export interface TopicDigestCategory {
  /**
   * The key that identifies the category within the digest.
   */
  category_key: string;

  /**
   * How many collected events are carried into the rendered digest. Defaults to 10.
   *
   * Events beyond the limit are discarded, not held back for the next digest: the
   * release consumes everything collected so far and only `limit` of them appear.
   * `retain` decides which ones those are.
   */
  limit?: number;

  /**
   * Which collected events survive the `limit`. `FIRST` and `LOWEST` keep the
   * earliest or smallest; `LAST` and `HIGHEST` keep the latest or largest. Accepted
   * case-insensitively, returned uppercase.
   */
  retain?: 'FIRST' | 'LAST' | 'HIGHEST' | 'LOWEST' | 'NONE';

  /**
   * The data key used to rank events. Required when `retain` is `HIGHEST` or
   * `LOWEST`.
   */
  sort_key?: string;
}

/**
 * Which recipient's held digest to release.
 */
export interface TopicDigestReleaseRequest {
  /**
   * The recipient whose digest to release. Required: there is no "release everyone
   * on this topic" form, because a whole-schedule flush already has its own endpoint
   * and a body-shaped difference between one recipient and all of them is too easy
   * to get wrong.
   */
  user_id: string;

  /**
   * The recipient's tenant, when they were sent to as part of one -- the same value
   * returned as `tenant_id` on a digest instance and sent as
   * `message.context.tenant_id`. It is part of the held digest's key, so a tenanted
   * recipient cannot be found without it. Omit for an ordinary recipient.
   */
  tenant_id?: string;
}

/**
 * A topic's digest configuration: the template that renders it, the cadences it
 * delivers on, and how collected events are retained.
 *
 * Send `null` for the whole object to turn a digest off, which unlinks the
 * template and removes its schedules. There is no `enabled` flag, and
 * `schedules: []` is rejected -- both states are un-deliverable rather than merely
 * off.
 */
export interface TopicDigestRequest {
  /**
   * The cadences this digest delivers on. At least one is required: a digest with no
   * schedule collects events into an instance that can never fire. Omitting the key
   * on a replace leaves stored schedules untouched; sending `[]` is a `400`.
   */
  schedules: Array<TopicDigestScheduleRequest>;

  /**
   * The notification template that renders the digest. A digest with no template
   * collects nothing, so this is required.
   */
  template_id: string;

  /**
   * Optional audience the digest is scoped to.
   */
  audience_id?: string;

  /**
   * Retention rules per category key. Defaults to a single `digest` category
   * retaining `FIRST`.
   */
  categories?: Array<TopicDigestCategory>;

  /**
   * Whether to deliver the digest even when nothing was collected.
   */
  trigger_empty?: boolean;
}

/**
 * A topic's digest configuration.
 */
export interface TopicDigestResponse {
  /**
   * Retention rules per category key.
   */
  categories: Array<TopicDigestCategory>;

  /**
   * The digest's delivery cadences, each with its server-assigned `schedule_id`.
   */
  schedules: Array<DigestsAPI.TopicDigestScheduleResponse>;

  /**
   * The notification template that renders the digest.
   */
  template_id: string;

  /**
   * The audience the digest is scoped to, when set.
   */
  audience_id?: string;

  /**
   * ISO-8601 timestamp of when the digest was configured.
   */
  created?: string;

  /**
   * Whether the digest is delivered even when nothing was collected.
   */
  trigger_empty?: boolean;

  /**
   * ISO-8601 timestamp of the last update.
   */
  updated?: string;
}

/**
 * One delivery cadence for a topic's digest. Supply `schedule_id` to update an
 * existing schedule in place; omit it and one is assigned and returned. The
 * `schedules` array is a full replacement, so a stored schedule absent from it is
 * deleted along with its delivery rule.
 */
export interface TopicDigestScheduleRequest {
  /**
   * How often a digest is delivered. `instant` delivers immediately without
   * batching, and is the one value that takes no `time`.
   */
  frequency: DigestsAPI.DigestFrequency;

  /**
   * Required when `frequency` is `monthly`.
   */
  day_of_month?: number;

  /**
   * Required when `frequency` is `weekly`.
   */
  day_of_week?: DigestsAPI.DigestDayOfWeek;

  /**
   * Required when `frequency` is `custom_days`.
   */
  days_of_week?: Array<DigestsAPI.DigestDayOfWeek>;

  /**
   * Whether the schedule is disabled.
   */
  disabled?: boolean;

  /**
   * The schedule recipients are placed on when they have not chosen one. Set this
   * explicitly rather than relying on array position.
   */
  is_default?: boolean;

  /**
   * Identifier of an existing schedule to update. Omit when creating a new one.
   */
  schedule_id?: string;

  /**
   * 24-hour local delivery time, `HH:MM`. Required for every frequency except
   * `instant`.
   */
  time?: string;

  /**
   * IANA timezone the `time` and day fields are expressed in, e.g.
   * `America/New_York`. Absent means UTC. Delivery follows the same local wall-clock
   * across daylight-saving changes.
   */
  timezone?: string;
}

/**
 * Request body for creating a workspace preference.
 */
export interface WorkspacePreferenceCreateRequest {
  /**
   * Human-readable name for the workspace preference.
   */
  name: string;

  /**
   * Optional description shown under the section on the hosted preferences page.
   */
  description?: string | null;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the workspace preference. Defaults to empty if omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

/**
 * A workspace preference in your workspace, including its topics.
 */
export interface WorkspacePreferenceGetResponse {
  /**
   * The workspace preference id.
   */
  id: string;

  /**
   * ISO-8601 timestamp of when the workspace preference was created.
   */
  created: string;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing: boolean;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Default channels for the workspace preference. May be empty.
   */
  routing_options: Array<Shared.ChannelClassification>;

  /**
   * The topics contained in this workspace preference.
   */
  topics: Array<WorkspacePreferenceTopicGetResponse>;

  /**
   * Id of the creator.
   */
  creator?: string | null;

  /**
   * Optional description shown under the section on the hosted preferences page.
   */
  description?: string | null;

  /**
   * ISO-8601 timestamp of the last update.
   */
  updated?: string | null;

  /**
   * Id of the last updater.
   */
  updater?: string | null;
}

/**
 * The workspace's preferences, each with its topics.
 */
export interface WorkspacePreferenceListResponse {
  results: Array<WorkspacePreferenceGetResponse>;
}

/**
 * Request body for replacing a workspace preference. Full document replacement;
 * missing optional fields are cleared.
 */
export interface WorkspacePreferenceReplaceRequest {
  /**
   * Human-readable name for the workspace preference.
   */
  name: string;

  /**
   * Optional description shown under the section on the hosted preferences page.
   * Omit to clear.
   */
  description?: string | null;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the workspace preference. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

/**
 * Request body for creating a preference topic.
 */
export interface WorkspacePreferenceTopicCreateRequest {
  /**
   * The default subscription status applied when a recipient has not set their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Human-readable name for the preference topic.
   */
  name: string;

  /**
   * Preference controls a recipient may customize for this topic. Defaults to empty
   * if omitted.
   */
  allowed_preferences?: Array<'snooze' | 'channel_preferences'> | null;

  /**
   * Optional description shown under the topic on the hosted preferences page.
   */
  description?: string | null;

  /**
   * A topic's digest configuration: the template that renders it, the cadences it
   * delivers on, and how collected events are retained.
   *
   * Send `null` for the whole object to turn a digest off, which unlinks the
   * template and removes its schedules. There is no `enabled` flag, and
   * `schedules: []` is rejected -- both states are un-deliverable rather than merely
   * off.
   */
  digest?: TopicDigestRequest | null;

  /**
   * Whether to include a list-unsubscribe header on emails for this topic.
   */
  include_unsubscribe_header?: boolean | null;

  /**
   * Default channels delivered for this topic. Defaults to empty if omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;

  /**
   * Arbitrary metadata associated with the topic.
   */
  topic_data?: { [key: string]: unknown } | null;
}

/**
 * A subscription preference topic in your workspace.
 */
export interface WorkspacePreferenceTopicGetResponse {
  /**
   * The preference topic id.
   */
  id: string;

  /**
   * Preference controls a recipient may customize. May be empty.
   */
  allowed_preferences: Array<'snooze' | 'channel_preferences'>;

  /**
   * ISO-8601 timestamp of when the topic was created.
   */
  created: string;

  /**
   * The default subscription status applied when a recipient has not set their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Whether a list-unsubscribe header is included on emails for this topic.
   */
  include_unsubscribe_header: boolean;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Default channels delivered for this topic. May be empty.
   */
  routing_options: Array<Shared.ChannelClassification>;

  /**
   * Arbitrary metadata associated with the topic.
   */
  topic_data: { [key: string]: unknown };

  /**
   * ISO-8601 timestamp of the last update.
   */
  updated: string;

  /**
   * Id of the creator.
   */
  creator?: string | null;

  /**
   * Optional description shown under the topic on the hosted preferences page.
   */
  description?: string | null;

  /**
   * A topic's digest configuration.
   */
  digest?: TopicDigestResponse | null;

  /**
   * Id of the last updater.
   */
  updater?: string | null;
}

/**
 * Topics contained in a workspace preference.
 */
export interface WorkspacePreferenceTopicListResponse {
  results: Array<WorkspacePreferenceTopicGetResponse>;
}

/**
 * Request body for replacing a preference topic. Full document replacement;
 * missing optional fields are cleared.
 */
export interface WorkspacePreferenceTopicReplaceRequest {
  /**
   * The default subscription status applied when a recipient has not set their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Human-readable name for the preference topic.
   */
  name: string;

  /**
   * Preference controls a recipient may customize. Omit to clear.
   */
  allowed_preferences?: Array<'snooze' | 'channel_preferences'> | null;

  /**
   * Optional description shown under the topic on the hosted preferences page. Omit
   * to clear.
   */
  description?: string | null;

  /**
   * A topic's digest configuration: the template that renders it, the cadences it
   * delivers on, and how collected events are retained.
   *
   * Send `null` for the whole object to turn a digest off, which unlinks the
   * template and removes its schedules. There is no `enabled` flag, and
   * `schedules: []` is rejected -- both states are un-deliverable rather than merely
   * off.
   */
  digest?: TopicDigestRequest | null;

  /**
   * Whether to include a list-unsubscribe header on emails for this topic.
   */
  include_unsubscribe_header?: boolean | null;

  /**
   * Default channels delivered for this topic. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;

  /**
   * Arbitrary metadata associated with the topic. Omit to clear.
   */
  topic_data?: { [key: string]: unknown } | null;
}

export interface WorkspacePreferenceCreateParams {
  /**
   * Body param: Human-readable name for the workspace preference.
   */
  name: string;

  /**
   * Body param: Optional description shown under the section on the hosted
   * preferences page.
   */
  description?: string | null;

  /**
   * Body param: Whether the workspace preference defines custom routing for its
   * topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Body param: Default channels for the workspace preference. Defaults to empty if
   * omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;

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

export interface WorkspacePreferencePublishParams {
  /**
   * Body param: Brand for the hosted page - "default" (workspace default brand),
   * "none" (no brand), or a specific brand id. Defaults to "default".
   */
  brand_id?: string | null;

  /**
   * Body param: Description shown under the heading on the hosted preferences page.
   */
  description?: string | null;

  /**
   * Body param: Heading shown at the top of the hosted preferences page.
   */
  heading?: string | null;

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

export interface WorkspacePreferenceReplaceParams {
  /**
   * Human-readable name for the workspace preference.
   */
  name: string;

  /**
   * Optional description shown under the section on the hosted preferences page.
   * Omit to clear.
   */
  description?: string | null;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the workspace preference. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

WorkspacePreferences.Topics = Topics;

export declare namespace WorkspacePreferences {
  export {
    type PublishPreferencesRequest as PublishPreferencesRequest,
    type PublishPreferencesResponse as PublishPreferencesResponse,
    type TopicDigestCategory as TopicDigestCategory,
    type TopicDigestReleaseRequest as TopicDigestReleaseRequest,
    type TopicDigestRequest as TopicDigestRequest,
    type TopicDigestResponse as TopicDigestResponse,
    type TopicDigestScheduleRequest as TopicDigestScheduleRequest,
    type WorkspacePreferenceCreateRequest as WorkspacePreferenceCreateRequest,
    type WorkspacePreferenceGetResponse as WorkspacePreferenceGetResponse,
    type WorkspacePreferenceListResponse as WorkspacePreferenceListResponse,
    type WorkspacePreferenceReplaceRequest as WorkspacePreferenceReplaceRequest,
    type WorkspacePreferenceTopicCreateRequest as WorkspacePreferenceTopicCreateRequest,
    type WorkspacePreferenceTopicGetResponse as WorkspacePreferenceTopicGetResponse,
    type WorkspacePreferenceTopicListResponse as WorkspacePreferenceTopicListResponse,
    type WorkspacePreferenceTopicReplaceRequest as WorkspacePreferenceTopicReplaceRequest,
    type WorkspacePreferenceCreateParams as WorkspacePreferenceCreateParams,
    type WorkspacePreferencePublishParams as WorkspacePreferencePublishParams,
    type WorkspacePreferenceReplaceParams as WorkspacePreferenceReplaceParams,
  };

  export {
    Topics as Topics,
    type TopicCreateParams as TopicCreateParams,
    type TopicRetrieveParams as TopicRetrieveParams,
    type TopicArchiveParams as TopicArchiveParams,
    type TopicDeleteDigestParams as TopicDeleteDigestParams,
    type TopicReleaseDigestParams as TopicReleaseDigestParams,
    type TopicReplaceParams as TopicReplaceParams,
  };
}
