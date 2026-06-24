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

export class PreferenceSections extends APIResource {
  topics: TopicsAPI.Topics = new TopicsAPI.Topics(this._client);

  /**
   * Create a preference section in your workspace. The section id is generated and
   * returned. Topics are created inside a section via POST
   * /preferences/sections/{section_id}/topics.
   *
   * @example
   * ```ts
   * const preferenceSectionGetResponse =
   *   await client.preferenceSections.create({
   *     name: 'Account Notifications',
   *   });
   * ```
   */
  create(
    body: PreferenceSectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceSectionGetResponse> {
    return this._client.post('/preferences/sections', { body, ...options });
  }

  /**
   * Retrieve a preference section by id, including its topics.
   *
   * @example
   * ```ts
   * const preferenceSectionGetResponse =
   *   await client.preferenceSections.retrieve('section_id');
   * ```
   */
  retrieve(sectionID: string, options?: RequestOptions): APIPromise<PreferenceSectionGetResponse> {
    return this._client.get(path`/preferences/sections/${sectionID}`, options);
  }

  /**
   * List the workspace's preference sections. Each section embeds its topics. Scoped
   * to the workspace of the API key.
   *
   * @example
   * ```ts
   * const preferenceSectionListResponse =
   *   await client.preferenceSections.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<PreferenceSectionListResponse> {
    return this._client.get('/preferences/sections', options);
  }

  /**
   * Archive a preference section. The section must be empty: delete its topics
   * first, otherwise the request fails with 409.
   *
   * @example
   * ```ts
   * await client.preferenceSections.archive('section_id');
   * ```
   */
  archive(sectionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/preferences/sections/${sectionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Publish the workspace's preferences page. Takes a snapshot of every section with
   * its topics under a new published version, making the current state visible on
   * the hosted preferences page (non-draft).
   *
   * @example
   * ```ts
   * const publishPreferencesResponse =
   *   await client.preferenceSections.publish();
   * ```
   */
  publish(options?: RequestOptions): APIPromise<PublishPreferencesResponse> {
    return this._client.post('/preferences/publish', options);
  }

  /**
   * Replace a preference section. Full document replacement; missing optional fields
   * are cleared. Topics attached to the section are unaffected.
   *
   * @example
   * ```ts
   * const preferenceSectionGetResponse =
   *   await client.preferenceSections.replace('section_id', {
   *     name: 'name',
   *   });
   * ```
   */
  replace(
    sectionID: string,
    body: PreferenceSectionReplaceParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceSectionGetResponse> {
    return this._client.put(path`/preferences/sections/${sectionID}`, { body, ...options });
  }
}

/**
 * Request body for creating a preference section.
 */
export interface PreferenceSectionCreateRequest {
  /**
   * Human-readable name for the section.
   */
  name: string;

  /**
   * Whether the section defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the section. Defaults to empty if omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

/**
 * A preference section in your workspace, including its topics.
 */
export interface PreferenceSectionGetResponse {
  /**
   * The preference section id.
   */
  id: string;

  /**
   * ISO-8601 timestamp of when the section was created.
   */
  created: string;

  /**
   * Whether the section defines custom routing for its topics.
   */
  has_custom_routing: boolean;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Default channels for the section. May be empty.
   */
  routing_options: Array<Shared.ChannelClassification>;

  /**
   * The topics contained in this section.
   */
  topics: Array<PreferenceTopicGetResponse>;

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
 * The workspace's preference sections, each with its topics.
 */
export interface PreferenceSectionListResponse {
  results: Array<PreferenceSectionGetResponse>;
}

/**
 * Request body for replacing a preference section. Full document replacement;
 * missing optional fields are cleared.
 */
export interface PreferenceSectionReplaceRequest {
  /**
   * Human-readable name for the section.
   */
  name: string;

  /**
   * Whether the section defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the section. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

/**
 * Request body for creating a preference topic.
 */
export interface PreferenceTopicCreateRequest {
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
export interface PreferenceTopicGetResponse {
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
 * Topics contained in a preference section.
 */
export interface PreferenceTopicListResponse {
  results: Array<PreferenceTopicGetResponse>;
}

/**
 * Request body for replacing a preference topic. Full document replacement;
 * missing optional fields are cleared.
 */
export interface PreferenceTopicReplaceRequest {
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

export interface PreferenceSectionCreateParams {
  /**
   * Human-readable name for the section.
   */
  name: string;

  /**
   * Whether the section defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the section. Defaults to empty if omitted.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

export interface PreferenceSectionReplaceParams {
  /**
   * Human-readable name for the section.
   */
  name: string;

  /**
   * Whether the section defines custom routing for its topics.
   */
  has_custom_routing?: boolean | null;

  /**
   * Default channels for the section. Omit to clear.
   */
  routing_options?: Array<Shared.ChannelClassification> | null;
}

PreferenceSections.Topics = Topics;

export declare namespace PreferenceSections {
  export {
    type PreferenceSectionCreateRequest as PreferenceSectionCreateRequest,
    type PreferenceSectionGetResponse as PreferenceSectionGetResponse,
    type PreferenceSectionListResponse as PreferenceSectionListResponse,
    type PreferenceSectionReplaceRequest as PreferenceSectionReplaceRequest,
    type PreferenceTopicCreateRequest as PreferenceTopicCreateRequest,
    type PreferenceTopicGetResponse as PreferenceTopicGetResponse,
    type PreferenceTopicListResponse as PreferenceTopicListResponse,
    type PreferenceTopicReplaceRequest as PreferenceTopicReplaceRequest,
    type PublishPreferencesResponse as PublishPreferencesResponse,
    type PreferenceSectionCreateParams as PreferenceSectionCreateParams,
    type PreferenceSectionReplaceParams as PreferenceSectionReplaceParams,
  };

  export {
    Topics as Topics,
    type TopicCreateParams as TopicCreateParams,
    type TopicRetrieveParams as TopicRetrieveParams,
    type TopicArchiveParams as TopicArchiveParams,
    type TopicReplaceParams as TopicReplaceParams,
  };
}
