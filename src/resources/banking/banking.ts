// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DetailsAPI from './details';
import {
  DetailRetrieveAccountCountryDetailsResponse,
  DetailRetrieveBankDetailsResponse,
  DetailRetrieveDac7FormDetailsResponse,
  DetailRetrieveLegalAndTaxStatusResponse,
  DetailRetrieveLegalFormDetailsResponse,
  Details,
} from './details';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Banking extends APIResource {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);

  /**
   * Returns a list of available payout systems for the account, including details
   * such as payout method codes, titles, descriptions, minimum payout amounts,
   * processing times, and the currently selected payout method.
   *
   * @example
   * ```ts
   * const response =
   *   await client.banking.listAvailablePayoutSystems(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  listAvailablePayoutSystems(
    account: string,
    options?: RequestOptions,
  ): APIPromise<BankingListAvailablePayoutSystemsResponse> {
    return this._client.get(path`/api/${account}/banking/available-payout-systems`, options);
  }

  /**
   * List countries, their internal OnlyFans IDs, and their payment & tax
   * information.
   *
   * @example
   * ```ts
   * const response = await client.banking.listCountries(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listCountries(account: string, options?: RequestOptions): APIPromise<BankingListCountriesResponse> {
    return this._client.get(path`/api/${account}/banking/countries`, options);
  }
}

export interface BankingListAvailablePayoutSystemsResponse {
  _meta?: BankingListAvailablePayoutSystemsResponse._Meta;

  data?: BankingListAvailablePayoutSystemsResponse.Data;
}

export namespace BankingListAvailablePayoutSystemsResponse {
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
    payoutCode?: string;

    payouts?: Array<Data.Payout>;
  }

  export namespace Data {
    export interface Payout {
      code?: string;

      description?: string;

      fields?: unknown;

      fieldsOrder?: Array<unknown>;

      minPayoutSumm?: number;

      payoutTime?: string;

      subtitle?: string;

      title?: string;

      uiMapping?: unknown;
    }
  }
}

export interface BankingListCountriesResponse {
  _meta?: BankingListCountriesResponse._Meta;

  data?: Array<BankingListCountriesResponse.Data>;
}

export namespace BankingListCountriesResponse {
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
    id?: number;

    canHasW9Form?: boolean;

    canPay?: boolean;

    code?: string;

    hasStates?: boolean;

    hasZip?: boolean;

    name?: string;
  }
}

Banking.Details = Details;

export declare namespace Banking {
  export {
    type BankingListAvailablePayoutSystemsResponse as BankingListAvailablePayoutSystemsResponse,
    type BankingListCountriesResponse as BankingListCountriesResponse,
  };

  export {
    Details as Details,
    type DetailRetrieveAccountCountryDetailsResponse as DetailRetrieveAccountCountryDetailsResponse,
    type DetailRetrieveBankDetailsResponse as DetailRetrieveBankDetailsResponse,
    type DetailRetrieveDac7FormDetailsResponse as DetailRetrieveDac7FormDetailsResponse,
    type DetailRetrieveLegalAndTaxStatusResponse as DetailRetrieveLegalAndTaxStatusResponse,
    type DetailRetrieveLegalFormDetailsResponse as DetailRetrieveLegalFormDetailsResponse,
  };
}
