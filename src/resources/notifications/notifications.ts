// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NotificationsAPI from './notifications';
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

export class Notifications extends APIResource {
  checks: ChecksAPI.Checks = new ChecksAPI.Checks(this._client);

  /**
   * Create a notification template. Requires all fields in the notification object.
   * Templates are created in draft state by default.
   *
   * @example
   * ```ts
   * const notificationTemplateMutationResponse =
   *   await client.notifications.create({
   *     notification: {
   *       name: 'Welcome Email',
   *       tags: ['onboarding', 'welcome'],
   *       brand: { id: 'brand_abc' },
   *       subscription: { topic_id: 'marketing' },
   *       routing: { strategy_id: 'rs_123' },
   *       content: {
   *         version: '2022-01-01',
   *         elements: [{ type: 'channel' }],
   *       },
   *     },
   *     state: 'DRAFT',
   *   });
   * ```
   */
  create(
    body: NotificationCreateParams,
    options?: RequestOptions,
  ): APIPromise<NotificationTemplateMutationResponse> {
    return this._client.post('/notifications', { body, ...options });
  }

  /**
   * Retrieve a notification template by ID. Returns the published version by
   * default. Pass version=draft to retrieve an unpublished template.
   *
   * @example
   * ```ts
   * const notificationTemplateGetResponse =
   *   await client.notifications.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: NotificationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationTemplateGetResponse> {
    return this._client.get(path`/notifications/${id}`, { query, ...options });
  }

  /**
   * List notification templates in your workspace.
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
   * Archive a notification template.
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
   * List versions of a notification template.
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
    body: NotificationPublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/notifications/${id}/publish`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Replace the elemental content of a notification template. Overwrites all
   * elements in the template with the provided content. Only supported for V2
   * (elemental) templates.
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
   * Update a single element within a notification template. Only supported for V2
   * (elemental) templates.
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
   * Set locale-specific content overrides for a notification template. Each element
   * override must reference an existing element by ID. Only supported for V2
   * (elemental) templates.
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
   * Replace a notification template. All fields are required.
   *
   * @example
   * ```ts
   * const notificationTemplateMutationResponse =
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
  ): APIPromise<NotificationTemplateMutationResponse> {
    return this._client.put(path`/notifications/${id}`, { body, ...options });
  }

  /**
   * Retrieve the content of a notification template. The response shape depends on
   * whether the template uses V1 (blocks/channels) or V2 (elemental) content. Use
   * the `version` query parameter to select draft, published, or a specific
   * historical version.
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

/**
 * Request body for creating a notification template.
 */
export interface NotificationTemplateCreateRequest {
  /**
   * Full document shape used in POST and PUT request bodies, and returned inside the
   * GET response envelope.
   */
  notification: NotificationTemplatePayload;

  /**
   * Template state after creation. Case-insensitive input, normalized to uppercase
   * in the response. Defaults to "DRAFT".
   */
  state?: 'DRAFT' | 'PUBLISHED';
}

/**
 * Envelope response for GET /notifications/{id}. The notification object mirrors
 * the POST/PUT input shape. Nullable fields return null when unset.
 */
export interface NotificationTemplateGetResponse {
  /**
   * Epoch milliseconds when the template was created.
   */
  created: number;

  /**
   * User ID of the creator.
   */
  creator: string;

  /**
   * Full document shape used in POST and PUT request bodies, and returned inside the
   * GET response envelope.
   */
  notification: NotificationTemplateGetResponse.Notification;

  /**
   * The template state. Always uppercase.
   */
  state: 'DRAFT' | 'PUBLISHED';

  /**
   * Epoch milliseconds of last update.
   */
  updated?: number;

  /**
   * User ID of the last updater.
   */
  updater?: string;
}

export namespace NotificationTemplateGetResponse {
  /**
   * Full document shape used in POST and PUT request bodies, and returned inside the
   * GET response envelope.
   */
  export interface Notification extends NotificationsAPI.NotificationTemplatePayload {
    /**
     * The template ID.
     */
    id: string;
  }
}

/**
 * Response returned by POST and PUT operations.
 */
export interface NotificationTemplateMutationResponse {
  notification: NotificationTemplateMutationResponse.Notification;

  /**
   * The template state after the operation. Always uppercase.
   */
  state: 'DRAFT' | 'PUBLISHED';
}

export namespace NotificationTemplateMutationResponse {
  export interface Notification {
    /**
     * The ID of the created or updated template.
     */
    id: string;
  }
}

/**
 * Full document shape used in POST and PUT request bodies, and returned inside the
 * GET response envelope.
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
   * Epoch milliseconds of last update.
   */
  updated?: number;

  /**
   * User ID of the last updater.
   */
  updater?: string;
}

/**
 * Request body for replacing a notification template. Same shape as create. All
 * fields required (PUT = full replacement).
 */
export interface NotificationTemplateUpdateRequest {
  /**
   * Full document shape used in POST and PUT request bodies, and returned inside the
   * GET response envelope.
   */
  notification: NotificationTemplatePayload;

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

    note: string;

    routing: Shared.MessageRouting;

    topic_id: string;

    updated_at: number;

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
   * Full document shape used in POST and PUT request bodies, and returned inside the
   * GET response envelope.
   */
  notification: NotificationTemplatePayload;

  /**
   * Template state after creation. Case-insensitive input, normalized to uppercase
   * in the response. Defaults to "DRAFT".
   */
  state?: 'DRAFT' | 'PUBLISHED';
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
   * Historical version to publish (e.g. "v001"). Omit to publish the current draft.
   */
  version?: string;
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
   * Full document shape used in POST and PUT request bodies, and returned inside the
   * GET response envelope.
   */
  notification: NotificationTemplatePayload;

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
    type NotificationTemplateCreateRequest as NotificationTemplateCreateRequest,
    type NotificationTemplateGetResponse as NotificationTemplateGetResponse,
    type NotificationTemplateMutationResponse as NotificationTemplateMutationResponse,
    type NotificationTemplatePayload as NotificationTemplatePayload,
    type NotificationTemplatePublishRequest as NotificationTemplatePublishRequest,
    type NotificationTemplateState as NotificationTemplateState,
    type NotificationTemplateSummary as NotificationTemplateSummary,
    type NotificationTemplateUpdateRequest as NotificationTemplateUpdateRequest,
    type NotificationTemplateVersionListResponse as NotificationTemplateVersionListResponse,
    type VersionNode as VersionNode,
    type NotificationListResponse as NotificationListResponse,
    type NotificationRetrieveContentResponse as NotificationRetrieveContentResponse,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationListParams as NotificationListParams,
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
