// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ProfilesAPI from './profiles';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Lists extends APIResource {
  /**
   * Returns the subscribed lists for a specified user.
   */
  retrieve(
    userID: string,
    query: ListRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListRetrieveResponse> {
    return this._client.get(path`/profiles/${userID}/lists`, { query, ...options });
  }

  /**
   * Removes all list subscriptions for given user.
   */
  delete(userID: string, options?: RequestOptions): APIPromise<ListDeleteResponse> {
    return this._client.delete(path`/profiles/${userID}/lists`, options);
  }

  /**
   * Subscribes the given user to one or more lists. If the list does not exist, it
   * will be created.
   */
  subscribe(
    userID: string,
    body: ListSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<ListSubscribeResponse> {
    return this._client.post(path`/profiles/${userID}/lists`, { body, ...options });
  }
}

export interface ListRetrieveResponse {
  paging: Shared.Paging;

  /**
   * An array of lists
   */
  results: Array<ListRetrieveResponse.Result>;
}

export namespace ListRetrieveResponse {
  export interface Result {
    id: string;

    /**
     * The date/time of when the list was created. Represented as a string in ISO
     * format.
     */
    created: string;

    /**
     * List name
     */
    name: string;

    /**
     * The date/time of when the list was updated. Represented as a string in ISO
     * format.
     */
    updated: string;

    preferences?: Shared.RecipientPreferences | null;
  }
}

export interface ListDeleteResponse {
  status: 'SUCCESS';
}

export interface ListSubscribeResponse {
  status: 'SUCCESS';
}

export interface ListRetrieveParams {
  /**
   * A unique identifier that allows for fetching the next set of message statuses.
   */
  cursor?: string | null;
}

export interface ListSubscribeParams {
  lists: Array<ProfilesAPI.SubscribeToListsRequestItem>;
}

export declare namespace Lists {
  export {
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListSubscribeResponse as ListSubscribeResponse,
    type ListRetrieveParams as ListRetrieveParams,
    type ListSubscribeParams as ListSubscribeParams,
  };
}
