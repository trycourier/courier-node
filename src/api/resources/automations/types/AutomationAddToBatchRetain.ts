/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../..";

/**
 * Defines what items should be retained and passed along to the next steps when the batch is released
 *
 * @example
 *     {
 *         type: Courier.AutomationAddToBatchRetainType.Highest,
 *         count: 10,
 *         sort_key: "refs.data.my_custom_scoring"
 *     }
 *
 * @example
 *     {
 *         type: Courier.AutomationAddToBatchRetainType.Last,
 *         count: 10
 *     }
 */
export interface AutomationAddToBatchRetain {
    /**
     * Keep N number of notifications based on the type. First/Last N based on notification received.
     * highest/lowest based on a scoring key providing in the data accessed by sort_key
     */
    type: Courier.AutomationAddToBatchRetainType;
    /**
     * The number of records to keep in batch. Default is 10 and only configurable by requesting from support.
     * When configurable minimum is 2 and maximum is 100.
     */
    count: number;
    /** Defines the data value data[sort_key] that is used to sort the stored items. Required when type is set to highest or lowest. */
    sort_key?: string;
}
