// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AuditEvents extends APIResource {
  /**
   * Fetch a specific audit event by ID.
   */
  retrieve(auditEventID: string, options?: RequestOptions): APIPromise<AuditEvent> {
    return this._client.get(path`/audit-events/${auditEventID}`, options);
  }

  /**
   * Fetch the list of audit events
   */
  list(
    query: AuditEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditEventListResponse> {
    return this._client.get('/audit-events', { query, ...options });
  }
}

export interface AuditEvent {
  actor: AuditEvent.Actor;

  auditEventId: string;

  source: string;

  target: string;

  timestamp: string;

  type: string;
}

export namespace AuditEvent {
  export interface Actor {
    id: string;

    email?: string | null;
  }
}

export interface AuditEventListResponse {
  paging: Shared.Paging;

  results: Array<AuditEvent>;
}

export interface AuditEventListParams {
  /**
   * A unique identifier that allows for fetching the next set of audit events.
   */
  cursor?: string | null;
}

export declare namespace AuditEvents {
  export {
    type AuditEvent as AuditEvent,
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };
}
