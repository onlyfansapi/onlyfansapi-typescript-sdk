// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Bundles extends APIResource {
  /**
   * Create a new bundle for the account.
   *
   * @example
   * ```ts
   * const bundle = await client.bundles.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { discount: 10, duration: 3 },
   * );
   * ```
   */
  create(
    account: string,
    params: BundleCreateParams,
    options?: RequestOptions,
  ): APIPromise<BundleCreateResponse> {
    const { discount, duration } = params;
    return this._client.post(path`/api/${account}/bundles`, { query: { discount, duration }, ...options });
  }

  /**
   * List all bundles for the account.
   *
   * @example
   * ```ts
   * const bundles = await client.bundles.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(account: string, options?: RequestOptions): APIPromise<BundleListResponse> {
    return this._client.get(path`/api/${account}/bundles`, options);
  }

  /**
   * Delete a bundle for the account.
   *
   * @example
   * ```ts
   * const bundle = await client.bundles.delete('bundle_id', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  delete(
    bundleID: string,
    params: BundleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BundleDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/bundles/${bundleID}`, options);
  }
}

export interface BundleCreateResponse {
  _meta?: BundleCreateResponse._Meta;

  data?: BundleCreateResponse.Data;
}

export namespace BundleCreateResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: number;

    canBuy?: boolean;

    discount?: number;

    duration?: number;

    price?: number;
  }
}

export interface BundleListResponse {
  _meta?: BundleListResponse._Meta;

  data?: Array<BundleListResponse.Data>;
}

export namespace BundleListResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: number;

    canBuy?: boolean;

    discount?: number;

    duration?: number;

    price?: number;
  }
}

export interface BundleDeleteResponse {
  _meta?: BundleDeleteResponse._Meta;

  data?: BundleDeleteResponse.Data;
}

export namespace BundleDeleteResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    id?: number;

    canBuy?: boolean;

    discount?: number;

    duration?: number;

    price?: number;
  }
}

export interface BundleCreateParams {
  /**
   * The bundle's discount percentage.
   */
  discount: 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50;

  /**
   * The bundle's duration in months.
   */
  duration: 3 | 6 | 12;
}

export interface BundleDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export declare namespace Bundles {
  export {
    type BundleCreateResponse as BundleCreateResponse,
    type BundleListResponse as BundleListResponse,
    type BundleDeleteResponse as BundleDeleteResponse,
    type BundleCreateParams as BundleCreateParams,
    type BundleDeleteParams as BundleDeleteParams,
  };
}
