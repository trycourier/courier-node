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
   * Create a notification template scoped to this journey. The template is created
   * in DRAFT state.
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
    body: TemplateCreateParams,
    options?: RequestOptions,
  ): APIPromise<JourneysAPI.JourneyTemplateGetResponse> {
    return this._client.post(path`/journeys/${templateID}/templates`, { body, ...options });
  }

  /**
   * Fetch a journey-scoped notification template by id. Pass `?version=draft`
   * (default `published`) to retrieve the working draft, or `?version=vN` for a
   * historical version.
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
   * List notification templates scoped to this journey. Templates scoped to a
   * journey can only be referenced from `send` nodes of the same journey.
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
   * Archive a journey-scoped notification template. Archived templates cannot be
   * sent.
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
   * List published versions of a journey-scoped notification template, ordered most
   * recent first.
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
   * Publish the current draft of a journey-scoped notification template.
   *
   * @example
   * ```ts
   * await client.journeys.templates.publish('x', {
   *   templateId: 'x',
   * });
   * ```
   */
  publish(notificationID: string, params: TemplatePublishParams, options?: RequestOptions): APIPromise<void> {
    const { templateId, ...body } = params;
    return this._client.post(path`/journeys/${templateId}/templates/${notificationID}/publish`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Replace a journey-scoped notification template draft.
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
}

export interface TemplateCreateParams {
  channel: string;

  notification: TemplateCreateParams.Notification;

  providerKey?: string;

  state?: string;
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
  cursor?: string;

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

export declare namespace Templates {
  export {
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateRetrieveParams as TemplateRetrieveParams,
    type TemplateListParams as TemplateListParams,
    type TemplateArchiveParams as TemplateArchiveParams,
    type TemplateListVersionsParams as TemplateListVersionsParams,
    type TemplatePublishParams as TemplatePublishParams,
    type TemplateReplaceParams as TemplateReplaceParams,
  };
}
