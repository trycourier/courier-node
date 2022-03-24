/* tslint:disable:interface-name */
export interface IBrandSnippet {
  format: "handlebars"; // could support other formats in the future
  name: string;
  value: string;
}
export interface IBrandSnippets {
  items: IBrandSnippet[];
}

export interface IBrandColors {
  // CSS compliant color value
  primary?: string;
  secondary?: string;
  tertiary?: string;
}

interface IBrandTemplate {
  backgroundColor?: string;
  blocksBackgroundColor?: string;
  enabled: boolean;
  footer?: string;
  head?: string;
  header?: string;
  width?: string;
}

export interface IBrandTemplateOverride extends IBrandTemplate {
  mjml?: IBrandTemplate;
  footerBackgroundColor?: string;
  footerFullWidth?: boolean;
}

export interface IBrandSettingsSocialPresence {
  inheritDefault?: boolean;
  facebook?: {
    url: string;
  };
  instagram?: {
    url: string;
  };
  linkedin?: {
    url: string;
  };
  medium?: {
    url: string;
  };
  twitter?: {
    url: string;
  };
}

export interface IBrandSettingsEmail {
  templateOverride?: IBrandTemplateOverride;
  head?: {
    inheritDefault: boolean;
    content?: string;
  };
  footer?: {
    content?: object;
    inheritDefault?: boolean;
    markdown?: string;
    social?: IBrandSettingsSocialPresence;
  };
  header?: {
    inheritDefault?: boolean;
    barColor?: string;
    logo?: {
      href?: string;
      image?: string;
    };
  };
}

export interface IBrandSettingsInApp {
  borderRadius?: string;
  disableMessageIcon?: boolean;
  fontFamily?: string;
  placement?: "top" | "bottom" | "left" | "right";
  widgetBackground?: {
    topColor?: string;
    bottomColor?: string;
  };
  colors?: {
    invertHeader?: boolean;
    invertButtons?: boolean;
  };
  icons?: {
    bell?: string;
    message?: string;
  };
  preferences?: {
    templateIds: string[];
  };
}

export type IActionButtonStyle = "button" | "link";
export type IAlignment = "center" | "left" | "right" | "full";

export interface ElementalContent {
  version: "2022-01-01";
  brand?: any; // TODO
  elements: ElementalNode[];
}

export type ElementalNode =
  | ElementalTextNode
  | ElementalMetaNode
  | ElementalChannelNode
  | ElementalImageNode
  | ElementalActionNode
  | ElementalDividerNode
  | ElementalGroupNode
  | ElementalQuoteNode;

export interface ElementalTextNode extends ElementalBaseNode {
  type: "text";
  content: string;
  format?: "markdown";
  locales?: {
    [locale: string]: {
      content: string;
    };
  };
}

export interface ElementalMetaNode extends ElementalBaseNode {
  type: "meta";
  title?: string;
}

export interface ElementalChannelNode extends ElementalBaseNode {
  type: "channel";
  channel: string;
  elements?: ElementalNode[];
  raw?: { [templateName: string]: any };
}

export interface ElementalImageNode extends ElementalBaseNode {
  type: "image";
  src: string;
  href?: string;
  align?: IAlignment;
  altText?: string;
  width?: string;
}

export interface ElementalActionNode extends ElementalBaseNode {
  type: "action";
  content: string;
  href: string;
  actionId?: string;
  style?: IActionButtonStyle;
  align?: IAlignment;
  backgroundColor?: string;
  locales?: {
    [locale: string]: {
      content: string;
    };
  };
}

export interface ElementalDividerNode extends ElementalBaseNode {
  type: "divider";
  color?: string;
}

export interface ElementalGroupNode extends ElementalBaseNode {
  type: "group";
  elements: ElementalNode[];
}

export interface ElementalQuoteNode extends ElementalBaseNode {
  type: "quote";
  content: string;
  align?: IAlignment;
  borderColor?: string;
  textStyle?: "text" | "h1" | "h2" | "subtext";
  locales?: {
    [locale: string]: {
      content: string;
    };
  };
}

interface ElementalBaseNode {
  type: string;
  channels?: string[];
  ref?: string;
  if?: string;
  loop?: string;
}

export interface MessageData extends Record<string, any> {}

export type RuleType = "snooze" | "channel_preferences" | "status";

export interface IRule<T extends RuleType> {
  type: T;
}

export interface ISnoozeRule extends IRule<"snooze"> {
  start?: string;
  until: string;
}

export type Rule = ISnoozeRule;

export type PreferenceStatus = "OPTED_IN" | "OPTED_OUT" | "REQUIRED";

export type ChannelClassification = "direct_message" | "email" | "push";

export interface IPreference {
  status: PreferenceStatus;
  rules?: Rule[];
  channel_preferences?: Array<{
    channel: ChannelClassification;
  }>;
  source?: "subscription" | "list" | "recipient";
}

export interface IPreferences {
  [id: string]: IPreference;
}

export interface IProfilePreferences {
  categories?: IPreferences;
  notifications: IPreferences;
  templateId?: string;
}

interface InvalidListRecipient {
  user_id: string;
  list_pattern: string;
}

type ListRecipientType = Record<string, unknown> &
  {
    [key in keyof InvalidListRecipient]?: never;
  };
export interface ListRecipient extends ListRecipientType {
  list_id?: string;
  data?: MessageData;
}

interface InvalidListPatternRecipient {
  user_id: string;
  list_id: string;
}

type ListPatternRecipientType = Record<string, unknown> &
  {
    [key in keyof InvalidListPatternRecipient]?: never;
  };
export interface ListPatternRecipient extends ListPatternRecipientType {
  list_pattern?: string;
  data?: MessageData;
}

interface InvalidUserRecipient {
  list_id: string;
  list_pattern: string;
}

type UserRecipientType = Record<string, unknown> &
  {
    [key in keyof InvalidUserRecipient]?: never;
  };

export interface UserRecipient extends UserRecipientType {
  data?: MessageData;
  email?: string;
  locale?: string;
  user_id?: string;
  phone_number?: string;
  preferences?: IProfilePreferences;
}

export type Recipient = ListRecipient | ListPatternRecipient | UserRecipient;

export type MessageRecipient = Recipient | Recipient[];

export interface ElementalContentSugar {
  body?: string;
  title?: string;
}

export interface Timeout {
  provider?: number;
  channel?: number;
  message?: number;
  escalation?: number;
  criteria?: "no-escalation" | "delivered" | "viewed" | "engaged";
}

export type Content = ElementalContentSugar | ElementalContent;

export interface BaseMessage {
  brand_id?: string;
  channels?: MessageChannels;
  data?: MessageData;
  metadata?: MessageMetadata;
  providers?: MessageProviders;
  routing?: Routing;
  timeout?: Timeout;
  to: MessageRecipient;
}

interface TrackingOverride {
  open: boolean;
}
export interface MessageProviders {
  [key: string]: {
    override?: Record<string, any>;
    if?: string;
    timeouts?: number;
  };
}

export interface MessageChannelEmailOverride {
  /* tslint:disable-next-line:array-type */
  attachments?: Record<string, any>[];
  bcc?: string;
  // content?: Content; TODO: https://linear.app/trycourier/issue/C-4462/add-content-support-to-channel-overrides
  brand?: {
    snippets?: IBrandSnippets;
    settings?: {
      colors?: IBrandColors;
      email?: IBrandSettingsEmail;
    };
  };
  cc?: string;
  from?: string;
  html?: string;
  reply_to?: string;
  subject?: string;
  text?: string;
  tracking?: TrackingOverride;
}

export interface MessageChannelPushOverride {
  body?: string;
  brand?: {
    snippets?: IBrandSnippets;
    settings?: {
      colors?: IBrandColors;
      inapp?: IBrandSettingsInApp;
    };
  };
  // content?: Content; TODO: https://linear.app/trycourier/issue/C-4462/add-content-support-to-channel-overrides
  click_action?: string;
  data?: Record<string, any>;
  icon?: string;
  title?: string;
}

export interface MessageChannels {
  [key: string]: {
    brand_id?: string;
    providers?: string[];
    routing_method?: "all" | "single";
    if?: string;
    timeouts?: {
      provider?: number;
      channel?: number;
    };
    override?: MessageChannelEmailOverride | MessageChannelPushOverride;
  };
}

export interface Routing {
  method: "all" | "single";
  channels: RoutingChannel[];
}

export type RoutingChannel =
  | RoutingStrategyChannel
  | RoutingStrategyProvider
  | string;

export interface RoutingStrategyChannel<T = Record<string, any>> {
  channel: string;
  config?: T;
  method?: "all" | "single";
  /* tslint:disable-next-line:array-type */
  providers?: (RoutingStrategyProvider | string)[];
  if?: string;
}

export interface RoutingStrategyProvider<T = Record<string, any>> {
  name: string;
  config?: T;
  if?: string;
}

export interface MessageMetadata {
  event?: string;
  tags?: string[];
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
}

export interface ContentMessage extends BaseMessage {
  content: Content;
}

export interface TemplateMessage extends BaseMessage {
  template: string;
}

export type Message = ContentMessage | TemplateMessage;

export interface RequestV2 {
  message: Message;
}
