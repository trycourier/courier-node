import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import { ICourierBrand, ICourierBrandGetAllResponse } from "../brands/types";

const mockBrandResponse: ICourierBrand = {
  created: 1591814489093,
  id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
  name: "Default Brand",
  published: 1591814489121,
  settings: {
    email: {
      footer: {},
      header: {
        barColor: "#9D3789"
      }
    }
  },
  updated: 1591814489143,
  version: "2020-06-10T18:41:29.093Z"
};

const mockGetBrandsResponse: ICourierBrandGetAllResponse = {
  paging: {
    more: false
  },
  results: [mockBrandResponse]
};

describe("CourierBrands", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet("/brands").reply(200, mockGetBrandsResponse);
    mock.onGet(/\/brands\/.*/).reply(200, mockBrandResponse);
    mock.onPost("/brands").reply(200, mockBrandResponse);
    mock.onPut(/\/brands\/.*/).reply(200, mockBrandResponse);
    mock.onDelete(/\/brands\/.*/).reply(204);
  });

  test(".getBrands", async () => {
    const { brands } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(brands.getBrands()).resolves.toMatchObject(
      mockGetBrandsResponse
    );
  });

  test(".getBrand", async () => {
    const { brands } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      brands.getBrand("VHEGJ8NQEB4T3JM3SZJ8TWD27JPG")
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".createBrand", async () => {
    const { brands } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      brands.createBrand({
        id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
        name: "Default Brand",
        settings: {
          email: {
            footer: {},
            header: {
              barColor: "#9D3789"
            }
          }
        }
      })
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".createBrand with Idempotency Key", async () => {
    const { brands } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    mock.onPost("/brands").reply(async (config) => {
      expect(config.headers["Idempotency-Key"]).toBe("IDEMPOTENCY_KEY_UUID");
      return [200];
    });

    await brands.createBrand(
      {
        id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
        name: "Default Brand",
        settings: {
          email: {
            footer: {},
            header: {
              barColor: "#9D3789"
            }
          }
        }
      },
      {
        idempotencyKey: "IDEMPOTENCY_KEY_UUID"
      }
    );
  });

  test(".replaceBrand", async () => {
    const { brands } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      brands.replaceBrand({
        id: "VHEGJ8NQEB4T3JM3SZJ8TWD27JPG",
        name: "Default Brand",
        settings: {
          email: {
            footer: {},
            header: {
              barColor: "#9D3789"
            }
          }
        }
      })
    ).resolves.toMatchObject(mockBrandResponse);
  });

  test(".deleteBrand", async () => {
    const { brands } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      brands.deleteBrand("VHEGJ8NQEB4T3JM3SZJ8TWD27JPG")
    ).resolves.toBeUndefined();
  });
});
