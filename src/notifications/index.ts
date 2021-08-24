import { ICourierClientConfiguration } from "../types";
import {
  ICourierClientNotifications,
  ICourierNotificationGetContentResponse,
  ICourierNotificationGetSubmissionChecksResponse,
  ICourierNotificationListParams,
  ICourierNotificationListResponse,
  ICourierNotificationPostDraftVariationsParams,
  ICourierNotificationPostVariationsParams,
  ICourierNotificationPutSubmissionChecksParams,
  ICourierNotificationPutSubmissionChecksResponse
} from "./types";

const list = (options: ICourierClientConfiguration) => {
  return async (
    params?: ICourierNotificationListParams
  ): Promise<ICourierNotificationListResponse> => {
    const res = await options.httpClient.get<ICourierNotificationListResponse>(
      `/notifications`,
      params
    );

    return res.data;
  };
};

const getContent = (options: ICourierClientConfiguration) => {
  return async (
    id: string
  ): Promise<ICourierNotificationGetContentResponse> => {
    const res = await options.httpClient.get<
      ICourierNotificationGetContentResponse
    >(`/notifications/${id}/content`);

    return res.data;
  };
};

const getDraftContent = (options: ICourierClientConfiguration) => {
  return async (
    id: string
  ): Promise<ICourierNotificationGetContentResponse> => {
    const res = await options.httpClient.get<
      ICourierNotificationGetContentResponse
    >(`/notifications/${id}/draft/content`);

    return res.data;
  };
};

const postVariations = (options: ICourierClientConfiguration) => {
  return async (
    id: string,
    params: ICourierNotificationPostVariationsParams
  ): Promise<void> => {
    await options.httpClient.post<ICourierNotificationGetContentResponse>(
      `/notifications/${id}/variations`,
      params
    );
  };
};

const postDraftVariations = (options: ICourierClientConfiguration) => {
  return async (
    id: string,
    params: ICourierNotificationPostDraftVariationsParams
  ): Promise<void> => {
    await options.httpClient.post<ICourierNotificationGetContentResponse>(
      `/notifications/${id}/draft/variations`,
      params
    );
  };
};

const getSubmissionChecks = (options: ICourierClientConfiguration) => {
  return async (
    id: string,
    submissionId: string
  ): Promise<ICourierNotificationGetSubmissionChecksResponse> => {
    const res = await options.httpClient.get<
      ICourierNotificationGetSubmissionChecksResponse
    >(`/notifications/${id}/${submissionId}/checks`);

    return res.data;
  };
};

const putSubmissionChecks = (options: ICourierClientConfiguration) => {
  return async (
    id: string,
    submissionId: string,
    params: ICourierNotificationPutSubmissionChecksParams
  ): Promise<ICourierNotificationPutSubmissionChecksResponse> => {
    const res = await options.httpClient.put<
      ICourierNotificationPutSubmissionChecksResponse
    >(`/notifications/${id}/${submissionId}/checks`, params);

    return res.data;
  };
};

const cancelSubmission = (options: ICourierClientConfiguration) => {
  return async (id: string, submissionId: string): Promise<void> => {
    await options.httpClient.delete<void>(
      `/notifications/${id}/${submissionId}/checks`
    );
  };
};

export const notifications = (
  options: ICourierClientConfiguration
): ICourierClientNotifications => {
  return {
    cancelSubmission: cancelSubmission(options),
    getContent: getContent(options),
    getDraftContent: getDraftContent(options),
    getSubmissionChecks: getSubmissionChecks(options),
    list: list(options),
    postDraftVariations: postDraftVariations(options),
    postVariations: postVariations(options),
    putSubmissionChecks: putSubmissionChecks(options)
  };
};
