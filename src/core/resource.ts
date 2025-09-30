// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Courier } from '../client';

export abstract class APIResource {
  protected _client: Courier;

  constructor(client: Courier) {
    this._client = client;
  }
}
