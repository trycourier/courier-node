/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../index";

export interface ListTemplatesResponse {
    paging: Courier.Paging;
    /** An array of Notification Templates */
    results: Courier.NotificationTemplates[];
}
