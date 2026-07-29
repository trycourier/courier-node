// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TenantsAPI from '../tenants';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage the templates and template versions scoped to a single tenant, including the ones authored in the embedded designer.
 */
export class Versions extends APIResource {
  /**
   * Returns one version of a tenant template, addressed by version number or by
   * latest, with its content and publish timestamp.
   *
   * @example
   * ```ts
   * const baseTemplateTenantAssociation =
   *   await client.tenants.templates.versions.retrieve(
   *     'version',
   *     { tenant_id: 'tenant_id', template_id: 'template_id' },
   *   );
   * ```
   */
  retrieve(
    version: string,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TenantsAPI.BaseTemplateTenantAssociation> {
    const { tenant_id, template_id } = params;
    return this._client.get(
      path`/tenants/${tenant_id}/templates/${template_id}/versions/${version}`,
      options,
    );
  }
}

export interface VersionRetrieveParams {
  /**
   * Id of the tenant for which to retrieve the template.
   */
  tenant_id: string;

  /**
   * Id of the template to be retrieved.
   */
  template_id: string;
}

export declare namespace Versions {
  export { type VersionRetrieveParams as VersionRetrieveParams };
}
