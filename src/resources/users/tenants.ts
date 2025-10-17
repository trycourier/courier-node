// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TenantsAPI from '../tenants/tenants';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tenants extends APIResource {
  /**
   * Returns a paginated list of user tenant associations.
   *
   * @example
   * ```ts
   * const tenants = await client.users.tenants.list('user_id');
   * ```
   */
  list(
    userID: string,
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResponse> {
    return this._client.get(path`/users/${userID}/tenants`, { query, ...options });
  }

  /**
   * This endpoint is used to add a user to multiple tenants in one call. A custom
   * profile can also be supplied for each tenant. This profile will be merged with
   * the user's main profile when sending to the user with that tenant.
   *
   * @example
   * ```ts
   * await client.users.tenants.addMultiple('user_id', {
   *   tenants: [{ tenant_id: 'tenant_id' }],
   * });
   * ```
   */
  addMultiple(userID: string, body: TenantAddMultipleParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/users/${userID}/tenants`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint is used to add a single tenant.
   *
   * A custom profile can also be supplied with the tenant. This profile will be
   * merged with the user's main profile when sending to the user with that tenant.
   *
   * @example
   * ```ts
   * await client.users.tenants.addSingle('tenant_id', {
   *   user_id: 'user_id',
   * });
   * ```
   */
  addSingle(tenantID: string, params: TenantAddSingleParams, options?: RequestOptions): APIPromise<void> {
    const { user_id, ...body } = params;
    return this._client.put(path`/users/${user_id}/tenants/${tenantID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Removes a user from any tenants they may have been associated with.
   *
   * @example
   * ```ts
   * await client.users.tenants.removeAll('user_id');
   * ```
   */
  removeAll(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/users/${userID}/tenants`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Removes a user from the supplied tenant.
   *
   * @example
   * ```ts
   * await client.users.tenants.removeSingle('tenant_id', {
   *   user_id: 'user_id',
   * });
   * ```
   */
  removeSingle(
    tenantID: string,
    params: TenantRemoveSingleParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { user_id } = params;
    return this._client.delete(path`/users/${user_id}/tenants/${tenantID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TenantListResponse {
  /**
   * Set to true when there are more pages that can be retrieved.
   */
  has_more: boolean;

  /**
   * Always set to `list`. Represents the type of this object.
   */
  type: 'list';

  /**
   * A url that may be used to generate these results.
   */
  url: string;

  /**
   * A pointer to the next page of results. Defined only when `has_more` is set to
   * true
   */
  cursor?: string | null;

  items?: Array<TenantsAPI.TenantAssociation> | null;

  /**
   * A url that may be used to generate fetch the next set of results. Defined only
   * when `has_more` is set to true
   */
  next_url?: string | null;
}

export interface TenantListParams {
  /**
   * Continue the pagination with the next cursor
   */
  cursor?: string | null;

  /**
   * The number of accounts to return (defaults to 20, maximum value of 100)
   */
  limit?: number | null;
}

export interface TenantAddMultipleParams {
  tenants: Array<TenantsAPI.TenantAssociation>;
}

export interface TenantAddSingleParams {
  /**
   * Path param: Id of the user to be added to the supplied tenant.
   */
  user_id: string;

  /**
   * Body param:
   */
  profile?: { [key: string]: unknown } | null;
}

export interface TenantRemoveSingleParams {
  /**
   * Id of the user to be removed from the supplied tenant.
   */
  user_id: string;
}

export declare namespace Tenants {
  export {
    type TenantListResponse as TenantListResponse,
    type TenantListParams as TenantListParams,
    type TenantAddMultipleParams as TenantAddMultipleParams,
    type TenantAddSingleParams as TenantAddSingleParams,
    type TenantRemoveSingleParams as TenantRemoveSingleParams,
  };
}
