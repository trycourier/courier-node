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
import * as DraftAPI from './draft';
import { Draft } from './draft';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Notifications extends APIResource {
  draft: DraftAPI.Draft = new DraftAPI.Draft(this._client);
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
   * @example
   * ```ts
   * const notificationGetContent =
   *   await client.notifications.retrieveContent('id');
   * ```
   */
  retrieveContent(id: string, options?: RequestOptions): APIPromise<NotificationGetContent> {
    return this._client.get(path`/notifications/${id}/content`, options);
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

Notifications.Draft = Draft;
Notifications.Checks = Checks;

export declare namespace Notifications {
  export {
    type BaseCheck as BaseCheck,
    type Check as Check,
    type NotificationGetContent as NotificationGetContent,
    type NotificationTemplateCreateRequest as NotificationTemplateCreateRequest,
    type NotificationTemplateGetResponse as NotificationTemplateGetResponse,
    type NotificationTemplateMutationResponse as NotificationTemplateMutationResponse,
    type NotificationTemplatePayload as NotificationTemplatePayload,
    type NotificationTemplatePublishRequest as NotificationTemplatePublishRequest,
    type NotificationTemplateSummary as NotificationTemplateSummary,
    type NotificationTemplateUpdateRequest as NotificationTemplateUpdateRequest,
    type NotificationTemplateVersionListResponse as NotificationTemplateVersionListResponse,
    type VersionNode as VersionNode,
    type NotificationListResponse as NotificationListResponse,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationListParams as NotificationListParams,
    type NotificationListVersionsParams as NotificationListVersionsParams,
    type NotificationPublishParams as NotificationPublishParams,
    type NotificationReplaceParams as NotificationReplaceParams,
  };

  export { Draft as Draft };

  export {
    Checks as Checks,
    type CheckUpdateResponse as CheckUpdateResponse,
    type CheckListResponse as CheckListResponse,
    type CheckUpdateParams as CheckUpdateParams,
    type CheckListParams as CheckListParams,
    type CheckDeleteParams as CheckDeleteParams,
  };
}
