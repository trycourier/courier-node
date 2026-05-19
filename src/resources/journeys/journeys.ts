// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JourneysAPI from './journeys';
import * as Shared from '../shared';
import * as TemplatesAPI from './templates';
import {
  TemplateArchiveParams,
  TemplateCreateParams,
  TemplateListParams,
  TemplateListVersionsParams,
  TemplatePublishParams,
  TemplateReplaceParams,
  TemplateRetrieveParams,
  Templates,
} from './templates';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Journeys extends APIResource {
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);

  /**
   * Create a journey. Defaults to `DRAFT` state; pass `state: "PUBLISHED"` to
   * publish on create. Send nodes are not allowed on `POST`. The standard flow is:
   * create the journey shell here, add notification templates with
   * `POST /journeys/{templateId}/templates`, then wire them into the journey with
   * `PUT /journeys/{templateId}`. Call `POST /journeys/{templateId}/publish` to
   * publish a draft after the fact.
   *
   * @example
   * ```ts
   * const journeyResponse = await client.journeys.create({
   *   name: 'Welcome Journey',
   *   nodes: [
   *     {
   *       id: 'trigger-1',
   *       type: 'trigger',
   *       trigger_type: 'api',
   *     },
   *     { id: 'send-1', type: 'send' },
   *   ],
   *   enabled: true,
   *   state: 'DRAFT',
   * });
   * ```
   */
  create(body: JourneyCreateParams, options?: RequestOptions): APIPromise<JourneyResponse> {
    return this._client.post('/journeys', { body, ...options });
  }

  /**
   * Fetch a journey by id. Pass `?version=draft` (default `published`) to retrieve
   * the working draft, or `?version=vN` to retrieve a historical version.
   *
   * @example
   * ```ts
   * const journeyResponse = await client.journeys.retrieve('x');
   * ```
   */
  retrieve(
    templateID: string,
    query: JourneyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JourneyResponse> {
    return this._client.get(path`/journeys/${templateID}`, { query, ...options });
  }

  /**
   * Get the list of journeys.
   *
   * @example
   * ```ts
   * const journeysListResponse = await client.journeys.list();
   * ```
   */
  list(
    query: JourneyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JourneysListResponse> {
    return this._client.get('/journeys', { query, ...options });
  }

  /**
   * Archive a journey. Archived journeys cannot be invoked. Existing journey runs
   * continue to completion.
   *
   * @example
   * ```ts
   * await client.journeys.archive('x');
   * ```
   */
  archive(templateID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/journeys/${templateID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Invoke a journey by id or alias to start a new run. The response includes a
   * `runId` identifying the run.
   *
   * @example
   * ```ts
   * const journeysInvokeResponse = await client.journeys.invoke(
   *   'templateId',
   *   {
   *     data: { order_id: 'order-456', amount: 99.99 },
   *     user_id: 'user-123',
   *   },
   * );
   * ```
   */
  invoke(
    templateID: string,
    body: JourneyInvokeParams,
    options?: RequestOptions,
  ): APIPromise<JourneysInvokeResponse> {
    return this._client.post(path`/journeys/${templateID}/invoke`, { body, ...options });
  }

  /**
   * List published versions of a journey, ordered most recent first.
   *
   * @example
   * ```ts
   * const journeyVersionsListResponse =
   *   await client.journeys.listVersions('x');
   * ```
   */
  listVersions(templateID: string, options?: RequestOptions): APIPromise<JourneyVersionsListResponse> {
    return this._client.get(path`/journeys/${templateID}/versions`, options);
  }

  /**
   * Publish the current draft as a new version. Body is optional; pass
   * `{ "version": "vN" }` to roll back to a prior version instead. Returns 404 if
   * the journey has no draft to publish.
   *
   * @example
   * ```ts
   * const journeyResponse = await client.journeys.publish('x');
   * ```
   */
  publish(
    templateID: string,
    body: JourneyPublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JourneyResponse> {
    return this._client.post(path`/journeys/${templateID}/publish`, { body, ...options });
  }

  /**
   * Replace the journey draft. Updates the working draft only; call
   * `POST /journeys/{templateId}/publish` to make it live, or pass
   * `state: "PUBLISHED"` in this request to publish immediately. Send-node
   * `template` ids must already exist and be scoped to this journey, and node ids
   * must not be claimed by another journey.
   *
   * @example
   * ```ts
   * const journeyResponse = await client.journeys.replace('x', {
   *   name: 'Welcome Journey v2',
   *   nodes: [],
   *   enabled: true,
   *   state: 'DRAFT',
   * });
   * ```
   */
  replace(
    templateID: string,
    body: JourneyReplaceParams,
    options?: RequestOptions,
  ): APIPromise<JourneyResponse> {
    return this._client.put(path`/journeys/${templateID}`, { body, ...options });
  }
}

/**
 * Request body for creating a journey.
 */
export interface CreateJourneyRequest {
  name: string;

  nodes: Array<JourneyNode>;

  enabled?: boolean;

  /**
   * Lifecycle state of a journey.
   */
  state?: JourneyState;
}

/**
 * A journey template representing an automation workflow.
 */
export interface Journey {
  /**
   * The unique identifier of the journey.
   */
  id: string;

  /**
   * The name of the journey.
   */
  name: string;

  /**
   * The version of the journey (published or draft).
   */
  version: 'published' | 'draft';

  /**
   * ISO 8601 timestamp when the journey was created.
   */
  createdAt?: string;

  /**
   * ISO 8601 timestamp when the journey was last updated.
   */
  updatedAt?: string;
}

/**
 * Invoke an AI step with `user_prompt` and optional `web_search`. Returns a
 * structured response conforming to `output_schema`.
 */
export interface JourneyAINode {
  /**
   * A JSONSchema object (Draft-07-compatible). Validated at runtime by Ajv.
   */
  output_schema: { [key: string]: unknown };

  type: 'ai';

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;

  model?: string;

  user_prompt?: string;

  web_search?: boolean;
}

/**
 * Trigger fired when the journey is invoked via the API. The optional `schema`
 * field is a JSON Schema that validates the invocation payload.
 */
export interface JourneyAPIInvokeTriggerNode {
  trigger_type: 'api-invoke';

  type: 'trigger';

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;

  /**
   * A JSONSchema object (Draft-07-compatible). Validated at runtime by Ajv.
   */
  schema?: { [key: string]: unknown };
}

/**
 * A single condition expressed as a positional tuple of strings.
 *
 * - Binary form (3 elements): `[path, operator, value]` where `operator` is one of
 *   `is equal`, `is not equal`, `contains`, `does not contain`, `starts with`,
 *   `ends with`, `greater than`, `greater than or equal`, `less than`,
 *   `less than or equal`.
 *
 *   Example: `["user.tier", "is equal", "gold"]`.
 *
 * - Unary form (2 elements): `[path, operator]` where `operator` is one of
 *   `exists`, `does not exist`.
 *
 *   Example: `["user.email", "exists"]`.
 *
 * The first element is a non-empty dot-path. The second element is the operator
 * (must come from one of the two operator sets above). For the binary form, the
 * third element is the comparison value (string). Runtime validation of the
 * operator value and arity is performed by the backend; SDKs surface this as a
 * string list.
 */
export type JourneyConditionAtom = Array<string>;

/**
 * A leaf condition group. Exactly one of `AND` or `OR` must be present at runtime;
 * each is a list of `JourneyConditionAtom` tuples.
 */
export interface JourneyConditionGroup {
  AND?: Array<JourneyConditionAtom>;

  OR?: Array<JourneyConditionAtom>;
}

/**
 * A nested condition group. Exactly one of `AND` or `OR` must be present at
 * runtime; each is a list of `JourneyConditionGroup` items.
 */
export interface JourneyConditionNestedGroup {
  AND?: Array<JourneyConditionGroup>;

  OR?: Array<JourneyConditionGroup>;
}

/**
 * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
 * group, or an AND/OR nested group. Omit the `conditions` property entirely to
 * express "no conditions".
 */
export type JourneyConditionsField =
  | JourneyConditionAtom
  | JourneyConditionGroup
  | JourneyConditionNestedGroup;

/**
 * Pause the journey run for a fixed `duration`.
 */
export interface JourneyDelayDurationNode {
  duration: string;

  mode: 'duration';

  type: 'delay';

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;
}

/**
 * Pause the journey run `until` a specific time.
 */
export interface JourneyDelayUntilNode {
  mode: 'until';

  type: 'delay';

  until: string;

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;
}

/**
 * Terminate the journey run.
 */
export interface JourneyExitNode {
  type: 'exit';

  id?: string;
}

/**
 * Issue an HTTP GET or DELETE request and merge the response into the journey
 * state per `merge_strategy`.
 */
export interface JourneyFetchGetDeleteNode {
  /**
   * Strategy for merging a fetch response into the journey run state.
   */
  merge_strategy: JourneyMergeStrategy;

  method: 'get' | 'delete';

  type: 'fetch';

  url: string;

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;

  headers?: { [key: string]: string };

  query_params?: { [key: string]: string };

  /**
   * A JSONSchema object (Draft-07-compatible). Validated at runtime by Ajv.
   */
  response_schema?: { [key: string]: unknown };
}

/**
 * Issue an HTTP POST or PUT request with a `body` and merge the response into the
 * journey state per `merge_strategy`.
 */
export interface JourneyFetchPostPutNode {
  /**
   * Strategy for merging a fetch response into the journey run state.
   */
  merge_strategy: JourneyMergeStrategy;

  method: 'post' | 'put';

  type: 'fetch';

  url: string;

  id?: string;

  body?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;

  headers?: { [key: string]: string };

  query_params?: { [key: string]: string };

  /**
   * A JSONSchema object (Draft-07-compatible). Validated at runtime by Ajv.
   */
  response_schema?: { [key: string]: unknown };
}

/**
 * Strategy for merging a fetch response into the journey run state.
 */
export type JourneyMergeStrategy = 'overwrite' | 'soft-merge' | 'replace' | 'none';

/**
 * A single node in a journey DAG. Discriminated by `type`, with a secondary
 * discriminator on some variants (`trigger_type` for trigger, `mode` for delay,
 * `method` for fetch, `scope` for throttle).
 */
export type JourneyNode =
  | JourneyAPIInvokeTriggerNode
  | JourneySegmentTriggerNode
  | JourneySendNode
  | JourneyDelayDurationNode
  | JourneyDelayUntilNode
  | JourneyFetchGetDeleteNode
  | JourneyFetchPostPutNode
  | JourneyAINode
  | JourneyThrottleStaticNode
  | JourneyThrottleDynamicNode
  | JourneyExitNode
  | JourneyNode.JourneyBranchNode;

export namespace JourneyNode {
  /**
   * Branch node. Routes to the first entry in `paths[]` whose `conditions` match,
   * else falls through to `default.nodes`.
   */
  export interface JourneyBranchNode {
    default: JourneyBranchNode.Default;

    paths: Array<JourneyBranchNode.Path>;

    type: 'branch';

    id?: string;
  }

  export namespace JourneyBranchNode {
    export interface Default {
      nodes: Array<JourneysAPI.JourneyNode>;

      label?: string;
    }

    export interface Path {
      /**
       * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
       * group, or an AND/OR nested group. Omit the `conditions` property entirely to
       * express "no conditions".
       */
      conditions: JourneysAPI.JourneyConditionsField;

      nodes: Array<JourneysAPI.JourneyNode>;

      label?: string;
    }
  }
}

/**
 * Request body for publishing a journey. Pass `version` to roll back to a prior
 * version; omit to publish the current draft.
 */
export interface JourneyPublishRequest {
  version?: string;
}

/**
 * A journey, with its current draft or published nodes and metadata.
 */
export interface JourneyResponse {
  id: string;

  created: number | null;

  creator: string | null;

  enabled: boolean;

  name: string;

  nodes: Array<JourneyNode>;

  published: number | null;

  /**
   * Lifecycle state of a journey.
   */
  state: JourneyState;

  updated: number | null;

  updater: string | null;
}

/**
 * Trigger fired by a segment event (`identify`, `group`, or `track`).
 */
export interface JourneySegmentTriggerNode {
  request_type: 'identify' | 'group' | 'track';

  trigger_type: 'segment';

  type: 'trigger';

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;

  event_id?: string;
}

/**
 * Send a notification template to the recipient. Optionally override the recipient
 * address, delay the send, or attach `data`.
 */
export interface JourneySendNode {
  message: JourneySendNode.Message;

  type: 'send';

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;
}

export namespace JourneySendNode {
  export interface Message {
    template: string;

    data?: { [key: string]: unknown };

    delay?: Message.Delay;

    to?: Message.To;
  }

  export namespace Message {
    export interface Delay {
      until: string;

      timezone?: string;
    }

    export interface To {
      email_override?: string;

      phone_number_override?: string;

      user_id_override?: string;
    }
  }
}

/**
 * Lifecycle state of a journey.
 */
export type JourneyState = 'DRAFT' | 'PUBLISHED';

/**
 * Request body for creating a notification template scoped to a journey.
 */
export interface JourneyTemplateCreateRequest {
  channel: string;

  notification: JourneyTemplateCreateRequest.Notification;

  providerKey?: string;

  state?: string;
}

export namespace JourneyTemplateCreateRequest {
  export interface Notification {
    brand: Notification.Brand | null;

    content: Notification.Content;

    name: string;

    subscription: Notification.Subscription | null;

    tags: Array<string>;
  }

  export namespace Notification {
    export interface Brand {
      id: string;
    }

    export interface Content {
      elements: Array<Shared.ElementalNode>;

      version: '2022-01-01';

      scope?: 'default' | 'strict';
    }

    export interface Subscription {
      topic_id: string;
    }
  }
}

/**
 * A journey-scoped notification template.
 */
export interface JourneyTemplateGetResponse {
  id: string;

  brand: JourneyTemplateGetResponse.Brand | null;

  content: JourneyTemplateGetResponse.Content;

  created: number;

  creator: string;

  name: string;

  state: 'DRAFT' | 'PUBLISHED';

  subscription: JourneyTemplateGetResponse.Subscription | null;

  tags: Array<string>;

  updated?: number;

  updater?: string;
}

export namespace JourneyTemplateGetResponse {
  export interface Brand {
    id: string;
  }

  export interface Content {
    elements: Array<Shared.ElementalNode>;

    version: '2022-01-01';

    scope?: 'default' | 'strict';
  }

  export interface Subscription {
    topic_id: string;
  }
}

/**
 * Paged list of journey-scoped notification templates.
 */
export interface JourneyTemplateListResponse {
  paging: Shared.Paging;

  results: Array<JourneyTemplateSummary>;
}

/**
 * Request body for publishing a journey-scoped notification template. Pass
 * `version` to roll back to a prior version; omit to publish the current draft.
 */
export interface JourneyTemplatePublishRequest {
  version?: string;
}

/**
 * Request body for replacing a journey-scoped notification template draft.
 */
export interface JourneyTemplateReplaceRequest {
  notification: JourneyTemplateReplaceRequest.Notification;

  state?: string;
}

export namespace JourneyTemplateReplaceRequest {
  export interface Notification {
    brand: Notification.Brand | null;

    content: Notification.Content;

    name: string;

    subscription: Notification.Subscription | null;

    tags: Array<string>;
  }

  export namespace Notification {
    export interface Brand {
      id: string;
    }

    export interface Content {
      elements: Array<Shared.ElementalNode>;

      version: '2022-01-01';

      scope?: 'default' | 'strict';
    }

    export interface Subscription {
      topic_id: string;
    }
  }
}

/**
 * Summary fields of a journey-scoped notification template returned in list
 * responses.
 */
export interface JourneyTemplateSummary {
  id: string;

  created: number;

  creator: string;

  name: string;

  state: string;

  tags: Array<string>;

  updated?: number;

  updater?: string;
}

/**
 * Throttle the journey by a dynamic `throttle_key`, allowing at most `max_allowed`
 * invocations per `period`.
 */
export interface JourneyThrottleDynamicNode {
  max_allowed: number;

  period: string;

  scope: 'dynamic';

  throttle_key: string;

  type: 'throttle';

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;
}

/**
 * Throttle the journey by a static `scope` (`user` or `global`), allowing at most
 * `max_allowed` invocations per `period`.
 */
export interface JourneyThrottleStaticNode {
  max_allowed: number;

  period: string;

  scope: 'user' | 'global';

  type: 'throttle';

  id?: string;

  /**
   * Condition spec for a journey node. Accepts a single condition atom, an AND/OR
   * group, or an AND/OR nested group. Omit the `conditions` property entirely to
   * express "no conditions".
   */
  conditions?: JourneyConditionsField;
}

/**
 * A published version of a journey.
 */
export interface JourneyVersionItem {
  created: number | null;

  creator: string | null;

  name: string;

  published: number | null;

  version: string;
}

/**
 * Paged list of published journey versions, most recent first.
 */
export interface JourneyVersionsListResponse {
  paging: Shared.Paging;

  results: Array<JourneyVersionItem>;
}

/**
 * Request body for invoking a journey. Requires either a user identifier or a
 * profile with contact information. User identifiers can be provided via user_id
 * field, or resolved from profile/data objects (user_id, userId, or anonymousId
 * fields).
 */
export interface JourneysInvokeRequest {
  /**
   * Data payload passed to the journey. The expected shape can be predefined using
   * the schema builder in the journey editor. This data is available in journey
   * steps for condition evaluation and template variable interpolation. Can also
   * contain user identifiers (user_id, userId, anonymousId) if not provided
   * elsewhere.
   */
  data?: { [key: string]: unknown };

  /**
   * Profile data for the user. Can contain contact information (email,
   * phone_number), user identifiers (user_id, userId, anonymousId), or any custom
   * profile fields. Profile fields are merged with any existing stored profile for
   * the user. Include context.tenant_id to load a tenant-scoped profile for
   * multi-tenant scenarios.
   */
  profile?: { [key: string]: unknown };

  /**
   * A unique identifier for the user. If not provided, the system will attempt to
   * resolve the user identifier from profile or data objects.
   */
  user_id?: string;
}

export interface JourneysInvokeResponse {
  /**
   * A unique identifier for the journey run that was created.
   */
  runId: string;
}

export interface JourneysListResponse {
  /**
   * A cursor token for pagination. Present when there are more results available.
   */
  cursor?: string;

  templates?: Array<Journey>;
}

export interface JourneyCreateParams {
  name: string;

  nodes: Array<JourneyNode>;

  enabled?: boolean;

  /**
   * Lifecycle state of a journey.
   */
  state?: JourneyState;
}

export interface JourneyRetrieveParams {
  /**
   * Version selector: `draft`, `published` (default), or `vN`.
   */
  version?: string;
}

export interface JourneyListParams {
  /**
   * A cursor token for pagination. Use the cursor from the previous response to
   * fetch the next page of results.
   */
  cursor?: string;

  /**
   * The version of journeys to retrieve. Accepted values are published (for
   * published journeys) or draft (for draft journeys). Defaults to published.
   */
  version?: 'published' | 'draft';
}

export interface JourneyInvokeParams {
  /**
   * Data payload passed to the journey. The expected shape can be predefined using
   * the schema builder in the journey editor. This data is available in journey
   * steps for condition evaluation and template variable interpolation. Can also
   * contain user identifiers (user_id, userId, anonymousId) if not provided
   * elsewhere.
   */
  data?: { [key: string]: unknown };

  /**
   * Profile data for the user. Can contain contact information (email,
   * phone_number), user identifiers (user_id, userId, anonymousId), or any custom
   * profile fields. Profile fields are merged with any existing stored profile for
   * the user. Include context.tenant_id to load a tenant-scoped profile for
   * multi-tenant scenarios.
   */
  profile?: { [key: string]: unknown };

  /**
   * A unique identifier for the user. If not provided, the system will attempt to
   * resolve the user identifier from profile or data objects.
   */
  user_id?: string;
}

export interface JourneyPublishParams {
  version?: string;
}

export interface JourneyReplaceParams {
  name: string;

  nodes: Array<JourneyNode>;

  enabled?: boolean;

  /**
   * Lifecycle state of a journey.
   */
  state?: JourneyState;
}

Journeys.Templates = Templates;

export declare namespace Journeys {
  export {
    type CreateJourneyRequest as CreateJourneyRequest,
    type Journey as Journey,
    type JourneyAINode as JourneyAINode,
    type JourneyAPIInvokeTriggerNode as JourneyAPIInvokeTriggerNode,
    type JourneyConditionAtom as JourneyConditionAtom,
    type JourneyConditionGroup as JourneyConditionGroup,
    type JourneyConditionNestedGroup as JourneyConditionNestedGroup,
    type JourneyConditionsField as JourneyConditionsField,
    type JourneyDelayDurationNode as JourneyDelayDurationNode,
    type JourneyDelayUntilNode as JourneyDelayUntilNode,
    type JourneyExitNode as JourneyExitNode,
    type JourneyFetchGetDeleteNode as JourneyFetchGetDeleteNode,
    type JourneyFetchPostPutNode as JourneyFetchPostPutNode,
    type JourneyMergeStrategy as JourneyMergeStrategy,
    type JourneyNode as JourneyNode,
    type JourneyPublishRequest as JourneyPublishRequest,
    type JourneyResponse as JourneyResponse,
    type JourneySegmentTriggerNode as JourneySegmentTriggerNode,
    type JourneySendNode as JourneySendNode,
    type JourneyState as JourneyState,
    type JourneyTemplateCreateRequest as JourneyTemplateCreateRequest,
    type JourneyTemplateGetResponse as JourneyTemplateGetResponse,
    type JourneyTemplateListResponse as JourneyTemplateListResponse,
    type JourneyTemplatePublishRequest as JourneyTemplatePublishRequest,
    type JourneyTemplateReplaceRequest as JourneyTemplateReplaceRequest,
    type JourneyTemplateSummary as JourneyTemplateSummary,
    type JourneyThrottleDynamicNode as JourneyThrottleDynamicNode,
    type JourneyThrottleStaticNode as JourneyThrottleStaticNode,
    type JourneyVersionItem as JourneyVersionItem,
    type JourneyVersionsListResponse as JourneyVersionsListResponse,
    type JourneysInvokeRequest as JourneysInvokeRequest,
    type JourneysInvokeResponse as JourneysInvokeResponse,
    type JourneysListResponse as JourneysListResponse,
    type JourneyCreateParams as JourneyCreateParams,
    type JourneyRetrieveParams as JourneyRetrieveParams,
    type JourneyListParams as JourneyListParams,
    type JourneyInvokeParams as JourneyInvokeParams,
    type JourneyPublishParams as JourneyPublishParams,
    type JourneyReplaceParams as JourneyReplaceParams,
  };

  export {
    Templates as Templates,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateRetrieveParams as TemplateRetrieveParams,
    type TemplateListParams as TemplateListParams,
    type TemplateArchiveParams as TemplateArchiveParams,
    type TemplateListVersionsParams as TemplateListVersionsParams,
    type TemplatePublishParams as TemplatePublishParams,
    type TemplateReplaceParams as TemplateReplaceParams,
  };
}
