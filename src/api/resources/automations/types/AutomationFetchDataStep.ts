/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

/**
 * @example
 *     {
 *         action: "fetch-data",
 *         merge_strategy: Courier.MergeAlgorithm.None,
 *         webhook: {
 *             body: {
 *                 "foo": "bar"
 *             },
 *             params: {
 *                 "hello": "world"
 *             },
 *             headers: {
 *                 "content-type": "application/json"
 *             },
 *             method: Courier.AutomationFetchDataWebhookMethod.Post,
 *             url: "https://bryan-at-courier.free.beeceptor.com"
 *         }
 *     }
 */
export interface AutomationFetchDataStep extends Courier.AutomationStep {
    action: "fetch-data";
    webhook: Courier.AutomationFetchDataWebhook;
    merge_strategy: Courier.MergeAlgorithm;
    idempotency_expiry?: string;
    idempotency_key?: string;
}
