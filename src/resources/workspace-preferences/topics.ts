// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as WorkspacePreferencesAPI from './workspace-preferences';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Topics extends APIResource {
  /**
   * Creates a subscription topic inside a workspace preference. The default status
   * sets whether users start opted in, opted out, or required.
   *
   * @example
   * ```ts
   * const workspacePreferenceTopicGetResponse =
   *   await client.workspacePreferences.topics.create(
   *     'section_id',
   *     { default_status: 'OPTED_OUT', name: 'Marketing' },
   *   );
   * ```
   */
  create(
    sectionID: string,
    params: TopicCreateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferencesAPI.WorkspacePreferenceTopicGetResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post(path`/preferences/sections/${sectionID}/topics`, {
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
   * Returns one subscription topic with its default status, routing options, allowed
   * preferences, and unsubscribe header setting.
   *
   * @example
   * ```ts
   * const workspacePreferenceTopicGetResponse =
   *   await client.workspacePreferences.topics.retrieve(
   *     'topic_id',
   *     { section_id: 'section_id' },
   *   );
   * ```
   */
  retrieve(
    topicID: string,
    params: TopicRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferencesAPI.WorkspacePreferenceTopicGetResponse> {
    const { section_id } = params;
    return this._client.get(path`/preferences/sections/${section_id}/topics/${topicID}`, options);
  }

  /**
   * Returns the subscription topics inside a workspace preference, each with its
   * default status and routing options.
   *
   * @example
   * ```ts
   * const workspacePreferenceTopicListResponse =
   *   await client.workspacePreferences.topics.list(
   *     'section_id',
   *   );
   * ```
   */
  list(
    sectionID: string,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferencesAPI.WorkspacePreferenceTopicListResponse> {
    return this._client.get(path`/preferences/sections/${sectionID}/topics`, options);
  }

  /**
   * Archives a subscription topic and removes it from its workspace preference,
   * addressed by section id and topic id.
   *
   * @example
   * ```ts
   * await client.workspacePreferences.topics.archive(
   *   'topic_id',
   *   { section_id: 'section_id' },
   * );
   * ```
   */
  archive(topicID: string, params: TopicArchiveParams, options?: RequestOptions): APIPromise<void> {
    const { section_id } = params;
    return this._client.delete(path`/preferences/sections/${section_id}/topics/${topicID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Turn off a topic's digest, leaving the topic itself in place. The template is
   * unlinked and the digest's schedules are removed along with their delivery rules.
   * Equivalent to sending `digest: null` on a topic replace.
   *
   * @example
   * ```ts
   * await client.workspacePreferences.topics.deleteDigest(
   *   'topic_id',
   *   { section_id: 'section_id' },
   * );
   * ```
   */
  deleteDigest(topicID: string, params: TopicDeleteDigestParams, options?: RequestOptions): APIPromise<void> {
    const { section_id } = params;
    return this._client.delete(path`/preferences/sections/${section_id}/topics/${topicID}/digest`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send one recipient's held digest now, instead of waiting for its schedule. Use
   * it to preview what a digest will look like, or to let someone flush their own.
   *
   * Keyed on the topic because that is how a held digest is stored: one per
   * recipient per topic, with the schedule recorded on it rather than part of its
   * identity. To flush every recipient on a schedule instead, use
   * `POST /digests/schedules/{schedule_id}/trigger`.
   *
   * @example
   * ```ts
   * await client.workspacePreferences.topics.releaseDigest(
   *   'topic_id',
   *   {
   *     section_id: 'section_id',
   *     user_id: 'user_01h1p2c3d4e5f6g7h8',
   *   },
   * );
   * ```
   */
  releaseDigest(
    topicID: string,
    params: TopicReleaseDigestParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { section_id, ...body } = params;
    return this._client.post(path`/preferences/sections/${section_id}/topics/${topicID}/digest/release`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Replace a topic within a workspace preference. Full document replacement;
   * missing optional fields are cleared. Same 404 rules as GET.
   *
   * @example
   * ```ts
   * const workspacePreferenceTopicGetResponse =
   *   await client.workspacePreferences.topics.replace(
   *     'topic_id',
   *     {
   *       section_id: 'section_id',
   *       default_status: 'OPTED_IN',
   *       name: 'Product Updates',
   *       allowed_preferences: ['channel_preferences'],
   *       include_unsubscribe_header: true,
   *       routing_options: ['email', 'inbox'],
   *     },
   *   );
   * ```
   */
  replace(
    topicID: string,
    params: TopicReplaceParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferencesAPI.WorkspacePreferenceTopicGetResponse> {
    const { section_id, ...body } = params;
    return this._client.put(path`/preferences/sections/${section_id}/topics/${topicID}`, {
      body,
      ...options,
    });
  }
}

export interface TopicCreateParams {
  /**
   * Body param: The default subscription status applied when a recipient has not set
   * their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Body param: Human-readable name for the preference topic.
   */
  name: string;

  /**
   * Body param: Preference controls a recipient may customize for this topic.
   * Defaults to empty if omitted.
   */
  allowed_preferences?: Array<'snooze' | 'channel_preferences'> | null;

  /**
   * Body param: Optional description shown under the topic on the hosted preferences
   * page.
   */
  description?: string | null;

  /**
   * Body param: A topic's digest configuration: the template that renders it, the
   * cadences it delivers on, and how collected events are retained.
   *
   * Send `null` for the whole object to turn a digest off, which unlinks the
   * template and removes its schedules. There is no `enabled` flag, and
   * `schedules: []` is rejected -- both states are un-deliverable rather than merely
   * off.
   */
  digest?: WorkspacePreferencesAPI.TopicDigestRequest | null;

  /**
   * Body param: Whether to include a list-unsubscribe header on emails for this
   * topic.
   */
  include_unsubscribe_header?: boolean | null;

  /**
   * Body param: Default channels delivered for this topic. Defaults to empty if
   * omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;

  /**
   * Body param: Arbitrary metadata associated with the topic.
   */
  topic_data?: { [key: string]: unknown } | null;

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

export interface TopicRetrieveParams {
  /**
   * Id of the workspace preference.
   */
  section_id: string;
}

export interface TopicArchiveParams {
  /**
   * Id of the workspace preference.
   */
  section_id: string;
}

export interface TopicDeleteDigestParams {
  /**
   * The preference section containing the topic.
   */
  section_id: string;
}

export interface TopicReleaseDigestParams {
  /**
   * Path param: The preference section containing the topic.
   */
  section_id: string;

  /**
   * Body param: The recipient whose digest to release. Required: there is no
   * "release everyone on this topic" form, because a whole-schedule flush already
   * has its own endpoint and a body-shaped difference between one recipient and all
   * of them is too easy to get wrong.
   */
  user_id: string;

  /**
   * Body param: The recipient's tenant, when they were sent to as part of one -- the
   * same value returned as `tenant_id` on a digest instance and sent as
   * `message.context.tenant_id`. It is part of the held digest's key, so a tenanted
   * recipient cannot be found without it. Omit for an ordinary recipient.
   */
  tenant_id?: string;
}

export interface TopicReplaceParams {
  /**
   * Path param: Id of the workspace preference.
   */
  section_id: string;

  /**
   * Body param: The default subscription status applied when a recipient has not set
   * their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Body param: Human-readable name for the preference topic.
   */
  name: string;

  /**
   * Body param: Preference controls a recipient may customize. Omit to clear.
   */
  allowed_preferences?: Array<'snooze' | 'channel_preferences'> | null;

  /**
   * Body param: Optional description shown under the topic on the hosted preferences
   * page. Omit to clear.
   */
  description?: string | null;

  /**
   * Body param: A topic's digest configuration: the template that renders it, the
   * cadences it delivers on, and how collected events are retained.
   *
   * Send `null` for the whole object to turn a digest off, which unlinks the
   * template and removes its schedules. There is no `enabled` flag, and
   * `schedules: []` is rejected -- both states are un-deliverable rather than merely
   * off.
   */
  digest?: WorkspacePreferencesAPI.TopicDigestRequest | null;

  /**
   * Body param: Whether to include a list-unsubscribe header on emails for this
   * topic.
   */
  include_unsubscribe_header?: boolean | null;

  /**
   * Body param: Default channels delivered for this topic. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;

  /**
   * Body param: Arbitrary metadata associated with the topic. Omit to clear.
   */
  topic_data?: { [key: string]: unknown } | null;
}

export declare namespace Topics {
  export {
    type TopicCreateParams as TopicCreateParams,
    type TopicRetrieveParams as TopicRetrieveParams,
    type TopicArchiveParams as TopicArchiveParams,
    type TopicDeleteDigestParams as TopicDeleteDigestParams,
    type TopicReleaseDigestParams as TopicReleaseDigestParams,
    type TopicReplaceParams as TopicReplaceParams,
  };
}
