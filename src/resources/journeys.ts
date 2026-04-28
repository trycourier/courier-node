// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Journeys extends APIResource {
  /**
   * Get the list of journeys.
   *
   * @example
   * ```ts
   * const journeysListResponse = await client.journeys.list();
   * ```
   */
  list(
    query: JourneyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JourneysListResponse> {
    return this._client.get('/journeys', { query, ...options });
  }

  /**
   * Invoke a journey run from a journey template.
   *
   * @example
   * ```ts
   * const journeysInvokeResponse = await client.journeys.invoke(
   *   'templateId',
   *   {
   *     data: { order_id: 'order-456', amount: 99.99 },
   *     user_id: 'user-123',
   *   },
   * );
   * ```
   */
  invoke(
    templateID: string,
    body: JourneyInvokeParams,
    options?: RequestOptions,
  ): APIPromise<JourneysInvokeResponse> {
    return this._client.post(path`/journeys/${templateID}/invoke`, { body, ...options });
  }
}

/**
 * A journey template representing an automation workflow.
 */
export interface Journey {
  /**
   * The unique identifier of the journey.
   */
  id: string;

  /**
   * The name of the journey.
   */
  name: string;

  /**
   * The version of the journey (published or draft).
   */
  version: 'published' | 'draft';

  /**
   * ISO 8601 timestamp when the journey was created.
   */
  createdAt?: string;

  /**
   * ISO 8601 timestamp when the journey was last updated.
   */
  updatedAt?: string;
}

/**
 * Request body for invoking a journey. Requires either a user identifier or a
 * profile with contact information. User identifiers can be provided via user_id
 * field, or resolved from profile/data objects (user_id, userId, or anonymousId
 * fields).
 */
export interface JourneysInvokeRequest {
  /**
   * Data payload passed to the journey. The expected shape can be predefined using
   * the schema builder in the journey editor. This data is available in journey
   * steps for condition evaluation and template variable interpolation. Can also
   * contain user identifiers (user_id, userId, anonymousId) if not provided
   * elsewhere.
   */
  data?: { [key: string]: unknown };

  /**
   * Profile data for the user. Can contain contact information (email,
   * phone_number), user identifiers (user_id, userId, anonymousId), or any custom
   * profile fields. Profile fields are merged with any existing stored profile for
   * the user. Include context.tenant_id to load a tenant-scoped profile for
   * multi-tenant scenarios.
   */
  profile?: { [key: string]: unknown };

  /**
   * A unique identifier for the user. If not provided, the system will attempt to
   * resolve the user identifier from profile or data objects.
   */
  user_id?: string;
}

export interface JourneysInvokeResponse {
  /**
   * A unique identifier for the journey run that was created.
   */
  runId: string;
}

export interface JourneysListResponse {
  /**
   * A cursor token for pagination. Present when there are more results available.
   */
  cursor?: string;

  templates?: Array<Journey>;
}

export interface JourneyListParams {
  /**
   * A cursor token for pagination. Use the cursor from the previous response to
   * fetch the next page of results.
   */
  cursor?: string;

  /**
   * The version of journeys to retrieve. Accepted values are published (for
   * published journeys) or draft (for draft journeys). Defaults to published.
   */
  version?: 'published' | 'draft';
}

export interface JourneyInvokeParams {
  /**
   * Data payload passed to the journey. The expected shape can be predefined using
   * the schema builder in the journey editor. This data is available in journey
   * steps for condition evaluation and template variable interpolation. Can also
   * contain user identifiers (user_id, userId, anonymousId) if not provided
   * elsewhere.
   */
  data?: { [key: string]: unknown };

  /**
   * Profile data for the user. Can contain contact information (email,
   * phone_number), user identifiers (user_id, userId, anonymousId), or any custom
   * profile fields. Profile fields are merged with any existing stored profile for
   * the user. Include context.tenant_id to load a tenant-scoped profile for
   * multi-tenant scenarios.
   */
  profile?: { [key: string]: unknown };

  /**
   * A unique identifier for the user. If not provided, the system will attempt to
   * resolve the user identifier from profile or data objects.
   */
  user_id?: string;
}

export declare namespace Journeys {
  export {
    type Journey as Journey,
    type JourneysInvokeRequest as JourneysInvokeRequest,
    type JourneysInvokeResponse as JourneysInvokeResponse,
    type JourneysListResponse as JourneysListResponse,
    type JourneyListParams as JourneyListParams,
    type JourneyInvokeParams as JourneyInvokeParams,
  };
}
