// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ProvidersAPI from './providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Catalog extends APIResource {
  /**
   * Returns the catalog of available provider types with their display names,
   * descriptions, and configuration schema fields (snake_case, with `type` and
   * `required`). Providers with no configurable schema return only `provider`,
   * `name`, and `description`.
   */
  list(
    query: CatalogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CatalogListResponse> {
    return this._client.get('/providers/catalog', { query, ...options });
  }
}

/**
 * Paginated list of available provider types with their configuration schemas.
 */
export interface CatalogListResponse {
  paging: Shared.Paging;

  results: Array<ProvidersAPI.ProvidersCatalogEntry>;
}

export interface CatalogListParams {
  /**
   * Exact match (case-insensitive) against the provider channel taxonomy (e.g.
   * `email`, `sms`, `push`).
   */
  channel?: string;

  /**
   * Comma-separated provider keys to filter by (e.g. `sendgrid,twilio`).
   */
  keys?: string;

  /**
   * Case-insensitive substring match against the provider display name.
   */
  name?: string;
}

export declare namespace Catalog {
  export { type CatalogListResponse as CatalogListResponse, type CatalogListParams as CatalogListParams };
}
