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

/**
 * Apple Push Notification device tokens. Supply either a single `token` or a
 * `tokens` value. A bare string is rejected by the provider — the token must be
 * wrapped in this object.
 */
export type Apn = Token | MultipleTokens;

export interface AudienceFilter {
  /**
   * Send to users only if they are member of the account
   */
  operator: 'MEMBER_OF';

  path: 'account_id';

  value: string;
}

/**
 * Filter configuration for audience membership containing an array of filter rules
 */
export interface AudienceFilterConfig {
  /**
   * Array of filter rules (single conditions or nested groups)
   */
  filters: Array<FilterConfig>;

  /**
   * The logical operator (AND/OR) combining the rules in `filters`. Required when
   * `filters` contains more than one rule. If omitted, the top-level `operator`
   * field on the request is used instead.
   */
  operator?: 'AND' | 'OR';
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

/**
 * Routes a push notification through the AWS SNS provider. The target ARN must be
 * nested under `aws_sns` — a top-level `target_arn` on the profile is ignored by
 * the provider.
 */
export interface AwsSns {
  /**
   * The ARN of the SNS platform endpoint, topic, or application to publish to.
   */
  target_arn: string;
}

export interface Channel {
  /**
   * Brand id used for rendering.
   */
  brand_id?: string | null;

  /**
   * JS conditional with access to data/profile.
   */
  if?: string | null;

  metadata?: ChannelMetadata | null;

  /**
   * Channel specific overrides.
   */
  override?: { [key: string]: unknown } | null;

  /**
   * Providers enabled for this channel.
   */
  providers?: Array<string> | null;

  /**
   * Defaults to `single`.
   */
  routing_method?: 'all' | 'single' | null;

  timeouts?: Timeouts | null;
}

export type ChannelClassification = 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';

export interface ChannelMetadata {
  utm?: Utm | null;
}

export interface ChannelPreference {
  channel: ChannelClassification;
}

export type DeviceType = string;

export type Discord = SendToChannel | SendDirectMessage;

/**
 * Allows the user to execute an action. Can be a button or a link.
 */
export interface ElementalActionNode extends ElementalBaseNode {
  /**
   * The text content of the action shown to the user.
   */
  content: string;

  /**
   * The target URL of the action.
   */
  href: string;

  /**
   * A unique id used to identify the action when it is executed.
   */
  action_id?: string | null;

  /**
   * The alignment of the action button. Defaults to "center".
   */
  align?: Alignment | null;

  /**
   * The background color of the action button.
   */
  background_color?: string | null;

  /**
   * CSS border-radius applied to the action button. For example, `4px`
   */
  border_radius?: string | null;

  /**
   * CSS border width applied to the action button. For example, `1px`
   */
  border_size?: string | null;

  /**
   * When true, the action's href is not rewritten for click-through tracking, even
   * when click-through tracking is enabled for the workspace.
   */
  disable_tracking?: boolean | null;

  /**
   * CSS font-size applied to the action button label. For example, `14px`
   */
  font_size?: string | null;

  /**
   * Region specific content. See
   * [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/)
   * for more details.
   */
  locales?: Locales | null;

  /**
   * CSS padding applied to the action button. For example, `8px 16px`
   */
  padding?: string | null;

  /**
   * Defaults to `button`.
   */
  style?: 'button' | 'link' | null;
}

/**
 * Allows the user to execute an action. Can be a button or a link.
 */
export interface ElementalActionNodeWithType extends ElementalActionNode {
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
  channel?: string;

  /**
   * An array of elements to apply to the channel. If `raw` has not been specified,
   * `elements` is `required`. Channel elements cannot nest, so these are any node
   * except another channel block.
   */
  elements?: Array<ElementalNodeNonChannel> | null;

  /**
   * Email only. Document-level base font size (CSS px, e.g. `16px`) for body content
   * — text, quote, list and action button labels. Heading styles (`h1`/`h2`/`h3`)
   * and `subtext` keep their preset sizes.
   */
  font_size?: string | null;

  /**
   * Email only. Document-level line height (CSS px or unitless multiplier, e.g.
   * `24px` or `1.5`) applied to all body content unless overridden per block.
   */
  line_height?: string | null;

  /**
   * Email only. Document-level body padding applied once around the email body, as a
   * CSS px shorthand (1–4 values), e.g. `48px 64px`.
   */
  padding?: string | null;

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

/**
 * Renders a dividing line between elements.
 */
export interface ElementalDividerNode extends ElementalBaseNode {
  /**
   * The CSS color to render the line with. For example, `#fff`
   */
  color?: string | null;
}

/**
 * Renders a dividing line between elements.
 */
export interface ElementalDividerNodeWithType extends ElementalDividerNode {
  type?: 'divider';
}

/**
 * Raw HTML string inside an Elemental document. When rendering a message, this
 * node is turned into output only for the email channel; for other channels it
 * produces no blocks.
 */
export interface ElementalHTMLNode extends ElementalBaseNode {
  /**
   * Raw HTML string to render inside the notification.
   */
  content: string;

  /**
   * Region specific content. See
   * [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/)
   * for more details.
   */
  locales?: Locales | null;
}

/**
 * Raw HTML string inside an Elemental document. When rendering a message, this
 * node is turned into output only for the email channel; for other channels it
 * produces no blocks.
 */
export interface ElementalHTMLNodeWithType extends ElementalHTMLNode {
  type?: 'html';
}

/**
 * Used to embed an image into the notification.
 */
export interface ElementalImageNode extends ElementalBaseNode {
  /**
   * The source of the image.
   */
  src: string;

  /**
   * The alignment of the image.
   */
  align?: Alignment | null;

  /**
   * Alternate text for the image.
   */
  alt_text?: string | null;

  /**
   * CSS border color applied to the image. For example, `#ccc`
   */
  border_color?: string | null;

  /**
   * CSS border width applied to the image. For example, `1px`
   */
  border_size?: string | null;

  /**
   * A URL to link to when the image is clicked.
   */
  href?: string | null;

  /**
   * CSS padding applied around the image. For example, `10px`
   */
  padding?: string | null;

  /**
   * CSS width properties to apply to the image. For example, 50px
   */
  width?: string | null;
}

/**
 * Used to embed an image into the notification.
 */
export interface ElementalImageNodeWithType extends ElementalImageNode {
  type?: 'image';
}

/**
 * The meta element contains information describing the notification that may be
 * used by a particular channel or provider. One important field is the title field
 * which will be used as the title for channels that support it.
 */
export interface ElementalMetaNode extends ElementalBaseNode {
  /**
   * The title to be displayed by supported channels. For example, the email subject.
   */
  title?: string | null;
}

/**
 * The meta element contains information describing the notification that may be
 * used by a particular channel or provider. One important field is the title field
 * which will be used as the title for channels that support it.
 */
export interface ElementalMetaNodeWithType extends ElementalMetaNode {
  type?: 'meta';
}

/**
 * Represents a body of text to be rendered inside of the notification.
 */
export type ElementalNode =
  | ElementalTextNodeWithType
  | ElementalMetaNodeWithType
  | ElementalChannelNodeWithType
  | ElementalImageNodeWithType
  | ElementalActionNodeWithType
  | ElementalDividerNodeWithType
  | ElementalQuoteNodeWithType
  | ElementalHTMLNodeWithType;

/**
 * Any Elemental node except a channel block. Channel elements are only valid as
 * top-level elements, so the `elements` nested inside one can never be another
 * channel. Keeping this union channel-free also keeps the schema acyclic; a
 * recursive `$ref` here breaks the generated Python models.
 */
export type ElementalNodeNonChannel =
  | ElementalNodeNonChannel.UnionMember0
  | ElementalNodeNonChannel.UnionMember1
  | ElementalNodeNonChannel.UnionMember2
  | ElementalNodeNonChannel.UnionMember3
  | ElementalNodeNonChannel.UnionMember4
  | ElementalNodeNonChannel.UnionMember5
  | ElementalNodeNonChannel.UnionMember6;

export namespace ElementalNodeNonChannel {
  /**
   * Represents a body of text to be rendered inside of the notification.
   */
  export interface UnionMember0 extends Shared.ElementalTextNode {
    type?: 'text';
  }

  /**
   * The meta element contains information describing the notification that may be
   * used by a particular channel or provider. One important field is the title field
   * which will be used as the title for channels that support it.
   */
  export interface UnionMember1 extends Shared.ElementalMetaNode {
    type?: 'meta';
  }

  /**
   * Used to embed an image into the notification.
   */
  export interface UnionMember2 extends Shared.ElementalImageNode {
    type?: 'image';
  }

  /**
   * Allows the user to execute an action. Can be a button or a link.
   */
  export interface UnionMember3 extends Shared.ElementalActionNode {
    type?: 'action';
  }

  /**
   * Renders a dividing line between elements.
   */
  export interface UnionMember4 extends Shared.ElementalDividerNode {
    type?: 'divider';
  }

  /**
   * Renders a quote block.
   */
  export interface UnionMember5 extends Shared.ElementalQuoteNode {
    type?: 'quote';
  }

  /**
   * Raw HTML string inside an Elemental document. When rendering a message, this
   * node is turned into output only for the email channel; for other channels it
   * produces no blocks.
   */
  export interface UnionMember6 extends Shared.ElementalHTMLNode {
    type?: 'html';
  }
}

/**
 * Renders a quote block.
 */
export interface ElementalQuoteNode extends ElementalBaseNode {
  /**
   * The text value of the quote.
   */
  content: string;

  /**
   * Alignment of the quote.
   */
  align?: Alignment | null;

  /**
   * CSS border color property. For example, `#fff`
   */
  border_color?: string | null;

  /**
   * CSS px font size for this quote block, e.g. `16px`. Overrides the size of the
   * `text_style` preset. Email only.
   */
  font_size?: string | null;

  /**
   * CSS line height for this quote block, as a px value or a unitless multiplier,
   * e.g. `24px` or `1.5`. Email only.
   */
  line_height?: string | null;

  /**
   * Region specific content. See
   * [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/)
   * for more details.
   */
  locales?: Locales | null;

  text_style?: TextStyle;
}

/**
 * Renders a quote block.
 */
export interface ElementalQuoteNodeWithType extends ElementalQuoteNode {
  type?: 'quote';
}

/**
 * Represents a body of text to be rendered inside of the notification.
 */
export interface ElementalTextNode extends ElementalBaseNode {
  /**
   * Text alignment.
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Apply bold to the text
   */
  bold?: string | null;

  /**
   * Specifies the color of text. Can be any valid css color value
   */
  color?: string | null;

  /**
   * The text content displayed in the notification. Either this field must be
   * specified, or the elements field
   */
  content?: string;

  /**
   * CSS px font size for this text block, e.g. `16px`. Overrides the size of the
   * `text_style` preset. Email only.
   */
  font_size?: string | null;

  format?: 'markdown' | null;

  /**
   * Apply italics to the text
   */
  italic?: string | null;

  /**
   * CSS line height for this text block, as a px value or a unitless multiplier,
   * e.g. `24px` or `1.5`. Email only.
   */
  line_height?: string | null;

  /**
   * Region specific content. See
   * [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/)
   * for more details.
   */
  locales?: Locales | null;

  /**
   * Apply a strike through the text
   */
  strikethrough?: string | null;

  /**
   * Allows the text to be rendered as a heading level.
   */
  text_style?: TextStyle | null;

  /**
   * Apply an underline to the text
   */
  underline?: string | null;
}

/**
 * Represents a body of text to be rendered inside of the notification.
 */
export interface ElementalTextNodeWithType extends ElementalTextNode {
  type?: 'text';
}

/**
 * Expo push tokens. Supply either a single `token` or a `tokens` value.
 */
export type Expo = Token | MultipleTokens;

/**
 * A filter rule that can be either a single condition (with path/value) or a
 * nested group (with filters array). Use comparison operators (EQ, GT, etc.) for
 * single conditions, and logical operators (AND, OR) for nested groups.
 */
export interface FilterConfig {
  /**
   * The operator for this filter. Use comparison operators (EQ, GT, LT, GTE, LTE,
   * NEQ, EXISTS, INCLUDES, STARTS_WITH, ENDS_WITH, IS_BEFORE, IS_AFTER, OMIT) for
   * single conditions, or logical operators (AND, OR) for nested filter groups.
   */
  operator: string;

  /**
   * Nested filter rules to combine with AND/OR. Required for nested filter groups,
   * not used for single filter conditions.
   */
  filters?: Array<FilterConfig>;

  /**
   * The attribute path from the user profile to filter on. Required for single
   * filter conditions, not used for nested filter groups.
   */
  path?: string;

  /**
   * The value to compare against. Required for single filter conditions, not used
   * for nested filter groups.
   */
  value?: string;
}

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

/**
 * Region specific content. See
 * [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/)
 * for more details.
 */
export type Locales = { [key: string]: Locales.item };

export namespace Locales {
  export interface item {
    content: string;
  }
}

export type MessageChannels = { [key: string]: Channel };

export interface MessageContext {
  /**
   * Tenant id used to load brand/default preferences/context.
   */
  tenant_id?: string | null;
}

export type MessageProviders = { [key: string]: MessageProvidersType };

export interface MessageProvidersType {
  /**
   * JS conditional with access to data/profile.
   */
  if?: string | null;

  metadata?: Metadata | null;

  /**
   * Provider-specific overrides.
   */
  override?: { [key: string]: unknown } | null;

  timeouts?: number | null;
}

export interface MessageRouting {
  channels: Array<MessageRoutingChannel>;

  method: 'all' | 'single';
}

export type MessageRoutingChannel = string | MessageRouting;

export interface Metadata {
  utm?: Utm | null;
}

/**
 * Provide at least one of `tenant_id` or `service_url`. If you provide both, they
 * must agree.
 */
export type MsTeams =
  | SendToMsTeamsUserID
  | SendToMsTeamsEmail
  | SendToMsTeamsChannelID
  | SendToMsTeamsConversationID
  | SendToMsTeamsChannelName;

/**
 * Tenant context shared by every MS Teams send variant. Provide at least one of
 * `tenant_id` or `service_url`. If you provide both, they must agree — a
 * `service_url` pointing at a different Microsoft tenant than `tenant_id` is
 * rejected.
 */
export interface MsTeamsBaseProperties {
  service_url?: string;

  tenant_id?: string;
}

/**
 * Send via Microsoft Teams
 */
export interface MsTeamsRecipient {
  /**
   * Provide at least one of `tenant_id` or `service_url`. If you provide both, they
   * must agree.
   */
  ms_teams: MsTeams;
}

export interface MultipleTokens {
  /**
   * One device token, or an array of them. The values are the token strings
   * themselves — not objects.
   */
  tokens: string | Array<string>;
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

/**
 * Sends directly to a Microsoft Teams channel by its Bot Framework ID. Still
 * provide at least one of `tenant_id` or `service_url` — sends without either have
 * failed Bot Framework authentication in testing.
 */
export interface SendToMsTeamsChannelID {
  channel_id: string;

  service_url?: string;

  tenant_id?: string;
}

/**
 * `team_id` is required alongside `channel_name`. Also provide at least one of
 * `tenant_id` or `service_url`; if you provide both, they must agree.
 */
export interface SendToMsTeamsChannelName {
  channel_name: string;

  team_id: string;

  service_url?: string;

  tenant_id?: string;
}

export interface SendToMsTeamsConversationID {
  conversation_id: string;

  service_url: string;

  tenant_id: string;
}

/**
 * Provide at least one of `tenant_id` or `service_url`. If you provide both, they
 * must agree.
 */
export interface SendToMsTeamsEmail {
  email: string;

  service_url?: string;

  tenant_id?: string;
}

/**
 * Provide at least one of `tenant_id` or `service_url`. If you provide both, they
 * must agree.
 */
export interface SendToMsTeamsUserID {
  user_id: string;

  service_url?: string;

  tenant_id?: string;
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

export interface Timeouts {
  channel?: number | null;

  provider?: number | null;
}

export interface Token {
  token: string;
}

export interface UserProfile {
  address?: UserProfile.Address | null;

  airship?: AirshipProfile | null;

  /**
   * Apple Push Notification device tokens. Supply either a single `token` or a
   * `tokens` value. A bare string is rejected by the provider — the token must be
   * wrapped in this object.
   */
  apn?: Apn | null;

  /**
   * Routes a push notification through the AWS SNS provider. The target ARN must be
   * nested under `aws_sns` — a top-level `target_arn` on the profile is ignored by
   * the provider.
   */
  aws_sns?: AwsSns | null;

  birthdate?: string | null;

  /**
   * A free form object. Due to a limitation of the API Explorer, you can only enter
   * string key/values below, but this API accepts more complex object structures.
   */
  custom?: { [key: string]: unknown } | null;

  discord?: Discord | null;

  email?: string | null;

  email_verified?: boolean | null;

  /**
   * Expo push tokens. Supply either a single `token` or a `tokens` value.
   */
  expo?: Expo | null;

  facebookPSID?: string | null;

  family_name?: string | null;

  firebaseToken?: UserProfileFirebaseToken | null;

  gender?: string | null;

  given_name?: string | null;

  intercom?: Intercom | null;

  locale?: string | null;

  middle_name?: string | null;

  /**
   * Provide at least one of `tenant_id` or `service_url`. If you provide both, they
   * must agree.
   */
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
