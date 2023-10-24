import { ICourierClientConfiguration } from "../types";
import * as AudienceTypes from "./types";

const deleteAudience = (options: ICourierClientConfiguration) => async (
  audienceId: string
): Promise<void> => {
  await options.httpClient.delete<void>(`/audiences/${audienceId}`);
};

const getAudience = (options: ICourierClientConfiguration) => {
  return async (audienceId: string): Promise<AudienceTypes.IAudience> => {
    const response = await options.httpClient.get<{
      audience: AudienceTypes.IAudience;
    }>(`/audiences/${audienceId}`);
    return response.data.audience;
  };
};

const listAudiences = (options: ICourierClientConfiguration) => {
  return async (params?: {
    cursor: string;
  }): Promise<AudienceTypes.IAudienceListResponse> => {
    const response = await options.httpClient.get<
      AudienceTypes.IAudienceListResponse>(
        "/audiences",
        params
    );
    return response.data;
  };
};

const listMembers = (options: ICourierClientConfiguration) => {
  return async (
    audienceId: string,
    params?: {
      cursor: string;
    }
  ): Promise<AudienceTypes.IAudienceMemberListResponse> => {
    const response = await options.httpClient.get<
      AudienceTypes.IAudienceMemberListResponse
    >(
      `/audiences/${audienceId}/members`,
      params);
    return response.data;
  };
};

const putAudience = (options: ICourierClientConfiguration) => {
  return async (
    audience: Omit<AudienceTypes.IAudience, "created_at" | "updated_at">
  ): Promise<AudienceTypes.IAudience> => {
    const response = await options.httpClient.put<{
      audience: AudienceTypes.IAudience;
    }>(`/audiences/${audience.id}`, audience);
    return response.data.audience;
  };
};

export const audiences = (options: ICourierClientConfiguration) => ({
  delete: deleteAudience(options),
  get: getAudience(options),
  listAudiences: listAudiences(options),
  listMembers: listMembers(options),
  put: putAudience(options)
});
