/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

export interface ListRecipient extends Courier.ListRecipientType {
    list_id?: string;
    data?: Courier.MessageData;
    filters?: Courier.ListFilter[];
}
