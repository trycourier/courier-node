// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import * as SendAPI from './send';
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

/**
 * Syntactic sugar to provide a fast shorthand for Courier Elemental Blocks.
 */
export interface ElementalContentSugar {
  /**
   * The text content displayed in the notification.
   */
  body: string;

  /**
   * Title/subject displayed by supported channels.
   */
  title: string;
}

export interface ListRecipient {
  data?: { [key: string]: unknown } | null;

  list_id?: string | null;
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

export interface UserRecipient {
  /**
   * Use `tenant_id` instead.
   */
  account_id?: string | null;

  /**
   * Context such as tenant_id to send the notification with.
   */
  context?: SendAPI.MessageContext | null;

  data?: { [key: string]: unknown } | null;

  email?: string | null;

  /**
   * The user's preferred ISO 639-1 language code.
   */
  locale?: string | null;

  phone_number?: string | null;

  preferences?: UserRecipient.Preferences | null;

  /**
   * Tenant id. Will load brand, default preferences and base context data.
   */
  tenant_id?: string | null;

  user_id?: string | null;
}

export namespace UserRecipient {
  export interface Preferences {
    notifications: { [key: string]: Shared.Preference };

    categories?: { [key: string]: Shared.Preference } | null;

    templateId?: string | null;
  }
}
