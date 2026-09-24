// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from './runs';
import {
  CreatePreviewRunRequest,
  PreviewResult,
  PreviewResultFailureReason,
  PreviewResultStatus,
  PreviewRun,
  PreviewRunDetail,
  PreviewRunFailureReason,
  PreviewRunListResponse,
  PreviewRunStatus,
  RunCreateParams,
  RunListParams,
  RunRetrieveParams,
  Runs,
} from './runs';

export class Previews extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
}

Previews.Runs = Runs;

export declare namespace Previews {
  export {
    Runs as Runs,
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
