// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CourierDocs } from '../client';

export abstract class APIResource {
  protected _client: CourierDocs;

  constructor(client: CourierDocs) {
    this._client = client;
  }
}
