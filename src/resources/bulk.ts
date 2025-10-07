// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BulkAPI from './bulk';
import * as AudiencesAPI from './audiences';
import * as SendAPI from './send';
import * as Shared from './shared';
import * as SubscriptionsAPI from './lists/subscriptions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Ingest user data into a Bulk Job
   */
  addUsers(jobID: string, body: BulkAddUsersParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/bulk/${jobID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a bulk job
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
    content: SendAPI.Content;

    brand?: string | null;

    data?: { [key: string]: unknown } | null;

    event?: string | null;

    locale?: { [key: string]: { [key: string]: unknown } } | null;

    override?: { [key: string]: unknown } | null;
  }
}

export interface InboundBulkMessageUser {
  data?: unknown;

  preferences?: SubscriptionsAPI.RecipientPreferences | null;

  profile?: unknown;

  recipient?: string | null;

  to?: UserRecipient | null;
}

export interface UserRecipient {
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

  preferences?: UserRecipient.Preferences | null;

  /**
   * Tenant id. Will load brand, default preferences and base context data.
   */
  tenant_id?: string | null;

  user_id?: string | null;
}

export namespace UserRecipient {
  export interface Preferences {
    notifications: { [key: string]: Shared.Preference };

    categories?: { [key: string]: Shared.Preference } | null;

    templateId?: string | null;
  }
}

export interface BulkCreateJobResponse {
  jobId: string;
}

export interface BulkListUsersResponse {
  items: Array<BulkListUsersResponse.Item>;

  paging: AudiencesAPI.Paging;
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
    type UserRecipient as UserRecipient,
    type BulkCreateJobResponse as BulkCreateJobResponse,
    type BulkListUsersResponse as BulkListUsersResponse,
    type BulkRetrieveJobResponse as BulkRetrieveJobResponse,
    type BulkAddUsersParams as BulkAddUsersParams,
    type BulkCreateJobParams as BulkCreateJobParams,
    type BulkListUsersParams as BulkListUsersParams,
  };
}
