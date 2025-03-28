/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../../index";

/**
 * @example
 *     {
 *         recipients: [{
 *                 recipientId: "recipientId",
 *                 preferences: undefined
 *             }, {
 *                 recipientId: "recipientId",
 *                 preferences: undefined
 *             }]
 *     }
 */
export interface AddSubscribersToList {
    recipients: Courier.PutSubscriptionsRecipient[];
}
