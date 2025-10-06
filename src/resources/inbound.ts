// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Inbound extends APIResource {
  /**
   * Courier Track Event
   *
   * @example
   * ```ts
   * const response = await client.inbound.trackEvent({
   *   event: 'New Order Placed',
   *   messageId: '4c62c457-b329-4bea-9bfc-17bba86c393f',
   *   properties: {
   *     order_id: 123,
   *     total_orders: 5,
   *     last_order_id: 122,
   *   },
   *   type: 'track',
   *   userId: '1234',
   * });
   * ```
   */
  trackEvent(body: InboundTrackEventParams, options?: RequestOptions): APIPromise<InboundTrackEventResponse> {
    return this._client.post('/inbound/courier', { body, ...options });
  }
}

export interface InboundTrackEventResponse {
  /**
   * A successful call returns a `202` status code along with a `requestId` in the
   * response body.
   */
  messageId: string;
}

export interface InboundTrackEventParams {
  /**
   * A descriptive name of the event. This name will appear as a trigger in the
   * Courier Automation Trigger node.
   */
  event: string;

  /**
   * A required unique identifier that will be used to de-duplicate requests. If not
   * unique, will respond with 409 Conflict status
   */
  messageId: string;

  properties: { [key: string]: unknown };

  type: 'track';

  /**
   * The user id associatiated with the track
   */
  userId?: string | null;
}

export declare namespace Inbound {
  export {
    type InboundTrackEventResponse as InboundTrackEventResponse,
    type InboundTrackEventParams as InboundTrackEventParams,
  };
}
