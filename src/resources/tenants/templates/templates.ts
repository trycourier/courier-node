// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as TenantsAPI from '../tenants';
import * as VersionsAPI from './versions';
import { VersionRetrieveParams, Versions } from './versions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Templates extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Get a Template in Tenant
   *
   * @example
   * ```ts
   * const baseTemplateTenantAssociation =
   *   await client.tenants.templates.retrieve('template_id', {
   *     tenant_id: 'tenant_id',
   *   });
   * ```
   */
  retrieve(
    templateID: string,
    params: TemplateRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TenantsAPI.BaseTemplateTenantAssociation> {
    const { tenant_id } = params;
    return this._client.get(path`/tenants/${tenant_id}/templates/${templateID}`, options);
  }

  /**
   * List Templates in Tenant
   *
   * @example
   * ```ts
   * const templates = await client.tenants.templates.list(
   *   'tenant_id',
   * );
   * ```
   */
  list(
    tenantID: string,
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get(path`/tenants/${tenantID}/templates`, { query, ...options });
  }

  /**
   * Publishes a specific version of a notification template for a tenant.
   *
   * The template must already exist in the tenant's notification map. If no version
   * is specified, defaults to publishing the "latest" version.
   *
   * @example
   * ```ts
   * const postTenantTemplatePublishResponse =
   *   await client.tenants.templates.publish('template_id', {
   *     tenant_id: 'tenant_id',
   *   });
   * ```
   */
  publish(
    templateID: string,
    params: TemplatePublishParams,
    options?: RequestOptions,
  ): APIPromise<TenantsAPI.PostTenantTemplatePublishResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/tenants/${tenant_id}/templates/${templateID}/publish`, {
      body,
      ...options,
    });
  }

  /**
   * Creates or updates a notification template for a tenant.
   *
   * If the template already exists for the tenant, it will be updated (200).
   * Otherwise, a new template is created (201).
   *
   * Optionally publishes the template immediately if the `published` flag is set to
   * true.
   *
   * @example
   * ```ts
   * const putTenantTemplateResponse =
   *   await client.tenants.templates.replace('template_id', {
   *     tenant_id: 'tenant_id',
   *     template: {
   *       content: { elements: [{}], version: 'version' },
   *     },
   *   });
   * ```
   */
  replace(
    templateID: string,
    params: TemplateReplaceParams,
    options?: RequestOptions,
  ): APIPromise<TenantsAPI.PutTenantTemplateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.put(path`/tenants/${tenant_id}/templates/${templateID}`, { body, ...options });
  }
}

export interface TemplateListResponse {
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

  items?: Array<TemplateListResponse.Item> | null;

  /**
   * A url that may be used to generate fetch the next set of results. Defined only
   * when `has_more` is set to true
   */
  next_url?: string | null;
}

export namespace TemplateListResponse {
  export interface Item extends TenantsAPI.BaseTemplateTenantAssociation {
    /**
     * The template's data containing it's routing configs
     */
    data: Item.Data;
  }

  export namespace Item {
    /**
     * The template's data containing it's routing configs
     */
    export interface Data {
      routing: Shared.MessageRouting;
    }
  }
}

export interface TemplateRetrieveParams {
  /**
   * Id of the tenant for which to retrieve the template.
   */
  tenant_id: string;
}

export interface TemplateListParams {
  /**
   * Continue the pagination with the next cursor
   */
  cursor?: string | null;

  /**
   * The number of templates to return (defaults to 20, maximum value of 100)
   */
  limit?: number | null;
}

export interface TemplatePublishParams {
  /**
   * Path param: Id of the tenant that owns the template.
   */
  tenant_id: string;

  /**
   * Body param: The version of the template to publish (e.g., "v1", "v2", "latest").
   * If not provided, defaults to "latest".
   */
  version?: string;
}

export interface TemplateReplaceParams {
  /**
   * Path param: Id of the tenant for which to create or update the template.
   */
  tenant_id: string;

  /**
   * Body param: Template configuration for creating or updating a tenant
   * notification template
   */
  template: TenantsAPI.TenantTemplateInput;

  /**
   * Body param: Whether to publish the template immediately after saving. When true,
   * the template becomes the active/published version. When false (default), the
   * template is saved as a draft.
   */
  published?: boolean;
}

Templates.Versions = Versions;

export declare namespace Templates {
  export {
    type TemplateListResponse as TemplateListResponse,
    type TemplateRetrieveParams as TemplateRetrieveParams,
    type TemplateListParams as TemplateListParams,
    type TemplatePublishParams as TemplatePublishParams,
    type TemplateReplaceParams as TemplateReplaceParams,
  };

  export { Versions as Versions, type VersionRetrieveParams as VersionRetrieveParams };
}
