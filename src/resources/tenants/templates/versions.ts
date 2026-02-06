// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TenantsAPI from '../tenants';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * Fetches a specific version of a tenant template.
   *
   * Supports the following version formats:
   *
   * - `latest` - The most recent version of the template
   * - `published` - The currently published version
   * - `v{version}` - A specific version (e.g., "v1", "v2", "v1.0.0")
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
