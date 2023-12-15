/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../..";

export interface ListMessagesResponse {
    /** Paging information for the result set. */
    paging: Courier.Paging;
    /** An array of messages with their details. */
    results: Courier.MessageDetails[];
}