export interface ITenant {
  brand_id?: string;
  id: string;
  name: string;
  parent_tenant_id?: string;
  default_preferences?: {
    items: Array<{
      id: string;
      status: "OPTED_IN" | "OPTED_OUT" | "REQUIRED";
      type: "subscription_topic";
    }>;
  };
  properties?: { [key: string]: any };
  user_profile?: Record<string, any>;
  type: "tenant";
}

export interface IPaginatedResult<T> {
  cursor?: string;
  has_more: boolean;
  items: T[];
  next_url?: string;
  type: "list";
  url: string;
}

export interface ITenantListOptions {
  cursor?: string;
  limit?: string;
}
export interface ICourierClientTenants {
  delete: (id: string) => Promise<void>;
  get: (id: string) => Promise<ITenant>;
  listTenants: (
    options?: ITenantListOptions
  ) => Promise<IPaginatedResult<ITenant>>;
  put: (tenant: Omit<ITenant, "type">) => Promise<ITenant>;
}
