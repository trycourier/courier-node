// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ListsAPI from './lists';
import {
  ListDeleteResponse,
  ListRetrieveParams,
  ListRetrieveResponse,
  ListSubscribeParams,
  ListSubscribeResponse,
  Lists,
} from './lists';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Profiles extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);

  /**
   * Merge the supplied values with an existing profile or create a new profile if
   * one doesn't already exist.
   */
  create(
    userID: string,
    body: ProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileCreateResponse> {
    return this._client.post(path`/profiles/${userID}`, { body, ...options });
  }

  /**
   * Returns the specified user profile.
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get(path`/profiles/${userID}`, options);
  }

  /**
   * Update a profile
   */
  update(userID: string, body: ProfileUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/profiles/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes the specified user profile.
   */
  delete(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/profiles/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * When using `PUT`, be sure to include all the key-value pairs required by the
   * recipient's profile. Any key-value pairs that exist in the profile but fail to
   * be included in the `PUT` request will be removed from the profile. Remember, a
   * `PUT` update is a full replacement of the data. For partial updates, use the
   * [Patch](https://www.courier.com/docs/reference/profiles/patch/) request.
   */
  replace(
    userID: string,
    body: ProfileReplaceParams,
    options?: RequestOptions,
  ): APIPromise<ProfileReplaceResponse> {
    return this._client.put(path`/profiles/${userID}`, { body, ...options });
  }
}

export interface SubscribeToListsRequestItem {
  listId: string;

  preferences?: Shared.RecipientPreferences | null;
}

export interface ProfileCreateResponse {
  status: 'SUCCESS';
}

export interface ProfileRetrieveResponse {
  profile: { [key: string]: unknown };

  preferences?: Shared.RecipientPreferences | null;
}

export interface ProfileReplaceResponse {
  status: 'SUCCESS';
}

export interface ProfileCreateParams {
  profile: { [key: string]: unknown };
}

export interface ProfileUpdateParams {
  /**
   * List of patch operations to apply to the profile.
   */
  patch: Array<ProfileUpdateParams.Patch>;
}

export namespace ProfileUpdateParams {
  export interface Patch {
    /**
     * The operation to perform.
     */
    op: string;

    /**
     * The JSON path specifying the part of the profile to operate on.
     */
    path: string;

    /**
     * The value for the operation.
     */
    value: string;
  }
}

export interface ProfileReplaceParams {
  profile: { [key: string]: unknown };
}

Profiles.Lists = Lists;

export declare namespace Profiles {
  export {
    type SubscribeToListsRequestItem as SubscribeToListsRequestItem,
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileReplaceResponse as ProfileReplaceResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfileReplaceParams as ProfileReplaceParams,
  };

  export {
    Lists as Lists,
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListSubscribeResponse as ListSubscribeResponse,
    type ListRetrieveParams as ListRetrieveParams,
    type ListSubscribeParams as ListSubscribeParams,
  };
}
