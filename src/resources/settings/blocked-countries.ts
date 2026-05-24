// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BlockedCountries extends APIResource {
  /**
   * Returns the countries blocked from viewing the account.
   *
   * @example
   * ```ts
   * const blockedCountry =
   *   await client.settings.blockedCountries.retrieve(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieve(account: string, options?: RequestOptions): APIPromise<BlockedCountryRetrieveResponse> {
    return this._client.get(path`/api/${account}/settings/blocked-countries`, options);
  }

  /**
   * Updates the countries blocked from viewing the account.
   *
   * @example
   * ```ts
   * const blockedCountry =
   *   await client.settings.blockedCountries.update(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { blockedCountries: ['RU'] },
   *   );
   * ```
   */
  update(
    account: string,
    body: BlockedCountryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BlockedCountryUpdateResponse> {
    return this._client.put(path`/api/${account}/settings/blocked-countries`, { body, ...options });
  }
}

export interface BlockedCountryRetrieveResponse {
  _meta?: BlockedCountryRetrieveResponse._Meta;

  data?: BlockedCountryRetrieveResponse.Data;
}

export namespace BlockedCountryRetrieveResponse {
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
    blockedCountries?: Array<string>;
  }
}

export interface BlockedCountryUpdateResponse {
  _meta?: BlockedCountryUpdateResponse._Meta;

  data?: BlockedCountryUpdateResponse.Data;
}

export namespace BlockedCountryUpdateResponse {
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
    success?: boolean;
  }
}

export interface BlockedCountryUpdateParams {
  /**
   * List of all ISO 3166-1 alpha-2 country codes to block including existing ones.
   * If you want to unblock all countries, set this to an empty array or `null`.
   */
  blockedCountries: Array<string>;

  /**
   * Blocked states payload forwarded to OnlyFans. Defaults to an empty array.
   */
  blockedStates?: Array<string>;
}

export declare namespace BlockedCountries {
  export {
    type BlockedCountryRetrieveResponse as BlockedCountryRetrieveResponse,
    type BlockedCountryUpdateResponse as BlockedCountryUpdateResponse,
    type BlockedCountryUpdateParams as BlockedCountryUpdateParams,
  };
}
