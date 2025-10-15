// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

export type Alignment = 'center' | 'left' | 'right' | 'full';

export interface Audience {
  /**
   * A unique identifier representing the audience_id
   */
  id: string;

  created_at: string;

  /**
   * A description of the audience
   */
  description: string;

  /**
   * A single filter to use for filtering
   */
  filter: Filter;

  /**
   * The name of the audience
   */
  name: string;

  updated_at: string;
}

export interface AuditEvent {
  actor: AuditEvent.Actor;

  auditEventId: string;

  source: string;

  target: string;

  timestamp: string;

  type: string;
}

export namespace AuditEvent {
  export interface Actor {
    id: string;

    email?: string | null;
  }
}

export interface AutomationInvokeResponse {
  runId: string;
}

export interface BaseCheck {
  id: string;

  status: 'RESOLVED' | 'FAILED' | 'PENDING';

  type: 'custom';
}

export interface BaseTemplateTenantAssociation {
  /**
   * The template's id
   */
  id: string;

  /**
   * The timestamp at which the template was created
   */
  created_at: string;

  /**
   * The timestamp at which the template was published
   */
  published_at: string;

  /**
   * The timestamp at which the template was last updated
   */
  updated_at: string;

  /**
   * The version of the template
   */
  version: string;
}

export interface Brand {
  id: string;

  created: number;

  name: string;

  updated: number;

  published?: number | null;

  settings?: BrandSettings | null;

  snippets?: BrandSnippets | null;

  version?: string | null;
}

export interface BrandColors {
  primary?: string;

  secondary?: string;

  [k: string]: string | undefined;
}

export interface BrandSettings {
  colors?: BrandColors | null;

  email?: BrandSettingsEmail | null;

  inapp?: BrandSettingsInApp | null;
}

export interface BrandSettingsEmail {
  footer?: EmailFooter | null;

  head?: EmailHead | null;

  header?: EmailHeader | null;

  templateOverride?: BrandSettingsEmail.TemplateOverride | null;
}

export namespace BrandSettingsEmail {
  export interface TemplateOverride extends Shared.BrandTemplate {
    mjml: Shared.BrandTemplate;

    footerBackgroundColor?: string | null;

    footerFullWidth?: boolean | null;
  }
}

export interface BrandSettingsInApp {
  colors: BrandColors;

  icons: Icons;

  widgetBackground: WidgetBackground;

  borderRadius?: string | null;

  disableMessageIcon?: boolean | null;

  fontFamily?: string | null;

  placement?: 'top' | 'bottom' | 'left' | 'right' | null;
}

export interface BrandSnippet {
  name: string;

  value: string;
}

export interface BrandSnippets {
  items?: Array<BrandSnippet> | null;
}

export interface BrandTemplate {
  enabled: boolean;

  backgroundColor?: string | null;

  blocksBackgroundColor?: string | null;

  footer?: string | null;

  head?: string | null;

  header?: string | null;

  width?: string | null;
}

export type ChannelClassification = 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';

export interface ChannelPreference {
  channel: ChannelClassification;
}

export interface Check extends BaseCheck {
  updated: number;
}

export interface DefaultPreferences {
  items?: Array<DefaultPreferences.Item> | null;
}

export namespace DefaultPreferences {
  export interface Item extends Shared.SubscriptionTopicNew {
    /**
     * Topic ID
     */
    id: string;
  }
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
   * `required`.
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

export interface EmailFooter {
  content?: string | null;

  inheritDefault?: boolean | null;
}

export interface EmailHead {
  inheritDefault: boolean;

  content?: string | null;
}

export interface EmailHeader {
  logo: Logo;

  barColor?: string | null;

  inheritDefault?: boolean | null;
}

export interface Filter {
  /**
   * The operator to use for filtering
   */
  operator:
    | 'ENDS_WITH'
    | 'EQ'
    | 'EXISTS'
    | 'GT'
    | 'GTE'
    | 'INCLUDES'
    | 'IS_AFTER'
    | 'IS_BEFORE'
    | 'LT'
    | 'LTE'
    | 'NEQ'
    | 'OMIT'
    | 'STARTS_WITH'
    | 'AND'
    | 'OR';

  /**
   * The attribe name from profile whose value will be operated against the filter
   * value
   */
  path: string;

  /**
   * The value to use for filtering
   */
  value: string;
}

export interface FilterConfig {
  /**
   * The operator to use for filtering
   */
  operator:
    | 'ENDS_WITH'
    | 'EQ'
    | 'EXISTS'
    | 'GT'
    | 'GTE'
    | 'INCLUDES'
    | 'IS_AFTER'
    | 'IS_BEFORE'
    | 'LT'
    | 'LTE'
    | 'NEQ'
    | 'OMIT'
    | 'STARTS_WITH'
    | 'AND'
    | 'OR';

  /**
   * The attribe name from profile whose value will be operated against the filter
   * value
   */
  path: string;

  /**
   * The value to use for filtering
   */
  value: string;
}

export interface Icons {
  bell?: string | null;

  message?: string | null;
}

export type InboundBulkMessage =
  | InboundBulkMessage.InboundBulkTemplateMessage
  | InboundBulkMessage.InboundBulkContentMessage;

export namespace InboundBulkMessage {
  export interface InboundBulkTemplateMessage {
    template: string;

    brand?: string | null;

    data?: { [key: string]: unknown } | null;

    event?: string | null;

    locale?: { [key: string]: { [key: string]: unknown } } | null;

    override?: { [key: string]: unknown } | null;
  }

  export interface InboundBulkContentMessage {
    /**
     * Syntactic sugar to provide a fast shorthand for Courier Elemental Blocks.
     */
    content: Shared.ElementalContentSugar | Shared.ElementalContent;

    brand?: string | null;

    data?: { [key: string]: unknown } | null;

    event?: string | null;

    locale?: { [key: string]: { [key: string]: unknown } } | null;

    override?: { [key: string]: unknown } | null;
  }
}

export interface InboundBulkMessageUser {
  data?: unknown;

  preferences?: RecipientPreferences | null;

  profile?: unknown;

  recipient?: string | null;

  to?: UserRecipient | null;
}

export interface Logo {
  href?: string | null;

  image?: string | null;
}

export interface MessageContext {
  /**
   * Tenant id used to load brand/default preferences/context.
   */
  tenant_id?: string | null;
}

export interface MessageDetails {
  /**
   * A unique identifier associated with the message you wish to retrieve (results
   * from a send).
   */
  id: string;

  /**
   * A UTC timestamp at which the recipient clicked on a tracked link for the first
   * time. Stored as a millisecond representation of the Unix epoch.
   */
  clicked: number;

  /**
   * A UTC timestamp at which the Integration provider delivered the message. Stored
   * as a millisecond representation of the Unix epoch.
   */
  delivered: number;

  /**
   * A UTC timestamp at which Courier received the message request. Stored as a
   * millisecond representation of the Unix epoch.
   */
  enqueued: number;

  /**
   * A unique identifier associated with the event of the delivered message.
   */
  event: string;

  /**
   * A unique identifier associated with the notification of the delivered message.
   */
  notification: string;

  /**
   * A UTC timestamp at which the recipient opened a message for the first time.
   * Stored as a millisecond representation of the Unix epoch.
   */
  opened: number;

  /**
   * A unique identifier associated with the recipient of the delivered message.
   */
  recipient: string;

  /**
   * A UTC timestamp at which Courier passed the message to the Integration provider.
   * Stored as a millisecond representation of the Unix epoch.
   */
  sent: number;

  /**
   * The current status of the message.
   */
  status:
    | 'CANCELED'
    | 'CLICKED'
    | 'DELAYED'
    | 'DELIVERED'
    | 'DIGESTED'
    | 'ENQUEUED'
    | 'FILTERED'
    | 'OPENED'
    | 'ROUTED'
    | 'SENT'
    | 'SIMULATED'
    | 'THROTTLED'
    | 'UNDELIVERABLE'
    | 'UNMAPPED'
    | 'UNROUTABLE';

  /**
   * A message describing the error that occurred.
   */
  error?: string | null;

  /**
   * The reason for the current status of the message.
   */
  reason?:
    | 'BOUNCED'
    | 'FAILED'
    | 'FILTERED'
    | 'NO_CHANNELS'
    | 'NO_PROVIDERS'
    | 'OPT_IN_REQUIRED'
    | 'PROVIDER_ERROR'
    | 'UNPUBLISHED'
    | 'UNSUBSCRIBED'
    | null;
}

export interface MessageRouting {
  channels: Array<MessageRoutingChannel>;

  method: 'all' | 'single';
}

export type MessageRoutingChannel = string | MessageRouting;

export interface NotificationGetContent {
  blocks?: Array<NotificationGetContent.Block> | null;

  channels?: Array<NotificationGetContent.Channel> | null;

  checksum?: string | null;
}

export namespace NotificationGetContent {
  export interface Block {
    id: string;

    type: 'action' | 'divider' | 'image' | 'jsonnet' | 'list' | 'markdown' | 'quote' | 'template' | 'text';

    alias?: string | null;

    checksum?: string | null;

    content?: string | Block.NotificationContentHierarchy | null;

    context?: string | null;

    locales?: { [key: string]: string | Block.NotificationContentHierarchy } | null;
  }

  export namespace Block {
    export interface NotificationContentHierarchy {
      children?: string | null;

      parent?: string | null;
    }

    export interface NotificationContentHierarchy {
      children?: string | null;

      parent?: string | null;
    }
  }

  export interface Channel {
    id: string;

    checksum?: string | null;

    content?: Channel.Content | null;

    locales?: { [key: string]: Channel.Locales } | null;

    type?: string | null;
  }

  export namespace Channel {
    export interface Content {
      subject?: string | null;

      title?: string | null;
    }

    export interface Locales {
      subject?: string | null;

      title?: string | null;
    }
  }
}

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

export interface PutSubscriptionsRecipient {
  recipientId: string;

  preferences?: RecipientPreferences | null;
}

export interface Recipient {
  /**
   * Use `tenant_id` instead.
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

export interface SubscribeToListsRequestItem {
  listId: string;

  preferences?: RecipientPreferences | null;
}

export interface SubscriptionList {
  id: string;

  name: string;

  created?: string | null;

  updated?: string | null;
}

export interface SubscriptionTopicNew {
  status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * The default channels to send to this tenant when has_custom_routing is enabled
   */
  custom_routing?: Array<ChannelClassification> | null;

  /**
   * Override channel routing with custom preferences. This will override any
   * template prefernces that are set, but a user can still customize their
   * preferences
   */
  has_custom_routing?: boolean | null;
}

export interface Tenant {
  /**
   * Id of the tenant.
   */
  id: string;

  /**
   * Name of the tenant.
   */
  name: string;

  /**
   * Brand to be used for the account when one is not specified by the send call.
   */
  brand_id?: string | null;

  /**
   * Defines the preferences used for the account when the user hasn't specified
   * their own.
   */
  default_preferences?: DefaultPreferences | null;

  /**
   * Tenant's parent id (if any).
   */
  parent_tenant_id?: string | null;

  /**
   * Arbitrary properties accessible to a template.
   */
  properties?: { [key: string]: unknown } | null;

  /**
   * A user profile object merged with user profile on send.
   */
  user_profile?: { [key: string]: unknown } | null;
}

export interface TenantAssociation {
  /**
   * Tenant ID for the association between tenant and user
   */
  tenant_id: string;

  /**
   * Additional metadata to be applied to a user profile when used in a tenant
   * context
   */
  profile?: { [key: string]: unknown } | null;

  type?: 'user' | null;

  /**
   * User ID for the association between tenant and user
   */
  user_id?: string | null;
}

export type TextStyle = 'text' | 'h1' | 'h2' | 'subtext';

export interface TopicPreference {
  default_status: PreferenceStatus;

  status: PreferenceStatus;

  topic_id: string;

  topic_name: string;

  /**
   * The Channels a user has chosen to receive notifications through for this topic
   */
  custom_routing?: Array<ChannelClassification> | null;

  has_custom_routing?: boolean | null;
}

export interface UserRecipient {
  /**
   * Use `tenant_id` instead.
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

export interface UserToken {
  provider_key: 'firebase-fcm' | 'apn' | 'expo' | 'onesignal';

  /**
   * Full body of the token. Must match token in URL.
   */
  token?: string | null;

  /**
   * Information about the device the token is associated with.
   */
  device?: UserToken.Device | null;

  /**
   * ISO 8601 formatted date the token expires. Defaults to 2 months. Set to false to
   * disable expiration.
   */
  expiry_date?: string | boolean | null;

  /**
   * Properties sent to the provider along with the token
   */
  properties?: unknown;

  /**
   * Information about the device the token is associated with.
   */
  tracking?: UserToken.Tracking | null;
}

export namespace UserToken {
  /**
   * Information about the device the token is associated with.
   */
  export interface Device {
    /**
     * Id of the advertising identifier
     */
    ad_id?: string | null;

    /**
     * Id of the application the token is used for
     */
    app_id?: string | null;

    /**
     * Id of the device the token is associated with
     */
    device_id?: string | null;

    /**
     * The device manufacturer
     */
    manufacturer?: string | null;

    /**
     * The device model
     */
    model?: string | null;

    /**
     * The device platform i.e. android, ios, web
     */
    platform?: string | null;
  }

  /**
   * Information about the device the token is associated with.
   */
  export interface Tracking {
    /**
     * The IP address of the device
     */
    ip?: string | null;

    /**
     * The latitude of the device
     */
    lat?: string | null;

    /**
     * The longitude of the device
     */
    long?: string | null;

    /**
     * The operating system version
     */
    os_version?: string | null;
  }
}

export interface Utm {
  campaign?: string | null;

  content?: string | null;

  medium?: string | null;

  source?: string | null;

  term?: string | null;
}

export interface WidgetBackground {
  bottomColor?: string | null;

  topColor?: string | null;
}
