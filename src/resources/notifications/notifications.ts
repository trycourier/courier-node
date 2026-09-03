// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ChecksAPI from './checks';
import {
  CheckDeleteParams,
  CheckListParams,
  CheckListResponse,
  CheckUpdateParams,
  CheckUpdateResponse,
  Checks,
} from './checks';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create, update, version, publish, and localize notification templates and their content.
 */
export class Notifications extends APIResource {
  checks: ChecksAPI.Checks = new ChecksAPI.Checks(this._client);

  /**
   * Create a notification template. Requires all fields in the notification object.
   * Templates are created in draft state by default.
   *
   * Content must place its elements inside a channel block —
   * `{ "type": "channel", "channel": "email", "elements": [...] }` — or the request
   * returns `400`. The template designer renders only the channel block matching the
   * tab it draws, so content stored without one cannot be opened. An empty
   * `elements` array is accepted, and the requirement applies to creation only:
   * `PUT /notifications/{id}` still accepts unwrapped content. Note this endpoint
   * takes versioned content only — the `{ title, body }` shorthand accepted by
   * `/send` is rejected here with an `invalid_request_error` on
   * `notification.content.version`.
   *
   * @example
   * ```ts
   * const notificationTemplateResponse =
   *   await client.notifications.create({
   *     notification: {
   *       name: 'Welcome Email',
   *       tags: ['onboarding', 'welcome'],
   *       brand: { id: 'bnd_01kx4mrd0pfzw8wt7pn7p2fzag' },
   *       subscription: {
   *         topic_id: 'pt_01kx4h2jdafq8bk9a26x0kvd1t',
   *       },
   *       routing: {
   *         strategy_id: 'rs_01kx4h2jdafq8bk9amzvy6hbv0',
   *       },
   *       content: {
   *         version: '2022-01-01',
   *         elements: [{ type: 'channel' }],
   *       },
   *       alias: 'welcome',
   *     },
   *     state: 'DRAFT',
   *   });
   * ```
   */
  create(
    params: NotificationCreateParams,
    options?: RequestOptions,
  ): APIPromise<NotificationTemplateResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post('/notifications', {
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
   * Retrieve a notification template by ID. Returns the published version by
   * default. Pass version=draft to retrieve an unpublished template.
   *
   * @example
   * ```ts
   * const notificationTemplateResponse =
   *   await client.notifications.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: NotificationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationTemplateResponse> {
    return this._client.get(path`/notifications/${id}`, { query, ...options });
  }

  /**
   * Lists the workspace's notification templates. Each carries a name, tags, brand,
   * routing, and its draft or published state.
   *
   * @example
   * ```ts
   * const notifications = await client.notifications.list();
   * ```
   */
  list(
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationListResponse> {
    return this._client.get('/notifications', { query, ...options });
  }

  /**
   * Archives a notification template, preventing new sends from referencing it. The
   * template stays retrievable for its version history.
   *
   * @example
   * ```ts
   * await client.notifications.archive('id');
   * ```
   */
  archive(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/notifications/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch the delivery funnel for one Notification Template as a time series — sent,
   * delivered, opened, clicked, errors, and undeliverable — broken out per provider
   * and channel inside each bucket. Sum the entries in a bucket for its totals;
   * there is no bucket-level total.
   *
   * Choose the window absolutely with `start` and `end`, or relatively with
   * `lookback` (an ISO 8601 duration). `start` and `end` take precedence when both
   * are supplied, and a request carrying neither defaults to `lookback=P30D`. The
   * window is snapped outwards onto the `granularity` grid so every bucket it
   * overlaps is returned whole, and the snapped boundaries come back as `start` and
   * `end` — align a chart on those rather than on what was requested. Every boundary
   * is UTC; there is no timezone support.
   *
   * Every bucket in the window is returned, including the quiet ones, whose `data`
   * array is empty, so a series is directly plottable with no gap filling
   * client-side. An unknown template id returns `200` with an all-empty series
   * rather than `404`, and messages sent without a Notification Template never
   * appear here.
   *
   * Available in the US region only.
   *
   * @example
   * ```ts
   * const notificationMetricsResponse =
   *   await client.notifications.getMetrics('x');
   * ```
   */
  getMetrics(
    id: string,
    query: NotificationGetMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationMetricsResponse> {
    return this._client.get(path`/notifications/${id}/metrics`, { query, ...options });
  }

  /**
   * Returns a notification template's published versions, most recent first, for
   * comparison or rollback. Paged.
   *
   * @example
   * ```ts
   * const notificationTemplateVersionListResponse =
   *   await client.notifications.listVersions('id');
   * ```
   */
  listVersions(
    id: string,
    query: NotificationListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationTemplateVersionListResponse> {
    return this._client.get(path`/notifications/${id}/versions`, { query, ...options });
  }

  /**
   * Publish a notification template. Publishes the current draft by default. Pass a
   * version in the request body to publish a specific historical version.
   *
   * @example
   * ```ts
   * await client.notifications.publish('id');
   * ```
   */
  publish(
    id: string,
    params: NotificationPublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params ?? {};
    return this._client.post(path`/notifications/${id}/publish`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
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
   * Replaces all Elemental content in a template, overwriting every existing
   * element. Supported for V2 templates only, not V1 blocks and channels.
   *
   * @example
   * ```ts
   * const notificationContentMutationResponse =
   *   await client.notifications.putContent('id', {
   *     content: {
   *       version: '2022-01-01',
   *       elements: [{ type: 'channel' }],
   *     },
   *     state: 'DRAFT',
   *   });
   * ```
   */
  putContent(
    id: string,
    body: NotificationPutContentParams,
    options?: RequestOptions,
  ): APIPromise<NotificationContentMutationResponse> {
    return this._client.put(path`/notifications/${id}/content`, { body, ...options });
  }

  /**
   * Replaces one Elemental element in a template, addressed by its element id.
   * Supported for V2 templates only, not V1 blocks and channels.
   *
   * @example
   * ```ts
   * const notificationContentMutationResponse =
   *   await client.notifications.putElement('elementId', {
   *     id: 'id',
   *     type: 'text',
   *     data: { content: 'Updated text content' },
   *     state: 'DRAFT',
   *   });
   * ```
   */
  putElement(
    elementID: string,
    params: NotificationPutElementParams,
    options?: RequestOptions,
  ): APIPromise<NotificationContentMutationResponse> {
    const { id, ...body } = params;
    return this._client.put(path`/notifications/${id}/elements/${elementID}`, { body, ...options });
  }

  /**
   * Sets locale-specific content overrides for a template. Each override must
   * reference an element that already exists in the default content.
   *
   * @example
   * ```ts
   * const notificationContentMutationResponse =
   *   await client.notifications.putLocale('localeId', {
   *     id: 'id',
   *     elements: [
   *       { id: 'elem_1', content: 'Hola {{data.name}}.' },
   *       { id: 'elem_2', title: 'Bienvenido!' },
   *     ],
   *     state: 'DRAFT',
   *   });
   * ```
   */
  putLocale(
    localeID: string,
    params: NotificationPutLocaleParams,
    options?: RequestOptions,
  ): APIPromise<NotificationContentMutationResponse> {
    const { id, ...body } = params;
    return this._client.put(path`/notifications/${id}/locales/${localeID}`, { body, ...options });
  }

  /**
   * Replaces a notification template in full, so send every field rather than only
   * the ones you want changed. Publish separately to make it live.
   *
   * @example
   * ```ts
   * const notificationTemplateResponse =
   *   await client.notifications.replace('id', {
   *     notification: {
   *       name: 'Updated Name',
   *       tags: ['updated'],
   *       brand: null,
   *       subscription: null,
   *       routing: null,
   *       content: {
   *         version: '2022-01-01',
   *         elements: [{ type: 'channel' }],
   *       },
   *     },
   *     state: 'PUBLISHED',
   *   });
   * ```
   */
  replace(
    id: string,
    body: NotificationReplaceParams,
    options?: RequestOptions,
  ): APIPromise<NotificationTemplateResponse> {
    return this._client.put(path`/notifications/${id}`, { body, ...options });
  }

  /**
   * Returns a template's content and checksum. V2 templates return Elemental
   * elements, while V1 templates return blocks and channels instead.
   *
   * @example
   * ```ts
   * const response = await client.notifications.retrieveContent(
   *   'id',
   * );
   * ```
   */
  retrieveContent(
    id: string,
    query: NotificationRetrieveContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationRetrieveContentResponse> {
    return this._client.get(path`/notifications/${id}/content`, { query, ...options });
  }
}

export interface BaseCheck {
  id: string;

  status: 'RESOLVED' | 'FAILED' | 'PENDING';

  type: 'custom';
}

export interface Check extends BaseCheck {
  updated: number;
}

/**
 * An element with its content checksum and optional nested elements and locale
 * checksums.
 */
export interface ElementWithChecksums {
  /**
   * MD5 hash of translatable content.
   */
  checksum: string;

  /**
   * Element type (text, meta, action, etc.).
   */
  type: string;

  id?: string;

  /**
   * Nested child elements (for group-type elements).
   */
  elements?: Array<ElementWithChecksums>;

  /**
   * Locale-specific content with checksums.
   */
  locales?: { [key: string]: ElementWithChecksums.Locales };

  [k: string]: unknown;
}

export namespace ElementWithChecksums {
  export interface Locales {
    checksum: string;
  }
}

/**
 * Elemental content response for V2 templates. Contains versioned elements with
 * content checksums.
 */
export interface NotificationContentGetResponse {
  elements: Array<ElementWithChecksums>;

  /**
   * Content version identifier.
   */
  version: string;
}

/**
 * Shared mutation response for `PUT` content, `PUT` element, and `PUT` locale
 * operations. Contains the template ID, content version, per-element checksums,
 * and resulting state.
 */
export interface NotificationContentMutationResponse {
  /**
   * Template ID.
   */
  id: string;

  elements: Array<NotificationContentMutationResponse.Element>;

  /**
   * Template state. Defaults to `DRAFT`.
   */
  state: NotificationTemplateState;

  /**
   * Content version identifier.
   */
  version: string;
}

export namespace NotificationContentMutationResponse {
  export interface Element {
    id: string;

    checksum: string;
  }
}

/**
 * Request body for replacing the elemental content of a notification template.
 */
export interface NotificationContentPutRequest {
  /**
   * Elemental content payload. The server defaults `version` when omitted.
   */
  content: NotificationContentPutRequest.Content;

  /**
   * Template state. Defaults to `DRAFT`.
   */
  state?: NotificationTemplateState;
}

export namespace NotificationContentPutRequest {
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

/**
 * Request body for updating a single element. Additional type-specific fields are
 * allowed.
 */
export interface NotificationElementPutRequest {
  /**
   * Element type (text, meta, action, image, etc.).
   */
  type: string;

  channels?: Array<string>;

  data?: { [key: string]: unknown };

  if?: string;

  loop?: string;

  ref?: string;

  /**
   * Template state. Defaults to `DRAFT`.
   */
  state?: NotificationTemplateState;

  [k: string]: unknown;
}

export interface NotificationGetContent {
  blocks?: Array<NotificationGetContent.Block> | null;

  channels?: Array<NotificationGetContent.Channel> | null;

  checksum?: string | null;
}

export namespace NotificationGetContent {
  export interface Block {
    id: string;

    type: 'action' | 'divider' | 'image' | 'jsonnet' | 'list' | 'markdown' | 'quote' | 'template' | 'text';

    alias?: string | null;

    checksum?: string | null;

    content?: string | Block.NotificationContentHierarchy | null;

    context?: string | null;

    locales?: { [key: string]: string | Block.NotificationContentHierarchy } | null;
  }

  export namespace Block {
    export interface NotificationContentHierarchy {
      children?: string | null;

      parent?: string | null;
    }

    export interface NotificationContentHierarchy {
      children?: string | null;

      parent?: string | null;
    }
  }

  export interface Channel {
    id: string;

    checksum?: string | null;

    content?: Channel.Content | null;

    locales?: { [key: string]: Channel.Locales } | null;

    type?: string | null;
  }

  export namespace Channel {
    export interface Content {
      subject?: string | null;

      title?: string | null;
    }

    export interface Locales {
      subject?: string | null;

      title?: string | null;
    }
  }
}

/**
 * Request body for setting locale-specific content overrides. Each element
 * override must include the target element ID.
 */
export interface NotificationLocalePutRequest {
  /**
   * Elements with locale-specific content overrides.
   */
  elements: Array<NotificationLocalePutRequest.Element>;

  /**
   * Template state. Defaults to `DRAFT`.
   */
  state?: NotificationTemplateState;
}

export namespace NotificationLocalePutRequest {
  export interface Element {
    /**
     * Target element ID.
     */
    id: string;

    [k: string]: unknown;
  }
}

export interface NotificationMetricsResponse {
  /**
   * End of the window actually queried, ceiled onto the granularity grid.
   * Second-precision UTC.
   */
  end: string;

  /**
   * Bucket size the series was built at.
   */
  granularity: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH';

  /**
   * The template the series describes, echoed from the request.
   */
  notificationId: string;

  /**
   * One entry per bucket between `start` and `end`, oldest first, including buckets
   * with no activity.
   */
  series: Array<NotificationMetricsResponse.Series>;

  /**
   * Inclusive start of the window actually queried, floored onto the granularity
   * grid. Second-precision UTC.
   */
  start: string;
}

export namespace NotificationMetricsResponse {
  export interface Series {
    /**
     * One entry per provider and channel that handled a message in this bucket. Empty
     * when nothing was sent.
     */
    data: Array<Series.Data>;

    /**
     * Start of the bucket, second-precision UTC.
     */
    period: string;
  }

  export namespace Series {
    export interface Data {
      /**
       * Channel the provider delivered on, e.g. `email`.
       */
      channel: string;

      /**
       * Messages with at least one tracked link click.
       */
      clicked: number;

      /**
       * Messages the provider confirmed as delivered.
       */
      delivered: number;

      /**
       * Messages the provider rejected or failed on, including ones a later provider
       * then delivered.
       */
      errors: number;

      /**
       * Messages opened at least once. Always `0` on channels with no open tracking.
       */
      opened: number;

      /**
       * Provider that handled the messages, e.g. `sendgrid`.
       */
      provider: string;

      /**
       * Messages handed to the provider.
       */
      sent: number;

      /**
       * Messages Courier could not deliver on any provider for the channel.
       */
      undeliverable: number;
    }
  }
}

/**
 * A template's send-time alias as returned by a read, omitted entirely when it has
 * none. Usually a single string; an array for a template that resolves from
 * several aliases, which writes through this API can no longer produce — only
 * templates predating that restriction, or aliases attached outside this API, hold
 * more than one.
 */
export type NotificationTemplateAlias = string | Array<string>;

/**
 * Request body for creating a notification template.
 */
export interface NotificationTemplateCreateRequest {
  /**
   * Template fields accepted in POST and PUT request bodies, nested under a
   * `notification` key.
   */
  notification: NotificationTemplateWritePayload;

  /**
   * Template state after creation. Case-insensitive input, normalized to uppercase
   * in the response. Defaults to "DRAFT".
   */
  state?: 'DRAFT' | 'PUBLISHED';
}

/**
 * Core template fields used in POST and PUT request bodies (nested under a
 * `notification` key) and returned at the top level in responses.
 */
export interface NotificationTemplatePayload {
  /**
   * Brand reference, or null for no brand.
   */
  brand: NotificationTemplatePayload.Brand | null;

  /**
   * Elemental content definition.
   */
  content: Shared.ElementalContent;

  /**
   * Display name for the template.
   */
  name: string;

  /**
   * Routing strategy reference, or null for none.
   */
  routing: NotificationTemplatePayload.Routing | null;

  /**
   * Subscription topic reference, or null for none.
   */
  subscription: NotificationTemplatePayload.Subscription | null;

  /**
   * Tags for categorization. Send empty array for none.
   */
  tags: Array<string>;
}

export namespace NotificationTemplatePayload {
  /**
   * Brand reference, or null for no brand.
   */
  export interface Brand {
    id: string;
  }

  /**
   * Routing strategy reference, or null for none.
   */
  export interface Routing {
    strategy_id: string;
  }

  /**
   * Subscription topic reference, or null for none.
   */
  export interface Subscription {
    topic_id: string;
  }
}

/**
 * Optional request body for publishing a notification template. Omit or send an
 * empty object to publish the current draft.
 */
export interface NotificationTemplatePublishRequest {
  /**
   * Historical version to publish (e.g. "v001"). Omit to publish the current draft.
   */
  version?: string;
}

/**
 * Response for GET /notifications/{id}, POST /notifications, and PUT
 * /notifications/{id}. Returns all template fields at the top level.
 */
export interface NotificationTemplateResponse extends NotificationTemplatePayload {
  /**
   * The template ID.
   */
  id: string;

  /**
   * Epoch milliseconds when the template was created.
   */
  created: number;

  /**
   * User ID of the creator.
   */
  creator: string;

  /**
   * The template state. Always uppercase.
   */
  state: 'DRAFT' | 'PUBLISHED';

  /**
   * A template's send-time alias as returned by a read, omitted entirely when it has
   * none. Usually a single string; an array for a template that resolves from
   * several aliases, which writes through this API can no longer produce — only
   * templates predating that restriction, or aliases attached outside this API, hold
   * more than one.
   */
  alias?: NotificationTemplateAlias;

  /**
   * Epoch milliseconds of last update.
   */
  updated?: number;

  /**
   * User ID of the last updater.
   */
  updater?: string;
}

/**
 * Template state. Defaults to `DRAFT`.
 */
export type NotificationTemplateState = 'DRAFT' | 'PUBLISHED';

/**
 * V2 (CDS) template summary returned in list responses.
 */
export interface NotificationTemplateSummary {
  id: string;

  /**
   * Epoch milliseconds when the template was created.
   */
  created: number;

  /**
   * User ID of the creator.
   */
  creator: string;

  name: string;

  state: 'DRAFT' | 'PUBLISHED';

  tags: Array<string>;

  /**
   * The linked subscription (preference) topic of the published version. Omitted
   * when no topic is linked or the template has never been published.
   */
  subscription_topic_id?: string;

  /**
   * Alias of subscription_topic_id, provided under the same name V1 list items use
   * for the linked topic. Always carries the same value as subscription_topic_id.
   */
  topic_id?: string;

  /**
   * Epoch milliseconds of last update.
   */
  updated?: number;

  /**
   * User ID of the last updater.
   */
  updater?: string;
}

/**
 * Request body for replacing a notification template. All fields are required,
 * since `PUT` is a full replacement, except `alias`, whose omission leaves the
 * existing aliases in place. Unlike `NotificationTemplateCreateRequest`,
 * `notification.content` is not required to place its elements inside a channel
 * block: the requirement applies to creation only, so templates already stored
 * without one stay editable.
 */
export interface NotificationTemplateUpdateRequest {
  /**
   * Template fields accepted in POST and PUT request bodies, nested under a
   * `notification` key.
   */
  notification: NotificationTemplateWritePayload;

  /**
   * Template state after update. Case-insensitive input, normalized to uppercase in
   * the response. Defaults to "DRAFT".
   */
  state?: 'DRAFT' | 'PUBLISHED';
}

export interface NotificationTemplateVersionListResponse {
  paging: Shared.Paging;

  versions: Array<VersionNode>;
}

/**
 * Template fields accepted in POST and PUT request bodies, nested under a
 * `notification` key.
 */
export interface NotificationTemplateWritePayload extends NotificationTemplatePayload {
  /**
   * Send-time alias for this template — the value you pass as `event` to POST /send.
   * Writes accept a single alias only. Optional, with three distinct meanings. Omit
   * it to leave any existing aliases untouched. Send a string to make this the
   * template's only alias — a template that already resolved from several aliases
   * keeps just this one and the rest are detached. Send null to remove every alias
   * from the template. An alias may not be claimed by another template — doing so
   * returns 409 — and may not begin with "tenant/".
   */
  alias?: string | null;
}

/**
 * A version entry for a notification template.
 */
export interface VersionNode {
  /**
   * Epoch milliseconds when this version was created.
   */
  created: number;

  /**
   * User ID of the version creator.
   */
  creator: string;

  /**
   * Version identifier. One of "draft", "published:vNNN" (current published
   * version), or "vNNN" (historical version).
   */
  version: string;

  /**
   * Whether the draft has unpublished changes. Only present on the draft version.
   */
  has_changes?: boolean;
}

export interface NotificationListResponse {
  paging: Shared.Paging;

  /**
   * Notification templates in this workspace.
   */
  results: Array<NotificationListResponse.Notification | NotificationTemplateSummary>;
}

export namespace NotificationListResponse {
  export interface Notification {
    id: string;

    created_at: number;

    /**
     * Array of event IDs associated with this notification
     */
    event_ids: Array<string>;

    routing: Shared.MessageRouting;

    topic_id: string;

    updated_at: number;

    note?: string;

    tags?: Notification.Tags | null;

    title?: string | null;
  }

  export namespace Notification {
    export interface Tags {
      data: Array<Tags.Data>;
    }

    export namespace Tags {
      export interface Data {
        id: string;

        name: string;
      }
    }
  }
}

/**
 * Elemental content response for V2 templates. Contains versioned elements with
 * content checksums.
 */
export type NotificationRetrieveContentResponse = NotificationContentGetResponse | NotificationGetContent;

export interface NotificationCreateParams {
  /**
   * Body param: Template fields accepted in POST and PUT request bodies, nested
   * under a `notification` key.
   */
  notification: NotificationTemplateWritePayload;

  /**
   * Body param: Template state after creation. Case-insensitive input, normalized to
   * uppercase in the response. Defaults to "DRAFT".
   */
  state?: 'DRAFT' | 'PUBLISHED';

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

export interface NotificationRetrieveParams {
  /**
   * Version to retrieve. One of "draft", "published", or a version string like
   * "v001". Defaults to "published".
   */
  version?: string;
}

export interface NotificationListParams {
  /**
   * Opaque pagination cursor from a previous response. Omit for the first page.
   */
  cursor?: string | null;

  /**
   * Filter to templates linked to this event map ID.
   */
  event_id?: string;

  /**
   * Include template notes in the response. Only applies to legacy templates.
   */
  notes?: boolean | null;
}

export interface NotificationGetMetricsParams {
  /**
   * The end of the window, as an ISO 8601 timestamp with an offset. Must be supplied
   * together with `start`. An `end` in the future is accepted and not clamped — the
   * trailing buckets come back empty.
   */
  end?: string;

  /**
   * The size of each bucket in the series. Defaults to `DAY`. `WEEK` buckets start
   * on Sunday. A fine granularity caps the window it can cover: `HOUR` spans at most
   * 7 days and `DAY` at most 90 days, and a wider window returns `400` — request a
   * coarser granularity instead. `WEEK` and `MONTH` are uncapped, subject to the
   * 1000-bucket limit on a single response.
   */
  granularity?: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH';

  /**
   * The length of the window, counted back from now, as an ISO 8601 duration
   * (`P30D`, `P12W`, `PT12H`). Defaults to `P30D`, and is ignored when `start` and
   * `end` are supplied. A malformed or non-positive duration returns `400`.
   */
  lookback?: string;

  /**
   * The inclusive start of the window, as an ISO 8601 timestamp with an offset
   * (`2026-04-01T00:00:00Z`). Must be supplied together with `end` and be earlier
   * than it; either one alone returns `400`.
   */
  start?: string;
}

export interface NotificationListVersionsParams {
  /**
   * Opaque pagination cursor from a previous response. Omit for the first page.
   */
  cursor?: string;

  /**
   * Maximum number of versions to return per page. Default 10, max 10.
   */
  limit?: number;
}

export interface NotificationPublishParams {
  /**
   * Body param: Historical version to publish (e.g. "v001"). Omit to publish the
   * current draft.
   */
  version?: string;

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

export interface NotificationPutContentParams {
  /**
   * Elemental content payload. The server defaults `version` when omitted.
   */
  content: NotificationPutContentParams.Content;

  /**
   * Template state. Defaults to `DRAFT`.
   */
  state?: NotificationTemplateState;
}

export namespace NotificationPutContentParams {
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

export interface NotificationPutElementParams {
  /**
   * Path param: Notification template ID (`nt_` prefix).
   */
  id: string;

  /**
   * Body param: Element type (text, meta, action, image, etc.).
   */
  type: string;

  /**
   * Body param
   */
  channels?: Array<string>;

  /**
   * Body param
   */
  data?: { [key: string]: unknown };

  /**
   * Body param
   */
  if?: string;

  /**
   * Body param
   */
  loop?: string;

  /**
   * Body param
   */
  ref?: string;

  /**
   * Body param: Template state. Defaults to `DRAFT`.
   */
  state?: NotificationTemplateState;

  [k: string]: unknown;
}

export interface NotificationPutLocaleParams {
  /**
   * Path param: Notification template ID (`nt_` prefix).
   */
  id: string;

  /**
   * Body param: Elements with locale-specific content overrides.
   */
  elements: Array<NotificationPutLocaleParams.Element>;

  /**
   * Body param: Template state. Defaults to `DRAFT`.
   */
  state?: NotificationTemplateState;
}

export namespace NotificationPutLocaleParams {
  export interface Element {
    /**
     * Target element ID.
     */
    id: string;

    [k: string]: unknown;
  }
}

export interface NotificationReplaceParams {
  /**
   * Template fields accepted in POST and PUT request bodies, nested under a
   * `notification` key.
   */
  notification: NotificationTemplateWritePayload;

  /**
   * Template state after update. Case-insensitive input, normalized to uppercase in
   * the response. Defaults to "DRAFT".
   */
  state?: 'DRAFT' | 'PUBLISHED';
}

export interface NotificationRetrieveContentParams {
  /**
   * Accepts `draft`, `published`, or a version string (e.g., `v001`). Defaults to
   * `published`.
   */
  version?: string;
}

Notifications.Checks = Checks;

export declare namespace Notifications {
  export {
    type BaseCheck as BaseCheck,
    type Check as Check,
    type ElementWithChecksums as ElementWithChecksums,
    type NotificationContentGetResponse as NotificationContentGetResponse,
    type NotificationContentMutationResponse as NotificationContentMutationResponse,
    type NotificationContentPutRequest as NotificationContentPutRequest,
    type NotificationElementPutRequest as NotificationElementPutRequest,
    type NotificationGetContent as NotificationGetContent,
    type NotificationLocalePutRequest as NotificationLocalePutRequest,
    type NotificationMetricsResponse as NotificationMetricsResponse,
    type NotificationTemplateAlias as NotificationTemplateAlias,
    type NotificationTemplateCreateRequest as NotificationTemplateCreateRequest,
    type NotificationTemplatePayload as NotificationTemplatePayload,
    type NotificationTemplatePublishRequest as NotificationTemplatePublishRequest,
    type NotificationTemplateResponse as NotificationTemplateResponse,
    type NotificationTemplateState as NotificationTemplateState,
    type NotificationTemplateSummary as NotificationTemplateSummary,
    type NotificationTemplateUpdateRequest as NotificationTemplateUpdateRequest,
    type NotificationTemplateVersionListResponse as NotificationTemplateVersionListResponse,
    type NotificationTemplateWritePayload as NotificationTemplateWritePayload,
    type VersionNode as VersionNode,
    type NotificationListResponse as NotificationListResponse,
    type NotificationRetrieveContentResponse as NotificationRetrieveContentResponse,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationListParams as NotificationListParams,
    type NotificationGetMetricsParams as NotificationGetMetricsParams,
    type NotificationListVersionsParams as NotificationListVersionsParams,
    type NotificationPublishParams as NotificationPublishParams,
    type NotificationPutContentParams as NotificationPutContentParams,
    type NotificationPutElementParams as NotificationPutElementParams,
    type NotificationPutLocaleParams as NotificationPutLocaleParams,
    type NotificationReplaceParams as NotificationReplaceParams,
    type NotificationRetrieveContentParams as NotificationRetrieveContentParams,
  };

  export {
    Checks as Checks,
    type CheckUpdateResponse as CheckUpdateResponse,
    type CheckListResponse as CheckListResponse,
    type CheckUpdateParams as CheckUpdateParams,
    type CheckListParams as CheckListParams,
    type CheckDeleteParams as CheckDeleteParams,
  };
}
