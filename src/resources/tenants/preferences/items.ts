// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Create or Replace Default Preferences For Topic
   *
   * @example
   * ```ts
   * await client.tenants.preferences.items.update('topic_id', {
   *   tenant_id: 'tenant_id',
   *   status: 'OPTED_IN',
   *   custom_routing: ['inbox'],
   *   has_custom_routing: true,
   * });
   * ```
   */
  update(topicID: string, params: ItemUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { tenant_id, ...body } = params;
    return this._client.put(path`/tenants/${tenant_id}/default_preferences/items/${topicID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove Default Preferences For Topic
   *
   * @example
   * ```ts
   * await client.tenants.preferences.items.delete('topic_id', {
   *   tenant_id: 'tenant_id',
   * });
   * ```
   */
  delete(topicID: string, params: ItemDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { tenant_id } = params;
    return this._client.delete(path`/tenants/${tenant_id}/default_preferences/items/${topicID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ItemUpdateParams {
  /**
   * Path param: Id of the tenant to update the default preferences for.
   */
  tenant_id: string;

  /**
   * Body param:
   */
  status: 'OPTED_OUT' | 'OPTED_IN' | 'REQUIRED';

  /**
   * Body param: The default channels to send to this tenant when has_custom_routing
   * is enabled
   */
  custom_routing?: Array<Shared.ChannelClassification> | null;

  /**
   * Body param: Override channel routing with custom preferences. This will override
   * any template prefernces that are set, but a user can still customize their
   * preferences
   */
  has_custom_routing?: boolean | null;
}

export interface ItemDeleteParams {
  /**
   * Id of the tenant to update the default preferences for.
   */
  tenant_id: string;
}

export declare namespace Items {
  export { type ItemUpdateParams as ItemUpdateParams, type ItemDeleteParams as ItemDeleteParams };
}
