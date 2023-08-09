import { ICourierClientConfiguration } from "../types";
import * as TenantTypes from "./types";

const deleteTenant = (options: ICourierClientConfiguration) => async (
  tenantId: string
): Promise<void> => {
  await options.httpClient.delete<void>(`/tenants/${tenantId}`);
};

const getTenant = (options: ICourierClientConfiguration) => {
  return async (tenantId: string): Promise<TenantTypes.ITenant> => {
    const response = await options.httpClient.get<TenantTypes.ITenant>(
      `/accounts/${tenantId}`
    );
    return response.data;
  };
};

const listTenants = (options: ICourierClientConfiguration) => {
  return async (
    listOptions?: TenantTypes.ITenantListOptions
  ): Promise<TenantTypes.IPaginatedResult<TenantTypes.ITenant>> => {
    const response = await options.httpClient.get<
      TenantTypes.IPaginatedResult<TenantTypes.ITenant>
    >("/tenants", undefined, {
      params: {
        cursor: listOptions?.cursor || "",
        limit: listOptions?.limit || "20",
      },
    });
    return response.data;
  };
};

const putTenant = (options: ICourierClientConfiguration) => {
  return async (
    tenant: Omit<TenantTypes.ITenant, "type">
  ): Promise<TenantTypes.ITenant> => {
    const response = await options.httpClient.put<TenantTypes.ITenant>(
      `/tenants/${tenant.id}`,
      tenant
    );
    return response.data;
  };
};

export const tenants = (options: ICourierClientConfiguration) => ({
  delete: deleteTenant(options),
  get: getTenant(options),
  listTenants: listTenants(options),
  put: putTenant(options),
});
