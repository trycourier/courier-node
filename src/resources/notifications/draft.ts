// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NotificationsAPI from './notifications';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Draft extends APIResource {
  /**
   * @example
   * ```ts
   * const notificationGetContent =
   *   await client.notifications.draft.retrieveContent('id');
   * ```
   */
  retrieveContent(id: string, options?: RequestOptions): APIPromise<NotificationsAPI.NotificationGetContent> {
    return this._client.get(path`/notifications/${id}/draft/content`, options);
  }
}
