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

export type Alignment = 'center' | 'left' | 'right' | 'full';

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

export interface ElementalBaseNode {
  channels?: Array<string> | null;

  if?: string | null;

  loop?: string | null;

  ref?: string | null;
}

export interface ElementalContent {
  elements: Array<
    | ElementalContent.UnionMember0
    | ElementalContent.UnionMember1
    | ElementalContent.UnionMember2
    | ElementalContent.UnionMember3
    | ElementalContent.UnionMember4
    | ElementalContent.UnionMember5
    | ElementalContent.UnionMember6
  >;

  /**
   * For example, "2022-01-01"
   */
  version: string;

  brand?: string | null;
}

export namespace ElementalContent {
  export interface UnionMember0 extends TemplatesAPI.ElementalBaseNode {
    type?: 'text';
  }

  export interface UnionMember1 extends TemplatesAPI.ElementalBaseNode {
    type?: 'meta';
  }

  export interface UnionMember2 extends TemplatesAPI.ElementalBaseNode {
    type?: 'channel';
  }

  export interface UnionMember3 extends TemplatesAPI.ElementalBaseNode {
    type?: 'image';
  }

  export interface UnionMember4 {
    /**
     * A unique id used to identify the action when it is executed.
     */
    action_id?: string | null;

    /**
     * The alignment of the action button. Defaults to "center".
     */
    align?: TemplatesAPI.Alignment | null;

    /**
     * The background color of the action button.
     */
    background_color?: string | null;

    /**
     * The text content of the action shown to the user.
     */
    content?: string;

    /**
     * The target URL of the action.
     */
    href?: string;

    /**
     * Region specific content. See
     * [locales docs](https://www.courier.com/docs/platform/content/elemental/locales/)
     * for more details.
     */
    locales?: { [key: string]: UnionMember4.Locales } | null;

    /**
     * Defaults to `button`.
     */
    style?: 'button' | 'link' | null;

    type?: 'action';
  }

  export namespace UnionMember4 {
    export interface Locales {
      content: string;
    }
  }

  export interface UnionMember5 extends TemplatesAPI.ElementalBaseNode {
    type?: 'divider';
  }

  export interface UnionMember6 extends TemplatesAPI.ElementalBaseNode {
    type?: 'quote';
  }
}

export type TextStyle = 'text' | 'h1' | 'h2' | 'subtext';

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
    type Alignment as Alignment,
    type BaseTemplateTenantAssociation as BaseTemplateTenantAssociation,
    type ElementalBaseNode as ElementalBaseNode,
    type ElementalContent as ElementalContent,
    type TextStyle as TextStyle,
    type TemplateListResponse as TemplateListResponse,
    type TemplateRetrieveParams as TemplateRetrieveParams,
    type TemplateListParams as TemplateListParams,
  };
}
