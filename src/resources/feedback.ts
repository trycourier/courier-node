// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Report suspected bugs, confusing behavior and missing features in Courier, from an AI agent, a developer tool or by hand.
 */
export class Feedback extends APIResource {
  /**
   * Reports a suspected bug, confusing behavior or a missing feature in Courier. It
   * is built for AI agents and developer tools to call when Courier does something
   * unexpected, and people can call it too.
   *
   * A report is not a support ticket. A `201` means Courier stored the report; it
   * does not promise a reply or a fix. For help with your account, contact Courier
   * support.
   *
   * Never include secrets, API keys or customer data such as recipient names, email
   * addresses or message content.
   *
   * Requires an API key with no scope restrictions; a JWT or a scoped API key is
   * refused. Each workspace can submit 200 reports per UTC day, and requests that
   * fail validation count toward that limit.
   *
   * @example
   * ```ts
   * const feedback = await client.feedback.create({
   *   category: 'possible_bug',
   *   description:
   *     'GET /lists/{list_id}/subscriptions returned items: [] with paging.more set to true, and following the cursor returned the remaining subscribers.',
   *   surface: 'api',
   *   title:
   *     'List subscriptions returns an empty page with a next cursor',
   *   expected_behavior:
   *     'Every page before the last one contains at least one item.',
   *   harness: 'Claude Code',
   *   location: 'GET /lists/{list_id}/subscriptions',
   *   model: 'claude-opus-5-5',
   *   request_id: '1-67f340b1-58b7b231d9485ef0cda0a38b',
   * });
   * ```
   */
  create(body: FeedbackCreateParams, options?: RequestOptions): APIPromise<FeedbackCreateResponse> {
    return this._client.post('/feedback', { body, ...options });
  }
}

export interface FeedbackCreateResponse {
  /**
   * The ID of the stored report, `fbk_` followed by a ULID.
   */
  feedback_id: string;
}

export interface FeedbackCreateParams {
  /**
   * What kind of report this is: `possible_bug` for behavior that looks wrong,
   * `confusing_behavior` for behavior that works but was hard to understand,
   * `feature_request` for something Courier does not do yet, and `other`.
   */
  category: 'possible_bug' | 'confusing_behavior' | 'feature_request' | 'other';

  /**
   * What happened, in enough detail for someone at Courier to follow it.
   */
  description: string;

  /**
   * Where you met the problem: the REST `api`, an `sdk`, the Courier `mcp` server,
   * the Courier app `ui`, the `docs`, or `other`.
   */
  surface: 'api' | 'sdk' | 'mcp' | 'ui' | 'docs' | 'other';

  /**
   * A one-line summary of the report.
   */
  title: string;

  /**
   * What you expected to happen instead.
   */
  expected_behavior?: string;

  /**
   * The agent or tool that submitted the report, such as `Claude Code`.
   */
  harness?: string;

  /**
   * Where it happened, such as an endpoint (`POST /send`), an SDK method, an MCP
   * tool name or a docs URL.
   */
  location?: string;

  /**
   * The AI model that submitted the report, such as `claude-opus-5-5`.
   */
  model?: string;

  /**
   * The request ID of an API call that shows the problem, if there is one.
   */
  request_id?: string;
}

export declare namespace Feedback {
  export {
    type FeedbackCreateResponse as FeedbackCreateResponse,
    type FeedbackCreateParams as FeedbackCreateParams,
  };
}
