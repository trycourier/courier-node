// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as JourneysAPI from './journeys';
import * as NotificationsAPI from '../notifications/notifications';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * Create a notification template scoped to this journey. Defaults to `DRAFT`
   * state; pass `state: "PUBLISHED"` to publish on create.
   *
   * @example
   * ```ts
   * const journeyTemplateGetResponse =
   *   await client.journeys.templates.create('x', {
   *     channel: 'email',
   *     notification: {
   *       name: 'Welcome email',
   *       tags: [],
   *       brand: null,
   *       subscription: null,
   *       content: {
   *         version: '2022-01-01',
   *         elements: [{ type: 'text' }],
   *       },
   *     },
   *   });
   * ```
   */
  create(
    templateID: string,
    params: TemplateCreateParams,
    options?: RequestOptions,
  ): APIPromise<JourneysAPI.JourneyTemplateGetResponse> {
    const {
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post(path`/journeys/${templateID}/templates`, {
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
   * Returns a journey's own notification template with its name, brand, subscription
   * topic, and content. Defaults to the published version.
   *
   * @example
   * ```ts
   * const journeyTemplateGetResponse =
   *   await client.journeys.templates.retrieve('x', {
   *     templateId: 'x',
   *   });
   * ```
   */
  retrieve(
    notificationID: string,
    params: TemplateRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<JourneysAPI.JourneyTemplateGetResponse> {
    const { templateId } = params;
    return this._client.get(path`/journeys/${templateId}/templates/${notificationID}`, options);
  }

  /**
   * List notification templates scoped to this journey. Journey-scoped notification
   * templates can only be referenced from `send` nodes within the same journey.
   *
   * @example
   * ```ts
   * const journeyTemplateListResponse =
   *   await client.journeys.templates.list('x');
   * ```
   */
  list(
    templateID: string,
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JourneysAPI.JourneyTemplateListResponse> {
    return this._client.get(path`/journeys/${templateID}/templates`, { query, ...options });
  }

  /**
   * Archives one journey's notification template, preventing further sends. Detach
   * any send node referencing it beforehand.
   *
   * @example
   * ```ts
   * await client.journeys.templates.archive('x', {
   *   templateId: 'x',
   * });
   * ```
   */
  archive(notificationID: string, params: TemplateArchiveParams, options?: RequestOptions): APIPromise<void> {
    const { templateId } = params;
    return this._client.delete(path`/journeys/${templateId}/templates/${notificationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists the published versions of a template that belongs to a journey, most
   * recent first. Paged by cursor.
   *
   * @example
   * ```ts
   * const notificationTemplateVersionListResponse =
   *   await client.journeys.templates.listVersions('x', {
   *     templateId: 'x',
   *   });
   * ```
   */
  listVersions(
    notificationID: string,
    params: TemplateListVersionsParams,
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.NotificationTemplateVersionListResponse> {
    const { templateId } = params;
    return this._client.get(path`/journeys/${templateId}/templates/${notificationID}/versions`, options);
  }

  /**
   * Publishes a journey-scoped template's draft as a new version. Pass a version
   * instead to roll back the template to an earlier publish.
   *
   * @example
   * ```ts
   * await client.journeys.templates.publish('x', {
   *   templateId: 'x',
   * });
   * ```
   */
  publish(notificationID: string, params: TemplatePublishParams, options?: RequestOptions): APIPromise<void> {
    const {
      templateId,
      'Idempotency-Key': idempotencyKey,
      'x-idempotency-expiration': xIdempotencyExpiration,
      ...body
    } = params;
    return this._client.post(path`/journeys/${templateId}/templates/${notificationID}/publish`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
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
   * Replace the elemental content of a journey-scoped notification template.
   * Overwrites all elements in the template draft with the provided content.
   *
   * @example
   * ```ts
   * const notificationContentMutationResponse =
   *   await client.journeys.templates.putContent('x', {
   *     templateId: 'x',
   *     content: {
   *       version: '2022-01-01',
   *       elements: [{ type: 'channel' }],
   *     },
   *     state: 'DRAFT',
   *   });
   * ```
   */
  putContent(
    notificationID: string,
    params: TemplatePutContentParams,
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.NotificationContentMutationResponse> {
    const { templateId, ...body } = params;
    return this._client.put(path`/journeys/${templateId}/templates/${notificationID}/content`, {
      body,
      ...options,
    });
  }

  /**
   * Set locale-specific content overrides for a journey-scoped notification
   * template. Each element override must reference an existing element by ID.
   *
   * @example
   * ```ts
   * const notificationContentMutationResponse =
   *   await client.journeys.templates.putLocale('x', {
   *     templateId: 'x',
   *     notificationId: 'x',
   *     elements: [
   *       { id: 'elem_1', content: 'Hola {{data.name}}.' },
   *       { id: 'elem_2', title: 'Bienvenido!' },
   *     ],
   *     state: 'DRAFT',
   *   });
   * ```
   */
  putLocale(
    localeID: string,
    params: TemplatePutLocaleParams,
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.NotificationContentMutationResponse> {
    const { templateId, notificationId, ...body } = params;
    return this._client.put(path`/journeys/${templateId}/templates/${notificationId}/locales/${localeID}`, {
      body,
      ...options,
    });
  }

  /**
   * Replaces the draft content of one journey's notification template. Publish it
   * before send nodes referencing it render the change.
   *
   * @example
   * ```ts
   * const journeyTemplateGetResponse =
   *   await client.journeys.templates.replace('x', {
   *     templateId: 'x',
   *     notification: {
   *       brand: { id: 'id' },
   *       content: { elements: [{}], version: '2022-01-01' },
   *       name: 'name',
   *       subscription: { topic_id: 'topic_id' },
   *       tags: ['string'],
   *     },
   *   });
   * ```
   */
  replace(
    notificationID: string,
    params: TemplateReplaceParams,
    options?: RequestOptions,
  ): APIPromise<JourneysAPI.JourneyTemplateGetResponse> {
    const { templateId, ...body } = params;
    return this._client.put(path`/journeys/${templateId}/templates/${notificationID}`, { body, ...options });
  }

  /**
   * Returns the Elemental elements and version of a journey-scoped template's
   * content. Compare versions to see what changed between publishes.
   *
   * @example
   * ```ts
   * const notificationContentGetResponse =
   *   await client.journeys.templates.retrieveContent('x', {
   *     templateId: 'x',
   *   });
   * ```
   */
  retrieveContent(
    notificationID: string,
    params: TemplateRetrieveContentParams,
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.NotificationContentGetResponse> {
    const { templateId, ...query } = params;
    return this._client.get(path`/journeys/${templateId}/templates/${notificationID}/content`, {
      query,
      ...options,
    });
  }
}

export interface TemplateCreateParams {
  /**
   * Body param
   */
  channel: string;

  /**
   * Body param
   */
  notification: TemplateCreateParams.Notification;

  /**
   * Body param
   */
  providerKey?: string;

  /**
   * Body param
   */
  state?: string;

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

export namespace TemplateCreateParams {
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

export interface TemplateRetrieveParams {
  /**
   * Journey id
   */
  templateId: string;
}

export interface TemplateListParams {
  /**
   * Pagination cursor from a prior response.
   */
  cursor?: string;

  /**
   * Page size. Minimum 1, maximum 100.
   */
  limit?: number;
}

export interface TemplateArchiveParams {
  /**
   * Journey id
   */
  templateId: string;
}

export interface TemplateListVersionsParams {
  /**
   * Journey id
   */
  templateId: string;
}

export interface TemplatePublishParams {
  /**
   * Path param: Journey id
   */
  templateId: string;

  /**
   * Body param
   */
  version?: string;

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

export interface TemplatePutContentParams {
  /**
   * Path param: Journey id
   */
  templateId: string;

  /**
   * Body param: Elemental content payload. The server defaults `version` when
   * omitted.
   */
  content: TemplatePutContentParams.Content;

  /**
   * Body param: Template state. Defaults to `DRAFT`.
   */
  state?: NotificationsAPI.NotificationTemplateState;
}

export namespace TemplatePutContentParams {
  /**
   * Elemental content payload. The server defaults `version` when omitted.
   */
  export interface Content {
    elements: Array<Shared.ElementalNode>;

    /**
     * Content version identifier (e.g., `2022-01-01`). Optional; server defaults when
     * omitted.
     */
    version?: string;
  }
}

export interface TemplatePutLocaleParams {
  /**
   * Path param: Journey id
   */
  templateId: string;

  /**
   * Path param: Notification template id
   */
  notificationId: string;

  /**
   * Body param: Elements with locale-specific content overrides.
   */
  elements: Array<TemplatePutLocaleParams.Element>;

  /**
   * Body param: Template state. Defaults to `DRAFT`.
   */
  state?: NotificationsAPI.NotificationTemplateState;
}

export namespace TemplatePutLocaleParams {
  export interface Element {
    /**
     * Target element ID.
     */
    id: string;

    [k: string]: unknown;
  }
}

export interface TemplateReplaceParams {
  /**
   * Path param: Journey id
   */
  templateId: string;

  /**
   * Body param
   */
  notification: TemplateReplaceParams.Notification;

  /**
   * Body param
   */
  state?: string;
}

export namespace TemplateReplaceParams {
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

export interface TemplateRetrieveContentParams {
  /**
   * Path param: Journey id
   */
  templateId: string;

  /**
   * Query param: Accepts `draft`, `published`, or a version string (e.g., `v001`).
   * Defaults to `published`.
   */
  version?: string;
}

export declare namespace Templates {
  export {
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateRetrieveParams as TemplateRetrieveParams,
    type TemplateListParams as TemplateListParams,
    type TemplateArchiveParams as TemplateArchiveParams,
    type TemplateListVersionsParams as TemplateListVersionsParams,
    type TemplatePublishParams as TemplatePublishParams,
    type TemplatePutContentParams as TemplatePutContentParams,
    type TemplatePutLocaleParams as TemplatePutLocaleParams,
    type TemplateReplaceParams as TemplateReplaceParams,
    type TemplateRetrieveContentParams as TemplateRetrieveContentParams,
  };
}
