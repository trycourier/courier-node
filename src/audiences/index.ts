import { ICourierClientConfiguration } from "../types";
import * as audienceTypes from "./types";

const deleteAudience = (options: ICourierClientConfiguration) => {
  return async (audienceId: string): Promise<void> => {
    throw new Error(`Method not implemented. ${audienceId}`);
  };
};

const getAudience = (options: ICourierClientConfiguration) => {
  return async (
    audienceId: string
  ): Promise<audienceTypes.IAudienceGetResponse> => {
    throw new Error(`Method not implemented. ${audienceId}`);
  };
};

const listAudiences = (options: ICourierClientConfiguration) => {
  return async (): Promise<audienceTypes.IAudienceListResponse> => {
    throw new Error("Method not implemented.");
  };
};

const listMembers = (options: ICourierClientConfiguration) => {
  return async (
    audienceId: string
  ): Promise<audienceTypes.IAudienceMemberListResponse> => {
    throw new Error(`Method not implemented. ${audienceId}`);
  };
};

const putAudience = (options: ICourierClientConfiguration) => {
  return async (
    audienceId: string
  ): Promise<audienceTypes.IAudiencePutResponse> => {
    throw new Error(`Method not implemented. ${audienceId}`);
  };
};

export const audiences = (options: ICourierClientConfiguration) => ({
  delete: deleteAudience(options),
  get: getAudience(options),
  listAudiences: listAudiences(options),
  listMembers: listMembers(options),
  put: putAudience(options),
});
