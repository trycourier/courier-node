// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Send a message to one or more recipients — users, lists, audiences, or tenants — across every channel you have configured.
 */
export class Send extends APIResource {
  /**
   * Sends a message to one or more recipients and returns a requestId. Courier
   * routes it to email, SMS, push, chat, or in-app based on your rules. Use the
   * returned requestId to look up delivery status via the Messages API.
   *
   * @example
   * ```ts
   * const response = await client.send.message({
   *   message: {
   *     to: { user_id: 'user_id' },
   *     template: 'template_id',
   *     data: { foo: 'bar' },
   *   },
   * });
   * ```
   */
  message(params: SendMessageParams, options?: RequestOptions): APIPromise<SendMessageResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post('/send', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(xIdempotencyExpiration != null ?
            { 'x-idempotency-expiration': xIdempotencyExpiration }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
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
   * Body param: The message property has the following primary top-level properties.
   * They define the destination and content of the message.
   */
  message: SendMessageParams.Message;

  /**
   * Header param: A unique key that makes this request idempotent. If Courier
   * receives another request with the same `Idempotency-Key`, it returns the stored
   * response from the first request without performing the operation again
   * (including the original status code and any error). Use it to safely retry
   * `POST` requests after network failures without risking duplicate sends. The key
   * is scoped to this endpoint.
   */
  'Idempotency-Key'?: string;

  /**
   * Header param: How long the idempotency key remains valid, as a Unix epoch
   * timestamp in seconds or an ISO 8601 date string. Only applies when
   * `Idempotency-Key` is provided. If omitted, the key is retained for 25 hours; the
   * maximum is 1 year.
   */
  'x-idempotency-expiration'?: string;
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
    channels?: Shared.MessageChannels | null;

    /**
     * Describes content that will work for email, inbox, push, chat, or any channel
     * id.
     */
    content?: Shared.ElementalContentSugar | Shared.ElementalContent;

    context?: Shared.MessageContext | null;

    data?: { [key: string]: unknown } | null;

    delay?: Message.Delay | null;

    expiry?: Message.Expiry | null;

    metadata?: Message.Metadata | null;

    preferences?: Message.Preferences | null;

    providers?: Shared.MessageProviders | null;

    /**
     * Customize which channels/providers Courier may deliver the message through.
     */
    routing?: Message.Routing | null;

    template?: string | null;

    timeout?: Message.Timeout | null;

    /**
     * The recipient or a list of recipients of the message
     */
    to?:
      | Shared.UserRecipient
      | Shared.AudienceRecipient
      | Shared.ListRecipient
      | Shared.ListPatternRecipient
      | Shared.SlackRecipient
      | Shared.MsTeamsRecipient
      | Shared.PagerdutyRecipient
      | Shared.WebhookRecipient
      | Array<
          | Shared.UserRecipient
          | Shared.AudienceRecipient
          | Shared.ListRecipient
          | Shared.ListPatternRecipient
          | Shared.SlackRecipient
          | Shared.MsTeamsRecipient
          | Shared.PagerdutyRecipient
          | Shared.WebhookRecipient
        >
      | null;
  }

  export namespace Message {
    export interface Delay {
      /**
       * The duration of the delay in milliseconds.
       */
      duration?: number | null;

      /**
       * IANA timezone identifier (e.g., "America/Los_Angeles", "UTC"). Used when
       * resolving opening hours expressions. Takes precedence over user profile timezone
       * settings.
       */
      timezone?: string | null;

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

      utm?: Shared.Utm | null;
    }

    export interface Preferences {
      /**
       * The subscription topic to apply to the message.
       */
      subscription_topic_id: string;
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
  export { type SendMessageResponse as SendMessageResponse, type SendMessageParams as SendMessageParams };
}
