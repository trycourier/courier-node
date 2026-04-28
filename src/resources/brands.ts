// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BrandsAPI from './brands';
import * as Shared from './shared';
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
  id: string;

  created: number;

  name: string;

  updated: number;

  published?: number | null;

  settings?: BrandSettings | null;

  snippets?: BrandSnippets | null;

  version?: string | null;
}

export interface BrandColors {
  primary?: string;

  secondary?: string;

  [k: string]: string | undefined;
}

export interface BrandSettings {
  colors?: BrandColors | null;

  email?: BrandSettingsEmail | null;

  inapp?: BrandSettingsInApp | null;
}

export interface BrandSettingsEmail {
  footer?: EmailFooter | null;

  head?: EmailHead | null;

  header?: EmailHeader | null;

  templateOverride?: BrandSettingsEmail.TemplateOverride | null;
}

export namespace BrandSettingsEmail {
  export interface TemplateOverride extends BrandsAPI.BrandTemplate {
    mjml: BrandsAPI.BrandTemplate;

    footerBackgroundColor?: string | null;

    footerFullWidth?: boolean | null;
  }
}

export interface BrandSettingsInApp {
  colors: BrandColors;

  icons: Icons;

  widgetBackground: WidgetBackground;

  borderRadius?: string | null;

  disableMessageIcon?: boolean | null;

  fontFamily?: string | null;

  placement?: 'top' | 'bottom' | 'left' | 'right' | null;
}

export interface BrandSnippet {
  name: string;

  value: string;
}

export interface BrandSnippets {
  items?: Array<BrandSnippet> | null;
}

export interface BrandTemplate {
  enabled: boolean;

  backgroundColor?: string | null;

  blocksBackgroundColor?: string | null;

  footer?: string | null;

  head?: string | null;

  header?: string | null;

  width?: string | null;
}

export interface EmailFooter {
  content?: string | null;

  inheritDefault?: boolean | null;
}

export interface EmailHead {
  inheritDefault: boolean;

  content?: string | null;
}

export interface EmailHeader {
  logo: Logo;

  barColor?: string | null;

  inheritDefault?: boolean | null;
}

export interface Icons {
  bell?: string | null;

  message?: string | null;
}

export interface Logo {
  href?: string | null;

  image?: string | null;
}

export interface WidgetBackground {
  bottomColor?: string | null;

  topColor?: string | null;
}

export interface BrandListResponse {
  paging: Shared.Paging;

  results: Array<Brand>;
}

export interface BrandCreateParams {
  name: string;

  id?: string | null;

  settings?: BrandSettings | null;

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
    type BrandSettingsEmail as BrandSettingsEmail,
    type BrandSettingsInApp as BrandSettingsInApp,
    type BrandSnippet as BrandSnippet,
    type BrandSnippets as BrandSnippets,
    type BrandTemplate as BrandTemplate,
    type EmailFooter as EmailFooter,
    type EmailHead as EmailHead,
    type EmailHeader as EmailHeader,
    type Icons as Icons,
    type Logo as Logo,
    type WidgetBackground as WidgetBackground,
    type BrandListResponse as BrandListResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
  };
}
