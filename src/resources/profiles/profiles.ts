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
   * Merges the supplied values into a user's profile, creating it if absent and
   * leaving any key you omit untouched. Prefer this for everyday writes.
   */
  create(
    userID: string,
    body: ProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileCreateResponse> {
    return this._client.post(path`/profiles/${userID}`, { body, ...options });
  }

  /**
   * Returns a user's stored profile and preferences, including the email address,
   * phone number, and push tokens Courier can reach them on.
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get(path`/profiles/${userID}`, options);
  }

  /**
   * Applies a JSON Patch to a user profile, adding, removing, or replacing
   * individual fields without sending the whole object.
   */
  update(userID: string, body: ProfileUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/profiles/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes a user's profile and stored contact details. List subscriptions and
   * preferences are separate resources, so remove those too if required.
   */
  delete(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/profiles/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Overwrites a user profile in full, removing any key absent from the request
   * body. Use the patch endpoint when changing a single field.
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
