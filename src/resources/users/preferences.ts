// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
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
   * Replace a user's complete set of preference overrides in a single request. The
   * topics in the request body become the recipient's entire set of overrides:
   * listed topics are created or updated, and every existing override that is not
   * included in the body is reset to its topic default. Submitting an empty `topics`
   * array is a valid clear-all that resets every existing override.
   *
   * This operation is validation-atomic (all-or-nothing): structural validation
   * fails fast with a single `400`, and if any topic is semantically invalid (an
   * unknown topic, a `REQUIRED` topic that cannot be opted out, or a custom routing
   * request that is not available on the workspace's plan) the request returns a
   * single `400` aggregating every failure in `errors` and writes nothing. On
   * success it returns `200` with `items` (the complete resulting override set) and
   * `deleted` (the ids of the overrides that were reset to default).
   *
   * Every `topic_id` in the response — in `items`, `deleted`, and any `errors` — is
   * returned in Courier's canonical topic id form, regardless of the form supplied
   * in the request.
   *
   * @example
   * ```ts
   * const response = await client.users.preferences.bulkReplace(
   *   'user_id',
   *   {
   *     topics: [
   *       {
   *         topic_id: '74Q4QGFBEX481DP6JRPMV751H4XT',
   *         status: 'OPTED_IN',
   *         has_custom_routing: true,
   *         custom_routing: ['inbox', 'email'],
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  bulkReplace(
    userID: string,
    params: PreferenceBulkReplaceParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceBulkReplaceResponse> {
    const { tenant_id, ...body } = params;
    return this._client.put(path`/users/${userID}/preferences`, { query: { tenant_id }, body, ...options });
  }

  /**
   * Additively create or update a user's preferences for one or more subscription
   * topics in a single request. Only the topics included in the request body are
   * created or updated; any existing overrides for topics not listed are left
   * untouched.
   *
   * Structural validation of the request body fails fast with a single `400`. Beyond
   * that, each topic is processed independently (partial-success, not
   * all-or-nothing): valid topics are written and returned in `items`, while topics
   * that cannot be applied are collected in `errors` with a per-topic `reason` (for
   * example an unknown topic, a `REQUIRED` topic that cannot be opted out, a custom
   * routing request that is not available on the workspace's plan, or a write
   * failure). The request therefore returns `200` with both lists whenever the body
   * is structurally valid.
   *
   * Every `topic_id` in the response — in both `items` and `errors` — is returned in
   * Courier's canonical topic id form, regardless of the form supplied in the
   * request.
   *
   * @example
   * ```ts
   * const response = await client.users.preferences.bulkUpdate(
   *   'user_id',
   *   {
   *     topics: [
   *       {
   *         topic_id: '74Q4QGFBEX481DP6JRPMV751H4XT',
   *         status: 'OPTED_IN',
   *         has_custom_routing: true,
   *         custom_routing: ['inbox', 'email'],
   *       },
   *       {
   *         topic_id: '5Q4QGFBEX481DP6JRPMV751H4YU',
   *         status: 'OPTED_OUT',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  bulkUpdate(
    userID: string,
    params: PreferenceBulkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceBulkUpdateResponse> {
    const { tenant_id, ...body } = params;
    return this._client.post(path`/users/${userID}/preferences`, { query: { tenant_id }, body, ...options });
  }

  /**
   * Remove a user's preferences for a specific subscription topic, resetting the
   * topic to its effective default. This operation is idempotent: deleting a
   * preference that does not exist succeeds with no error.
   *
   * @example
   * ```ts
   * await client.users.preferences.deleteTopic('topic_id', {
   *   user_id: 'user_id',
   * });
   * ```
   */
  deleteTopic(
    topicID: string,
    params: PreferenceDeleteTopicParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { user_id, tenant_id } = params;
    return this._client.delete(path`/users/${user_id}/preferences/${topicID}`, {
      query: { tenant_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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

/**
 * A single topic override echoed in a bulk preference response.
 */
export interface BulkPreferenceTopic {
  custom_routing: Array<Shared.ChannelClassification>;

  has_custom_routing: boolean;

  /**
   * The applied subscription status. Echoes the requested value, so it is always
   * OPTED_IN or OPTED_OUT.
   */
  status: 'OPTED_IN' | 'OPTED_OUT';

  topic_id: string;
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

export interface PreferenceBulkReplaceResponse {
  /**
   * The ids of the overrides that were reset to their topic default.
   */
  deleted: Array<string>;

  /**
   * The complete resulting set of topic overrides for the user.
   */
  items: Array<BulkPreferenceTopic>;
}

export interface PreferenceBulkUpdateResponse {
  /**
   * The topics that could not be applied, each with a reason.
   */
  errors: Array<PreferenceBulkUpdateResponse.Error>;

  /**
   * The topics that were successfully created or updated.
   */
  items: Array<BulkPreferenceTopic>;
}

export namespace PreferenceBulkUpdateResponse {
  /**
   * A single topic that could not be applied in a bulk preference request.
   */
  export interface Error {
    /**
     * A human-readable explanation of why the topic could not be applied.
     */
    reason: string;

    topic_id: string;
  }
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

export interface PreferenceBulkReplaceParams {
  /**
   * Body param: The complete set of topic overrides for the user. Up to 50 topics
   * may be provided. Any existing override not listed here is reset to its topic
   * default; an empty array resets every existing override.
   */
  topics: Array<PreferenceBulkReplaceParams.Topic>;

  /**
   * Query param: Update the preferences of a user for this specific tenant context.
   */
  tenant_id?: string | null;
}

export namespace PreferenceBulkReplaceParams {
  export interface Topic {
    /**
     * The subscription status to apply for this topic.
     */
    status: 'OPTED_IN' | 'OPTED_OUT';

    /**
     * A unique identifier associated with a subscription topic.
     */
    topic_id: string;

    /**
     * The channels a user has chosen to receive notifications through for this topic.
     */
    custom_routing?: Array<Shared.ChannelClassification>;

    /**
     * Whether the recipient has chosen specific delivery channels for this topic.
     */
    has_custom_routing?: boolean;
  }
}

export interface PreferenceBulkUpdateParams {
  /**
   * Body param: The topics to create or update. Between 1 and 50 topics may be
   * provided in a single request.
   */
  topics: Array<PreferenceBulkUpdateParams.Topic>;

  /**
   * Query param: Update the preferences of a user for this specific tenant context.
   */
  tenant_id?: string | null;
}

export namespace PreferenceBulkUpdateParams {
  export interface Topic {
    /**
     * The subscription status to apply for this topic.
     */
    status: 'OPTED_IN' | 'OPTED_OUT';

    /**
     * A unique identifier associated with a subscription topic.
     */
    topic_id: string;

    /**
     * The channels a user has chosen to receive notifications through for this topic.
     */
    custom_routing?: Array<Shared.ChannelClassification>;

    /**
     * Whether the recipient has chosen specific delivery channels for this topic.
     */
    has_custom_routing?: boolean;
  }
}

export interface PreferenceDeleteTopicParams {
  /**
   * Path param: A unique identifier associated with the user whose preferences you
   * wish to delete.
   */
  user_id: string;

  /**
   * Query param: Delete the preferences of a user for this specific tenant context.
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
   * Body param
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
    type BulkPreferenceTopic as BulkPreferenceTopic,
    type TopicPreference as TopicPreference,
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceBulkReplaceResponse as PreferenceBulkReplaceResponse,
    type PreferenceBulkUpdateResponse as PreferenceBulkUpdateResponse,
    type PreferenceRetrieveTopicResponse as PreferenceRetrieveTopicResponse,
    type PreferenceUpdateOrCreateTopicResponse as PreferenceUpdateOrCreateTopicResponse,
    type PreferenceRetrieveParams as PreferenceRetrieveParams,
    type PreferenceBulkReplaceParams as PreferenceBulkReplaceParams,
    type PreferenceBulkUpdateParams as PreferenceBulkUpdateParams,
    type PreferenceDeleteTopicParams as PreferenceDeleteTopicParams,
    type PreferenceRetrieveTopicParams as PreferenceRetrieveTopicParams,
    type PreferenceUpdateOrCreateTopicParams as PreferenceUpdateOrCreateTopicParams,
  };
}
