// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CatalogAPI from './catalog';
import { Catalog, CatalogListParams, CatalogListResponse } from './catalog';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Configure the channel providers Courier delivers through, and browse the provider types it supports.
 */
export class Providers extends APIResource {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);

  /**
   * Configures a provider integration from a Courier provider key and its settings.
   * Check the catalog endpoint for the schema each provider expects.
   *
   * @example
   * ```ts
   * const provider = await client.providers.create({
   *   provider: 'sendgrid',
   *   settings: { api_key: 'SG.xxxxxxxx' },
   *   title: 'Production SendGrid',
   * });
   * ```
   */
  create(params: ProviderCreateParams, options?: RequestOptions): APIPromise<Provider> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post('/providers', {
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
   * Returns one configured provider by id, including its channel, provider key,
   * alias, title, and current settings.
   *
   * @example
   * ```ts
   * const provider = await client.providers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Provider> {
    return this._client.get(path`/providers/${id}`, options);
  }

  /**
   * Replaces a provider's configuration in full, clearing any field you omit rather
   * than merging it. Send the complete settings object.
   *
   * @example
   * ```ts
   * const provider = await client.providers.update('id', {
   *   provider: 'sendgrid',
   *   settings: { api_key: 'SG.xxxxxxxx' },
   *   title: 'Production SendGrid',
   * });
   * ```
   */
  update(id: string, body: ProviderUpdateParams, options?: RequestOptions): APIPromise<Provider> {
    return this._client.put(path`/providers/${id}`, { body, ...options });
  }

  /**
   * Lists the provider integrations configured in the workspace, one entry per
   * channel and provider key with its alias and settings.
   *
   * @example
   * ```ts
   * const providers = await client.providers.list();
   * ```
   */
  list(
    query: ProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProviderListResponse> {
    return this._client.get('/providers', { query, ...options });
  }

  /**
   * Deletes a provider configuration, which fails while routing strategies or
   * templates still reference it. Update those references first.
   *
   * @example
   * ```ts
   * await client.providers.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/providers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A configured provider in the workspace.
 */
export interface Provider {
  /**
   * A unique identifier for the provider configuration.
   */
  id: string;

  /**
   * Unix timestamp (ms) of when the provider was created.
   */
  created: number;

  /**
   * The provider key (e.g. "sendgrid", "twilio", "slack").
   */
  provider: string;

  /**
   * Provider-specific settings (snake_case keys on the wire).
   */
  settings: { [key: string]: unknown };

  /**
   * Display title. Defaults to "Default Configuration" when not explicitly set.
   */
  title: string;

  /**
   * Optional alias for this configuration.
   */
  alias?: string;

  /**
   * Unix timestamp (ms) of when the provider was last updated.
   */
  updated?: number | null;
}

/**
 * A provider type from the catalog. Contains the key, display name, description,
 * and a `settings` object describing configuration schema fields.
 */
export interface ProvidersCatalogEntry {
  /**
   * Courier taxonomy channel (e.g. email, push, sms, direct_message, inbox,
   * webhook).
   */
  channel: string;

  /**
   * Short description of the provider.
   */
  description: string;

  /**
   * Human-readable display name.
   */
  name: string;

  /**
   * The provider key (e.g. "sendgrid", "twilio").
   */
  provider: string;

  /**
   * Map of setting field names (snake_case) to their schema descriptors. Each
   * descriptor has `type` and `required`. Empty when the provider has no
   * configurable schema.
   */
  settings: { [key: string]: ProvidersCatalogEntry.Settings };
}

export namespace ProvidersCatalogEntry {
  /**
   * Describes a single configuration field in the provider catalog.
   */
  export interface Settings {
    /**
     * Whether this field is required when configuring the provider.
     */
    required: boolean;

    /**
     * The field's data type (e.g. "string", "boolean", "enum").
     */
    type: string;

    /**
     * Allowed values when `type` is "enum".
     */
    values?: Array<string>;
  }
}

/**
 * Paginated list of provider configurations.
 */
export interface ProviderListResponse {
  paging: Shared.Paging;

  results: Array<Provider>;
}

export interface ProviderCreateParams {
  /**
   * Body param: The provider key identifying the type (e.g. "sendgrid", "twilio").
   * Must be a known Courier provider — see the catalog endpoint for valid keys.
   */
  provider: string;

  /**
   * Body param: Optional alias for this configuration.
   */
  alias?: string;

  /**
   * Body param: Provider-specific settings (snake_case keys). Defaults to an empty
   * object when omitted. Use the catalog endpoint to discover required fields for a
   * given provider — omitting a required field returns a 400 validation error.
   */
  settings?: { [key: string]: unknown };

  /**
   * Body param: Optional display title. Omit to use "Default Configuration".
   */
  title?: string;

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

export interface ProviderUpdateParams {
  /**
   * The provider key identifying the type. Required on every request because it
   * selects the provider-specific settings schema for validation.
   */
  provider: string;

  /**
   * Updated alias. Omit to clear.
   */
  alias?: string;

  /**
   * Provider-specific settings (snake_case keys). Replaces the full settings object
   * — omitted settings fields are removed. Use the catalog endpoint to check
   * required fields.
   */
  settings?: { [key: string]: unknown };

  /**
   * Updated display title.
   */
  title?: string;
}

export interface ProviderListParams {
  /**
   * Opaque cursor for fetching the next page.
   */
  cursor?: string;
}

Providers.Catalog = Catalog;

export declare namespace Providers {
  export {
    type Provider as Provider,
    type ProvidersCatalogEntry as ProvidersCatalogEntry,
    type ProviderListResponse as ProviderListResponse,
    type ProviderCreateParams as ProviderCreateParams,
    type ProviderUpdateParams as ProviderUpdateParams,
    type ProviderListParams as ProviderListParams,
  };

  export {
    Catalog as Catalog,
    type CatalogListResponse as CatalogListResponse,
    type CatalogListParams as CatalogListParams,
  };
}
