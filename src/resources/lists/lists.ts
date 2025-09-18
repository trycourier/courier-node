// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudiencesAPI from '../audiences';
import * as SubscriptionsAPI from './subscriptions';
import {
  PutSubscriptionsRecipient,
  RecipientPreferences,
  SubscriptionAddParams,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionSubscribeParams,
  SubscriptionSubscribeUserParams,
  SubscriptionUnsubscribeUserParams,
  Subscriptions,
} from './subscriptions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Lists extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

  /**
   * Returns a list based on the list ID provided.
   */
  retrieve(listID: string, options?: RequestOptions): APIPromise<List> {
    return this._client.get(path`/lists/${listID}`, options);
  }

  /**
   * Create or replace an existing list with the supplied values.
   */
  update(listID: string, body: ListUpdateParams, options?: RequestOptions): APIPromise<List> {
    return this._client.put(path`/lists/${listID}`, { body, ...options });
  }

  /**
   * Returns all of the lists, with the ability to filter based on a pattern.
   */
  list(
    query: ListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListListResponse> {
    return this._client.get('/lists', { query, ...options });
  }

  /**
   * Delete a list by list ID.
   */
  delete(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/lists/${listID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restore a previously deleted list.
   */
  restore(listID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/lists/${listID}/restore`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface List {
  id: string;

  name: string;

  created?: number | null;

  updated?: number | null;
}

export interface ListListResponse {
  items: Array<List>;

  paging: AudiencesAPI.Paging;
}

export interface ListUpdateParams {
  name: string;

  preferences?: SubscriptionsAPI.RecipientPreferences | null;
}

export interface ListListParams {
  /**
   * A unique identifier that allows for fetching the next page of lists.
   */
  cursor?: string | null;

  /**
   * "A pattern used to filter the list items returned. Pattern types supported:
   * exact match on `list_id` or a pattern of one or more pattern parts. you may
   * replace a part with either: `*` to match all parts in that position, or `**` to
   * signify a wildcard `endsWith` pattern match."
   */
  pattern?: string | null;
}

Lists.Subscriptions = Subscriptions;

export declare namespace Lists {
  export {
    type List as List,
    type ListListResponse as ListListResponse,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
  };

  export {
    Subscriptions as Subscriptions,
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
