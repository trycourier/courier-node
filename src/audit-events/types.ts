export interface ICourierListAuditEventsParams {
  cursor?: string;
}

export interface ICourierGetAuditEventParams {
  auditEventId: string;
}

export interface ICourierListAuditEventsResponse {
  paging: {
    cursor?: string;
    more: boolean;
  };
  results: IAuditEvent[];
}

export interface IAuditEvent {
  actor?: {
    id?: string;
    email?: string;
  };
  target?: {
    id?: string;
    email?: string;
  };
  auditEventId: string;
  source: string;
  timestamp: string;
  type: string;
}
