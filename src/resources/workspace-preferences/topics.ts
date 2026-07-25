// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as WorkspacePreferencesAPI from './workspace-preferences';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Topics extends APIResource {
  /**
   * Creates a subscription topic inside a workspace preference. The default status
   * sets whether users start opted in, opted out, or required.
   *
   * @example
   * ```ts
   * const workspacePreferenceTopicGetResponse =
   *   await client.workspacePreferences.topics.create(
   *     'section_id',
   *     { default_status: 'OPTED_OUT', name: 'Marketing' },
   *   );
   * ```
   */
  create(
    sectionID: string,
    body: TopicCreateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferencesAPI.WorkspacePreferenceTopicGetResponse> {
    return this._client.post(path`/preferences/sections/${sectionID}/topics`, { body, ...options });
  }

  /**
   * Returns one subscription topic with its default status, routing options, allowed
   * preferences, and unsubscribe header setting.
   *
   * @example
   * ```ts
   * const workspacePreferenceTopicGetResponse =
   *   await client.workspacePreferences.topics.retrieve(
   *     'topic_id',
   *     { section_id: 'section_id' },
   *   );
   * ```
   */
  retrieve(
    topicID: string,
    params: TopicRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferencesAPI.WorkspacePreferenceTopicGetResponse> {
    const { section_id } = params;
    return this._client.get(path`/preferences/sections/${section_id}/topics/${topicID}`, options);
  }

  /**
   * Returns the subscription topics inside a workspace preference, each with its
   * default status and routing options.
   *
   * @example
   * ```ts
   * const workspacePreferenceTopicListResponse =
   *   await client.workspacePreferences.topics.list(
   *     'section_id',
   *   );
   * ```
   */
  list(
    sectionID: string,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferencesAPI.WorkspacePreferenceTopicListResponse> {
    return this._client.get(path`/preferences/sections/${sectionID}/topics`, options);
  }

  /**
   * Archives a subscription topic and removes it from its workspace preference,
   * addressed by section id and topic id.
   *
   * @example
   * ```ts
   * await client.workspacePreferences.topics.archive(
   *   'topic_id',
   *   { section_id: 'section_id' },
   * );
   * ```
   */
  archive(topicID: string, params: TopicArchiveParams, options?: RequestOptions): APIPromise<void> {
    const { section_id } = params;
    return this._client.delete(path`/preferences/sections/${section_id}/topics/${topicID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Replace a topic within a workspace preference. Full document replacement;
   * missing optional fields are cleared. Same 404 rules as GET.
   *
   * @example
   * ```ts
   * const workspacePreferenceTopicGetResponse =
   *   await client.workspacePreferences.topics.replace(
   *     'topic_id',
   *     {
   *       section_id: 'section_id',
   *       default_status: 'OPTED_OUT',
   *       name: 'name',
   *     },
   *   );
   * ```
   */
  replace(
    topicID: string,
    params: TopicReplaceParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferencesAPI.WorkspacePreferenceTopicGetResponse> {
    const { section_id, ...body } = params;
    return this._client.put(path`/preferences/sections/${section_id}/topics/${topicID}`, {
      body,
      ...options,
    });
  }
}

export interface TopicCreateParams {
  /**
   * The default subscription status applied when a recipient has not set their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Human-readable name for the preference topic.
   */
  name: string;

  /**
   * Preference controls a recipient may customize for this topic. Defaults to empty
   * if omitted.
   */
  allowed_preferences?: Array<'snooze' | 'channel_preferences'> | null;

  /**
   * Optional description shown under the topic on the hosted preferences page.
   */
  description?: string | null;

  /**
   * Whether to include a list-unsubscribe header on emails for this topic.
   */
  include_unsubscribe_header?: boolean | null;

  /**
   * Default channels delivered for this topic. Defaults to empty if omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;

  /**
   * Arbitrary metadata associated with the topic.
   */
  topic_data?: { [key: string]: unknown } | null;
}

export interface TopicRetrieveParams {
  /**
   * Id of the workspace preference.
   */
  section_id: string;
}

export interface TopicArchiveParams {
  /**
   * Id of the workspace preference.
   */
  section_id: string;
}

export interface TopicReplaceParams {
  /**
   * Path param: Id of the workspace preference.
   */
  section_id: string;

  /**
   * Body param: The default subscription status applied when a recipient has not set
   * their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Body param: Human-readable name for the preference topic.
   */
  name: string;

  /**
   * Body param: Preference controls a recipient may customize. Omit to clear.
   */
  allowed_preferences?: Array<'snooze' | 'channel_preferences'> | null;

  /**
   * Body param: Optional description shown under the topic on the hosted preferences
   * page. Omit to clear.
   */
  description?: string | null;

  /**
   * Body param: Whether to include a list-unsubscribe header on emails for this
   * topic.
   */
  include_unsubscribe_header?: boolean | null;

  /**
   * Body param: Default channels delivered for this topic. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;

  /**
   * Body param: Arbitrary metadata associated with the topic. Omit to clear.
   */
  topic_data?: { [key: string]: unknown } | null;
}

export declare namespace Topics {
  export {
    type TopicCreateParams as TopicCreateParams,
    type TopicRetrieveParams as TopicRetrieveParams,
    type TopicArchiveParams as TopicArchiveParams,
    type TopicReplaceParams as TopicReplaceParams,
  };
}
