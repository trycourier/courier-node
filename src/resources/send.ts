// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SendAPI from './send';
import * as Shared from './shared';
import * as TemplatesAPI from './tenants/templates';
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
   *     data: { foo: 'bar' },
   *   },
   * });
   * ```
   */
  message(body: SendMessageParams, options?: RequestOptions): APIPromise<SendMessageResponse> {
    return this._client.post('/send', { body, ...options });
  }
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
export interface ElementalChannelNode extends Shared.ElementalBaseNode {
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
  export interface UnionMember0 extends Shared.ElementalBaseNode {
    type?: 'text';
  }

  export interface UnionMember1 extends Shared.ElementalBaseNode {
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

  export interface UnionMember3 extends Shared.ElementalBaseNode {
    type?: 'image';
  }

  export interface UnionMember4 extends Shared.ElementalBaseNode {
    type?: 'action';
  }

  export interface UnionMember5 extends Shared.ElementalBaseNode {
    type?: 'divider';
  }

  export interface UnionMember6 extends Shared.ElementalBaseNode {
    type?: 'quote';
  }
}

export interface MessageContext {
  /**
   * Tenant id used to load brand/default preferences/context.
   */
  tenant_id?: string | null;
}

export type Recipient = Shared.UserRecipient | Shared.ListRecipient;

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
    brand_id?: string | null;

    /**
     * Define run-time configuration for channels. Valid ChannelId's: email, sms, push,
     * inbox, direct_message, banner, webhook.
     */
    channels?: { [key: string]: Message.Channels } | null;

    /**
     * Describes content that will work for email, inbox, push, chat, or any channel
     * id.
     */
    content?: Shared.ElementalContentSugar | TemplatesAPI.ElementalContent;

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

    /**
     * The id of the template you want to send
     */
    template?: string | null;

    timeout?: Message.Timeout | null;

    /**
     * The recipient or a list of recipients of the message
     */
    to?: Shared.UserRecipient | Shared.ListRecipient | Array<SendAPI.Recipient> | null;
  }

  export namespace Message {
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
      channels: Array<Shared.MessageRoutingChannel>;

      method: 'all' | 'single';
    }

    export interface Timeout {
      channel?: { [key: string]: number } | null;

      criteria?: 'no-escalation' | 'delivered' | 'viewed' | 'engaged' | null;

      escalation?: number | null;

      message?: number | null;

      provider?: { [key: string]: number } | null;
    }
  }
}

export declare namespace Send {
  export {
    type ElementalChannelNode as ElementalChannelNode,
    type ElementalNode as ElementalNode,
    type MessageContext as MessageContext,
    type Recipient as Recipient,
    type Utm as Utm,
    type SendMessageResponse as SendMessageResponse,
    type SendMessageParams as SendMessageParams,
  };
}
