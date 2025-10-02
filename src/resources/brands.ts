// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AudiencesAPI from './audiences';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Brands extends APIResource {
  /**
   * Create a new brand
   */
  create(body: BrandCreateParams, options?: RequestOptions): APIPromise<Brand> {
    return this._client.post('/brands', { body, ...options });
  }

  /**
   * Fetch a specific brand by brand ID.
   */
  retrieve(brandID: string, options?: RequestOptions): APIPromise<Brand> {
    return this._client.get(path`/brands/${brandID}`, options);
  }

  /**
   * Replace an existing brand with the supplied values.
   */
  update(brandID: string, body: BrandUpdateParams, options?: RequestOptions): APIPromise<Brand> {
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

export interface Brand {
  /**
   * The date/time of when the brand was created. Represented in milliseconds since
   * Unix epoch.
   */
  created: number;

  /**
   * Brand name
   */
  name: string;

  /**
   * The date/time of when the brand was published. Represented in milliseconds since
   * Unix epoch.
   */
  published: number;

  settings: BrandSettings;

  /**
   * The date/time of when the brand was updated. Represented in milliseconds since
   * Unix epoch.
   */
  updated: number;

  /**
   * The version identifier for the brand
   */
  version: string;

  /**
   * Brand Identifier
   */
  id?: string | null;

  snippets?: BrandSnippets | null;
}

export interface BrandColors {
  primary?: string | null;

  secondary?: string | null;

  tertiary?: string | null;
}

export interface BrandSettings {
  colors?: BrandColors | null;

  email?: Email | null;

  inapp?: unknown;
}

export interface BrandSnippet {
  format: 'handlebars';

  name: string;

  value: string;
}

export interface BrandSnippets {
  items: Array<BrandSnippet>;
}

export interface Email {
  footer: unknown;

  header: unknown;
}

export interface BrandListResponse {
  paging: AudiencesAPI.Paging;

  results: Array<Brand>;
}

export interface BrandCreateParams {
  /**
   * The name of the brand.
   */
  name: string;

  settings: BrandSettings;

  id?: string | null;

  snippets?: BrandSnippets | null;
}

export interface BrandUpdateParams {
  /**
   * The name of the brand.
   */
  name: string;

  settings?: BrandSettings | null;

  snippets?: BrandSnippets | null;
}

export interface BrandListParams {
  /**
   * A unique identifier that allows for fetching the next set of brands.
   */
  cursor?: string | null;
}

export declare namespace Brands {
  export {
    type Brand as Brand,
    type BrandColors as BrandColors,
    type BrandSettings as BrandSettings,
    type BrandSnippet as BrandSnippet,
    type BrandSnippets as BrandSnippets,
    type Email as Email,
    type BrandListResponse as BrandListResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
  };
}
