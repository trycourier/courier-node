/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../..";

export interface Brand {
    /** The date/time of when the brand was created. Represented in milliseconds since Unix epoch. */
    created: number;
    /** Brand Identifier */
    id?: string;
    /** Brand name */
    name: string;
    /** The date/time of when the brand was published. Represented in milliseconds since Unix epoch. */
    published: number;
    settings: Courier.BrandSettings;
    /** The date/time of when the brand was updated. Represented in milliseconds since Unix epoch. */
    updated: number;
    snippets?: Courier.BrandSnippets;
    /** The version identifier for the brand */
    version: string;
}
