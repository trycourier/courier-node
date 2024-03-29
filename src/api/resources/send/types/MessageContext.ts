/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface MessageContext {
    /**
     * An id of a tenant, see [tenants api docs](https://www.courier.com/docs/reference/tenants/).
     * Will load brand, default preferences and any other base context data associated with this tenant.
     */
    tenant_id?: string;
}
