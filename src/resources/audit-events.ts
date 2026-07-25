// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AuditEvents extends APIResource {
  /**
   * Returns one audit event by id, including the actor who performed it, the target
   * they changed, the source, the event type, and a timestamp.
   */
  retrieve(auditEventID: string, options?: RequestOptions): APIPromise<AuditEvent> {
    return this._client.get(path`/audit-events/${auditEventID}`, options);
  }

  /**
   * Returns the workspace's audit event log with cursor paging. Each event records
   * the actor, target, source, type, and timestamp of a change.
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
