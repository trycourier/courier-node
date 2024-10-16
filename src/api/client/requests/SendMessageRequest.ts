/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../index";

/**
 * @example
 *     {
 *         message: {
 *             content: {
 *                 version: "string",
 *                 brand: {
 *                     "key": "value"
 *                 },
 *                 elements: [{
 *                         type: "text"
 *                     }]
 *             },
 *             data: {
 *                 "string": {
 *                     "key": "value"
 *                 }
 *             },
 *             brand_id: "string",
 *             channels: {
 *                 "string": {
 *                     brand_id: undefined,
 *                     providers: undefined,
 *                     routing_method: undefined,
 *                     if: undefined,
 *                     timeouts: undefined,
 *                     override: undefined,
 *                     metadata: undefined
 *                 }
 *             },
 *             context: {
 *                 tenant_id: "string"
 *             },
 *             metadata: {
 *                 event: "string",
 *                 tags: [],
 *                 utm: {
 *                     source: undefined,
 *                     medium: undefined,
 *                     campaign: undefined,
 *                     term: undefined,
 *                     content: undefined
 *                 },
 *                 trace_id: "string"
 *             },
 *             preferences: {
 *                 subscription_topic_id: "string"
 *             },
 *             providers: {
 *                 "string": {
 *                     override: undefined,
 *                     if: undefined,
 *                     timeouts: undefined,
 *                     metadata: undefined
 *                 }
 *             },
 *             routing: {
 *                 method: Courier.RoutingMethod.All,
 *                 channels: [{
 *                         channel: "string",
 *                         config: undefined,
 *                         method: undefined,
 *                         providers: undefined,
 *                         if: undefined
 *                     }]
 *             },
 *             timeout: {
 *                 provider: {},
 *                 channel: {},
 *                 message: 1,
 *                 escalation: 1,
 *                 criteria: Courier.Criteria.NoEscalation
 *             },
 *             delay: {
 *                 duration: 1,
 *                 until: "string"
 *             },
 *             expiry: {
 *                 expires_at: "string",
 *                 expires_in: "string"
 *             },
 *             to: {
 *                 audience_id: "string",
 *                 data: {},
 *                 filters: []
 *             }
 *         }
 *     }
 */
export interface SendMessageRequest {
    /** Defines the message to be delivered */
    message: Courier.Message;
}
