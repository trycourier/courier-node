// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as TemplatesAPI from './templates';
import { TemplateListParams, TemplateListResponse, TemplateRetrieveParams, Templates } from './templates';
import * as TenantDefaultPreferencesAPI from './tenant-default-preferences/tenant-default-preferences';
import { TenantDefaultPreferences } from './tenant-default-preferences/tenant-default-preferences';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tenants extends APIResource {
  tenantDefaultPreferences: TenantDefaultPreferencesAPI.TenantDefaultPreferences =
    new TenantDefaultPreferencesAPI.TenantDefaultPreferences(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);

  /**
   * Get a Tenant
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.retrieve('tenant_id');
   * ```
   */
  retrieve(tenantID: string, options?: RequestOptions): APIPromise<Shared.Tenant> {
    return this._client.get(path`/tenants/${tenantID}`, options);
  }

  /**
   * Create or Replace a Tenant
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.update('tenant_id', {
   *   name: 'name',
   * });
   * ```
   */
  update(tenantID: string, body: TenantUpdateParams, options?: RequestOptions): APIPromise<Shared.Tenant> {
    return this._client.put(path`/tenants/${tenantID}`, { body, ...options });
  }

  /**
   * Get a List of Tenants
   *
   * @example
   * ```ts
   * const tenants = await client.tenants.list();
   * ```
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResponse> {
    return this._client.get('/tenants', { query, ...options });
  }

  /**
   * Delete a Tenant
   *
   * @example
   * ```ts
   * await client.tenants.delete('tenant_id');
   * ```
   */
  delete(tenantID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/tenants/${tenantID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Users in Tenant
   *
   * @example
   * ```ts
   * const response = await client.tenants.listUsers(
   *   'tenant_id',
   * );
   * ```
   */
  listUsers(
    tenantID: string,
    query: TenantListUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListUsersResponse> {
    return this._client.get(path`/tenants/${tenantID}/users`, { query, ...options });
  }
}

export interface TenantListResponse {
  /**
   * Set to true when there are more pages that can be retrieved.
   */
  has_more: boolean;

  /**
   * An array of Tenants
   */
  items: Array<Shared.Tenant>;

  /**
   * Always set to "list". Represents the type of this object.
   */
  type: 'list';

  /**
   * A url that may be used to generate these results.
   */
  url: string;

  /**
   * A pointer to the next page of results. Defined only when has_more is set to
   * true.
   */
  cursor?: string | null;

  /**
   * A url that may be used to generate fetch the next set of results. Defined only
   * when has_more is set to true
   */
  next_url?: string | null;
}

export interface TenantListUsersResponse {
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

  items?: Array<Shared.TenantAssociation> | null;

  /**
   * A url that may be used to generate fetch the next set of results. Defined only
   * when `has_more` is set to true
   */
  next_url?: string | null;
}

export interface TenantUpdateParams {
  /**
   * Name of the tenant.
   */
  name: string;

  /**
   * Brand to be used for the account when one is not specified by the send call.
   */
  brand_id?: string | null;

  /**
   * Defines the preferences used for the tenant when the user hasn't specified their
   * own.
   */
  default_preferences?: Shared.DefaultPreferences | null;

  /**
   * Tenant's parent id (if any).
   */
  parent_tenant_id?: string | null;

  /**
   * Arbitrary properties accessible to a template.
   */
  properties?: { [key: string]: unknown } | null;

  /**
   * A user profile object merged with user profile on send.
   */
  user_profile?: { [key: string]: unknown } | null;
}

export interface TenantListParams {
  /**
   * Continue the pagination with the next cursor
   */
  cursor?: string | null;

  /**
   * The number of tenants to return (defaults to 20, maximum value of 100)
   */
  limit?: number | null;

  /**
   * Filter the list of tenants by parent_id
   */
  parent_tenant_id?: string | null;
}

export interface TenantListUsersParams {
  /**
   * Continue the pagination with the next cursor
   */
  cursor?: string | null;

  /**
   * The number of accounts to return (defaults to 20, maximum value of 100)
   */
  limit?: number | null;
}

Tenants.TenantDefaultPreferences = TenantDefaultPreferences;
Tenants.Templates = Templates;

export declare namespace Tenants {
  export {
    type TenantListResponse as TenantListResponse,
    type TenantListUsersResponse as TenantListUsersResponse,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
    type TenantListUsersParams as TenantListUsersParams,
  };

  export { TenantDefaultPreferences as TenantDefaultPreferences };

  export {
    Templates as Templates,
    type TemplateListResponse as TemplateListResponse,
    type TemplateRetrieveParams as TemplateRetrieveParams,
    type TemplateListParams as TemplateListParams,
  };
}
