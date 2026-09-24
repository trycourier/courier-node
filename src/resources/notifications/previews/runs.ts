// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Render a template's email content on real email clients and read back the screenshots, so you can check how it looks before you send it.
 */
export class Runs extends APIResource {
  /**
   * Render this template's email content on each of the requested devices.
   *
   * Returns as soon as the run exists and its render is queued — the screenshots are
   * produced asynchronously. Poll
   * `GET /notifications/{id}/previews/runs/{previewRunId}` until every result
   * reaches a terminal status.
   *
   * Name the devices either with `device_set_id`, for a saved set, or with
   * `device_ids`, for a one-off list. Exactly one of the two is required. Inline
   * `device_ids` must be ids listed by `GET /previews/devices`; any other id is a
   * 422, refused before the run exists or is billed.
   *
   * A template that does not exist is a 404. One that exists but cannot be previewed
   * — not a Design Studio template, no email channel, or no such `template_version`
   * — is a 422, also refused before the run exists or is billed.
   *
   * Preview runs are a metered add-on. A workspace without it, or with its billing
   * suspended, receives a 402.
   *
   * @example
   * ```ts
   * const previewRun =
   *   await client.notifications.previews.runs.create('id', {
   *     device_ids: [
   *       'pvd_1w6dgafr3aaycvv9a8bm996pkc',
   *       'pvd_34qvmj6p4dbqaa5mpys1ekt9jx',
   *     ],
   *   });
   * ```
   */
  create(id: string, params: RunCreateParams, options?: RequestOptions): APIPromise<PreviewRun> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post(path`/notifications/${id}/previews/runs`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(xIdempotencyExpiration != null ?
            { 'x-idempotency-expiration': xIdempotencyExpiration }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve one of this template's preview runs together with its per-device
   * results.
   *
   * A run is only readable under the template it previewed: under any other template
   * it is a 404, the same as a run that does not exist.
   *
   * `thumbnail_url` and `screenshot_url` are short-lived signed URLs, re-signed on
   * every read. Fetch them now rather than storing them. Both are null until
   * Courier's own copy of the image exists, which is what `status: COMPLETED` on a
   * result means.
   *
   * @example
   * ```ts
   * const previewRunDetail =
   *   await client.notifications.previews.runs.retrieve(
   *     'previewRunId',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    previewRunID: string,
    params: RunRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PreviewRunDetail> {
    const { id } = params;
    return this._client.get(path`/notifications/${id}/previews/runs/${previewRunID}`, options);
  }

  /**
   * List this template's preview runs, newest first. Cursor-paginated.
   *
   * A template that does not exist is a 404, the same as every other
   * `/notifications/{id}` route.
   *
   * @example
   * ```ts
   * const previewRunListResponse =
   *   await client.notifications.previews.runs.list('id');
   * ```
   */
  list(
    id: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreviewRunListResponse> {
    return this._client.get(path`/notifications/${id}/previews/runs`, { query, ...options });
  }
}

/**
 * Request body for creating a preview run of the template in the path. Provide
 * exactly one of `device_set_id` or `device_ids`. The template is the path's
 * `{id}`; a `template_id` here is an unknown key and a 400.
 */
export interface CreatePreviewRunRequest {
  /**
   * Template variables to render with, the same shape as the `data` object on a
   * send.
   */
  data?: { [key: string]: unknown };

  /**
   * The devices to render on, by `PreviewDevice.id`, for a one-off run. Mutually
   * exclusive with `device_set_id`.
   */
  device_ids?: Array<string>;

  /**
   * A saved device set naming the devices to render on. Mutually exclusive with
   * `device_ids`.
   */
  device_set_id?: string;

  /**
   * Render the template's content for this locale, e.g. "fr-FR".
   */
  locale?: string;

  /**
   * Which version of the template to render. Omit for the latest saved draft, which
   * always exists and is what the editor shows. `published` renders the live
   * version; a zero-padded `v002` renders that specific publish. Versions are
   * 1-based, so `v000` is not a version, and the unpadded `v2` is rejected — that
   * spelling belongs to journeys' AutomationVersionId, a different scheme in which
   * `v0` means published.
   */
  template_version?: string;
}

/**
 * One device's result within a preview run.
 */
export interface PreviewResult {
  /**
   * The device this result is for, by `PreviewDevice.id`.
   */
  device_id: string;

  /**
   * Short-lived signed URL for the full-sized image. Null until the screenshot
   * exists. Re-signed on every read, so fetch it rather than storing it.
   */
  screenshot_url: string | null;

  /**
   * One device's outcome. `COMPLETED` means the screenshot exists and its URLs are
   * populated. `UNSUPPORTED`, `TIMED_OUT` and `FAILED` are all terminal, and none
   * stands in for another — `UNSUPPORTED` means the device was retired at the
   * vendor, `TIMED_OUT` means it did not report in time.
   */
  status: PreviewResultStatus;

  /**
   * Short-lived signed URL for the grid-sized image. Null until the screenshot
   * exists. Re-signed on every read, so fetch it rather than storing it.
   */
  thumbnail_url: string | null;

  /**
   * Why one device's render failed, when its `status` is `FAILED` and the cause has
   * a public name. `DELIVERY_FAILED` means the rendering service could not deliver
   * the message to its own capture mailbox — infrastructure, not anything wrong with
   * the template.
   */
  failure_reason?: PreviewResultFailureReason;
}

/**
 * Why one device's render failed, when its `status` is `FAILED` and the cause has
 * a public name. `DELIVERY_FAILED` means the rendering service could not deliver
 * the message to its own capture mailbox — infrastructure, not anything wrong with
 * the template.
 */
export type PreviewResultFailureReason = 'DELIVERY_FAILED';

/**
 * One device's outcome. `COMPLETED` means the screenshot exists and its URLs are
 * populated. `UNSUPPORTED`, `TIMED_OUT` and `FAILED` are all terminal, and none
 * stands in for another — `UNSUPPORTED` means the device was retired at the
 * vendor, `TIMED_OUT` means it did not report in time.
 */
export type PreviewResultStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'UNSUPPORTED'
  | 'TIMED_OUT'
  | 'FAILED';

/**
 * One render of a template across a set of devices. Billable.
 */
export interface PreviewRun {
  /**
   * Unique identifier for the preview run.
   */
  id: string;

  /**
   * ISO-8601 timestamp of when the run was created.
   */
  created_at: string;

  /**
   * The devices this run was submitted for, snapshotted when the run was created.
   */
  device_ids: Array<string>;

  /**
   * Where the run itself has got to. `PENDING` and `RENDERED` mean Courier is still
   * preparing the email, `SUBMITTED` means it is with the rendering service, and
   * `COMPLETED` means every device has reported. `FAILED` is the run as a whole
   * failing — an individual device failing never fails the run.
   */
  status: PreviewRunStatus;

  /**
   * The template that was rendered.
   */
  template_id: string;

  /**
   * Why the run failed, when `status` is `FAILED`. `NO_EMAIL_CHANNEL` and
   * `TEMPLATE_NOT_SUPPORTED` mean there was nothing to render;
   * `ALL_DEVICES_UNSUPPORTED` means every requested device has been retired and the
   * request can be fixed by choosing others.
   */
  failure_reason?: PreviewRunFailureReason;

  /**
   * The version of the template that was rendered — `draft`, or a zero-padded
   * published version such as `v002`. Absent until the render settles.
   */
  template_version?: string;
}

/**
 * A preview run together with its per-device results.
 */
export interface PreviewRunDetail {
  /**
   * Unique identifier for the preview run.
   */
  id: string;

  /**
   * ISO-8601 timestamp of when the run was created.
   */
  created_at: string;

  /**
   * The devices this run was submitted for, snapshotted when the run was created.
   */
  device_ids: Array<string>;

  /**
   * One entry per device in `device_ids`.
   */
  results: Array<PreviewResult>;

  /**
   * Where the run itself has got to. `PENDING` and `RENDERED` mean Courier is still
   * preparing the email, `SUBMITTED` means it is with the rendering service, and
   * `COMPLETED` means every device has reported. `FAILED` is the run as a whole
   * failing — an individual device failing never fails the run.
   */
  status: PreviewRunStatus;

  /**
   * The template that was rendered.
   */
  template_id: string;

  /**
   * Why the run failed, when `status` is `FAILED`. `NO_EMAIL_CHANNEL` and
   * `TEMPLATE_NOT_SUPPORTED` mean there was nothing to render;
   * `ALL_DEVICES_UNSUPPORTED` means every requested device has been retired and the
   * request can be fixed by choosing others.
   */
  failure_reason?: PreviewRunFailureReason;

  /**
   * The version of the template that was rendered — `draft`, or a zero-padded
   * published version such as `v002`. Absent until the render settles.
   */
  template_version?: string;
}

/**
 * Why the run failed, when `status` is `FAILED`. `NO_EMAIL_CHANNEL` and
 * `TEMPLATE_NOT_SUPPORTED` mean there was nothing to render;
 * `ALL_DEVICES_UNSUPPORTED` means every requested device has been retired and the
 * request can be fixed by choosing others.
 */
export type PreviewRunFailureReason =
  | 'TEMPLATE_NOT_SUPPORTED'
  | 'NO_EMAIL_CHANNEL'
  | 'RENDER_FAILED'
  | 'ALL_DEVICES_UNSUPPORTED'
  | 'VENDOR_ERROR';

/**
 * Paginated list of preview runs, newest first.
 */
export interface PreviewRunListResponse {
  paging: Shared.Paging;

  results: Array<PreviewRun>;
}

/**
 * Where the run itself has got to. `PENDING` and `RENDERED` mean Courier is still
 * preparing the email, `SUBMITTED` means it is with the rendering service, and
 * `COMPLETED` means every device has reported. `FAILED` is the run as a whole
 * failing — an individual device failing never fails the run.
 */
export type PreviewRunStatus = 'PENDING' | 'RENDERED' | 'SUBMITTED' | 'COMPLETED' | 'FAILED';

export interface RunCreateParams {
  /**
   * Body param: Template variables to render with, the same shape as the `data`
   * object on a send.
   */
  data?: { [key: string]: unknown };

  /**
   * Body param: The devices to render on, by `PreviewDevice.id`, for a one-off run.
   * Mutually exclusive with `device_set_id`.
   */
  device_ids?: Array<string>;

  /**
   * Body param: A saved device set naming the devices to render on. Mutually
   * exclusive with `device_ids`.
   */
  device_set_id?: string;

  /**
   * Body param: Render the template's content for this locale, e.g. "fr-FR".
   */
  locale?: string;

  /**
   * Body param: Which version of the template to render. Omit for the latest saved
   * draft, which always exists and is what the editor shows. `published` renders the
   * live version; a zero-padded `v002` renders that specific publish. Versions are
   * 1-based, so `v000` is not a version, and the unpadded `v2` is rejected — that
   * spelling belongs to journeys' AutomationVersionId, a different scheme in which
   * `v0` means published.
   */
  template_version?: string;

  /**
   * Header param: A unique key that makes this request idempotent. If Courier
   * receives another request with the same `Idempotency-Key`, it returns the stored
   * response from the first request without performing the operation again
   * (including the original status code and any error). Use it to safely retry
   * `POST` requests after network failures without risking duplicate sends. The key
   * is scoped to this endpoint.
   */
  'Idempotency-Key'?: string;

  /**
   * Header param: How long the idempotency key remains valid, as a Unix epoch
   * timestamp in seconds or an ISO 8601 date string. Only applies when
   * `Idempotency-Key` is provided. If omitted, the key is retained for 25 hours; the
   * maximum is 1 year.
   */
  'x-idempotency-expiration'?: string;
}

export interface RunRetrieveParams {
  /**
   * Template ID (nt\_ prefix).
   */
  id: string;
}

export interface RunListParams {
  /**
   * Opaque pagination cursor from a previous response. Omit for the first page.
   */
  cursor?: string | null;

  /**
   * Maximum number of results per page.
   */
  limit?: number;
}

export declare namespace Runs {
  export {
    type CreatePreviewRunRequest as CreatePreviewRunRequest,
    type PreviewResult as PreviewResult,
    type PreviewResultFailureReason as PreviewResultFailureReason,
    type PreviewResultStatus as PreviewResultStatus,
    type PreviewRun as PreviewRun,
    type PreviewRunDetail as PreviewRunDetail,
    type PreviewRunFailureReason as PreviewRunFailureReason,
    type PreviewRunListResponse as PreviewRunListResponse,
    type PreviewRunStatus as PreviewRunStatus,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };
}
