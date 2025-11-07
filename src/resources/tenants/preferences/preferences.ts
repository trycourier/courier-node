// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from './items';
import { ItemDeleteParams, ItemUpdateParams, Items } from './items';

export class Preferences extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Preferences.Items = Items;

export declare namespace Preferences {
  export {
    Items as Items,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemDeleteParams as ItemDeleteParams,
  };
}
