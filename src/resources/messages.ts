// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Fetch the status of a message you've previously sent.
   */
  retrieve(messageID: string, options?: RequestOptions): APIPromise<MessageRetrieveResponse> {
    return this._client.get(path`/messages/${messageID}`, options);
  }

  /**
   * Fetch the statuses of messages you've previously sent.
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get('/messages', { query, ...options });
  }

  /**
   * Cancel a message that is currently in the process of being delivered. A
   * well-formatted API call to the cancel message API will return either `200`
   * status code for a successful cancellation or `409` status code for an
   * unsuccessful cancellation. Both cases will include the actual message record in
   * the response body (see details below).
   */
  cancel(messageID: string, options?: RequestOptions): APIPromise<MessageDetails> {
    return this._client.post(path`/messages/${messageID}/cancel`, options);
  }

  /**
   * Get message content
   */
  content(messageID: string, options?: RequestOptions): APIPromise<MessageContentResponse> {
    return this._client.get(path`/messages/${messageID}/output`, options);
  }

  /**
   * Fetch the array of events of a message you've previously sent.
   */
  history(
    messageID: string,
    query: MessageHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageHistoryResponse> {
    return this._client.get(path`/messages/${messageID}/history`, { query, ...options });
  }
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

export interface MessageRetrieveResponse extends MessageDetails {
  providers?: Array<{ [key: string]: unknown }> | null;
}

export interface MessageListResponse {
  /**
   * Paging information for the result set.
   */
  paging: Shared.Paging;

  /**
   * An array of messages with their details.
   */
  results: Array<MessageDetails>;
}

export interface MessageContentResponse {
  /**
   * An array of render output of a previously sent message.
   */
  results: Array<MessageContentResponse.Result>;
}

export namespace MessageContentResponse {
  export interface Result {
    /**
     * The channel used for rendering the message.
     */
    channel: string;

    /**
     * The ID of channel used for rendering the message.
     */
    channel_id: string;

    /**
     * Content details of the rendered message.
     */
    content: Result.Content;
  }

  export namespace Result {
    /**
     * Content details of the rendered message.
     */
    export interface Content {
      /**
       * The blocks of the rendered message.
       */
      blocks: Array<Content.Block>;

      /**
       * The body of the rendered message.
       */
      body: string;

      /**
       * The html content of the rendered message.
       */
      html: string;

      /**
       * The subject of the rendered message.
       */
      subject: string;

      /**
       * The text of the rendered message.
       */
      text: string;

      /**
       * The title of the rendered message.
       */
      title: string;
    }

    export namespace Content {
      export interface Block {
        /**
         * The block text of the rendered message block.
         */
        text: string;

        /**
         * The block type of the rendered message block.
         */
        type: string;
      }
    }
  }
}

export interface MessageHistoryResponse {
  results: Array<{ [key: string]: unknown }>;
}

export interface MessageListParams {
  /**
   * A boolean value that indicates whether archived messages should be included in
   * the response.
   */
  archived?: boolean | null;

  /**
   * A unique identifier that allows for fetching the next set of messages.
   */
  cursor?: string | null;

  /**
   * The enqueued datetime of a message to filter out messages received before.
   */
  enqueued_after?: string | null;

  /**
   * A unique identifier representing the event that was used to send the event.
   */
  event?: string | null;

  /**
   * A unique identifier representing the list the message was sent to.
   */
  list?: string | null;

  /**
   * A unique identifier representing the message_id returned from either /send or
   * /send/list.
   */
  messageId?: string | null;

  /**
   * A unique identifier representing the notification that was used to send the
   * event.
   */
  notification?: string | null;

  /**
   * The key assocated to the provider you want to filter on. E.g., sendgrid, inbox,
   * twilio, slack, msteams, etc. Allows multiple values to be set in query
   * parameters.
   */
  provider?: Array<string | null>;

  /**
   * A unique identifier representing the recipient associated with the requested
   * profile.
   */
  recipient?: string | null;

  /**
   * An indicator of the current status of the message. Allows multiple values to be
   * set in query parameters.
   */
  status?: Array<string | null>;

  /**
   * A tag placed in the metadata.tags during a notification send. Allows multiple
   * values to be set in query parameters.
   */
  tag?: Array<string | null>;

  /**
   * A comma delimited list of 'tags'. Messages will be returned if they match any of
   * the tags passed in.
   */
  tags?: string | null;

  /**
   * Messages sent with the context of a Tenant
   */
  tenant_id?: string | null;

  /**
   * The unique identifier used to trace the requests
   */
  traceId?: string | null;
}

export interface MessageHistoryParams {
  /**
   * A supported Message History type that will filter the events returned.
   */
  type?: string | null;
}

export declare namespace Messages {
  export {
    type MessageDetails as MessageDetails,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageContentResponse as MessageContentResponse,
    type MessageHistoryResponse as MessageHistoryResponse,
    type MessageListParams as MessageListParams,
    type MessageHistoryParams as MessageHistoryParams,
  };
}
