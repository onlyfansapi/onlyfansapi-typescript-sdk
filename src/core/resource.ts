// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OnlyFansAPI } from '../client';

export abstract class APIResource {
  protected _client: OnlyFansAPI;

  constructor(client: OnlyFansAPI) {
    this._client = client;
  }
}
