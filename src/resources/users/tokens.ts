// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * Get single token available for a `:token`
   *
   * @example
   * ```ts
   * const token = await client.users.tokens.retrieve('token', {
   *   user_id: 'user_id',
   * });
   * ```
   */
  retrieve(
    token: string,
    params: TokenRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TokenRetrieveResponse> {
    const { user_id } = params;
    return this._client.get(path`/users/${user_id}/tokens/${token}`, options);
  }

  /**
   * Apply a JSON Patch (RFC 6902) to the specified token.
   *
   * @example
   * ```ts
   * await client.users.tokens.update('token', {
   *   user_id: 'user_id',
   *   patch: [{ op: 'op', path: 'path' }],
   * });
   * ```
   */
  update(token: string, params: TokenUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { user_id, ...body } = params;
    return this._client.patch(path`/users/${user_id}/tokens/${token}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Gets all tokens available for a :user_id
   *
   * @example
   * ```ts
   * const userTokens = await client.users.tokens.list(
   *   'user_id',
   * );
   * ```
   */
  list(userID: string, options?: RequestOptions): APIPromise<TokenListResponse> {
    return this._client.get(path`/users/${userID}/tokens`, options);
  }

  /**
   * Delete User Token
   *
   * @example
   * ```ts
   * await client.users.tokens.delete('token', {
   *   user_id: 'user_id',
   * });
   * ```
   */
  delete(token: string, params: TokenDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { user_id } = params;
    return this._client.delete(path`/users/${user_id}/tokens/${token}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Adds multiple tokens to a user and overwrites matching existing tokens.
   *
   * @example
   * ```ts
   * await client.users.tokens.addMultiple('user_id');
   * ```
   */
  addMultiple(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/users/${userID}/tokens`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Adds a single token to a user and overwrites a matching existing token.
   *
   * @example
   * ```ts
   * await client.users.tokens.addSingle('token', {
   *   user_id: 'user_id',
   *   provider_key: 'firebase-fcm',
   * });
   * ```
   */
  addSingle(pathToken: string, params: TokenAddSingleParams, options?: RequestOptions): APIPromise<void> {
    const { user_id, ...body } = params;
    return this._client.put(path`/users/${user_id}/tokens/${pathToken}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserToken {
  provider_key: 'firebase-fcm' | 'apn' | 'expo' | 'onesignal';

  /**
   * Full body of the token. Must match token in URL.
   */
  token?: string | null;

  /**
   * Information about the device the token is associated with.
   */
  device?: UserToken.Device | null;

  /**
   * ISO 8601 formatted date the token expires. Defaults to 2 months. Set to false to
   * disable expiration.
   */
  expiry_date?: string | boolean | null;

  /**
   * Properties sent to the provider along with the token
   */
  properties?: unknown;

  /**
   * Information about the device the token is associated with.
   */
  tracking?: UserToken.Tracking | null;
}

export namespace UserToken {
  /**
   * Information about the device the token is associated with.
   */
  export interface Device {
    /**
     * Id of the advertising identifier
     */
    ad_id?: string | null;

    /**
     * Id of the application the token is used for
     */
    app_id?: string | null;

    /**
     * Id of the device the token is associated with
     */
    device_id?: string | null;

    /**
     * The device manufacturer
     */
    manufacturer?: string | null;

    /**
     * The device model
     */
    model?: string | null;

    /**
     * The device platform i.e. android, ios, web
     */
    platform?: string | null;
  }

  /**
   * Information about the device the token is associated with.
   */
  export interface Tracking {
    /**
     * The IP address of the device
     */
    ip?: string | null;

    /**
     * The latitude of the device
     */
    lat?: string | null;

    /**
     * The longitude of the device
     */
    long?: string | null;

    /**
     * The operating system version
     */
    os_version?: string | null;
  }
}

export interface TokenRetrieveResponse extends UserToken {
  status?: 'active' | 'unknown' | 'failed' | 'revoked' | null;

  /**
   * The reason for the token status.
   */
  status_reason?: string | null;
}

/**
 * A list of tokens registered with the user.
 */
export type TokenListResponse = Array<UserToken>;

export interface TokenRetrieveParams {
  /**
   * The user's ID. This can be any uniquely identifiable string.
   */
  user_id: string;
}

export interface TokenUpdateParams {
  /**
   * Path param: The user's ID. This can be any uniquely identifiable string.
   */
  user_id: string;

  /**
   * Body param:
   */
  patch: Array<TokenUpdateParams.Patch>;
}

export namespace TokenUpdateParams {
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
    value?: string | null;
  }
}

export interface TokenDeleteParams {
  /**
   * The user's ID. This can be any uniquely identifiable string.
   */
  user_id: string;
}

export interface TokenAddSingleParams {
  /**
   * Path param: The user's ID. This can be any uniquely identifiable string.
   */
  user_id: string;

  /**
   * Body param:
   */
  provider_key: 'firebase-fcm' | 'apn' | 'expo' | 'onesignal';

  /**
   * Body param: Full body of the token. Must match token in URL.
   */
  body_token?: string | null;

  /**
   * Body param: Information about the device the token is associated with.
   */
  device?: TokenAddSingleParams.Device | null;

  /**
   * Body param: ISO 8601 formatted date the token expires. Defaults to 2 months. Set
   * to false to disable expiration.
   */
  expiry_date?: string | boolean | null;

  /**
   * Body param: Properties sent to the provider along with the token
   */
  properties?: unknown;

  /**
   * Body param: Information about the device the token is associated with.
   */
  tracking?: TokenAddSingleParams.Tracking | null;
}

export namespace TokenAddSingleParams {
  /**
   * Information about the device the token is associated with.
   */
  export interface Device {
    /**
     * Id of the advertising identifier
     */
    ad_id?: string | null;

    /**
     * Id of the application the token is used for
     */
    app_id?: string | null;

    /**
     * Id of the device the token is associated with
     */
    device_id?: string | null;

    /**
     * The device manufacturer
     */
    manufacturer?: string | null;

    /**
     * The device model
     */
    model?: string | null;

    /**
     * The device platform i.e. android, ios, web
     */
    platform?: string | null;
  }

  /**
   * Information about the device the token is associated with.
   */
  export interface Tracking {
    /**
     * The IP address of the device
     */
    ip?: string | null;

    /**
     * The latitude of the device
     */
    lat?: string | null;

    /**
     * The longitude of the device
     */
    long?: string | null;

    /**
     * The operating system version
     */
    os_version?: string | null;
  }
}

export declare namespace Tokens {
  export {
    type UserToken as UserToken,
    type TokenRetrieveResponse as TokenRetrieveResponse,
    type TokenListResponse as TokenListResponse,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenDeleteParams as TokenDeleteParams,
    type TokenAddSingleParams as TokenAddSingleParams,
  };
}
