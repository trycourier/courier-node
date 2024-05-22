/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         limit: 1,
 *         cursor: "string"
 *     }
 */
export interface ListUsersForTenantParams {
    /**
     * The number of accounts to return
     * (defaults to 20, maximum value of 100)
     */
    limit?: number;
    /**
     * Continue the pagination with the next cursor
     */
    cursor?: string;
}
