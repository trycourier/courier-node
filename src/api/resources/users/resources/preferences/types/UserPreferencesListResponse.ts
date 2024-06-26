/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../../../index";

export interface UserPreferencesListResponse {
    /** Deprecated - Paging not implemented on this endpoint */
    paging: Courier.Paging;
    /** The Preferences associated with the user_id. */
    items: Courier.users.TopicPreference[];
}
