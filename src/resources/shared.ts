// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as PreferencesAPI from './users/preferences';
import * as ItemsAPI from './tenants/default-preferences/items';

export interface ChannelPreference {
  channel: ItemsAPI.ChannelClassification;
}

export interface Preference {
  status: PreferencesAPI.PreferenceStatus;

  channel_preferences?: Array<ChannelPreference> | null;

  rules?: Array<Rule> | null;

  source?: 'subscription' | 'list' | 'recipient' | null;
}

export interface Rule {
  until: string;

  start?: string | null;
}
