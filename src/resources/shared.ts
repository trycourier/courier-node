// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as ItemsAPI from './tenants/default-preferences/items';

export interface ChannelPreference {
  channel: ItemsAPI.ChannelClassification;
}

export interface Rule {
  until: string;

  start?: string | null;
}
