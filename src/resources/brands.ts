// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BrandsAPI from './brands';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage the logos, colors, and layout that give the templates you send a consistent look.
 */
export class Brands extends APIResource {
  /**
   * Creates a brand from a name and settings, including primary and secondary
   * colors. Brands supply the logo, colors, and styling that templates render with.
   *
   * @example
   * ```ts
   * const brand = await client.brands.create({
   *   name: 'My Brand',
   *   settings: {
   *     colors: { primary: '#9D3789', secondary: '#FFFFFF' },
   *   },
   * });
   * ```
   */
  create(params: BrandCreateParams, options?: RequestOptions): APIPromise<Brand> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post('/brands', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(xIdempotencyExpiration != null ?
            { 'x-idempotency-expiration': xIdempotencyExpiration }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns one brand by id, including its colors, logo and styling settings,
   * Handlebars snippets, and published version.
   *
   * @example
   * ```ts
   * const brand = await client.brands.retrieve('brand_id');
   * ```
   */
  retrieve(brandID: string, options?: RequestOptions): APIPromise<Brand> {
    return this._client.get(path`/brands/${brandID}`, options);
  }

  /**
   * Replaces a brand with the values you supply, so send the complete settings and
   * snippets rather than only the fields you want changed.
   *
   * @example
   * ```ts
   * const brand = await client.brands.update('brand_id', {
   *   name: 'name',
   * });
   * ```
   */
  update(brandID: string, body: BrandUpdateParams, options?: RequestOptions): APIPromise<Brand> {
    return this._client.put(path`/brands/${brandID}`, { body, ...options });
  }

  /**
   * Lists the workspace's brands. Every entry carries its name, styling settings,
   * snippets, and published version.
   *
   * @example
   * ```ts
   * const brands = await client.brands.list();
   * ```
   */
  list(
    query: BrandListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandListResponse> {
    return this._client.get('/brands', { query, ...options });
  }

  /**
   * Deletes a brand by id. Reassign any template or tenant that references it before
   * deleting to keep their styling intact.
   *
   * @example
   * ```ts
   * await client.brands.delete('brand_id');
   * ```
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
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  settings: BrandSettings;

  /**
   * Body param
   */
  id?: string | null;

  /**
   * Body param
   */
  snippets?: BrandSnippets | null;

  /**
   * Header param: A unique key that makes this request idempotent. If Courier
   * receives another request with the same `Idempotency-Key`, it returns the stored
   * response from the first request without performing the operation again
   * (including the original status code and any error). Use it to safely retry
   * `POST` requests after network failures without risking duplicate sends. The key
   * is scoped to this endpoint.
   */
  'Idempotency-Key'?: string;

  /**
   * Header param: How long the idempotency key remains valid, as a Unix epoch
   * timestamp in seconds or an ISO 8601 date string. Only applies when
   * `Idempotency-Key` is provided. If omitted, the key is retained for 25 hours; the
   * maximum is 1 year.
   */
  'x-idempotency-expiration'?: string;
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
