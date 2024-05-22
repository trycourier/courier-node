/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../../../../index";

/**
 * @example
 *     {
 *         tenants: [{
 *                 user_id: "string",
 *                 type: "user",
 *                 tenant_id: "string",
 *                 profile: {
 *                     "string": {
 *                         "key": "value"
 *                     }
 *                 }
 *             }]
 *     }
 */
export interface AddUserToMultipleTenantsParams {
    tenants: Courier.UserTenantAssociation[];
}
