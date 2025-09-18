// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Translations extends APIResource {
  /**
   * Get translations by locale
   */
  retrieve(locale: string, params: TranslationRetrieveParams, options?: RequestOptions): APIPromise<string> {
    const { domain } = params;
    return this._client.get(path`/translations/${domain}/${locale}`, options);
  }

  /**
   * Update a translation
   */
  update(locale: string, params: TranslationUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { domain, body } = params;
    return this._client.put(path`/translations/${domain}/${locale}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type TranslationRetrieveResponse = string;

export interface TranslationRetrieveParams {
  /**
   * The domain you want to retrieve translations for. Only `default` is supported at
   * the moment
   */
  domain: string;
}

export interface TranslationUpdateParams {
  /**
   * Path param: The domain you want to retrieve translations for. Only `default` is
   * supported at the moment
   */
  domain: string;

  /**
   * Body param:
   */
  body: string;
}

export declare namespace Translations {
  export {
    type TranslationRetrieveResponse as TranslationRetrieveResponse,
    type TranslationRetrieveParams as TranslationRetrieveParams,
    type TranslationUpdateParams as TranslationUpdateParams,
  };
}
