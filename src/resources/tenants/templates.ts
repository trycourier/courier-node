// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TemplatesAPI from './templates';
import * as NotificationsAPI from '../notifications/notifications';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * Get a Template in Tenant
   *
   * @example
   * ```ts
   * const baseTemplateTenantAssociation =
   *   await client.tenants.templates.retrieve('template_id', {
   *     tenant_id: 'tenant_id',
   *   });
   * ```
   */
  retrieve(
    templateID: string,
    params: TemplateRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BaseTemplateTenantAssociation> {
    const { tenant_id } = params;
    return this._client.get(path`/tenants/${tenant_id}/templates/${templateID}`, options);
  }

  /**
   * List Templates in Tenant
   *
   * @example
   * ```ts
   * const templates = await client.tenants.templates.list(
   *   'tenant_id',
   * );
   * ```
   */
  list(
    tenantID: string,
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get(path`/tenants/${tenantID}/templates`, { query, ...options });
  }
}

export interface BaseTemplateTenantAssociation {
  /**
   * The template's id
   */
  id: string;

  /**
   * The timestamp at which the template was created
   */
  created_at: string;

  /**
   * The timestamp at which the template was published
   */
  published_at: string;

  /**
   * The timestamp at which the template was last updated
   */
  updated_at: string;

  /**
   * The version of the template
   */
  version: string;
}

export interface ElementalChannelNode {
  /**
   * The channel the contents of this element should be applied to. Can be `email`,
   * `push`, `direct_message`, `sms` or a provider such as slack
   */
  channel: string;

  channels?: Array<string> | null;

  /**
   * An array of elements to apply to the channel. If `raw` has not been specified,
   * `elements` is `required`.
   */
  elements?: Array<ElementalNode> | null;

  if?: string | null;

  loop?: string | null;

  /**
   * Raw data to apply to the channel. If `elements` has not been specified, `raw` is
   * `required`.
   */
  raw?: { [key: string]: unknown } | null;

  ref?: string | null;
}

export interface ElementalContent {
  elements: Array<ElementalNode>;

  /**
   * For example, "2022-01-01"
   */
  version: string;

  brand?: unknown;
}

export interface ElementalGroupNode {
  /**
   * Sub elements to render.
   */
  elements: Array<ElementalNode>;

  channels?: Array<string> | null;

  if?: string | null;

  loop?: string | null;

  ref?: string | null;
}

/**
 * The channel element allows a notification to be customized based on which
 * channel it is sent through. For example, you may want to display a detailed
 * message when the notification is sent through email, and a more concise message
 * in a push notification. Channel elements are only valid as top-level elements;
 * you cannot nest channel elements. If there is a channel element specified at the
 * top-level of the document, all sibling elements must be channel elements. Note:
 * As an alternative, most elements support a `channel` property. Which allows you
 * to selectively display an individual element on a per channel basis. See the
 * [control flow docs](https://www.courier.com/docs/platform/content/elemental/control-flow/)
 * for more details.
 */
export type ElementalNode =
  | ElementalNode.UnionMember0
  | ElementalNode.UnionMember1
  | ElementalNode.UnionMember2
  | ElementalNode.UnionMember3
  | ElementalNode.UnionMember4
  | ElementalNode.UnionMember5
  | ElementalNode.UnionMember6
  | ElementalNode.UnionMember7;

export namespace ElementalNode {
  export interface UnionMember0 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'text';
  }

  export interface UnionMember1 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'meta';
  }

  /**
   * The channel element allows a notification to be customized based on which
   * channel it is sent through. For example, you may want to display a detailed
   * message when the notification is sent through email, and a more concise message
   * in a push notification. Channel elements are only valid as top-level elements;
   * you cannot nest channel elements. If there is a channel element specified at the
   * top-level of the document, all sibling elements must be channel elements. Note:
   * As an alternative, most elements support a `channel` property. Which allows you
   * to selectively display an individual element on a per channel basis. See the
   * [control flow docs](https://www.courier.com/docs/platform/content/elemental/control-flow/)
   * for more details.
   */
  export interface UnionMember2 extends TemplatesAPI.ElementalChannelNode {
    type?: 'channel';
  }

  export interface UnionMember3 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'image';
  }

  export interface UnionMember4 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'action';
  }

  export interface UnionMember5 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'divider';
  }

  /**
   * Allows you to group elements together. This can be useful when used in
   * combination with "if" or "loop". See
   * [control flow docs](https://www.courier.com/docs/platform/content/elemental/control-flow/)
   * for more details.
   */
  export interface UnionMember6 extends TemplatesAPI.ElementalGroupNode {
    type?: 'group';
  }

  export interface UnionMember7 {
    channels?: Array<string> | null;

    if?: string | null;

    loop?: string | null;

    ref?: string | null;

    type?: 'quote';
  }
}

export interface TemplateListResponse {
  /**
   * Set to true when there are more pages that can be retrieved.
   */
  has_more: boolean;

  /**
   * Always set to `list`. Represents the type of this object.
   */
  type: 'list';

  /**
   * A url that may be used to generate these results.
   */
  url: string;

  /**
   * A pointer to the next page of results. Defined only when `has_more` is set to
   * true
   */
  cursor?: string | null;

  items?: Array<TemplateListResponse.Item> | null;

  /**
   * A url that may be used to generate fetch the next set of results. Defined only
   * when `has_more` is set to true
   */
  next_url?: string | null;
}

export namespace TemplateListResponse {
  export interface Item extends TemplatesAPI.BaseTemplateTenantAssociation {
    /**
     * The template's data containing it's routing configs
     */
    data: Item.Data;
  }

  export namespace Item {
    /**
     * The template's data containing it's routing configs
     */
    export interface Data {
      routing: NotificationsAPI.MessageRouting;
    }
  }
}

export interface TemplateRetrieveParams {
  /**
   * Id of the tenant for which to retrieve the template.
   */
  tenant_id: string;
}

export interface TemplateListParams {
  /**
   * Continue the pagination with the next cursor
   */
  cursor?: string | null;

  /**
   * The number of templates to return (defaults to 20, maximum value of 100)
   */
  limit?: number | null;
}

export declare namespace Templates {
  export {
    type BaseTemplateTenantAssociation as BaseTemplateTenantAssociation,
    type ElementalChannelNode as ElementalChannelNode,
    type ElementalContent as ElementalContent,
    type ElementalGroupNode as ElementalGroupNode,
    type ElementalNode as ElementalNode,
    type TemplateListResponse as TemplateListResponse,
    type TemplateRetrieveParams as TemplateRetrieveParams,
    type TemplateListParams as TemplateListParams,
  };
}
