/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../../index";

/**
 * @example
 *     {
 *         name: "string",
 *         parent_tenant_id: "string",
 *         default_preferences: {
 *             items: [{}]
 *         },
 *         properties: {
 *             "string": {
 *                 "key": "value"
 *             }
 *         },
 *         user_profile: {
 *             "string": {
 *                 "key": "value"
 *             }
 *         },
 *         brand_id: "string"
 *     }
 */
export interface TenantCreateOrReplaceParams {
    /** Name of the tenant. */
    name: string;
    /** Tenant's parent id (if any). */
    parent_tenant_id?: string;
    /** Defines the preferences used for the tenant when the user hasn't specified their own. */
    default_preferences?: Courier.DefaultPreferences;
    /** Arbitrary properties accessible to a template. */
    properties?: Record<string, any>;
    /** A user profile object merged with user profile on send. */
    user_profile?: Record<string, any>;
    /** Brand to be used for the account when one is not specified by the send call. */
    brand_id?: string;
}
