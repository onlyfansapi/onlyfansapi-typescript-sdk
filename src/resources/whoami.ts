// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Whoami extends APIResource {
  /**
   * Get details about the currently used API Key & the relevant Team
   *
   * @example
   * ```ts
   * const whoami = await client.whoami.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<WhoamiRetrieveResponse> {
    return this._client.get('/api/whoami', options);
  }
}

export interface WhoamiRetrieveResponse {
  api_key?: WhoamiRetrieveResponse.APIKey;

  team?: WhoamiRetrieveResponse.Team;
}

export namespace WhoamiRetrieveResponse {
  export interface APIKey {
    created_at?: string;

    last_used_at?: string;

    name?: string;
  }

  export interface Team {
    name?: string;

    slug?: string;
  }
}

export declare namespace Whoami {
  export { type WhoamiRetrieveResponse as WhoamiRetrieveResponse };
}
