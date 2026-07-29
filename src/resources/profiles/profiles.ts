// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ListsAPI from './lists';
import {
  ListDeleteResponse,
  ListRetrieveParams,
  ListRetrieveResponse,
  ListSubscribeParams,
  ListSubscribeResponse,
  Lists,
} from './lists';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Store the contact information Courier delivers to for each user — email, phone number, push tokens, and any custom data you send to.
 */
export class Profiles extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);

  /**
   * Merges the supplied values into a user's profile, creating it if absent and
   * leaving any key you omit untouched. Prefer this for everyday writes.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.create('user_id', {
   *   profile: { foo: 'bar' },
   * });
   * ```
   */
  create(
    userID: string,
    params: ProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileCreateResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post(path`/profiles/${userID}`, {
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
   * Returns a user's stored profile and preferences, including the email address,
   * phone number, and push tokens Courier can reach them on.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.retrieve('user_id');
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get(path`/profiles/${userID}`, options);
  }

  /**
   * Applies a JSON Patch to a user profile, adding, removing, or replacing
   * individual fields without sending the whole object.
   *
   * @example
   * ```ts
   * await client.profiles.update('user_id', {
   *   patch: [
   *     {
   *       op: 'op',
   *       path: 'path',
   *       value: 'value',
   *     },
   *   ],
   * });
   * ```
   */
  update(userID: string, body: ProfileUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/profiles/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes a user's profile and stored contact details. List subscriptions and
   * preferences are separate resources, so remove those too if required.
   *
   * @example
   * ```ts
   * await client.profiles.delete('user_id');
   * ```
   */
  delete(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/profiles/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Overwrites a user profile in full, removing any key absent from the request
   * body. Use the patch endpoint when changing a single field.
   *
   * @example
   * ```ts
   * const response = await client.profiles.replace('user_id', {
   *   profile: { foo: 'bar' },
   * });
   * ```
   */
  replace(
    userID: string,
    body: ProfileReplaceParams,
    options?: RequestOptions,
  ): APIPromise<ProfileReplaceResponse> {
    return this._client.put(path`/profiles/${userID}`, { body, ...options });
  }
}

export interface SubscribeToListsRequestItem {
  listId: string;

  preferences?: Shared.RecipientPreferences | null;
}

export interface ProfileCreateResponse {
  status: 'SUCCESS';
}

export interface ProfileRetrieveResponse {
  profile: { [key: string]: unknown };

  preferences?: Shared.RecipientPreferences | null;
}

export interface ProfileReplaceResponse {
  status: 'SUCCESS';
}

export interface ProfileCreateParams {
  /**
   * Body param
   */
  profile: { [key: string]: unknown };

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

export interface ProfileUpdateParams {
  /**
   * List of patch operations to apply to the profile.
   */
  patch: Array<ProfileUpdateParams.Patch>;
}

export namespace ProfileUpdateParams {
  export interface Patch {
    /**
     * The operation to perform.
     */
    op: string;

    /**
     * The JSON path specifying the part of the profile to operate on.
     */
    path: string;

    /**
     * The value for the operation.
     */
    value: string;
  }
}

export interface ProfileReplaceParams {
  profile: { [key: string]: unknown };
}

Profiles.Lists = Lists;

export declare namespace Profiles {
  export {
    type SubscribeToListsRequestItem as SubscribeToListsRequestItem,
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileReplaceResponse as ProfileReplaceResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfileReplaceParams as ProfileReplaceParams,
  };

  export {
    Lists as Lists,
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListSubscribeResponse as ListSubscribeResponse,
    type ListRetrieveParams as ListRetrieveParams,
    type ListSubscribeParams as ListSubscribeParams,
  };
}
