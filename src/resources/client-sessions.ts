// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ClientSessions extends APIResource {
  /**
   * Create Client Session Token for later use in embedded auth components - eg. via
   * @onlyfansapi/auth npm package.
   *
   * @example
   * ```ts
   * const clientSession = await client.clientSessions.create({
   *   display_name: 'STRLCxGLVC Agency / Model: Stella',
   * });
   * ```
   */
  create(body: ClientSessionCreateParams, options?: RequestOptions): APIPromise<ClientSessionCreateResponse> {
    return this._client.post('/api/client-sessions', { body, ...options });
  }
}

export interface ClientSessionCreateResponse {
  _meta?: ClientSessionCreateResponse._Meta;

  data?: ClientSessionCreateResponse.Data;
}

export namespace ClientSessionCreateResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;

    _rate_limits?: _Meta._RateLimits;
  }

  export namespace _Meta {
    export interface _Cache {
      is_cached?: boolean;

      note?: string;
    }

    export interface _Credits {
      balance?: number;

      note?: string;

      used?: number;
    }

    export interface _RateLimits {
      limit_day?: number;

      limit_minute?: number;

      remaining_day?: number;

      remaining_minute?: number;
    }
  }

  export interface Data {
    token?: string;

    client_reference_id?: string;

    display_name?: string;
  }
}

export interface ClientSessionCreateParams {
  /**
   * Display Name of the account visible in your OnlyFansAPI Console Dashboard.
   */
  display_name: string;

  /**
   * Your Internal Reference ID for the connected account.
   */
  client_reference_id?: string;

  proxy_country?: 'us' | 'uk' | 'gb' | null;
}

export declare namespace ClientSessions {
  export {
    type ClientSessionCreateResponse as ClientSessionCreateResponse,
    type ClientSessionCreateParams as ClientSessionCreateParams,
  };
}
