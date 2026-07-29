// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ProfilesAPI from './profiles';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Store the contact information Courier delivers to for each user — email, phone number, push tokens, and any custom data you send to.
 */
export class Lists extends APIResource {
  /**
   * Returns the lists a user is subscribed to, with paging. Use it to check what a
   * recipient will receive before sending to a list.
   *
   * @example
   * ```ts
   * const list = await client.profiles.lists.retrieve(
   *   'user_id',
   * );
   * ```
   */
  retrieve(
    userID: string,
    query: ListRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListRetrieveResponse> {
    return this._client.get(path`/profiles/${userID}/lists`, { query, ...options });
  }

  /**
   * Removes every list subscription for a user at once. Their profile and
   * preferences are untouched, so this only affects list-targeted sends.
   *
   * @example
   * ```ts
   * const list = await client.profiles.lists.delete('user_id');
   * ```
   */
  delete(userID: string, options?: RequestOptions): APIPromise<ListDeleteResponse> {
    return this._client.delete(path`/profiles/${userID}/lists`, options);
  }

  /**
   * Subscribes a user to one or more lists, creating any list that does not yet
   * exist. Optional preferences apply to each subscription.
   *
   * @example
   * ```ts
   * const response = await client.profiles.lists.subscribe(
   *   'user_id',
   *   { lists: [{ listId: 'listId' }] },
   * );
   * ```
   */
  subscribe(
    userID: string,
    params: ListSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<ListSubscribeResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post(path`/profiles/${userID}/lists`, {
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
}

export interface ListRetrieveResponse {
  paging: Shared.Paging;

  /**
   * An array of lists
   */
  results: Array<ListRetrieveResponse.Result>;
}

export namespace ListRetrieveResponse {
  export interface Result {
    id: string;

    /**
     * The date/time of when the list was created. Represented as a string in ISO
     * format.
     */
    created: string;

    /**
     * List name
     */
    name: string;

    /**
     * The date/time of when the list was updated. Represented as a string in ISO
     * format.
     */
    updated: string;

    preferences?: Shared.RecipientPreferences | null;
  }
}

export interface ListDeleteResponse {
  status: 'SUCCESS';
}

export interface ListSubscribeResponse {
  status: 'SUCCESS';
}

export interface ListRetrieveParams {
  /**
   * A unique identifier that allows for fetching the next set of message statuses.
   */
  cursor?: string | null;
}

export interface ListSubscribeParams {
  /**
   * Body param
   */
  lists: Array<ProfilesAPI.SubscribeToListsRequestItem>;

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

export declare namespace Lists {
  export {
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListSubscribeResponse as ListSubscribeResponse,
    type ListRetrieveParams as ListRetrieveParams,
    type ListSubscribeParams as ListSubscribeParams,
  };
}
