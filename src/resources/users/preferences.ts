// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Preferences extends APIResource {
  /**
   * Fetch all user preferences.
   *
   * @example
   * ```ts
   * const preference = await client.users.preferences.retrieve(
   *   'user_id',
   * );
   * ```
   */
  retrieve(
    userID: string,
    query: PreferenceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferenceRetrieveResponse> {
    return this._client.get(path`/users/${userID}/preferences`, { query, ...options });
  }

  /**
   * Fetch user preferences for a specific subscription topic.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.preferences.retrieveTopic('topic_id', {
   *     user_id: 'user_id',
   *   });
   * ```
   */
  retrieveTopic(
    topicID: string,
    params: PreferenceRetrieveTopicParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceRetrieveTopicResponse> {
    const { user_id, ...query } = params;
    return this._client.get(path`/users/${user_id}/preferences/${topicID}`, { query, ...options });
  }

  /**
   * Update or Create user preferences for a specific subscription topic.
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.preferences.updateOrCreateTopic(
   *     'topic_id',
   *     {
   *       user_id: 'user_id',
   *       topic: {
   *         status: 'OPTED_IN',
   *         has_custom_routing: true,
   *         custom_routing: ['inbox', 'email'],
   *       },
   *     },
   *   );
   * ```
   */
  updateOrCreateTopic(
    topicID: string,
    params: PreferenceUpdateOrCreateTopicParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceUpdateOrCreateTopicResponse> {
    const { user_id, tenant_id, ...body } = params;
    return this._client.put(path`/users/${user_id}/preferences/${topicID}`, {
      query: { tenant_id },
      body,
      ...options,
    });
  }
}

export interface TopicPreference {
  default_status: Shared.PreferenceStatus;

  status: Shared.PreferenceStatus;

  topic_id: string;

  topic_name: string;

  /**
   * The Channels a user has chosen to receive notifications through for this topic
   */
  custom_routing?: Array<Shared.ChannelClassification> | null;

  has_custom_routing?: boolean | null;
}

export interface PreferenceRetrieveResponse {
  /**
   * The Preferences associated with the user_id.
   */
  items: Array<TopicPreference>;

  /**
   * Deprecated - Paging not implemented on this endpoint
   */
  paging: Shared.Paging;
}

export interface PreferenceRetrieveTopicResponse {
  topic: TopicPreference;
}

export interface PreferenceUpdateOrCreateTopicResponse {
  message: string;
}

export interface PreferenceRetrieveParams {
  /**
   * Query the preferences of a user for this specific tenant context.
   */
  tenant_id?: string | null;
}

export interface PreferenceRetrieveTopicParams {
  /**
   * Path param: A unique identifier associated with the user whose preferences you
   * wish to retrieve.
   */
  user_id: string;

  /**
   * Query param: Query the preferences of a user for this specific tenant context.
   */
  tenant_id?: string | null;
}

export interface PreferenceUpdateOrCreateTopicParams {
  /**
   * Path param: A unique identifier associated with the user whose preferences you
   * wish to retrieve.
   */
  user_id: string;

  /**
   * Body param:
   */
  topic: PreferenceUpdateOrCreateTopicParams.Topic;

  /**
   * Query param: Update the preferences of a user for this specific tenant context.
   */
  tenant_id?: string | null;
}

export namespace PreferenceUpdateOrCreateTopicParams {
  export interface Topic {
    status: Shared.PreferenceStatus;

    /**
     * The Channels a user has chosen to receive notifications through for this topic
     */
    custom_routing?: Array<Shared.ChannelClassification> | null;

    has_custom_routing?: boolean | null;
  }
}

export declare namespace Preferences {
  export {
    type TopicPreference as TopicPreference,
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceRetrieveTopicResponse as PreferenceRetrieveTopicResponse,
    type PreferenceUpdateOrCreateTopicResponse as PreferenceUpdateOrCreateTopicResponse,
    type PreferenceRetrieveParams as PreferenceRetrieveParams,
    type PreferenceRetrieveTopicParams as PreferenceRetrieveTopicParams,
    type PreferenceUpdateOrCreateTopicParams as PreferenceUpdateOrCreateTopicParams,
  };
}
