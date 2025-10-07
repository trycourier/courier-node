// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as PreferencesAPI from './users/preferences';
import * as ItemsAPI from './tenants/default-preferences/items';

export type Alignment = 'center' | 'left' | 'right' | 'full';

export interface ChannelPreference {
  channel: ItemsAPI.ChannelClassification;
}

export interface ElementalBaseNode {
  channels?: Array<string> | null;

  if?: string | null;

  loop?: string | null;

  ref?: string | null;
}

export interface MessageRouting {
  channels: Array<MessageRoutingChannel>;

  method: 'all' | 'single';
}

export type MessageRoutingChannel = string | MessageRouting;

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

export type TextStyle = 'text' | 'h1' | 'h2' | 'subtext';
