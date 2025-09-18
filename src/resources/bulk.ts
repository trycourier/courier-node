// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BulkAPI from './bulk';
import * as AudiencesAPI from './audiences';
import * as SendAPI from './send';
import * as SubscriptionsAPI from './lists/subscriptions';
import * as PreferencesAPI from './users/preferences';
import * as ItemsAPI from './tenants/default-preferences/items';
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

export interface InboundBulkMessage {
  /**
   * A unique identifier that represents the brand that should be used for rendering
   * the notification.
   */
  brand?: string | null;

  /**
   * JSON that includes any data you want to pass to a message template. The data
   * will populate the corresponding template variables.
   */
  data?: { [key: string]: unknown } | null;

  event?: string | null;

  locale?: { [key: string]: unknown } | null;

  /**
   * Describes the content of the message in a way that will work for email, push,
   * chat, or any channel.
   */
  message?:
    | InboundBulkMessage.InboundBulkTemplateMessage
    | InboundBulkMessage.InboundBulkContentMessage
    | null;

  /**
   * JSON that is merged into the request sent by Courier to the provider to override
   * properties or to gain access to features in the provider API that are not
   * natively supported by Courier.
   */
  override?: unknown;
}

export namespace InboundBulkMessage {
  /**
   * Describes the content of the message in a way that will work for email, push,
   * chat, or any channel.
   */
  export interface InboundBulkTemplateMessage extends SendAPI.BaseMessage {
    /**
     * The id of the notification template to be rendered and sent to the recipient(s).
     * This field or the content field must be supplied.
     */
    template: string;
  }

  /**
   * A template for a type of message that can be sent more than once. For example,
   * you might create an "Appointment Reminder" Notification or “Reset Password”
   * Notifications.
   */
  export interface InboundBulkContentMessage extends SendAPI.BaseMessage {
    /**
     * Describes the content of the message in a way that will work for email, push,
     * chat, or any channel. Either this or template must be specified.
     */
    content: SendAPI.Content;
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
   * Use `tenant_id` instad.
   */
  account_id?: string | null;

  /**
   * Context information such as tenant_id to send the notification with.
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
   * An id of a tenant,
   * [see tenants api docs](https://www.courier.com/docs/reference/tenants). Will
   * load brand, default preferences and any other base context data associated with
   * this tenant.
   */
  tenant_id?: string | null;

  user_id?: string | null;
}

export namespace UserRecipient {
  export interface Preferences {
    notifications: { [key: string]: Preferences.Notifications };

    categories?: { [key: string]: Preferences.Categories } | null;

    templateId?: string | null;
  }

  export namespace Preferences {
    export interface Notifications {
      status: PreferencesAPI.PreferenceStatus;

      channel_preferences?: Array<Notifications.ChannelPreference> | null;

      rules?: Array<Notifications.Rule> | null;

      source?: 'subscription' | 'list' | 'recipient' | null;
    }

    export namespace Notifications {
      export interface ChannelPreference {
        channel: ItemsAPI.ChannelClassification;
      }

      export interface Rule {
        until: string;

        start?: string | null;
      }
    }

    export interface Categories {
      status: PreferencesAPI.PreferenceStatus;

      channel_preferences?: Array<Categories.ChannelPreference> | null;

      rules?: Array<Categories.Rule> | null;

      source?: 'subscription' | 'list' | 'recipient' | null;
    }

    export namespace Categories {
      export interface ChannelPreference {
        channel: ItemsAPI.ChannelClassification;
      }

      export interface Rule {
        until: string;

        start?: string | null;
      }
    }
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
