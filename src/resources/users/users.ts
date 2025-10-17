// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreferencesAPI from './preferences';
import {
  PreferenceRetrieveParams,
  PreferenceRetrieveResponse,
  PreferenceRetrieveTopicParams,
  PreferenceRetrieveTopicResponse,
  PreferenceUpdateOrCreateTopicParams,
  PreferenceUpdateOrCreateTopicResponse,
  Preferences,
  TopicPreference,
} from './preferences';
import * as TenantsAPI from './tenants';
import {
  TenantAddMultipleParams,
  TenantAddSingleParams,
  TenantListParams,
  TenantListResponse,
  TenantRemoveSingleParams,
  Tenants,
} from './tenants';
import * as TokensAPI from './tokens';
import {
  TokenAddSingleParams,
  TokenDeleteParams,
  TokenListResponse,
  TokenRetrieveParams,
  TokenRetrieveResponse,
  TokenUpdateParams,
  Tokens,
  UserToken,
} from './tokens';

export class Users extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  tenants: TenantsAPI.Tenants = new TenantsAPI.Tenants(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

Users.Preferences = Preferences;
Users.Tenants = Tenants;
Users.Tokens = Tokens;

export declare namespace Users {
  export {
    Preferences as Preferences,
    type TopicPreference as TopicPreference,
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceRetrieveTopicResponse as PreferenceRetrieveTopicResponse,
    type PreferenceUpdateOrCreateTopicResponse as PreferenceUpdateOrCreateTopicResponse,
    type PreferenceRetrieveParams as PreferenceRetrieveParams,
    type PreferenceRetrieveTopicParams as PreferenceRetrieveTopicParams,
    type PreferenceUpdateOrCreateTopicParams as PreferenceUpdateOrCreateTopicParams,
  };

  export {
    Tenants as Tenants,
    type TenantListResponse as TenantListResponse,
    type TenantListParams as TenantListParams,
    type TenantAddMultipleParams as TenantAddMultipleParams,
    type TenantAddSingleParams as TenantAddSingleParams,
    type TenantRemoveSingleParams as TenantRemoveSingleParams,
  };

  export {
    Tokens as Tokens,
    type UserToken as UserToken,
    type TokenRetrieveResponse as TokenRetrieveResponse,
    type TokenListResponse as TokenListResponse,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenDeleteParams as TokenDeleteParams,
    type TokenAddSingleParams as TokenAddSingleParams,
  };
}
