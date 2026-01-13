// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
  /**
   * Returns the specified audience by id.
   */
  retrieve(audienceID: string, options?: RequestOptions): APIPromise<Audience> {
    return this._client.get(path`/audiences/${audienceID}`, options);
  }

  /**
   * Creates or updates audience.
   */
  update(
    audienceID: string,
    body: AudienceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AudienceUpdateResponse> {
    return this._client.put(path`/audiences/${audienceID}`, { body, ...options });
  }

  /**
   * Get the audiences associated with the authorization token.
   */
  list(
    query: AudienceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudienceListResponse> {
    return this._client.get('/audiences', { query, ...options });
  }

  /**
   * Deletes the specified audience.
   */
  delete(audienceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/audiences/${audienceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get list of members of an audience.
   */
  listMembers(
    audienceID: string,
    query: AudienceListMembersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudienceListMembersResponse> {
    return this._client.get(path`/audiences/${audienceID}/members`, { query, ...options });
  }
}

export interface Audience {
  /**
   * A unique identifier representing the audience_id
   */
  id: string;

  created_at: string;

  /**
   * A description of the audience
   */
  description: string;

  /**
   * The name of the audience
   */
  name: string;

  updated_at: string;

  /**
   * Filter that contains an array of FilterConfig items
   */
  filter?: Filter | null;

  /**
   * The logical operator (AND/OR) for the top-level filter
   */
  operator?: 'AND' | 'OR';
}

/**
 * Filter that contains an array of FilterConfig items
 */
export interface Filter {
  filters: Array<FilterConfig>;
}

/**
 * A single filter to use for filtering
 */
export type FilterConfig = SingleFilterConfig | NestedFilterConfig;

export interface NestedFilterConfig {
  filters: Array<FilterConfig>;

  /**
   * The operator to use for filtering
   */
  operator:
    | 'ENDS_WITH'
    | 'EQ'
    | 'EXISTS'
    | 'GT'
    | 'GTE'
    | 'INCLUDES'
    | 'IS_AFTER'
    | 'IS_BEFORE'
    | 'LT'
    | 'LTE'
    | 'NEQ'
    | 'OMIT'
    | 'STARTS_WITH'
    | 'AND'
    | 'OR';
}

export interface SingleFilterConfig {
  /**
   * The operator to use for filtering
   */
  operator:
    | 'ENDS_WITH'
    | 'EQ'
    | 'EXISTS'
    | 'GT'
    | 'GTE'
    | 'INCLUDES'
    | 'IS_AFTER'
    | 'IS_BEFORE'
    | 'LT'
    | 'LTE'
    | 'NEQ'
    | 'OMIT'
    | 'STARTS_WITH'
    | 'AND'
    | 'OR';

  /**
   * The attribute name from profile whose value will be operated against the filter
   * value
   */
  path: string;

  /**
   * The value to use for filtering
   */
  value: string;
}

export interface AudienceUpdateResponse {
  audience: Audience;
}

export interface AudienceListResponse {
  items: Array<Audience>;

  paging: Shared.Paging;
}

export interface AudienceListMembersResponse {
  items: Array<AudienceListMembersResponse.Item>;

  paging: Shared.Paging;
}

export namespace AudienceListMembersResponse {
  export interface Item {
    added_at: string;

    audience_id: string;

    audience_version: number;

    member_id: string;

    reason: string;
  }
}

export interface AudienceUpdateParams {
  /**
   * A description of the audience
   */
  description?: string | null;

  /**
   * Filter that contains an array of FilterConfig items
   */
  filter?: Filter | null;

  /**
   * The name of the audience
   */
  name?: string | null;

  /**
   * The logical operator (AND/OR) for the top-level filter
   */
  operator?: 'AND' | 'OR' | null;
}

export interface AudienceListParams {
  /**
   * A unique identifier that allows for fetching the next set of audiences
   */
  cursor?: string | null;
}

export interface AudienceListMembersParams {
  /**
   * A unique identifier that allows for fetching the next set of members
   */
  cursor?: string | null;
}

export declare namespace Audiences {
  export {
    type Audience as Audience,
    type Filter as Filter,
    type FilterConfig as FilterConfig,
    type NestedFilterConfig as NestedFilterConfig,
    type SingleFilterConfig as SingleFilterConfig,
    type AudienceUpdateResponse as AudienceUpdateResponse,
    type AudienceListResponse as AudienceListResponse,
    type AudienceListMembersResponse as AudienceListMembersResponse,
    type AudienceUpdateParams as AudienceUpdateParams,
    type AudienceListParams as AudienceListParams,
    type AudienceListMembersParams as AudienceListMembersParams,
  };
}
