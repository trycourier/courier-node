// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
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

export interface BulkCreateJobResponse {
  jobId: string;
}

export interface BulkListUsersResponse {
  items: Array<BulkListUsersResponse.Item>;

  paging: Shared.Paging;
}

export namespace BulkListUsersResponse {
  export interface Item extends Shared.InboundBulkMessageUser {
    status: 'PENDING' | 'ENQUEUED' | 'ERROR';

    messageId?: string | null;
  }
}

export interface BulkRetrieveJobResponse {
  job: BulkRetrieveJobResponse.Job;
}

export namespace BulkRetrieveJobResponse {
  export interface Job {
    definition: Shared.InboundBulkMessage;

    enqueued: number;

    failures: number;

    received: number;

    status: 'CREATED' | 'PROCESSING' | 'COMPLETED' | 'ERROR';
  }
}

export interface BulkAddUsersParams {
  users: Array<Shared.InboundBulkMessageUser>;
}

export interface BulkCreateJobParams {
  message: Shared.InboundBulkMessage;
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
    type BulkCreateJobResponse as BulkCreateJobResponse,
    type BulkListUsersResponse as BulkListUsersResponse,
    type BulkRetrieveJobResponse as BulkRetrieveJobResponse,
    type BulkAddUsersParams as BulkAddUsersParams,
    type BulkCreateJobParams as BulkCreateJobParams,
    type BulkListUsersParams as BulkListUsersParams,
  };
}
