import { 
  ICourierBrand, 
  ICourierBrandGetAllResponse,
  ICourierBrandPostParameters,
  ICourierBrandPutParameters,
  ICourierClientConfiguration
} from "./types";

export const getBrands = (options: ICourierClientConfiguration) => {
  return async (
    params?: {
      cursor: string;
    }
  ): Promise<ICourierBrandGetAllResponse> => {
    const res = await options.httpClient.get<ICourierBrandGetAllResponse>(
      `/brands`, params
    );
    return res.data;
  };
};

export const getBrand = (options: ICourierClientConfiguration) => {
  return async (
    brandId: string
  ): Promise<ICourierBrand> => {
    const res = await options.httpClient.get<ICourierBrand>(
      `/brands/${brandId}`
    );
    return res.data;
  };
};

export const createBrand = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierBrandPostParameters
  ): Promise<ICourierBrand> => {
    const res = await options.httpClient.post<ICourierBrand>(
      `/brands`,
      params
    );
    return res.data;
  };
};

export const replaceBrand = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierBrandPutParameters
  ): Promise<ICourierBrand> => {
    const {id, ...rest} = params;
    const res = await options.httpClient.put<ICourierBrand>(
      `/brands/${id}`,
      rest
    );
    return res.data;
  };
};

export const deleteBrand = (options: ICourierClientConfiguration) => {
  return async (brandId: string): Promise<object> => {
    const res = await options.httpClient.delete<object>(`/brands/${brandId}`);
    return res.data;
  }
};