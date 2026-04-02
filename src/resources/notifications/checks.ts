// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NotificationsAPI from './notifications';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Checks extends APIResource {
  /**
   * @example
   * ```ts
   * const check = await client.notifications.checks.update(
   *   'submissionId',
   *   {
   *     id: 'id',
   *     checks: [
   *       {
   *         id: 'id',
   *         status: 'RESOLVED',
   *         type: 'custom',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  update(
    submissionID: string,
    params: CheckUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CheckUpdateResponse> {
    const { id, ...body } = params;
    return this._client.put(path`/notifications/${id}/${submissionID}/checks`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const checks = await client.notifications.checks.list(
   *   'submissionId',
   *   { id: 'id' },
   * );
   * ```
   */
  list(
    submissionID: string,
    params: CheckListParams,
    options?: RequestOptions,
  ): APIPromise<CheckListResponse> {
    const { id } = params;
    return this._client.get(path`/notifications/${id}/${submissionID}/checks`, options);
  }

  /**
   * @example
   * ```ts
   * await client.notifications.checks.delete('submissionId', {
   *   id: 'id',
   * });
   * ```
   */
  delete(submissionID: string, params: CheckDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/notifications/${id}/${submissionID}/checks`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CheckUpdateResponse {
  checks: Array<NotificationsAPI.Check>;
}

export interface CheckListResponse {
  checks: Array<NotificationsAPI.Check>;
}

export interface CheckUpdateParams {
  /**
   * Path param
   */
  id: string;

  /**
   * Body param
   */
  checks: Array<NotificationsAPI.BaseCheck>;
}

export interface CheckListParams {
  id: string;
}

export interface CheckDeleteParams {
  id: string;
}

export declare namespace Checks {
  export {
    type CheckUpdateResponse as CheckUpdateResponse,
    type CheckListResponse as CheckListResponse,
    type CheckUpdateParams as CheckUpdateParams,
    type CheckListParams as CheckListParams,
    type CheckDeleteParams as CheckDeleteParams,
  };
}
