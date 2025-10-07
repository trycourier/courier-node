// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BrandsAPI from './brands';
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
  id: string;

  created: number;

  name: string;

  updated: number;

  published?: number | null;

  settings?: BrandSettings | null;

  snippets?: BrandSnippets | null;

  version?: string | null;
}

export interface BrandSettings {
  colors?: BrandSettings.Colors | null;

  email?: BrandSettings.Email | null;

  inapp?: BrandSettings.Inapp | null;
}

export namespace BrandSettings {
  export interface Colors {
    primary?: string | null;

    secondary?: string | null;

    [k: string]: string | undefined;
  }

  export interface Email {
    footer?: Email.Footer | null;

    head?: Email.Head | null;

    header?: Email.Header | null;

    templateOverride?: Email.TemplateOverride | null;
  }

  export namespace Email {
    export interface Footer {
      content?: string | null;

      inheritDefault?: boolean | null;
    }

    export interface Head {
      inheritDefault: boolean;

      content?: string | null;
    }

    export interface Header {
      logo: Header.Logo;

      barColor?: string | null;

      inheritDefault?: boolean | null;
    }

    export namespace Header {
      export interface Logo {
        href?: string | null;

        image?: string | null;
      }
    }

    export interface TemplateOverride extends BrandsAPI.BrandTemplate {
      mjml: BrandsAPI.BrandTemplate;

      footerBackgroundColor?: string | null;

      footerFullWidth?: boolean | null;
    }
  }

  export interface Inapp {
    colors: Inapp.Colors;

    icons: Inapp.Icons;

    widgetBackground: Inapp.WidgetBackground;

    borderRadius?: string | null;

    disableMessageIcon?: boolean | null;

    fontFamily?: string | null;

    placement?: 'top' | 'bottom' | 'left' | 'right' | null;
  }

  export namespace Inapp {
    export interface Colors {
      primary?: string | null;

      secondary?: string | null;

      [k: string]: string | undefined;
    }

    export interface Icons {
      bell?: string | null;

      message?: string | null;
    }

    export interface WidgetBackground {
      bottomColor?: string | null;

      topColor?: string | null;
    }
  }
}

export interface BrandSnippets {
  items?: Array<BrandSnippets.Item> | null;
}

export namespace BrandSnippets {
  export interface Item {
    name: string;

    value: string;
  }
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

export interface BrandListResponse {
  paging: AudiencesAPI.Paging;

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
    type BrandSettings as BrandSettings,
    type BrandSnippets as BrandSnippets,
    type BrandTemplate as BrandTemplate,
    type BrandListResponse as BrandListResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
  };
}
