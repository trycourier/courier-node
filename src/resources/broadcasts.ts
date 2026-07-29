// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import * as NotificationsAPI from './notifications/notifications';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Create a one-off send to a list or audience, author its content, then send it immediately or schedule it for later.
 */
export class Broadcasts extends APIResource {
  /**
   * Create a broadcast. Provisions a private notification template for the broadcast
   * and returns the new broadcast in the draft state. Exactly one channel is
   * required.
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.create({
   *   channel: 'email',
   *   name: 'Spring Sale Announcement',
   * });
   * ```
   */
  create(body: BroadcastCreateParams, options?: RequestOptions): APIPromise<Broadcast> {
    return this._client.post('/broadcasts', { body, ...options });
  }

  /**
   * Retrieve a broadcast by ID. Archived broadcasts return 404.
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.retrieve(
   *   'broadcastId',
   * );
   * ```
   */
  retrieve(broadcastID: string, options?: RequestOptions): APIPromise<Broadcast> {
    return this._client.get(path`/broadcasts/${broadcastID}`, options);
  }

  /**
   * Update a broadcast's name. Content is edited via the broadcast's notification
   * template, not this endpoint.
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.update(
   *   'broadcastId',
   *   { name: 'Spring Sale Announcement (v2)' },
   * );
   * ```
   */
  update(broadcastID: string, body: BroadcastUpdateParams, options?: RequestOptions): APIPromise<Broadcast> {
    return this._client.put(path`/broadcasts/${broadcastID}`, { body, ...options });
  }

  /**
   * List broadcasts in your workspace. Cursor-paginated; returns broadcasts
   * newest-first.
   *
   * @example
   * ```ts
   * const broadcastListResponse =
   *   await client.broadcasts.list();
   * ```
   */
  list(
    query: BroadcastListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BroadcastListResponse> {
    return this._client.get('/broadcasts', { query, ...options });
  }

  /**
   * Archive a broadcast. This is a soft delete — the archived broadcast is returned
   * and no longer appears in list results.
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.archive(
   *   'broadcastId',
   * );
   * ```
   */
  archive(broadcastID: string, options?: RequestOptions): APIPromise<Broadcast> {
    return this._client.delete(path`/broadcasts/${broadcastID}`, options);
  }

  /**
   * Cancel a broadcast's pending schedule, returning it to the draft state. Only
   * valid for a scheduled broadcast.
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.cancel(
   *   'broadcastId',
   * );
   * ```
   */
  cancel(broadcastID: string, options?: RequestOptions): APIPromise<Broadcast> {
    return this._client.post(path`/broadcasts/${broadcastID}/cancel`, options);
  }

  /**
   * Duplicate a broadcast (and its template) into a new draft named "{source name}
   * (copy)".
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.duplicate(
   *   'broadcastId',
   * );
   * ```
   */
  duplicate(broadcastID: string, options?: RequestOptions): APIPromise<Broadcast> {
    return this._client.post(path`/broadcasts/${broadcastID}/duplicate`, options);
  }

  /**
   * Author the broadcast's content by replacing the draft elemental content of its
   * private notification template. The draft is published automatically when the
   * broadcast is sent or scheduled.
   *
   * @example
   * ```ts
   * const notificationContentMutationResponse =
   *   await client.broadcasts.putContent('broadcastId', {
   *     content: {
   *       version: '2022-01-01',
   *       elements: [{ type: 'meta' }, { type: 'text' }],
   *     },
   *   });
   * ```
   */
  putContent(
    broadcastID: string,
    body: BroadcastPutContentParams,
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.NotificationContentMutationResponse> {
    return this._client.put(path`/broadcasts/${broadcastID}/content`, { body, ...options });
  }

  /**
   * Retrieve the broadcast's content — the elemental content of its private
   * notification template. Defaults to the working draft, since broadcast content is
   * authored as a draft until the broadcast is sent.
   *
   * @example
   * ```ts
   * const notificationContentGetResponse =
   *   await client.broadcasts.retrieveContent('broadcastId');
   * ```
   */
  retrieveContent(
    broadcastID: string,
    query: BroadcastRetrieveContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.NotificationContentGetResponse> {
    return this._client.get(path`/broadcasts/${broadcastID}/content`, { query, ...options });
  }

  /**
   * Schedule a broadcast for a future send to a list or audience. Publishes the
   * broadcast template first. Not allowed once the broadcast is sending or sent. For
   * an immediate send use POST /broadcasts/{broadcastId}/send.
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.schedule(
   *   'broadcastId',
   *   {
   *     recipient_id: 'aud_01kx4h2jdafq8bk9amzvy6hbv0',
   *     recipient_type: 'audience',
   *     scheduled_to: '2026-08-01T15:00:00',
   *     timezone: 'America/New_York',
   *   },
   * );
   * ```
   */
  schedule(
    broadcastID: string,
    body: BroadcastScheduleParams,
    options?: RequestOptions,
  ): APIPromise<Broadcast> {
    return this._client.post(path`/broadcasts/${broadcastID}/schedule`, { body, ...options });
  }

  /**
   * Send a broadcast immediately to a list or audience. Publishes the broadcast
   * template first. Not allowed once the broadcast is sending or sent.
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.send(
   *   'broadcastId',
   *   {
   *     recipient_id: 'cool-customers',
   *     recipient_type: 'list',
   *   },
   * );
   * ```
   */
  send(broadcastID: string, body: BroadcastSendParams, options?: RequestOptions): APIPromise<Broadcast> {
    return this._client.post(path`/broadcasts/${broadcastID}/send`, { body, ...options });
  }
}

/**
 * A broadcast — a single-channel message delivered to a known set of recipients (a
 * list or audience).
 */
export interface Broadcast {
  /**
   * The broadcast ID (bst\_ prefix).
   */
  id: string;

  /**
   * The broadcast's delivery channel.
   */
  channel: 'email' | 'sms' | 'push' | 'inbox' | 'slack' | 'msteams';

  /**
   * ISO 8601 timestamp when the broadcast was created.
   */
  created_at: string;

  /**
   * Actor that created the broadcast.
   */
  created_by: string;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Lifecycle status of the broadcast.
   */
  status: 'draft' | 'scheduled' | 'sending' | 'sent';

  /**
   * ISO 8601 timestamp of the last update.
   */
  updated_at: string;

  /**
   * Actor that last updated the broadcast.
   */
  updated_by: string;

  /**
   * ISO 8601 timestamp when the broadcast was archived, if archived.
   */
  archived_at?: string | null;

  /**
   * Actor that archived the broadcast, if archived.
   */
  archived_by?: string | null;

  /**
   * The delivery schedule and recipient targeting for a broadcast.
   */
  schedule?: BroadcastSchedule | null;
}

/**
 * Paginated list of broadcasts.
 */
export interface BroadcastListResponse {
  paging: Shared.Paging;

  results: Array<Broadcast>;
}

/**
 * The delivery schedule and recipient targeting for a broadcast.
 */
export interface BroadcastSchedule {
  /**
   * ID of the target list or audience.
   */
  recipient_id: string;

  /**
   * Whether the broadcast targets a list or an audience.
   */
  recipient_type: 'list' | 'audience';

  /**
   * Wall-clock timestamp of the scheduled send, no timezone offset (e.g.
   * "2026-07-21T20:00:00").
   */
  scheduled_to?: string | null;

  /**
   * IANA timezone for the scheduled send (e.g. America/New_York).
   */
  timezone?: string | null;
}

/**
 * Request body for creating a broadcast.
 */
export interface CreateBroadcastRequest {
  /**
   * The single delivery channel for this broadcast.
   */
  channel: 'email' | 'sms' | 'push' | 'inbox' | 'slack' | 'msteams';

  /**
   * Human-readable name.
   */
  name: string;
}

/**
 * Request body for scheduling a broadcast for a future send.
 */
export interface ScheduleBroadcastRequest {
  /**
   * ID of the target list or audience.
   */
  recipient_id: string;

  /**
   * Whether the broadcast targets a list or an audience.
   */
  recipient_type: 'list' | 'audience';

  /**
   * Wall-clock timestamp of the future send, no timezone offset (e.g.
   * "2026-07-21T20:00:00"). The zone is given by `timezone`.
   */
  scheduled_to: string;

  /**
   * IANA timezone for the scheduled send (e.g. America/New_York).
   */
  timezone?: string;
}

/**
 * Request body for sending a broadcast immediately.
 */
export interface SendBroadcastRequest {
  /**
   * ID of the target list or audience.
   */
  recipient_id: string;

  /**
   * Whether the broadcast targets a list or an audience.
   */
  recipient_type: 'list' | 'audience';
}

/**
 * Request body for updating a broadcast. Only the name is mutable.
 */
export interface UpdateBroadcastRequest {
  /**
   * New human-readable name.
   */
  name: string;
}

export interface BroadcastCreateParams {
  /**
   * The single delivery channel for this broadcast.
   */
  channel: 'email' | 'sms' | 'push' | 'inbox' | 'slack' | 'msteams';

  /**
   * Human-readable name.
   */
  name: string;
}

export interface BroadcastUpdateParams {
  /**
   * New human-readable name.
   */
  name: string;
}

export interface BroadcastListParams {
  /**
   * Opaque pagination cursor from a previous response. Omit for the first page.
   */
  cursor?: string | null;

  /**
   * Maximum number of results per page.
   */
  limit?: number;
}

export interface BroadcastPutContentParams {
  /**
   * Elemental content payload. The server defaults `version` when omitted.
   */
  content: BroadcastPutContentParams.Content;

  /**
   * Template state. Defaults to `DRAFT`.
   */
  state?: NotificationsAPI.NotificationTemplateState;
}

export namespace BroadcastPutContentParams {
  /**
   * Elemental content payload. The server defaults `version` when omitted.
   */
  export interface Content {
    elements: Array<Shared.ElementalNode>;

    /**
     * Content version identifier (e.g., `2022-01-01`). Optional; server defaults when
     * omitted.
     */
    version?: string;
  }
}

export interface BroadcastRetrieveContentParams {
  /**
   * Accepts `draft`, `published`, or a version string (e.g. `v001`). Defaults to
   * `draft`.
   */
  version?: string;
}

export interface BroadcastScheduleParams {
  /**
   * ID of the target list or audience.
   */
  recipient_id: string;

  /**
   * Whether the broadcast targets a list or an audience.
   */
  recipient_type: 'list' | 'audience';

  /**
   * Wall-clock timestamp of the future send, no timezone offset (e.g.
   * "2026-07-21T20:00:00"). The zone is given by `timezone`.
   */
  scheduled_to: string;

  /**
   * IANA timezone for the scheduled send (e.g. America/New_York).
   */
  timezone?: string;
}

export interface BroadcastSendParams {
  /**
   * ID of the target list or audience.
   */
  recipient_id: string;

  /**
   * Whether the broadcast targets a list or an audience.
   */
  recipient_type: 'list' | 'audience';
}

export declare namespace Broadcasts {
  export {
    type Broadcast as Broadcast,
    type BroadcastListResponse as BroadcastListResponse,
    type BroadcastSchedule as BroadcastSchedule,
    type CreateBroadcastRequest as CreateBroadcastRequest,
    type ScheduleBroadcastRequest as ScheduleBroadcastRequest,
    type SendBroadcastRequest as SendBroadcastRequest,
    type UpdateBroadcastRequest as UpdateBroadcastRequest,
    type BroadcastCreateParams as BroadcastCreateParams,
    type BroadcastUpdateParams as BroadcastUpdateParams,
    type BroadcastListParams as BroadcastListParams,
    type BroadcastPutContentParams as BroadcastPutContentParams,
    type BroadcastRetrieveContentParams as BroadcastRetrieveContentParams,
    type BroadcastScheduleParams as BroadcastScheduleParams,
    type BroadcastSendParams as BroadcastSendParams,
  };
}
