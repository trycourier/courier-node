// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CatalogAPI from './catalog';
import { Catalog, CatalogListParams, CatalogListResponse } from './catalog';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Providers extends APIResource {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);

  /**
   * Create a new provider configuration. The `provider` field must be a known
   * Courier provider key (see catalog).
   */
  create(body: ProviderCreateParams, options?: RequestOptions): APIPromise<Provider> {
    return this._client.post('/providers', { body, ...options });
  }

  /**
   * Fetch a single provider configuration by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Provider> {
    return this._client.get(path`/providers/${id}`, options);
  }

  /**
   * Update an existing provider configuration. The `provider` key is required. All
   * other fields are optional — omitted fields are cleared from the stored
   * configuration (this is a full replacement, not a partial merge).
   */
  update(id: string, body: ProviderUpdateParams, options?: RequestOptions): APIPromise<Provider> {
    return this._client.post(path`/providers/${id}`, { body, ...options });
  }

  /**
   * List configured provider integrations for the current workspace. Supports
   * cursor-based pagination.
   */
  list(
    query: ProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProviderListResponse> {
    return this._client.get('/providers', { query, ...options });
  }

  /**
   * Delete a provider configuration. Returns 409 if the provider is still referenced
   * by routing or notifications.
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
   * The provider key identifying the type (e.g. "sendgrid", "twilio"). Must be a
   * known Courier provider — see the catalog endpoint for valid keys.
   */
  provider: string;

  /**
   * Optional alias for this configuration.
   */
  alias?: string;

  /**
   * Provider-specific settings (snake_case keys). Defaults to an empty object when
   * omitted. Use the catalog endpoint to discover required fields for a given
   * provider — omitting a required field returns a 400 validation error.
   */
  settings?: { [key: string]: unknown };

  /**
   * Optional display title. Omit to use "Default Configuration".
   */
  title?: string;
}

export interface ProviderUpdateParams {
  /**
   * The provider key identifying the type.
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
