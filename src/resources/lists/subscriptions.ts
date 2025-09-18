// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import * as AudiencesAPI from '../audiences';
import * as PreferencesAPI from '../users/preferences';
import * as ItemsAPI from '../tenants/default-preferences/items';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Get the list's subscriptions.
   */
  list(
    listID: string,
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    return this._client.get(path`/lists/${listID}/subscriptions`, { query, ...options });
  }

  /**
   * Subscribes additional users to the list, without modifying existing
   * subscriptions. If the list does not exist, it will be automatically created.
   */
  add(listID: string, body: SubscriptionAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/lists/${listID}/subscriptions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Subscribes the users to the list, overwriting existing subscriptions. If the
   * list does not exist, it will be automatically created.
   */
  subscribe(listID: string, body: SubscriptionSubscribeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/lists/${listID}/subscriptions`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Subscribe a user to an existing list (note: if the List does not exist, it will
   * be automatically created).
   */
  subscribeUser(
    userID: string,
    params: SubscriptionSubscribeUserParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { list_id, ...body } = params;
    return this._client.put(path`/lists/${list_id}/subscriptions/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a subscription to a list by list ID and user ID.
   */
  unsubscribeUser(
    userID: string,
    params: SubscriptionUnsubscribeUserParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { list_id } = params;
    return this._client.delete(path`/lists/${list_id}/subscriptions/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PutSubscriptionsRecipient {
  recipientId: string;

  preferences?: RecipientPreferences | null;
}

export interface RecipientPreferences {
  categories?: { [key: string]: RecipientPreferences.Categories } | null;

  notifications?: { [key: string]: RecipientPreferences.Notifications } | null;
}

export namespace RecipientPreferences {
  export interface Categories {
    status: PreferencesAPI.PreferenceStatus;

    channel_preferences?: Array<Categories.ChannelPreference> | null;

    rules?: Array<Categories.Rule> | null;
  }

  export namespace Categories {
    export interface ChannelPreference {
      channel: ItemsAPI.ChannelClassification;
    }

    export interface Rule {
      until: string;

      start?: string | null;
    }
  }

  export interface Notifications {
    status: PreferencesAPI.PreferenceStatus;

    channel_preferences?: Array<Notifications.ChannelPreference> | null;

    rules?: Array<Notifications.Rule> | null;
  }

  export namespace Notifications {
    export interface ChannelPreference {
      channel: ItemsAPI.ChannelClassification;
    }

    export interface Rule {
      until: string;

      start?: string | null;
    }
  }
}

export interface SubscriptionListResponse {
  items: Array<SubscriptionListResponse.Item>;

  paging: AudiencesAPI.Paging;
}

export namespace SubscriptionListResponse {
  export interface Item {
    recipientId: string;

    created?: string | null;

    preferences?: SubscriptionsAPI.RecipientPreferences | null;
  }
}

export interface SubscriptionListParams {
  /**
   * A unique identifier that allows for fetching the next set of list subscriptions
   */
  cursor?: string | null;
}

export interface SubscriptionAddParams {
  recipients: Array<PutSubscriptionsRecipient>;
}

export interface SubscriptionSubscribeParams {
  recipients: Array<PutSubscriptionsRecipient>;
}

export interface SubscriptionSubscribeUserParams {
  /**
   * Path param: A unique identifier representing the list you wish to retrieve.
   */
  list_id: string;

  /**
   * Body param:
   */
  preferences?: RecipientPreferences | null;
}

export interface SubscriptionUnsubscribeUserParams {
  /**
   * A unique identifier representing the list you wish to retrieve.
   */
  list_id: string;
}

export declare namespace Subscriptions {
  export {
    type PutSubscriptionsRecipient as PutSubscriptionsRecipient,
    type RecipientPreferences as RecipientPreferences,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionAddParams as SubscriptionAddParams,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionSubscribeUserParams as SubscriptionSubscribeUserParams,
    type SubscriptionUnsubscribeUserParams as SubscriptionUnsubscribeUserParams,
  };
}
