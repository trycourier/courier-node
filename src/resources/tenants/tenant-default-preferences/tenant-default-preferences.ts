// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from './items';
import { ItemDeleteParams, ItemUpdateParams, Items } from './items';

export class TenantDefaultPreferences extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

TenantDefaultPreferences.Items = Items;

export declare namespace TenantDefaultPreferences {
  export {
    Items as Items,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemDeleteParams as ItemDeleteParams,
  };
}
