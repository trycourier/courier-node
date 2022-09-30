import {
  ICourierBrand,
  ICourierBrandGetAllResponse,
  ICourierBrandParameters,
  ICourierBrandPostConfig,
  ICourierBrandPutParameters,
  ICourierClientConfiguration
} from "./types";

export const getBrands = (options: ICourierClientConfiguration) => {
  return async (params?: {
    cursor: string;
  }): Promise<ICourierBrandGetAllResponse> => {
    const res = await options.httpClient.get<ICourierBrandGetAllResponse>(
      `/brands`,
      params
    );
    return res.data;
  };
};

export const getBrand = (options: ICourierClientConfiguration) => {
  return async (brandId: string): Promise<ICourierBrand> => {
    const res = await options.httpClient.get<ICourierBrand>(
      `/brands/${brandId}`
    );
    return res.data;
  };
};

export const createBrand = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierBrandParameters,
    config?: ICourierBrandPostConfig
  ): Promise<ICourierBrand> => {
    const headers: Record<string, string> = {};

    if (config && config.idempotencyKey) {
      headers["Idempotency-Key"] = config.idempotencyKey;
    }
    const res = await options.httpClient.post<ICourierBrand>(
      `/brands`,
      params,
      { headers }
    );
    return res.data;
  };
};

export const replaceBrand = (options: ICourierClientConfiguration) => {
  return async (params: ICourierBrandPutParameters): Promise<ICourierBrand> => {
    const { id, ...rest } = params;
    const res = await options.httpClient.put<ICourierBrand>(
      `/brands/${id}`,
      rest
    );
    return res.data;
  };
};

export const deleteBrand = (options: ICourierClientConfiguration) => {
  return async (brandId: string): Promise<void> => {
    await options.httpClient.delete<void>(`/brands/${brandId}`);
  };
};
