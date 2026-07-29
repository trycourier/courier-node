// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage the messages in a user's in-app inbox.
 */
export class Messages extends APIResource {
  /**
   * Delete a user's inbox message. The message is removed from every inbox read (it
   * stops appearing in the recipient's Inbox); it can be restored.
   */
  delete(messageID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/inbox/messages/${messageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restore a previously deleted inbox message.
   */
  restore(messageID: string, body: MessageRestoreParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/inbox/messages/${messageID}/restore`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MessageRestoreParams {}

export declare namespace Messages {
  export { type MessageRestoreParams as MessageRestoreParams };
}
