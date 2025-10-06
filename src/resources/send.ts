// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SendAPI from './send';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Send extends APIResource {
  /**
   * Use the send API to send a message to one or more recipients.
   *
   * @example
   * ```ts
   * const response = await client.send.message({
   *   message: {
   *     to: { user_id: 'example_user' },
   *     template: 'template_id',
   *     data: { name: 'Example Name' },
   *   },
   * });
   * ```
   */
  message(body: SendMessageParams, options?: RequestOptions): APIPromise<SendMessageResponse> {
    return this._client.post('/send', { body, ...options });
  }
}

export type Alignment = 'center' | 'left' | 'right' | 'full';

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
export type ElementalNode =
  | ElementalNode.UnionMember0
  | ElementalNode.UnionMember1
  | ElementalNode.UnionMember2
  | ElementalNode.UnionMember3
  | ElementalNode.UnionMember4
  | ElementalNode.UnionMember5
  | ElementalNode.UnionMember6;

export namespace ElementalNode {
  export interface UnionMember0 extends SendAPI.ElementalBaseNode {
    type?: 'text';
  }

  export interface UnionMember1 extends SendAPI.ElementalBaseNode {
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

  export interface UnionMember3 extends SendAPI.ElementalBaseNode {
    type?: 'image';
  }

  export interface UnionMember4 {
    /**
     * A unique id used to identify the action when it is executed.
     */
    action_id?: string | null;

    /**
     * The alignment of the action button. Defaults to "center".
     */
    align?: SendAPI.Alignment | null;

    /**
     * The background color of the action button.
     */
    background_color?: string | null;

    /**
     * The text content of the action shown to the user.
     */
    content?: string;

    /**
     * The target URL of the action.
     */
    href?: string;

    /**
     * Region specific content. See
     * [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/)
     * for more details.
     */
    locales?: { [key: string]: UnionMember4.Locales } | null;

    /**
     * Defaults to `button`.
     */
    style?: 'button' | 'link' | null;

    type?: 'action';
  }

  export namespace UnionMember4 {
    export interface Locales {
      content: string;
    }
  }

  export interface UnionMember5 extends SendAPI.ElementalBaseNode {
    type?: 'divider';
  }

  export interface UnionMember6 extends SendAPI.ElementalBaseNode {
    type?: 'quote';
  }
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

export interface Preference {
  status: 'OPTED_IN' | 'OPTED_OUT' | 'REQUIRED';

  channel_preferences?: Array<Preference.ChannelPreference> | null;

  rules?: Array<Preference.Rule> | null;

  source?: 'subscription' | 'list' | 'recipient' | null;
}

export namespace Preference {
  export interface ChannelPreference {
    channel: 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';
  }

  export interface Rule {
    until: string;

    start?: string | null;
  }
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

  email?: string | null;

  /**
   * The user's preferred ISO 639-1 language code.
   */
  locale?: string | null;

  phone_number?: string | null;

  preferences?: Recipient.Preferences | null;

  /**
   * Tenant id. Will load brand, default preferences and base context data.
   */
  tenant_id?: string | null;

  user_id?: string | null;
}

export namespace Recipient {
  export interface Preferences {
    notifications: { [key: string]: SendAPI.Preference };

    categories?: { [key: string]: SendAPI.Preference } | null;

    templateId?: string | null;
  }
}

export type TextStyle = 'text' | 'h1' | 'h2' | 'subtext';

export interface Utm {
  campaign?: string | null;

  content?: string | null;

  medium?: string | null;

  source?: string | null;

  term?: string | null;
}

export interface SendMessageResponse {
  /**
   * A successful call to `POST /send` returns a `202` status code along with a
   * `requestId` in the response body. For single-recipient requests, the `requestId`
   * is the derived message_id. For multiple recipients, Courier assigns a unique
   * message_id to each derived message.
   */
  requestId: string;
}

export interface SendMessageParams {
  /**
   * The message property has the following primary top-level properties. They define
   * the destination and content of the message.
   */
  message: SendMessageParams.Message;
}

export namespace SendMessageParams {
  /**
   * The message property has the following primary top-level properties. They define
   * the destination and content of the message.
   */
  export interface Message {
    /**
     * Describes content that will work for email, inbox, push, chat, or any channel
     * id.
     */
    content: Message.ElementalContentSugar | Message.ElementalContent;

    brand_id?: string | null;

    /**
     * Define run-time configuration for channels. Valid ChannelId's: email, sms, push,
     * inbox, direct_message, banner, webhook.
     */
    channels?: { [key: string]: Message.Channels } | null;

    context?: SendAPI.MessageContext | null;

    data?: { [key: string]: unknown } | null;

    delay?: Message.Delay | null;

    expiry?: Message.Expiry | null;

    metadata?: Message.Metadata | null;

    preferences?: Message.Preferences | null;

    providers?: { [key: string]: Message.Providers } | null;

    /**
     * Customize which channels/providers Courier may deliver the message through.
     */
    routing?: Message.Routing | null;

    timeout?: Message.Timeout | null;

    /**
     * The recipient or a list of recipients of the message
     */
    to?: Message.UnionMember0 | Array<SendAPI.Recipient> | null;
  }

  export namespace Message {
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

    export interface ElementalContent {
      elements: Array<SendAPI.ElementalNode>;

      /**
       * For example, "2022-01-01"
       */
      version: string;

      brand?: unknown;
    }

    export interface Channels {
      /**
       * Brand id used for rendering.
       */
      brand_id?: string | null;

      /**
       * JS conditional with access to data/profile.
       */
      if?: string | null;

      metadata?: Channels.Metadata | null;

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

    export interface Delay {
      /**
       * The duration of the delay in milliseconds.
       */
      duration?: number | null;

      /**
       * ISO 8601 timestamp or opening_hours-like format.
       */
      until?: string | null;
    }

    export interface Expiry {
      /**
       * Duration in ms or ISO8601 duration (e.g. P1DT4H).
       */
      expires_in: string | number;

      /**
       * Epoch or ISO8601 timestamp with timezone.
       */
      expires_at?: string | null;
    }

    export interface Metadata {
      event?: string | null;

      tags?: Array<string> | null;

      trace_id?: string | null;

      utm?: SendAPI.Utm | null;
    }

    export interface Preferences {
      /**
       * The subscription topic to apply to the message.
       */
      subscription_topic_id: string;
    }

    export interface Providers {
      /**
       * JS conditional with access to data/profile.
       */
      if?: string | null;

      metadata?: Providers.Metadata | null;

      /**
       * Provider-specific overrides.
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
     * Customize which channels/providers Courier may deliver the message through.
     */
    export interface Routing {
      /**
       * A list of channels or providers (or nested routing rules).
       */
      channels: Array<SendAPI.MessageRoutingChannel>;

      method: 'all' | 'single';
    }

    export interface Timeout {
      channel?: { [key: string]: number } | null;

      criteria?: 'no-escalation' | 'delivered' | 'viewed' | 'engaged' | null;

      escalation?: number | null;

      message?: number | null;

      provider?: { [key: string]: number } | null;
    }

    export interface UnionMember0 {
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

      preferences?: UnionMember0.Preferences | null;

      /**
       * Tenant id. Will load brand, default preferences and base context data.
       */
      tenant_id?: string | null;

      user_id?: string | null;
    }

    export namespace UnionMember0 {
      export interface Preferences {
        notifications: { [key: string]: SendAPI.Preference };

        categories?: { [key: string]: SendAPI.Preference } | null;

        templateId?: string | null;
      }
    }
  }
}

export declare namespace Send {
  export {
    type Alignment as Alignment,
    type ElementalBaseNode as ElementalBaseNode,
    type ElementalChannelNode as ElementalChannelNode,
    type ElementalNode as ElementalNode,
    type MessageContext as MessageContext,
    type MessageRouting as MessageRouting,
    type MessageRoutingChannel as MessageRoutingChannel,
    type Preference as Preference,
    type Recipient as Recipient,
    type TextStyle as TextStyle,
    type Utm as Utm,
    type SendMessageResponse as SendMessageResponse,
    type SendMessageParams as SendMessageParams,
  };
}
