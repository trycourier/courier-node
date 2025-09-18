// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SendAPI from './send';
import * as BulkAPI from './bulk';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Send extends APIResource {
  /**
   * Use the send API to send a message to one or more recipients.
   */
  sendMessage(body: SendSendMessageParams, options?: RequestOptions): APIPromise<SendSendMessageResponse> {
    return this._client.post('/send', { body, ...options });
  }
}

export interface BaseMessage {
  brand_id?: string | null;

  /**
   * "Define run-time configuration for one or more channels. If you don't specify
   * channels, the default configuration for each channel will be used. Valid
   * ChannelId's are: email, sms, push, inbox, direct_message, banner, and webhook."
   */
  channels?: { [key: string]: BaseMessage.Channels } | null;

  /**
   * Context to load with this recipient. Will override any context set on
   * message.context.
   */
  context?: MessageContext | null;

  /**
   * An arbitrary object that includes any data you want to pass to the message. The
   * data will populate the corresponding template or elements variables.
   */
  data?: { [key: string]: unknown } | null;

  /**
   * Defines the time to wait before delivering the message. You can specify one of
   * the following options. Duration with the number of milliseconds to delay. Until
   * with an ISO 8601 timestamp that specifies when it should be delivered. Until
   * with an OpenStreetMap opening_hours-like format that specifies the
   * [Delivery Window](https://www.courier.com/docs/platform/sending/failover/#delivery-window)
   * (e.g., 'Mo-Fr 08:00-18:00pm')
   */
  delay?: BaseMessage.Delay | null;

  /**
   * "Expiry allows you to set an absolute or relative time in which a message
   * expires. Note: This is only valid for the Courier Inbox channel as of
   * 12-08-2022."
   */
  expiry?: BaseMessage.Expiry | null;

  /**
   * Metadata such as utm tracking attached with the notification through this
   * channel.
   */
  metadata?: BaseMessage.Metadata | null;

  preferences?: BaseMessage.Preferences | null;

  /**
   * An object whose keys are valid provider identifiers which map to an object.
   */
  providers?: { [key: string]: BaseMessage.Providers } | null;

  /**
   * Allows you to customize which channel(s) Courier will potentially deliver the
   * message. If no routing key is specified, Courier will use the default routing
   * configuration or routing defined by the template.
   */
  routing?: BaseMessage.Routing | null;

  /**
   * Time in ms to attempt the channel before failing over to the next available
   * channel.
   */
  timeout?: BaseMessage.Timeout | null;
}

export namespace BaseMessage {
  export interface Channels {
    /**
     * Id of the brand that should be used for rendering the message. If not specified,
     * the brand configured as default brand will be used.
     */
    brand_id?: string | null;

    /**
     * A JavaScript conditional expression to determine if the message should be sent
     * through the channel. Has access to the data and profile object. For example,
     * `data.name === profile.name`
     */
    if?: string | null;

    metadata?: Channels.Metadata | null;

    /**
     * Channel specific overrides.
     */
    override?: { [key: string]: unknown } | null;

    /**
     * A list of providers enabled for this channel. Courier will select one provider
     * to send through unless routing_method is set to all.
     */
    providers?: Array<string> | null;

    /**
     * The method for selecting the providers to send the message with. Single will
     * send to one of the available providers for this channel, all will send the
     * message through all channels. Defaults to `single`.
     */
    routing_method?: SendAPI.RoutingMethod | null;

    timeouts?: Channels.Timeouts | null;
  }

  export namespace Channels {
    export interface Metadata {
      utm?: SendAPI.Utm | null;
    }

    export interface Timeouts {
      channel?: number | null;

      provider?: number | null;
    }
  }

  /**
   * Defines the time to wait before delivering the message. You can specify one of
   * the following options. Duration with the number of milliseconds to delay. Until
   * with an ISO 8601 timestamp that specifies when it should be delivered. Until
   * with an OpenStreetMap opening_hours-like format that specifies the
   * [Delivery Window](https://www.courier.com/docs/platform/sending/failover/#delivery-window)
   * (e.g., 'Mo-Fr 08:00-18:00pm')
   */
  export interface Delay {
    /**
     * The duration of the delay in milliseconds.
     */
    duration?: number | null;

    /**
     * An ISO 8601 timestamp that specifies when it should be delivered or an
     * OpenStreetMap opening_hours-like format that specifies the
     * [Delivery Window](https://www.courier.com/docs/platform/sending/failover/#delivery-window)
     * (e.g., 'Mo-Fr 08:00-18:00pm')
     */
    until?: string | null;
  }

  /**
   * "Expiry allows you to set an absolute or relative time in which a message
   * expires. Note: This is only valid for the Courier Inbox channel as of
   * 12-08-2022."
   */
  export interface Expiry {
    /**
     * A duration in the form of milliseconds or an ISO8601 Duration format (i.e.
     * P1DT4H).
     */
    expires_in: string | number;

    /**
     * An epoch timestamp or ISO8601 timestamp with timezone
     * `(YYYY-MM-DDThh:mm:ss.sTZD)` that describes the time in which a message expires.
     */
    expires_at?: string | null;
  }

  /**
   * Metadata such as utm tracking attached with the notification through this
   * channel.
   */
  export interface Metadata {
    /**
     * An arbitrary string to tracks the event that generated this request (e.g.
     * 'signup').
     */
    event?: string | null;

    /**
     * An array of up to 9 tags you wish to associate with this request (and
     * corresponding messages) for later analysis. Individual tags cannot be more than
     * 30 characters in length.
     */
    tags?: Array<string> | null;

    /**
     * A unique ID used to correlate this request to processing on your servers. Note:
     * Courier does not verify the uniqueness of this ID.
     */
    trace_id?: string | null;

    /**
     * Identify the campaign that refers traffic to a specific website, and attributes
     * the browser's website session.
     */
    utm?: SendAPI.Utm | null;
  }

  export interface Preferences {
    /**
     * The ID of the subscription topic you want to apply to the message. If this is a
     * templated message, it will override the subscription topic if already associated
     */
    subscription_topic_id: string;
  }

  export interface Providers {
    /**
     * A JavaScript conditional expression to determine if the message should be sent
     * through the channel. Has access to the data and profile object. For example,
     * `data.name === profile.name`
     */
    if?: string | null;

    metadata?: Providers.Metadata | null;

    /**
     * Provider specific overrides.
     */
    override?: { [key: string]: unknown } | null;

    timeouts?: number | null;
  }

  export namespace Providers {
    export interface Metadata {
      utm?: SendAPI.Utm | null;
    }
  }

  /**
   * Allows you to customize which channel(s) Courier will potentially deliver the
   * message. If no routing key is specified, Courier will use the default routing
   * configuration or routing defined by the template.
   */
  export interface Routing {
    /**
     * A list of channels or providers to send the message through. Can also
     * recursively define sub-routing methods, which can be useful for defining
     * advanced push notification delivery strategies.
     */
    channels: Array<Routing.RoutingStrategyChannel | Routing.RoutingStrategyProvider | string>;

    method: SendAPI.RoutingMethod;
  }

  export namespace Routing {
    export interface RoutingStrategyChannel {
      channel: string;

      config?: { [key: string]: unknown } | null;

      if?: string | null;

      method?: SendAPI.RoutingMethod | null;

      providers?: { [key: string]: RoutingStrategyChannel.Providers } | null;
    }

    export namespace RoutingStrategyChannel {
      export interface Providers {
        /**
         * A JavaScript conditional expression to determine if the message should be sent
         * through the channel. Has access to the data and profile object. For example,
         * `data.name === profile.name`
         */
        if?: string | null;

        metadata?: Providers.Metadata | null;

        /**
         * Provider specific overrides.
         */
        override?: { [key: string]: unknown } | null;

        timeouts?: number | null;
      }

      export namespace Providers {
        export interface Metadata {
          utm?: SendAPI.Utm | null;
        }
      }
    }

    export interface RoutingStrategyProvider {
      metadata: RoutingStrategyProvider.Metadata;

      name: string;

      config?: { [key: string]: unknown } | null;

      if?: string | null;
    }

    export namespace RoutingStrategyProvider {
      export interface Metadata {
        utm?: SendAPI.Utm | null;
      }
    }
  }

  /**
   * Time in ms to attempt the channel before failing over to the next available
   * channel.
   */
  export interface Timeout {
    channel?: { [key: string]: number } | null;

    criteria?: 'no-escalation' | 'delivered' | 'viewed' | 'engaged' | null;

    escalation?: number | null;

    message?: number | null;

    provider?: { [key: string]: number } | null;
  }
}

export interface BaseMessageSendTo {
  /**
   * The recipient or a list of recipients of the message
   */
  to?:
    | BaseMessageSendTo.AudienceRecipient
    | BaseMessageSendTo.UnionMember1
    | BaseMessageSendTo.UnionMember2
    | BulkAPI.UserRecipient
    | BaseMessageSendTo.SlackRecipient
    | BaseMessageSendTo.MsTeamsRecipient
    | { [key: string]: unknown }
    | BaseMessageSendTo.PagerdutyRecipient
    | BaseMessageSendTo.WebhookRecipient
    | Array<Recipient>
    | null;
}

export namespace BaseMessageSendTo {
  export interface AudienceRecipient {
    /**
     * A unique identifier associated with an Audience. A message will be sent to each
     * user in the audience.
     */
    audience_id: string;

    data?: { [key: string]: unknown } | null;

    filters?: Array<AudienceRecipient.Filter> | null;
  }

  export namespace AudienceRecipient {
    export interface Filter {
      /**
       * Send to users only if they are member of the account
       */
      operator: 'MEMBER_OF';

      path: 'account_id';

      value: string;
    }
  }

  export interface UnionMember1 {
    data?: { [key: string]: unknown } | null;

    filters?: Array<UnionMember1.Filter> | null;

    list_id?: string | null;
  }

  export namespace UnionMember1 {
    export interface Filter {
      /**
       * Send to users only if they are member of the account
       */
      operator: 'MEMBER_OF';

      path: 'account_id';

      value: string;
    }
  }

  export interface UnionMember2 {
    data?: { [key: string]: unknown } | null;

    list_pattern?: string | null;
  }

  export interface SlackRecipient {
    slack:
      | SlackRecipient.SendToSlackChannel
      | SlackRecipient.SendToSlackEmail
      | SlackRecipient.SendToSlackUserID;
  }

  export namespace SlackRecipient {
    export interface SendToSlackChannel extends SendAPI.SlackBaseProperties {
      channel: string;
    }

    export interface SendToSlackEmail extends SendAPI.SlackBaseProperties {
      email: string;
    }

    export interface SendToSlackUserID extends SendAPI.SlackBaseProperties {
      user_id: string;
    }
  }

  export interface MsTeamsRecipient {
    ms_teams:
      | MsTeamsRecipient.SendToMsTeamsUserID
      | MsTeamsRecipient.SendToMsTeamsEmail
      | MsTeamsRecipient.SendToMsTeamsChannelID
      | MsTeamsRecipient.SendToMsTeamsConversationID
      | MsTeamsRecipient.SendToMsTeamsChannelName;
  }

  export namespace MsTeamsRecipient {
    export interface SendToMsTeamsUserID extends SendAPI.MsTeamsBaseProperties {
      user_id: string;
    }

    export interface SendToMsTeamsEmail extends SendAPI.MsTeamsBaseProperties {
      email: string;
    }

    export interface SendToMsTeamsChannelID extends SendAPI.MsTeamsBaseProperties {
      channel_id: string;
    }

    export interface SendToMsTeamsConversationID extends SendAPI.MsTeamsBaseProperties {
      conversation_id: string;
    }

    export interface SendToMsTeamsChannelName extends SendAPI.MsTeamsBaseProperties {
      channel_name: string;

      team_id: string;
    }
  }

  export interface PagerdutyRecipient {
    pagerduty: PagerdutyRecipient.Pagerduty;
  }

  export namespace PagerdutyRecipient {
    export interface Pagerduty {
      event_action?: string | null;

      routing_key?: string | null;

      severity?: string | null;

      source?: string | null;
    }
  }

  export interface WebhookRecipient {
    webhook: WebhookRecipient.Webhook;
  }

  export namespace WebhookRecipient {
    export interface Webhook {
      /**
       * The URL to send the webhook request to.
       */
      url: string;

      /**
       * Authentication configuration for the webhook request.
       */
      authentication?: Webhook.Authentication | null;

      /**
       * Custom headers to include in the webhook request.
       */
      headers?: { [key: string]: string } | null;

      /**
       * The HTTP method to use for the webhook request. Defaults to POST if not
       * specified.
       */
      method?: 'POST' | 'PUT' | null;

      /**
       * Specifies what profile information is included in the request payload. Defaults
       * to 'limited' if not specified.
       */
      profile?: 'limited' | 'expanded' | null;
    }

    export namespace Webhook {
      /**
       * Authentication configuration for the webhook request.
       */
      export interface Authentication {
        /**
         * The authentication mode to use. Defaults to 'none' if not specified.
         */
        mode: 'none' | 'basic' | 'bearer';

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
    }
  }
}

/**
 * Syntatic Sugar to provide a fast shorthand for Courier Elemental Blocks.
 */
export type Content = Content.ElementalContent | Content.ElementalContentSugar;

export namespace Content {
  export interface ElementalContent {
    elements: Array<SendAPI.ElementalNode>;

    /**
     * For example, "2022-01-01"
     */
    version: string;

    brand?: unknown;
  }

  /**
   * Syntatic Sugar to provide a fast shorthand for Courier Elemental Blocks.
   */
  export interface ElementalContentSugar {
    /**
     * The text content displayed in the notification.
     */
    body: string;

    /**
     * The title to be displayed by supported channels i.e. push, email (as subject)
     */
    title: string;
  }
}

export interface ElementalChannelNode {
  /**
   * The channel the contents of this element should be applied to. Can be `email`,
   * `push`, `direct_message`, `sms` or a provider such as slack
   */
  channel: string;

  channels?: Array<string> | null;

  /**
   * An array of elements to apply to the channel. If `raw` has not been specified,
   * `elements` is `required`.
   */
  elements?: Array<ElementalNode> | null;

  if?: string | null;

  loop?: string | null;

  /**
   * Raw data to apply to the channel. If `elements` has not been specified, `raw` is
   * `required`.
   */
  raw?: { [key: string]: unknown } | null;

  ref?: string | null;
}

export interface ElementalGroupNode {
  /**
   * Sub elements to render.
   */
  elements: Array<ElementalNode>;

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
export type ElementalNode =
  | ElementalNode.UnionMember0
  | ElementalNode.UnionMember1
  | ElementalNode.UnionMember2
  | ElementalNode.UnionMember3
  | ElementalNode.UnionMember4
  | ElementalNode.UnionMember5
  | ElementalNode.UnionMember6
  | ElementalNode.UnionMember7;

export namespace ElementalNode {
  export interface UnionMember0 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'text';
  }

  export interface UnionMember1 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

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
  export interface UnionMember2 extends SendAPI.ElementalChannelNode {
    type?: 'channel';
  }

  export interface UnionMember3 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'image';
  }

  export interface UnionMember4 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'action';
  }

  export interface UnionMember5 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'divider';
  }

  /**
   * Allows you to group elements together. This can be useful when used in
   * combination with "if" or "loop". See
   * [control flow docs](https://www.courier.com/docs/platform/content/elemental/control-flow/)
   * for more details.
   */
  export interface UnionMember6 extends SendAPI.ElementalGroupNode {
    type?: 'group';
  }

  export interface UnionMember7 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'quote';
  }
}

/**
 * Describes the content of the message in a way that will work for email, push,
 * chat, or any channel.
 */
export type Message = Message.ContentMessage | Message.TemplateMessage;

export namespace Message {
  /**
   * Describes the content of the message in a way that will work for email, push,
   * chat, or any channel.
   */
  export interface ContentMessage extends SendAPI.BaseMessage, SendAPI.BaseMessageSendTo {
    /**
     * Describes the content of the message in a way that will work for email, push,
     * chat, or any channel. Either this or template must be specified.
     */
    content: SendAPI.Content;
  }

  /**
   * A template for a type of message that can be sent more than once. For example,
   * you might create an "Appointment Reminder" Notification or “Reset Password”
   * Notifications.
   */
  export interface TemplateMessage extends SendAPI.BaseMessage, SendAPI.BaseMessageSendTo {
    /**
     * The id of the notification template to be rendered and sent to the recipient(s).
     * This field or the content field must be supplied.
     */
    template: string;
  }
}

export interface MessageContext {
  /**
   * An id of a tenant, see
   * [tenants api docs](https://www.courier.com/docs/reference/tenants/). Will load
   * brand, default preferences and any other base context data associated with this
   * tenant.
   */
  tenant_id?: string | null;
}

export interface MsTeamsBaseProperties {
  service_url: string;

  tenant_id: string;
}

export type Recipient =
  | Recipient.AudienceRecipient
  | Recipient.UnionMember1
  | Recipient.UnionMember2
  | BulkAPI.UserRecipient
  | Recipient.SlackRecipient
  | Recipient.MsTeamsRecipient
  | { [key: string]: unknown }
  | Recipient.PagerdutyRecipient
  | Recipient.WebhookRecipient;

export namespace Recipient {
  export interface AudienceRecipient {
    /**
     * A unique identifier associated with an Audience. A message will be sent to each
     * user in the audience.
     */
    audience_id: string;

    data?: { [key: string]: unknown } | null;

    filters?: Array<AudienceRecipient.Filter> | null;
  }

  export namespace AudienceRecipient {
    export interface Filter {
      /**
       * Send to users only if they are member of the account
       */
      operator: 'MEMBER_OF';

      path: 'account_id';

      value: string;
    }
  }

  export interface UnionMember1 {
    data?: { [key: string]: unknown } | null;

    filters?: Array<UnionMember1.Filter> | null;

    list_id?: string | null;
  }

  export namespace UnionMember1 {
    export interface Filter {
      /**
       * Send to users only if they are member of the account
       */
      operator: 'MEMBER_OF';

      path: 'account_id';

      value: string;
    }
  }

  export interface UnionMember2 {
    data?: { [key: string]: unknown } | null;

    list_pattern?: string | null;
  }

  export interface SlackRecipient {
    slack:
      | SlackRecipient.SendToSlackChannel
      | SlackRecipient.SendToSlackEmail
      | SlackRecipient.SendToSlackUserID;
  }

  export namespace SlackRecipient {
    export interface SendToSlackChannel extends SendAPI.SlackBaseProperties {
      channel: string;
    }

    export interface SendToSlackEmail extends SendAPI.SlackBaseProperties {
      email: string;
    }

    export interface SendToSlackUserID extends SendAPI.SlackBaseProperties {
      user_id: string;
    }
  }

  export interface MsTeamsRecipient {
    ms_teams:
      | MsTeamsRecipient.SendToMsTeamsUserID
      | MsTeamsRecipient.SendToMsTeamsEmail
      | MsTeamsRecipient.SendToMsTeamsChannelID
      | MsTeamsRecipient.SendToMsTeamsConversationID
      | MsTeamsRecipient.SendToMsTeamsChannelName;
  }

  export namespace MsTeamsRecipient {
    export interface SendToMsTeamsUserID extends SendAPI.MsTeamsBaseProperties {
      user_id: string;
    }

    export interface SendToMsTeamsEmail extends SendAPI.MsTeamsBaseProperties {
      email: string;
    }

    export interface SendToMsTeamsChannelID extends SendAPI.MsTeamsBaseProperties {
      channel_id: string;
    }

    export interface SendToMsTeamsConversationID extends SendAPI.MsTeamsBaseProperties {
      conversation_id: string;
    }

    export interface SendToMsTeamsChannelName extends SendAPI.MsTeamsBaseProperties {
      channel_name: string;

      team_id: string;
    }
  }

  export interface PagerdutyRecipient {
    pagerduty: PagerdutyRecipient.Pagerduty;
  }

  export namespace PagerdutyRecipient {
    export interface Pagerduty {
      event_action?: string | null;

      routing_key?: string | null;

      severity?: string | null;

      source?: string | null;
    }
  }

  export interface WebhookRecipient {
    webhook: WebhookRecipient.Webhook;
  }

  export namespace WebhookRecipient {
    export interface Webhook {
      /**
       * The URL to send the webhook request to.
       */
      url: string;

      /**
       * Authentication configuration for the webhook request.
       */
      authentication?: Webhook.Authentication | null;

      /**
       * Custom headers to include in the webhook request.
       */
      headers?: { [key: string]: string } | null;

      /**
       * The HTTP method to use for the webhook request. Defaults to POST if not
       * specified.
       */
      method?: 'POST' | 'PUT' | null;

      /**
       * Specifies what profile information is included in the request payload. Defaults
       * to 'limited' if not specified.
       */
      profile?: 'limited' | 'expanded' | null;
    }

    export namespace Webhook {
      /**
       * Authentication configuration for the webhook request.
       */
      export interface Authentication {
        /**
         * The authentication mode to use. Defaults to 'none' if not specified.
         */
        mode: 'none' | 'basic' | 'bearer';

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
    }
  }
}

export type RoutingMethod = 'all' | 'single';

export interface SlackBaseProperties {
  access_token: string;
}

export interface Utm {
  campaign?: string | null;

  content?: string | null;

  medium?: string | null;

  source?: string | null;

  term?: string | null;
}

export interface SendSendMessageResponse {
  /**
   * A successful call to `POST /send` returns a `202` status code along with a
   * `requestId` in the response body.
   *
   * For send requests that have a single recipient, the `requestId` is assigned to
   * the derived message as its message_id. Therefore the `requestId` can be supplied
   * to the Message's API for single recipient messages.
   *
   * For send requests that have multiple recipients (accounts, audiences, lists,
   * etc.), Courier assigns a unique id to each derived message as its `message_id`.
   * Therefore the `requestId` cannot be supplied to the Message's API for
   * single-recipient messages.
   */
  requestId: string;
}

export interface SendSendMessageParams {
  /**
   * Defines the message to be delivered
   */
  message: Message;
}

export declare namespace Send {
  export {
    type BaseMessage as BaseMessage,
    type BaseMessageSendTo as BaseMessageSendTo,
    type Content as Content,
    type ElementalChannelNode as ElementalChannelNode,
    type ElementalGroupNode as ElementalGroupNode,
    type ElementalNode as ElementalNode,
    type Message as Message,
    type MessageContext as MessageContext,
    type MsTeamsBaseProperties as MsTeamsBaseProperties,
    type Recipient as Recipient,
    type RoutingMethod as RoutingMethod,
    type SlackBaseProperties as SlackBaseProperties,
    type Utm as Utm,
    type SendSendMessageResponse as SendSendMessageResponse,
    type SendSendMessageParams as SendSendMessageParams,
  };
}
