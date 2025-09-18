// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from './items';
import {
  ChannelClassification,
  ItemDeleteParams,
  ItemUpdateParams,
  Items,
  SubscriptionTopicNew,
} from './items';

export class DefaultPreferences extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

DefaultPreferences.Items = Items;

export declare namespace DefaultPreferences {
  export {
    Items as Items,
    type ChannelClassification as ChannelClassification,
    type SubscriptionTopicNew as SubscriptionTopicNew,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemDeleteParams as ItemDeleteParams,
  };
}
