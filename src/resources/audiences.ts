// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Define filter-based groups whose membership Courier recalculates as user profiles change.
 */
export class Audiences extends APIResource {
  /**
   * Returns one audience with its name, description, and the filter and AND or OR
   * operator that decide which users belong to it.
   */
  retrieve(audienceID: string, options?: RequestOptions): APIPromise<Audience> {
    return this._client.get(path`/audiences/${audienceID}`, options);
  }

  /**
   * Creates or replaces an audience from a filter and an AND or OR operator.
   * Membership recalculates automatically as profiles change.
   */
  update(
    audienceID: string,
    body: AudienceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AudienceUpdateResponse> {
    return this._client.put(path`/audiences/${audienceID}`, { body, ...options });
  }

  /**
   * Returns the audiences in the workspace with paging. Audiences are filter-based
   * groups that recalculate as user profiles change.
   */
  list(
    query: AudienceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudienceListResponse> {
    return this._client.get('/audiences', { query, ...options });
  }

  /**
   * Deletes an audience permanently, so update any caller sending to it by audience
   * id first. Those sends fail once the audience is gone.
   */
  delete(audienceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/audiences/${audienceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the users currently matching an audience filter, with paging. Membership
   * is recalculated, so results shift as profiles change.
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
   * Filter configuration for audience membership containing an array of filter rules
   */
  filter?: Shared.AudienceFilterConfig | null;

  /**
   * The logical operator (AND/OR) combining the top-level `filter.filters`.
   * Convenience alias for `filter.operator`.
   */
  operator?: 'AND' | 'OR';
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
   * Filter configuration for audience membership containing an array of filter rules
   */
  filter?: Shared.AudienceFilterConfig | null;

  /**
   * The name of the audience
   */
  name?: string | null;

  /**
   * The logical operator (AND/OR) combining the top-level `filter.filters`.
   * Convenience alias for `filter.operator`: if set, it is applied to the top-level
   * filter group. Prefer setting `operator` directly inside `filter`.
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
    type AudienceUpdateResponse as AudienceUpdateResponse,
    type AudienceListResponse as AudienceListResponse,
    type AudienceListMembersResponse as AudienceListMembersResponse,
    type AudienceUpdateParams as AudienceUpdateParams,
    type AudienceListParams as AudienceListParams,
    type AudienceListMembersParams as AudienceListMembersParams,
  };
}
