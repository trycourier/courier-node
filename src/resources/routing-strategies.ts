// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import * as NotificationsAPI from './notifications/notifications';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RoutingStrategies extends APIResource {
  /**
   * Create a routing strategy. Requires a name and routing configuration at minimum.
   * Channels and providers default to empty if omitted.
   *
   * @example
   * ```ts
   * const routingStrategyMutationResponse =
   *   await client.routingStrategies.create({
   *     name: 'Email via SendGrid',
   *     routing: { method: 'single', channels: ['email'] },
   *     channels: { email: { providers: ['sendgrid', 'ses'] } },
   *     description:
   *       'Routes email through sendgrid with SES failover',
   *     providers: { sendgrid: { override: {} } },
   *     tags: ['production', 'email'],
   *   });
   * ```
   */
  create(
    body: RoutingStrategyCreateParams,
    options?: RequestOptions,
  ): APIPromise<RoutingStrategyMutationResponse> {
    return this._client.post('/routing-strategies', { body, ...options });
  }

  /**
   * Retrieve a routing strategy by ID. Returns the full entity including routing
   * content and metadata.
   *
   * @example
   * ```ts
   * const routingStrategyGetResponse =
   *   await client.routingStrategies.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RoutingStrategyGetResponse> {
    return this._client.get(path`/routing-strategies/${id}`, options);
  }

  /**
   * List routing strategies in your workspace. Returns metadata only (no
   * routing/channels/providers content). Use GET /routing-strategies/{id} for full
   * details.
   *
   * @example
   * ```ts
   * const routingStrategyListResponse =
   *   await client.routingStrategies.list();
   * ```
   */
  list(
    query: RoutingStrategyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoutingStrategyListResponse> {
    return this._client.get('/routing-strategies', { query, ...options });
  }

  /**
   * Archive a routing strategy. The strategy must not have associated notification
   * templates. Unlink all templates before archiving.
   *
   * @example
   * ```ts
   * await client.routingStrategies.archive('id');
   * ```
   */
  archive(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/routing-strategies/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List notification templates associated with a routing strategy. Includes
   * template metadata only, not full content.
   *
   * @example
   * ```ts
   * const associatedNotificationListResponse =
   *   await client.routingStrategies.listNotifications('id');
   * ```
   */
  listNotifications(
    id: string,
    query: RoutingStrategyListNotificationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssociatedNotificationListResponse> {
    return this._client.get(path`/routing-strategies/${id}/notifications`, { query, ...options });
  }

  /**
   * Replace a routing strategy. Full document replacement; the caller must send the
   * complete desired state. Missing optional fields are cleared.
   *
   * @example
   * ```ts
   * const routingStrategyMutationResponse =
   *   await client.routingStrategies.replace('id', {
   *     name: 'Email via SendGrid v2',
   *     routing: { method: 'single', channels: ['email'] },
   *     channels: { email: { providers: ['ses', 'sendgrid'] } },
   *     description: 'Updated routing with SES primary',
   *     providers: { ses: { override: {} } },
   *     tags: ['production', 'email', 'v2'],
   *   });
   * ```
   */
  replace(
    id: string,
    body: RoutingStrategyReplaceParams,
    options?: RequestOptions,
  ): APIPromise<RoutingStrategyMutationResponse> {
    return this._client.put(path`/routing-strategies/${id}`, { body, ...options });
  }
}

/**
 * Paginated list of notification templates associated with a routing strategy.
 */
export interface AssociatedNotificationListResponse {
  paging: Shared.Paging;

  results: Array<NotificationsAPI.NotificationTemplateSummary>;
}

/**
 * Request body for creating a routing strategy.
 */
export interface RoutingStrategyCreateRequest {
  /**
   * Human-readable name for the routing strategy.
   */
  name: string;

  /**
   * Routing tree defining channel selection method and order.
   */
  routing: Shared.MessageRouting;

  /**
   * Per-channel delivery configuration. Defaults to empty if omitted.
   */
  channels?: Shared.MessageChannels | null;

  /**
   * Optional description of the routing strategy.
   */
  description?: string | null;

  /**
   * Per-provider delivery configuration. Defaults to empty if omitted.
   */
  providers?: Shared.MessageProviders | null;

  /**
   * Optional tags for categorization.
   */
  tags?: Array<string> | null;
}

/**
 * Full routing strategy entity returned by GET.
 */
export interface RoutingStrategyGetResponse {
  /**
   * The routing strategy ID (rs\_ prefix).
   */
  id: string;

  /**
   * Per-channel delivery configuration. May be empty.
   */
  channels: Shared.MessageChannels;

  /**
   * Epoch milliseconds when the strategy was created.
   */
  created: number;

  /**
   * User ID of the creator.
   */
  creator: string;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Per-provider delivery configuration. May be empty.
   */
  providers: Shared.MessageProviders;

  /**
   * Routing tree defining channel selection method and order.
   */
  routing: Shared.MessageRouting;

  /**
   * Description of the routing strategy.
   */
  description?: string | null;

  /**
   * Tags for categorization.
   */
  tags?: Array<string> | null;

  /**
   * Epoch milliseconds of last update.
   */
  updated?: number | null;

  /**
   * User ID of the last updater.
   */
  updater?: string | null;
}

/**
 * Paginated list of routing strategy summaries.
 */
export interface RoutingStrategyListResponse {
  paging: Shared.Paging;

  results: Array<RoutingStrategySummary>;
}

/**
 * Response returned by create and replace operations.
 */
export interface RoutingStrategyMutationResponse {
  /**
   * The routing strategy ID (rs\_ prefix).
   */
  id: string;
}

/**
 * Request body for replacing a routing strategy. Full document replacement;
 * missing optional fields are cleared.
 */
export interface RoutingStrategyReplaceRequest {
  /**
   * Human-readable name for the routing strategy.
   */
  name: string;

  /**
   * Routing tree defining channel selection method and order.
   */
  routing: Shared.MessageRouting;

  /**
   * Per-channel delivery configuration. Omit to clear.
   */
  channels?: Shared.MessageChannels | null;

  /**
   * Optional description. Omit or null to clear.
   */
  description?: string | null;

  /**
   * Per-provider delivery configuration. Omit to clear.
   */
  providers?: Shared.MessageProviders | null;

  /**
   * Optional tags. Omit or null to clear.
   */
  tags?: Array<string> | null;
}

/**
 * Routing strategy metadata returned in list responses. Does not include
 * routing/channels/providers content.
 */
export interface RoutingStrategySummary {
  /**
   * The routing strategy ID (rs\_ prefix).
   */
  id: string;

  /**
   * Epoch milliseconds when the strategy was created.
   */
  created: number;

  /**
   * User ID of the creator.
   */
  creator: string;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Description of the routing strategy.
   */
  description?: string | null;

  /**
   * Tags for categorization.
   */
  tags?: Array<string> | null;

  /**
   * Epoch milliseconds of last update.
   */
  updated?: number | null;

  /**
   * User ID of the last updater.
   */
  updater?: string | null;
}

export interface RoutingStrategyCreateParams {
  /**
   * Human-readable name for the routing strategy.
   */
  name: string;

  /**
   * Routing tree defining channel selection method and order.
   */
  routing: Shared.MessageRouting;

  /**
   * Per-channel delivery configuration. Defaults to empty if omitted.
   */
  channels?: Shared.MessageChannels | null;

  /**
   * Optional description of the routing strategy.
   */
  description?: string | null;

  /**
   * Per-provider delivery configuration. Defaults to empty if omitted.
   */
  providers?: Shared.MessageProviders | null;

  /**
   * Optional tags for categorization.
   */
  tags?: Array<string> | null;
}

export interface RoutingStrategyListParams {
  /**
   * Opaque pagination cursor from a previous response. Omit for the first page.
   */
  cursor?: string | null;

  /**
   * Maximum number of results per page. Default 20, max 100.
   */
  limit?: number;
}

export interface RoutingStrategyListNotificationsParams {
  /**
   * Opaque pagination cursor from a previous response. Omit for the first page.
   */
  cursor?: string | null;

  /**
   * Maximum number of results per page. Default 20, max 100.
   */
  limit?: number;
}

export interface RoutingStrategyReplaceParams {
  /**
   * Human-readable name for the routing strategy.
   */
  name: string;

  /**
   * Routing tree defining channel selection method and order.
   */
  routing: Shared.MessageRouting;

  /**
   * Per-channel delivery configuration. Omit to clear.
   */
  channels?: Shared.MessageChannels | null;

  /**
   * Optional description. Omit or null to clear.
   */
  description?: string | null;

  /**
   * Per-provider delivery configuration. Omit to clear.
   */
  providers?: Shared.MessageProviders | null;

  /**
   * Optional tags. Omit or null to clear.
   */
  tags?: Array<string> | null;
}

export declare namespace RoutingStrategies {
  export {
    type AssociatedNotificationListResponse as AssociatedNotificationListResponse,
    type RoutingStrategyCreateRequest as RoutingStrategyCreateRequest,
    type RoutingStrategyGetResponse as RoutingStrategyGetResponse,
    type RoutingStrategyListResponse as RoutingStrategyListResponse,
    type RoutingStrategyMutationResponse as RoutingStrategyMutationResponse,
    type RoutingStrategyReplaceRequest as RoutingStrategyReplaceRequest,
    type RoutingStrategySummary as RoutingStrategySummary,
    type RoutingStrategyCreateParams as RoutingStrategyCreateParams,
    type RoutingStrategyListParams as RoutingStrategyListParams,
    type RoutingStrategyListNotificationsParams as RoutingStrategyListNotificationsParams,
    type RoutingStrategyReplaceParams as RoutingStrategyReplaceParams,
  };
}
