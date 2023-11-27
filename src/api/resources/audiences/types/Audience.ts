/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../..";

export interface Audience {
    /** A unique identifier representing the audience_id */
    id: string;
    /** The name of the audience */
    name: string;
    /** A description of the audience */
    description: string;
    filter: Courier.Filter;
    created_at: string;
    updated_at: string;
}
