// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

export interface AirshipProfile {
  audience: AirshipProfileAudience;

  device_types: Array<DeviceType>;
}

export interface AirshipProfileAudience {
  named_user: string;
}

export type Alignment = 'center' | 'left' | 'right' | 'full';

export interface AudienceFilter {
  /**
   * Send to users only if they are member of the account
   */
  operator: 'MEMBER_OF';

  path: 'account_id';

  value: string;
}

/**
 * Send to all users in an audience
 */
export interface AudienceRecipient {
  /**
   * A unique identifier associated with an Audience. A message will be sent to each
   * user in the audience.
   */
  audience_id: string;

  data?: { [key: string]: unknown } | null;

  filters?: Array<AudienceFilter> | null;
}

export type ChannelClassification = 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';

export interface ChannelPreference {
  channel: ChannelClassification;
}

export type DeviceType = string;

export type Discord = SendToChannel | SendDirectMessage;

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

export type Expo = Token | MultipleTokens;

export interface Intercom {
  from: string;

  to: IntercomRecipient;
}

export interface IntercomRecipient {
  id: string;
}

export interface ListFilter {
  /**
   * Send to users only if they are member of the account
   */
  operator: 'MEMBER_OF';

  path: 'account_id';

  value: string;
}

/**
 * Send to users in lists matching a pattern
 */
export interface ListPatternRecipient {
  data?: { [key: string]: unknown } | null;

  list_pattern?: string | null;
}

/**
 * Send to all users in a specific list
 */
export interface ListRecipient {
  data?: { [key: string]: unknown } | null;

  filters?: Array<ListFilter> | null;

  list_id?: string | null;
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

export type MsTeams =
  | SendToMsTeamsUserID
  | SendToMsTeamsEmail
  | SendToMsTeamsChannelID
  | SendToMsTeamsConversationID
  | SendToMsTeamsChannelName;

export interface MsTeamsBaseProperties {
  service_url: string;

  tenant_id: string;
}

/**
 * Send via Microsoft Teams
 */
export interface MsTeamsRecipient {
  ms_teams: MsTeams;
}

export interface MultipleTokens {
  tokens: Array<Token>;
}

export interface NotificationPreferenceDetails {
  status: PreferenceStatus;

  channel_preferences?: Array<ChannelPreference> | null;

  rules?: Array<Rule> | null;
}

export interface Pagerduty {
  event_action?: string | null;

  routing_key?: string | null;

  severity?: string | null;

  source?: string | null;
}

/**
 * Send via PagerDuty
 */
export interface PagerdutyRecipient {
  pagerduty: Pagerduty;
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

export interface RecipientPreferences {
  categories?: { [key: string]: NotificationPreferenceDetails } | null;

  notifications?: { [key: string]: NotificationPreferenceDetails } | null;
}

export interface Rule {
  until: string;

  start?: string | null;
}

export interface SendDirectMessage {
  user_id: string;
}

export interface SendToChannel {
  channel_id: string;
}

export interface SendToMsTeamsChannelID {
  channel_id: string;

  service_url: string;

  tenant_id: string;
}

export interface SendToMsTeamsChannelName {
  channel_name: string;

  service_url: string;

  team_id: string;

  tenant_id: string;
}

export interface SendToMsTeamsConversationID {
  conversation_id: string;

  service_url: string;

  tenant_id: string;
}

export interface SendToMsTeamsEmail {
  email: string;

  service_url: string;

  tenant_id: string;
}

export interface SendToMsTeamsUserID {
  service_url: string;

  tenant_id: string;

  user_id: string;
}

export interface SendToSlackChannel {
  access_token: string;

  channel: string;
}

export interface SendToSlackEmail {
  access_token: string;

  email: string;
}

export interface SendToSlackUserID {
  access_token: string;

  user_id: string;
}

export type Slack = SendToSlackChannel | SendToSlackEmail | SendToSlackUserID;

export interface SlackBaseProperties {
  access_token: string;
}

/**
 * Send via Slack (channel, email, or user_id)
 */
export interface SlackRecipient {
  slack: Slack;
}

export type TextStyle = 'text' | 'h1' | 'h2' | 'subtext';

export interface Token {
  token: string;
}

export interface UserProfile {
  address?: UserProfile.Address | null;

  airship?: AirshipProfile | null;

  apn?: string | null;

  birthdate?: string | null;

  /**
   * A free form object. Due to a limitation of the API Explorer, you can only enter
   * string key/values below, but this API accepts more complex object structures.
   */
  custom?: { [key: string]: unknown } | null;

  discord?: Discord | null;

  email?: string | null;

  email_verified?: boolean | null;

  expo?: Expo | null;

  facebookPSID?: string | null;

  family_name?: string | null;

  firebaseToken?: UserProfileFirebaseToken | null;

  gender?: string | null;

  given_name?: string | null;

  intercom?: Intercom | null;

  locale?: string | null;

  middle_name?: string | null;

  ms_teams?: MsTeams | null;

  name?: string | null;

  nickname?: string | null;

  phone_number?: string | null;

  phone_number_verified?: boolean | null;

  picture?: string | null;

  preferred_name?: string | null;

  profile?: string | null;

  slack?: Slack | null;

  sub?: string | null;

  target_arn?: string | null;

  updated_at?: string | null;

  website?: string | null;

  zoneinfo?: string | null;
}

export namespace UserProfile {
  export interface Address {
    country: string;

    formatted: string;

    locality: string;

    postal_code: string;

    region: string;

    street_address: string;
  }
}

export type UserProfileFirebaseToken = string | Array<string>;

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

export type WebhookAuthMode = 'none' | 'basic' | 'bearer';

export interface WebhookAuthentication {
  /**
   * The authentication mode to use. Defaults to 'none' if not specified.
   */
  mode: WebhookAuthMode;

  /**
   * Token for bearer authentication.
   */
  token?: string | null;

  /**
   * Password for basic authentication.
   */
  password?: string | null;

  /**
   * Username for basic authentication.
   */
  username?: string | null;
}

export type WebhookMethod = 'POST' | 'PUT';

export interface WebhookProfile {
  /**
   * The URL to send the webhook request to.
   */
  url: string;

  /**
   * Authentication configuration for the webhook request.
   */
  authentication?: WebhookAuthentication | null;

  /**
   * Custom headers to include in the webhook request.
   */
  headers?: { [key: string]: string } | null;

  /**
   * The HTTP method to use for the webhook request. Defaults to POST if not
   * specified.
   */
  method?: WebhookMethod | null;

  /**
   * Specifies what profile information is included in the request payload. Defaults
   * to 'limited' if not specified.
   */
  profile?: WebhookProfileType | null;
}

export type WebhookProfileType = 'limited' | 'expanded';

/**
 * Send via webhook
 */
export interface WebhookRecipient {
  webhook: WebhookProfile;
}
