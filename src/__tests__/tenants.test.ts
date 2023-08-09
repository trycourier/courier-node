import mockRequests from "./lib/mock-requests";

import * as TenantTypes from "../tenants/types";
import { CourierClient } from "../index";

const mockTenantId = "a83b4d91-fe15-4f9d-b049-16e47d177312";

const mockPutAccountResponse: TenantTypes.ITenant = {
  id: mockTenantId,
  name: "test tenant",
  type: "tenant",
};

const mockGetAccountResponse: TenantTypes.ITenant = {
  id: mockTenantId,
  name: "test tenant",
  type: "tenant",
};

const mockTenantListResponse: TenantTypes.IPaginatedResult<TenantTypes.ITenant> = {
  items: [
    {
      id: mockTenantId,
      name: "test tenant",
      type: "tenant",
    },
  ],
  has_more: false,
  type: "list",
  url: "/tenants",
};

describe("CourierTenants", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "PUT",
        path: `/tenants/${mockTenantId}`,
        response: { body: mockPutAccountResponse },
      },
      {
        method: "DELETE",
        path: `/tenants/${mockTenantId}`,
        response: { status: 204 },
      },
      {
        method: "GET",
        path: `/tenants/${mockTenantId}`,
        response: { body: mockGetAccountResponse },
      },
      {
        method: "GET",
        path: `/tenants`,
        response: { body: mockTenantListResponse },
      },
    ]);
  });

  test(".putTenant", async () => {
    const { tenants } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(
      tenants.put({
        id: mockTenantId,
        name: "My favorite software engineers",
      })
    ).resolves.toMatchObject({});
  });

  test(".getTenant", async () => {
    const { tenants } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(tenants.get(mockTenantId)).resolves.toMatchObject({
      id: mockTenantId,
      name: "test tenant",
      type: "tenant",
    });
  });

  test(".listTenants", async () => {
    const { tenants } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(tenants.listTenants({ limit: "10" })).resolves.toMatchObject({
      items: [
        {
          id: mockTenantId,
          name: "test tenant",
          type: "tenant",
        },
      ],
      has_more: false,
      type: "list",
      url: "/tenants",
    });
  });

  test(".deleteTenant", async () => {
    const { tenants } = CourierClient({
      authorizationToken: "AUTH_TOKEN",
    });

    await expect(tenants.delete(mockTenantId)).resolves.not.toThrow();
  });
});
