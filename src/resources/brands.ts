// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Brands extends APIResource {
  /**
   * Create a new brand
   */
  create(body: BrandCreateParams, options?: RequestOptions): APIPromise<Shared.Brand> {
    return this._client.post('/brands', { body, ...options });
  }

  /**
   * Fetch a specific brand by brand ID.
   */
  retrieve(brandID: string, options?: RequestOptions): APIPromise<Shared.Brand> {
    return this._client.get(path`/brands/${brandID}`, options);
  }

  /**
   * Replace an existing brand with the supplied values.
   */
  update(brandID: string, body: BrandUpdateParams, options?: RequestOptions): APIPromise<Shared.Brand> {
    return this._client.put(path`/brands/${brandID}`, { body, ...options });
  }

  /**
   * Get the list of brands.
   */
  list(
    query: BrandListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandListResponse> {
    return this._client.get('/brands', { query, ...options });
  }

  /**
   * Delete a brand by brand ID.
   */
  delete(brandID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/brands/${brandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BrandListResponse {
  paging: Shared.Paging;

  results: Array<Shared.Brand>;
}

export interface BrandCreateParams {
  name: string;

  id?: string | null;

  settings?: Shared.BrandSettings | null;

  snippets?: Shared.BrandSnippets | null;
}

export interface BrandUpdateParams {
  /**
   * The name of the brand.
   */
  name: string;

  settings?: Shared.BrandSettings | null;

  snippets?: Shared.BrandSnippets | null;
}

export interface BrandListParams {
  /**
   * A unique identifier that allows for fetching the next set of brands.
   */
  cursor?: string | null;
}

export declare namespace Brands {
  export {
    type BrandListResponse as BrandListResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
  };
}
