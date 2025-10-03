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
   * const response = await client.send.sendMessage({
   *   message: {
   *     to: { email: 'email@example.com' },
   *     content: {
   *       title: 'Welcome!',
   *       body: 'Thanks for signing up, {{name}}',
   *     },
   *     data: { name: 'Peter Parker' },
   *     routing: { method: 'single', channels: ['email'] },
   *   },
   * });
   * ```
   */
  sendMessage(body: SendSendMessageParams, options?: RequestOptions): APIPromise<SendSendMessageResponse> {
    return this._client.post('/send', { body, ...options });
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
    notifications: { [key: string]: Preferences.Notifications };

    categories?: { [key: string]: Preferences.Categories } | null;

    templateId?: string | null;
  }

  export namespace Preferences {
    export interface Notifications {
      status: 'OPTED_IN' | 'OPTED_OUT' | 'REQUIRED';

      channel_preferences?: Array<Notifications.ChannelPreference> | null;

      rules?: Array<Notifications.Rule> | null;

      source?: 'subscription' | 'list' | 'recipient' | null;
    }

    export namespace Notifications {
      export interface ChannelPreference {
        channel: 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';
      }

      export interface Rule {
        until: string;

        start?: string | null;
      }
    }

    export interface Categories {
      status: 'OPTED_IN' | 'OPTED_OUT' | 'REQUIRED';

      channel_preferences?: Array<Categories.ChannelPreference> | null;

      rules?: Array<Categories.Rule> | null;

      source?: 'subscription' | 'list' | 'recipient' | null;
    }

    export namespace Categories {
      export interface ChannelPreference {
        channel: 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';
      }

      export interface Rule {
        until: string;

        start?: string | null;
      }
    }
  }
}

export interface SendSendMessageResponse {
  /**
   * A successful call to `POST /send` returns a `202` status code along with a
   * `requestId` in the response body. For single-recipient requests, the `requestId`
   * is the derived message_id. For multiple recipients, Courier assigns a unique
   * message_id to each derived message.
   */
  requestId: string;
}

export interface SendSendMessageParams {
  /**
   * The message property has the following primary top-level properties. They define
   * the destination and content of the message.
   */
  message: SendSendMessageParams.Message;
}

export namespace SendSendMessageParams {
  /**
   * The message property has the following primary top-level properties. They define
   * the destination and content of the message.
   */
  export interface Message {
    /**
     * Syntactic sugar to provide a fast shorthand for Courier Elemental Blocks.
     */
    content: Message.Content;

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
    export interface Content {
      /**
       * The text content displayed in the notification.
       */
      body: string;

      /**
       * Title/subject displayed by supported channels.
       */
      title: string;
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
        utm?: Metadata.Utm | null;
      }

      export namespace Metadata {
        export interface Utm {
          campaign?: string | null;

          content?: string | null;

          medium?: string | null;

          source?: string | null;

          term?: string | null;
        }
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

      utm?: Metadata.Utm | null;
    }

    export namespace Metadata {
      export interface Utm {
        campaign?: string | null;

        content?: string | null;

        medium?: string | null;

        source?: string | null;

        term?: string | null;
      }
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
        utm?: Metadata.Utm | null;
      }

      export namespace Metadata {
        export interface Utm {
          campaign?: string | null;

          content?: string | null;

          medium?: string | null;

          source?: string | null;

          term?: string | null;
        }
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
        notifications: { [key: string]: Preferences.Notifications };

        categories?: { [key: string]: Preferences.Categories } | null;

        templateId?: string | null;
      }

      export namespace Preferences {
        export interface Notifications {
          status: 'OPTED_IN' | 'OPTED_OUT' | 'REQUIRED';

          channel_preferences?: Array<Notifications.ChannelPreference> | null;

          rules?: Array<Notifications.Rule> | null;

          source?: 'subscription' | 'list' | 'recipient' | null;
        }

        export namespace Notifications {
          export interface ChannelPreference {
            channel: 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';
          }

          export interface Rule {
            until: string;

            start?: string | null;
          }
        }

        export interface Categories {
          status: 'OPTED_IN' | 'OPTED_OUT' | 'REQUIRED';

          channel_preferences?: Array<Categories.ChannelPreference> | null;

          rules?: Array<Categories.Rule> | null;

          source?: 'subscription' | 'list' | 'recipient' | null;
        }

        export namespace Categories {
          export interface ChannelPreference {
            channel: 'direct_message' | 'email' | 'push' | 'sms' | 'webhook' | 'inbox';
          }

          export interface Rule {
            until: string;

            start?: string | null;
          }
        }
      }
    }
  }
}

export declare namespace Send {
  export {
    type MessageContext as MessageContext,
    type MessageRouting as MessageRouting,
    type MessageRoutingChannel as MessageRoutingChannel,
    type Recipient as Recipient,
    type SendSendMessageResponse as SendSendMessageResponse,
    type SendSendMessageParams as SendSendMessageParams,
  };
}
