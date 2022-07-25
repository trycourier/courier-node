import { ICourierClientConfiguration } from "../types";
import {
  IAuditEvent,
  ICourierGetAuditEventParams,
  ICourierListAuditEventsParams,
  ICourierListAuditEventsResponse
} from "./types";

const list = (options: ICourierClientConfiguration) => {
  return async (
    params: ICourierListAuditEventsParams
  ): Promise<ICourierListAuditEventsResponse> => {
    const res = await options.httpClient.get<ICourierListAuditEventsResponse>(
      `/audit-events`,
      {
        params: {
          cursor: params.cursor
        }
      }
    );
    return res.data;
  };
};

const get = (options: ICourierClientConfiguration) => {
  return async (params: ICourierGetAuditEventParams): Promise<IAuditEvent> => {
    const res = await options.httpClient.get<IAuditEvent>(
      `/audit-events/${params.auditEventId}`
    );
    return res.data;
  };
};

export const auditEvents = (options: ICourierClientConfiguration) => {
  return {
    get: get(options),
    list: list(options)
  };
};
