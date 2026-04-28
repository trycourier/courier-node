// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BulkAPI from './bulk';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Ingest user data into a Bulk Job.
   *
   * **Important**: For email-based bulk jobs, each user must include `profile.email`
   * for provider routing to work correctly. The `to.email` field is not sufficient
   * for email provider routing.
   */
  addUsers(jobID: string, body: BulkAddUsersParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/bulk/${jobID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a new bulk job for sending messages to multiple recipients.
   *
   * **Required**: `message.event` (event ID or notification ID)
   *
   * **Optional (V2 format)**: `message.template` (notification ID) or
   * `message.content` (Elemental content) can be provided to override the
   * notification associated with the event.
   */
  createJob(body: BulkCreateJobParams, options?: RequestOptions): APIPromise<BulkCreateJobResponse> {
    return this._client.post('/bulk', { body, ...options });
  }

  /**
   * Get Bulk Job Users
   */
  listUsers(
    jobID: string,
    query: BulkListUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BulkListUsersResponse> {
    return this._client.get(path`/bulk/${jobID}/users`, { query, ...options });
  }

  /**
   * Get a bulk job
   */
  retrieveJob(jobID: string, options?: RequestOptions): APIPromise<BulkRetrieveJobResponse> {
    return this._client.get(path`/bulk/${jobID}`, options);
  }

  /**
   * Run a bulk job
   */
  runJob(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/bulk/${jobID}/run`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Bulk message definition. Supports two formats:
 *
 * - V1 format: Requires `event` field (event ID or notification ID)
 * - V2 format: Optionally use `template` (notification ID) or `content` (Elemental
 *   content) in addition to `event`
 */
export interface InboundBulkMessage {
  /**
   * Event ID or Notification ID (required). Can be either a Notification ID (e.g.,
   * "FRH3QXM9E34W4RKP7MRC8NZ1T8V8") or a custom Event ID (e.g., "welcome-email")
   * mapped to a notification.
   */
  event: string;

  brand?: string | null;

  /**
   * Elemental content (optional, for V2 format). When provided, this will be used
   * instead of the notification associated with the `event` field.
   */
  content?: Shared.ElementalContentSugar | Shared.ElementalContent | null;

  data?: { [key: string]: unknown } | null;

  locale?: { [key: string]: { [key: string]: unknown } } | null;

  override?: { [key: string]: unknown } | null;

  /**
   * Notification ID or template ID (optional, for V2 format). When provided, this
   * will be used instead of the notification associated with the `event` field.
   */
  template?: string | null;
}

export interface InboundBulkMessageUser {
  /**
   * User-specific data that will be merged with message.data
   */
  data?: unknown;

  preferences?: Shared.RecipientPreferences | null;

  /**
   * User profile information. For email-based bulk jobs, `profile.email` is required
   * for provider routing to determine if the message can be delivered. The email
   * address should be provided here rather than in `to.email`.
   */
  profile?: { [key: string]: unknown } | null;

  /**
   * User ID (legacy field, use profile or to.user_id instead)
   */
  recipient?: string | null;

  /**
   * Optional recipient information. Note: For email provider routing, use
   * `profile.email` instead of `to.email`. The `to` field is primarily used for
   * recipient identification and data merging.
   */
  to?: Shared.UserRecipient | null;
}

export interface BulkCreateJobResponse {
  jobId: string;
}

export interface BulkListUsersResponse {
  items: Array<BulkListUsersResponse.Item>;

  paging: Shared.Paging;
}

export namespace BulkListUsersResponse {
  export interface Item extends BulkAPI.InboundBulkMessageUser {
    status: 'PENDING' | 'ENQUEUED' | 'ERROR';

    messageId?: string | null;
  }
}

export interface BulkRetrieveJobResponse {
  job: BulkRetrieveJobResponse.Job;
}

export namespace BulkRetrieveJobResponse {
  export interface Job {
    /**
     * Bulk message definition. Supports two formats:
     *
     * - V1 format: Requires `event` field (event ID or notification ID)
     * - V2 format: Optionally use `template` (notification ID) or `content` (Elemental
     *   content) in addition to `event`
     */
    definition: BulkAPI.InboundBulkMessage;

    enqueued: number;

    failures: number;

    received: number;

    status: 'CREATED' | 'PROCESSING' | 'COMPLETED' | 'ERROR';
  }
}

export interface BulkAddUsersParams {
  users: Array<InboundBulkMessageUser>;
}

export interface BulkCreateJobParams {
  /**
   * Bulk message definition. Supports two formats:
   *
   * - V1 format: Requires `event` field (event ID or notification ID)
   * - V2 format: Optionally use `template` (notification ID) or `content` (Elemental
   *   content) in addition to `event`
   */
  message: InboundBulkMessage;
}

export interface BulkListUsersParams {
  /**
   * A unique identifier that allows for fetching the next set of users added to the
   * bulk job
   */
  cursor?: string | null;
}

export declare namespace Bulk {
  export {
    type InboundBulkMessage as InboundBulkMessage,
    type InboundBulkMessageUser as InboundBulkMessageUser,
    type BulkCreateJobResponse as BulkCreateJobResponse,
    type BulkListUsersResponse as BulkListUsersResponse,
    type BulkRetrieveJobResponse as BulkRetrieveJobResponse,
    type BulkAddUsersParams as BulkAddUsersParams,
    type BulkCreateJobParams as BulkCreateJobParams,
    type BulkListUsersParams as BulkListUsersParams,
  };
}
