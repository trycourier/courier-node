// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

export type Alignment = 'center' | 'left' | 'right' | 'full';

export type ChannelClassification = 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';

export interface ChannelPreference {
  channel: ChannelClassification;
}

export interface ElementalActionNodeWithType extends ElementalBaseNode {
  type?: 'action';
}

export interface ElementalBaseNode {
  channels?: Array<string> | null;

  if?: string | null;

  loop?: string | null;

  ref?: string | null;
}

/**
 * The channel element allows a notification to be customized based on which
 * channel it is sent through. For example, you may want to display a detailed
 * message when the notification is sent through email, and a more concise message
 * in a push notification. Channel elements are only valid as top-level elements;
 * you cannot nest channel elements. If there is a channel element specified at the
 * top-level of the document, all sibling elements must be channel elements. Note:
 * As an alternative, most elements support a `channel` property. Which allows you
 * to selectively display an individual element on a per channel basis. See the
 * [control flow docs](https://www.courier.com/docs/platform/content/elemental/control-flow/)
 * for more details.
 */
export interface ElementalChannelNode extends ElementalBaseNode {
  /**
   * The channel the contents of this element should be applied to. Can be `email`,
   * `push`, `direct_message`, `sms` or a provider such as slack
   */
  channel: string;

  /**
   * Raw data to apply to the channel. If `elements` has not been specified, `raw` is
   * required.
   */
  raw?: { [key: string]: unknown } | null;
}

/**
 * The channel element allows a notification to be customized based on which
 * channel it is sent through. For example, you may want to display a detailed
 * message when the notification is sent through email, and a more concise message
 * in a push notification. Channel elements are only valid as top-level elements;
 * you cannot nest channel elements. If there is a channel element specified at the
 * top-level of the document, all sibling elements must be channel elements. Note:
 * As an alternative, most elements support a `channel` property. Which allows you
 * to selectively display an individual element on a per channel basis. See the
 * [control flow docs](https://www.courier.com/docs/platform/content/elemental/control-flow/)
 * for more details.
 */
export interface ElementalChannelNodeWithType extends ElementalChannelNode {
  type?: 'channel';
}

export interface ElementalContent {
  elements: Array<ElementalNode>;

  /**
   * For example, "2022-01-01"
   */
  version: string;

  brand?: string | null;
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

export interface ElementalDividerNodeWithType extends ElementalBaseNode {
  type?: 'divider';
}

export interface ElementalImageNodeWithType extends ElementalBaseNode {
  type?: 'image';
}

export interface ElementalMetaNodeWithType extends ElementalBaseNode {
  type?: 'meta';
}

/**
 * The channel element allows a notification to be customized based on which
 * channel it is sent through. For example, you may want to display a detailed
 * message when the notification is sent through email, and a more concise message
 * in a push notification. Channel elements are only valid as top-level elements;
 * you cannot nest channel elements. If there is a channel element specified at the
 * top-level of the document, all sibling elements must be channel elements. Note:
 * As an alternative, most elements support a `channel` property. Which allows you
 * to selectively display an individual element on a per channel basis. See the
 * [control flow docs](https://www.courier.com/docs/platform/content/elemental/control-flow/)
 * for more details.
 */
export type ElementalNode =
  | ElementalTextNodeWithType
  | ElementalMetaNodeWithType
  | ElementalChannelNodeWithType
  | ElementalImageNodeWithType
  | ElementalActionNodeWithType
  | ElementalDividerNodeWithType
  | ElementalQuoteNodeWithType;

export interface ElementalQuoteNodeWithType extends ElementalBaseNode {
  type?: 'quote';
}

export interface ElementalTextNodeWithType extends ElementalBaseNode {
  type?: 'text';
}

export interface MessageContext {
  /**
   * Tenant id used to load brand/default preferences/context.
   */
  tenant_id?: string | null;
}

export interface MessageRouting {
  channels: Array<MessageRoutingChannel>;

  method: 'all' | 'single';
}

export type MessageRoutingChannel = string | MessageRouting;

export interface NotificationPreferenceDetails {
  status: PreferenceStatus;

  channel_preferences?: Array<ChannelPreference> | null;

  rules?: Array<Rule> | null;
}

export interface Paging {
  more: boolean;

  cursor?: string | null;
}

export interface Preference {
  status: PreferenceStatus;

  channel_preferences?: Array<ChannelPreference> | null;

  rules?: Array<Rule> | null;

  source?: 'subscription' | 'list' | 'recipient' | null;
}

export type PreferenceStatus = 'OPTED_IN' | 'OPTED_OUT' | 'REQUIRED';

export interface Recipient {
  /**
   * Deprecated - Use `tenant_id` instead.
   */
  account_id?: string | null;

  /**
   * Context such as tenant_id to send the notification with.
   */
  context?: MessageContext | null;

  data?: { [key: string]: unknown } | null;

  /**
   * The user's email address.
   */
  email?: string | null;

  /**
   * The id of the list to send the message to.
   */
  list_id?: string | null;

  /**
   * The user's preferred ISO 639-1 language code.
   */
  locale?: string | null;

  /**
   * The user's phone number.
   */
  phone_number?: string | null;

  preferences?: Recipient.Preferences | null;

  /**
   * The id of the tenant the user is associated with.
   */
  tenant_id?: string | null;

  /**
   * The user's unique identifier. Typically, this will match the user id of a user
   * in your system.
   */
  user_id?: string | null;
}

export namespace Recipient {
  export interface Preferences {
    notifications: { [key: string]: Shared.Preference };

    categories?: { [key: string]: Shared.Preference } | null;

    templateId?: string | null;
  }
}

export interface RecipientPreferences {
  categories?: { [key: string]: NotificationPreferenceDetails } | null;

  notifications?: { [key: string]: NotificationPreferenceDetails } | null;
}

export interface Rule {
  until: string;

  start?: string | null;
}

export type TextStyle = 'text' | 'h1' | 'h2' | 'subtext';

export interface UserRecipient {
  /**
   * Deprecated - Use `tenant_id` instead.
   */
  account_id?: string | null;

  /**
   * Context such as tenant_id to send the notification with.
   */
  context?: MessageContext | null;

  data?: { [key: string]: unknown } | null;

  /**
   * The user's email address.
   */
  email?: string | null;

  /**
   * The id of the list to send the message to.
   */
  list_id?: string | null;

  /**
   * The user's preferred ISO 639-1 language code.
   */
  locale?: string | null;

  /**
   * The user's phone number.
   */
  phone_number?: string | null;

  preferences?: UserRecipient.Preferences | null;

  /**
   * The id of the tenant the user is associated with.
   */
  tenant_id?: string | null;

  /**
   * The user's unique identifier. Typically, this will match the user id of a user
   * in your system.
   */
  user_id?: string | null;
}

export namespace UserRecipient {
  export interface Preferences {
    notifications: { [key: string]: Shared.Preference };

    categories?: { [key: string]: Shared.Preference } | null;

    templateId?: string | null;
  }
}

export interface Utm {
  campaign?: string | null;

  content?: string | null;

  medium?: string | null;

  source?: string | null;

  term?: string | null;
}
