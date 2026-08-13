// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ListsAPI from './lists';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage static groups of users that you subscribe explicitly, and send to them by list id or list pattern.
 */
export class Subscriptions extends APIResource {
  /**
   * Returns the users subscribed to a list with paging, each with the preferences
   * recorded for that subscription.
   *
   * @example
   * ```ts
   * const subscriptions = await client.lists.subscriptions.list(
   *   'list_id',
   * );
   * ```
   */
  list(
    listID: string,
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    return this._client.get(path`/lists/${listID}/subscriptions`, { query, ...options });
  }

  /**
   * Subscribes additional users to the list, without modifying existing
   * subscriptions. If the list does not exist, it will be automatically created.
   *
   * @example
   * ```ts
   * await client.lists.subscriptions.add('list_id', {
   *   recipients: [
   *     { recipientId: 'user_abc' },
   *     { recipientId: 'user_def' },
   *   ],
   * });
   * ```
   */
  add(listID: string, params: SubscriptionAddParams, options?: RequestOptions): APIPromise<void> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post(path`/lists/${listID}/subscriptions`, {
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
   * Subscribes the users to the list, overwriting existing subscriptions. If the
   * list does not exist, it will be automatically created.
   *
   * @example
   * ```ts
   * await client.lists.subscriptions.subscribe('list_id', {
   *   recipients: [
   *     { recipientId: 'user_abc' },
   *     { recipientId: 'user_def' },
   *   ],
   * });
   * ```
   */
  subscribe(listID: string, body: SubscriptionSubscribeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/lists/${listID}/subscriptions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Subscribes one user to a list, creating the list if it does not yet exist.
   * Optional preferences apply to this subscription only.
   *
   * @example
   * ```ts
   * await client.lists.subscriptions.subscribeUser('user_id', {
   *   list_id: 'list_id',
   *   preferences: {
   *     notifications: {
   *       nt_01kx4h2jdafq8bk9aftxak4b40: { status: 'OPTED_IN' },
   *     },
   *   },
   * });
   * ```
   */
  subscribeUser(
    userID: string,
    params: SubscriptionSubscribeUserParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { list_id, ...body } = params;
    return this._client.put(path`/lists/${list_id}/subscriptions/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Removes one user's subscription to a list, addressed by list id and user id. The
   * user's profile and other subscriptions are separate resources.
   *
   * @example
   * ```ts
   * await client.lists.subscriptions.unsubscribeUser(
   *   'user_id',
   *   { list_id: 'list_id' },
   * );
   * ```
   */
  unsubscribeUser(
    userID: string,
    params: SubscriptionUnsubscribeUserParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { list_id } = params;
    return this._client.delete(path`/lists/${list_id}/subscriptions/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscriptionListResponse {
  items: Array<SubscriptionListResponse.Item>;

  paging: Shared.Paging;
}

export namespace SubscriptionListResponse {
  export interface Item {
    recipientId: string;

    created?: string | null;

    preferences?: Shared.RecipientPreferences | null;
  }
}

export interface SubscriptionListParams {
  /**
   * A unique identifier that allows for fetching the next set of list subscriptions
   */
  cursor?: string | null;
}

export interface SubscriptionAddParams {
  /**
   * Body param
   */
  recipients: Array<ListsAPI.PutSubscriptionsRecipient>;

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

export interface SubscriptionSubscribeParams {
  recipients: Array<ListsAPI.PutSubscriptionsRecipient>;
}

export interface SubscriptionSubscribeUserParams {
  /**
   * Path param: A unique identifier representing the list you wish to retrieve.
   */
  list_id: string;

  /**
   * Body param
   */
  preferences?: Shared.RecipientPreferences | null;
}

export interface SubscriptionUnsubscribeUserParams {
  /**
   * A unique identifier representing the list you wish to retrieve.
   */
  list_id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionAddParams as SubscriptionAddParams,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionSubscribeUserParams as SubscriptionSubscribeUserParams,
    type SubscriptionUnsubscribeUserParams as SubscriptionUnsubscribeUserParams,
  };
}
