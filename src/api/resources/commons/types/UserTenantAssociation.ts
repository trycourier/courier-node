/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UserTenantAssociation {
    /** User ID for the assocation between tenant and user */
    user_id?: string;
    type?: "user";
    /** Tenant ID for the assocation between tenant and user */
    tenant_id: string;
    /** Additional metadata to be applied to a user profile when used in a tenant context */
    profile?: Record<string, any>;
}
