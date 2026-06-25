// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as TopicsAPI from './topics';
import {
  TopicArchiveParams,
  TopicCreateParams,
  TopicReplaceParams,
  TopicRetrieveParams,
  Topics,
} from './topics';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WorkspacePreferences extends APIResource {
  topics: TopicsAPI.Topics = new TopicsAPI.Topics(this._client);

  /**
   * Create a workspace preference. The workspace preference id is generated and
   * returned. Topics are created inside a workspace preference via POST
   * /preferences/sections/{section_id}/topics.
   *
   * @example
   * ```ts
   * const workspacePreferenceGetResponse =
   *   await client.workspacePreferences.create({
   *     name: 'Account Notifications',
   *   });
   * ```
   */
  create(
    body: WorkspacePreferenceCreateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferenceGetResponse> {
    return this._client.post('/preferences/sections', { body, ...options });
  }

  /**
   * Retrieve a workspace preference by id, including its topics.
   *
   * @example
   * ```ts
   * const workspacePreferenceGetResponse =
   *   await client.workspacePreferences.retrieve('section_id');
   * ```
   */
  retrieve(sectionID: string, options?: RequestOptions): APIPromise<WorkspacePreferenceGetResponse> {
    return this._client.get(path`/preferences/sections/${sectionID}`, options);
  }

  /**
   * List the workspace's preferences. Each workspace preference embeds its topics.
   * Scoped to the workspace of the API key.
   *
   * @example
   * ```ts
   * const workspacePreferenceListResponse =
   *   await client.workspacePreferences.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WorkspacePreferenceListResponse> {
    return this._client.get('/preferences/sections', options);
  }

  /**
   * Archive a workspace preference. The workspace preference must be empty: delete
   * its topics first, otherwise the request fails with 409.
   *
   * @example
   * ```ts
   * await client.workspacePreferences.archive('section_id');
   * ```
   */
  archive(sectionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/preferences/sections/${sectionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Publish the workspace's preferences page. Takes a snapshot of every workspace
   * preference with its topics under a new published version, making the current
   * state visible on the hosted preferences page (non-draft).
   *
   * @example
   * ```ts
   * const publishPreferencesResponse =
   *   await client.workspacePreferences.publish();
   * ```
   */
  publish(options?: RequestOptions): APIPromise<PublishPreferencesResponse> {
    return this._client.post('/preferences/publish', options);
  }

  /**
   * Replace a workspace preference. Full document replacement; missing optional
   * fields are cleared. Topics attached to the workspace preference are unaffected.
   *
   * @example
   * ```ts
   * const workspacePreferenceGetResponse =
   *   await client.workspacePreferences.replace('section_id', {
   *     name: 'name',
   *   });
   * ```
   */
  replace(
    sectionID: string,
    body: WorkspacePreferenceReplaceParams,
    options?: RequestOptions,
  ): APIPromise<WorkspacePreferenceGetResponse> {
    return this._client.put(path`/preferences/sections/${sectionID}`, { body, ...options });
  }
}

/**
 * Result of publishing the workspace's preferences page.
 */
export interface PublishPreferencesResponse {
  /**
   * Id of the published page snapshot.
   */
  page_id: string;

  /**
   * ISO-8601 timestamp of the publish.
   */
  published_at: string;

  /**
   * Monotonic published version (epoch milliseconds).
   */
  published_version: number;

  /**
   * Draft-mode hosted preferences page URL for previewing.
   */
  preview_url?: string | null;

  /**
   * Id of the publisher.
   */
  published_by?: string | null;
}

/**
 * Request body for creating a workspace preference.
 */
export interface WorkspacePreferenceCreateRequest {
  /**
   * Human-readable name for the workspace preference.
   */
  name: string;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the workspace preference. Defaults to empty if omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

/**
 * A workspace preference in your workspace, including its topics.
 */
export interface WorkspacePreferenceGetResponse {
  /**
   * The workspace preference id.
   */
  id: string;

  /**
   * ISO-8601 timestamp of when the workspace preference was created.
   */
  created: string;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing: boolean;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Default channels for the workspace preference. May be empty.
   */
  routing_options: Array<Shared.ChannelClassification>;

  /**
   * The topics contained in this workspace preference.
   */
  topics: Array<WorkspacePreferenceTopicGetResponse>;

  /**
   * Id of the creator.
   */
  creator?: string | null;

  /**
   * ISO-8601 timestamp of the last update.
   */
  updated?: string | null;

  /**
   * Id of the last updater.
   */
  updater?: string | null;
}

/**
 * The workspace's preferences, each with its topics.
 */
export interface WorkspacePreferenceListResponse {
  results: Array<WorkspacePreferenceGetResponse>;
}

/**
 * Request body for replacing a workspace preference. Full document replacement;
 * missing optional fields are cleared.
 */
export interface WorkspacePreferenceReplaceRequest {
  /**
   * Human-readable name for the workspace preference.
   */
  name: string;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the workspace preference. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

/**
 * Request body for creating a preference topic.
 */
export interface WorkspacePreferenceTopicCreateRequest {
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

/**
 * A subscription preference topic in your workspace.
 */
export interface WorkspacePreferenceTopicGetResponse {
  /**
   * The preference topic id.
   */
  id: string;

  /**
   * Preference controls a recipient may customize. May be empty.
   */
  allowed_preferences: Array<'snooze' | 'channel_preferences'>;

  /**
   * ISO-8601 timestamp of when the topic was created.
   */
  created: string;

  /**
   * The default subscription status applied when a recipient has not set their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Whether a list-unsubscribe header is included on emails for this topic.
   */
  include_unsubscribe_header: boolean;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Default channels delivered for this topic. May be empty.
   */
  routing_options: Array<Shared.ChannelClassification>;

  /**
   * Arbitrary metadata associated with the topic.
   */
  topic_data: { [key: string]: unknown };

  /**
   * ISO-8601 timestamp of the last update.
   */
  updated: string;

  /**
   * Id of the creator.
   */
  creator?: string | null;

  /**
   * Id of the last updater.
   */
  updater?: string | null;
}

/**
 * Topics contained in a workspace preference.
 */
export interface WorkspacePreferenceTopicListResponse {
  results: Array<WorkspacePreferenceTopicGetResponse>;
}

/**
 * Request body for replacing a preference topic. Full document replacement;
 * missing optional fields are cleared.
 */
export interface WorkspacePreferenceTopicReplaceRequest {
  /**
   * The default subscription status applied when a recipient has not set their own.
   */
  default_status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Human-readable name for the preference topic.
   */
  name: string;

  /**
   * Preference controls a recipient may customize. Omit to clear.
   */
  allowed_preferences?: Array<'snooze' | 'channel_preferences'> | null;

  /**
   * Whether to include a list-unsubscribe header on emails for this topic.
   */
  include_unsubscribe_header?: boolean | null;

  /**
   * Default channels delivered for this topic. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;

  /**
   * Arbitrary metadata associated with the topic. Omit to clear.
   */
  topic_data?: { [key: string]: unknown } | null;
}

export interface WorkspacePreferenceCreateParams {
  /**
   * Human-readable name for the workspace preference.
   */
  name: string;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the workspace preference. Defaults to empty if omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

export interface WorkspacePreferenceReplaceParams {
  /**
   * Human-readable name for the workspace preference.
   */
  name: string;

  /**
   * Whether the workspace preference defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the workspace preference. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

WorkspacePreferences.Topics = Topics;

export declare namespace WorkspacePreferences {
  export {
    type PublishPreferencesResponse as PublishPreferencesResponse,
    type WorkspacePreferenceCreateRequest as WorkspacePreferenceCreateRequest,
    type WorkspacePreferenceGetResponse as WorkspacePreferenceGetResponse,
    type WorkspacePreferenceListResponse as WorkspacePreferenceListResponse,
    type WorkspacePreferenceReplaceRequest as WorkspacePreferenceReplaceRequest,
    type WorkspacePreferenceTopicCreateRequest as WorkspacePreferenceTopicCreateRequest,
    type WorkspacePreferenceTopicGetResponse as WorkspacePreferenceTopicGetResponse,
    type WorkspacePreferenceTopicListResponse as WorkspacePreferenceTopicListResponse,
    type WorkspacePreferenceTopicReplaceRequest as WorkspacePreferenceTopicReplaceRequest,
    type WorkspacePreferenceCreateParams as WorkspacePreferenceCreateParams,
    type WorkspacePreferenceReplaceParams as WorkspacePreferenceReplaceParams,
  };

  export {
    Topics as Topics,
    type TopicCreateParams as TopicCreateParams,
    type TopicRetrieveParams as TopicRetrieveParams,
    type TopicArchiveParams as TopicArchiveParams,
    type TopicReplaceParams as TopicReplaceParams,
  };
}
