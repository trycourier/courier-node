// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Requests extends APIResource {
  /**
   * Archives a send request by its request id. Use it to remove test sends or
   * superseded requests from the message list without deleting them.
   */
  archive(requestID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/requests/${requestID}/archive`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
