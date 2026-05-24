// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payouts extends APIResource {
  /**
   * List all payout requests for the account.
   *
   * @example
   * ```ts
   * const response = await client.payouts.listRequests(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listRequests(
    account: string,
    query: PayoutListRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PayoutListRequestsResponse> {
    return this._client.get(path`/api/${account}/payouts/payout-requests`, { query, ...options });
  }

  /**
   * Request a payout withdrawal, if the frequency is set to manual. Refer to our
   * `/payouts/balances` endpoint to retrieve the minimum and maximum withdrawal
   * amounts.
   *
   * @example
   * ```ts
   * const response =
   *   await client.payouts.requestManualWithdrawal(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { amount: 50 },
   *   );
   * ```
   */
  requestManualWithdrawal(
    account: string,
    body: PayoutRequestManualWithdrawalParams,
    options?: RequestOptions,
  ): APIPromise<PayoutRequestManualWithdrawalResponse> {
    return this._client.post(path`/api/${account}/payouts/request-manual-withdrawal`, { body, ...options });
  }

  /**
   * Get the current available and pending balances for the account.
   *
   * @example
   * ```ts
   * const response = await client.payouts.retrieveBalances(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  retrieveBalances(account: string, options?: RequestOptions): APIPromise<PayoutRetrieveBalancesResponse> {
    return this._client.get(path`/api/${account}/payouts/balances`, options);
  }

  /**
   * Get total and monthly time-series earning statistics for the account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.payouts.retrieveEarningStatistics(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieveEarningStatistics(
    account: string,
    query: PayoutRetrieveEarningStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PayoutRetrieveEarningStatisticsResponse> {
    return this._client.get(path`/api/${account}/payouts/earning-statistics`, { query, ...options });
  }

  /**
   * Get the eligibility details for receiving payouts.
   *
   * @example
   * ```ts
   * const response = await client.payouts.retrieveEligibility(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  retrieveEligibility(
    account: string,
    options?: RequestOptions,
  ): APIPromise<PayoutRetrieveEligibilityResponse> {
    return this._client.get(path`/api/${account}/payouts/eligibility`, options);
  }

  /**
   * Update the payout frequency for the account (Manual, Weekly or Monthly).
   *
   * @example
   * ```ts
   * const response = await client.payouts.updateFrequency(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { frequency: 'manual' },
   * );
   * ```
   */
  updateFrequency(
    account: string,
    body: PayoutUpdateFrequencyParams,
    options?: RequestOptions,
  ): APIPromise<PayoutUpdateFrequencyResponse> {
    return this._client.patch(path`/api/${account}/payouts/payout-frequency`, { body, ...options });
  }
}

export interface PayoutListRequestsResponse {
  _meta?: PayoutListRequestsResponse._Meta;

  data?: PayoutListRequestsResponse.Data;
}

export namespace PayoutListRequestsResponse {
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
    list?: Array<Data.List>;

    marker?: number;
  }

  export namespace Data {
    export interface List {
      amount?: number;

      createdAt?: string;

      currency?: string;

      invoiceId?: string;

      rejectReason?: string | null;

      state?: string;
    }
  }
}

export type PayoutRequestManualWithdrawalResponse =
  | PayoutRequestManualWithdrawalResponse.UnionMember0
  | PayoutRequestManualWithdrawalResponse.UnionMember1;

export namespace PayoutRequestManualWithdrawalResponse {
  export interface UnionMember0 {
    _meta?: UnionMember0._Meta;

    data?: UnionMember0.Data;
  }

  export namespace UnionMember0 {
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
      list?: Array<Data.List>;
    }

    export namespace Data {
      export interface List {
        rejectReason?: string | null;

        state?: string;
      }
    }
  }

  export interface UnionMember1 {
    _meta?: UnionMember1._Meta;

    data?: UnionMember1.Data;
  }

  export namespace UnionMember1 {
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
      list?: Array<Data.List>;
    }

    export namespace Data {
      export interface List {
        rejectReason?: string | null;

        state?: string;
      }
    }
  }
}

export interface PayoutRetrieveBalancesResponse {
  _meta?: PayoutRetrieveBalancesResponse._Meta;

  data?: PayoutRetrieveBalancesResponse.Data;
}

export namespace PayoutRetrieveBalancesResponse {
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
    currency?: string;

    manualPayoutPendingDays?: number;

    maxPayoutSumm?: number;

    minPayoutSumm?: number;

    payoutAvailable?: number;

    payoutPending?: number;

    withdrawalPeriod?: string;

    withdrawalPeriodOptions?: Array<Data.WithdrawalPeriodOption>;
  }

  export namespace Data {
    export interface WithdrawalPeriodOption {
      code?: string;

      name?: string;
    }
  }
}

export interface PayoutRetrieveEarningStatisticsResponse {
  _meta?: PayoutRetrieveEarningStatisticsResponse._Meta;

  data?: PayoutRetrieveEarningStatisticsResponse.Data;
}

export namespace PayoutRetrieveEarningStatisticsResponse {
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
    list?: Data.List;
  }

  export namespace Data {
    export interface List {
      months?: List.Months;

      total?: List.Total;
    }

    export namespace List {
      export interface Months {
        '1735689661'?: Months._1735689661;
      }

      export namespace Months {
        export interface _1735689661 {
          subscribes?: Array<_1735689661.Subscribe>;

          tips?: Array<_1735689661.Tip>;

          total_gross?: number;

          total_net?: number;
        }

        export namespace _1735689661 {
          export interface Subscribe {
            gross?: number;

            net?: number;

            time?: number;
          }

          export interface Tip {
            gross?: number;

            net?: number;

            time?: number;
          }
        }
      }

      export interface Total {
        all?: Total.All;

        chat_messages?: Total.ChatMessages;

        post?: Total.Post;

        subscribes?: Total.Subscribes;

        tips?: Total.Tips;
      }

      export namespace Total {
        export interface All {
          total_gross?: number;

          total_net?: number;
        }

        export interface ChatMessages {
          total_gross?: number;

          total_net?: number;
        }

        export interface Post {
          total_gross?: number;

          total_net?: number;
        }

        export interface Subscribes {
          total_gross?: number;

          total_net?: number;
        }

        export interface Tips {
          total_gross?: number;

          total_net?: number;
        }
      }
    }
  }
}

export interface PayoutRetrieveEligibilityResponse {
  _meta?: PayoutRetrieveEligibilityResponse._Meta;

  data?: PayoutRetrieveEligibilityResponse.Data;
}

export namespace PayoutRetrieveEligibilityResponse {
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
    canReceiveManualPayout?: boolean;

    isVerifiedReason?: boolean;

    needUpdateBanking?: boolean;
  }
}

export interface PayoutUpdateFrequencyResponse {
  _meta?: PayoutUpdateFrequencyResponse._Meta;

  data?: PayoutUpdateFrequencyResponse.Data;
}

export namespace PayoutUpdateFrequencyResponse {
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

export interface PayoutListRequestsParams {
  /**
   * Number of payout requests to return
   */
  limit?: string;

  /**
   * Number of payout requests to skip for pagination
   */
  offset?: string;
}

export interface PayoutRequestManualWithdrawalParams {
  /**
   * The amount to withdraw. Amount may not be higher than the current balance.
   */
  amount: number;
}

export interface PayoutRetrieveEarningStatisticsParams {
  /**
   * The end date for earning statistics. Keep empty to get all earnings.
   */
  endDate?: string | null;

  /**
   * The start date for earning statistics. Keep empty to get all earnings.
   */
  startDate?: string | null;
}

export interface PayoutUpdateFrequencyParams {
  /**
   * The new payout frequency
   */
  frequency: 'manual' | 'weekly' | 'monthly';
}

export declare namespace Payouts {
  export {
    type PayoutListRequestsResponse as PayoutListRequestsResponse,
    type PayoutRequestManualWithdrawalResponse as PayoutRequestManualWithdrawalResponse,
    type PayoutRetrieveBalancesResponse as PayoutRetrieveBalancesResponse,
    type PayoutRetrieveEarningStatisticsResponse as PayoutRetrieveEarningStatisticsResponse,
    type PayoutRetrieveEligibilityResponse as PayoutRetrieveEligibilityResponse,
    type PayoutUpdateFrequencyResponse as PayoutUpdateFrequencyResponse,
    type PayoutListRequestsParams as PayoutListRequestsParams,
    type PayoutRequestManualWithdrawalParams as PayoutRequestManualWithdrawalParams,
    type PayoutRetrieveEarningStatisticsParams as PayoutRetrieveEarningStatisticsParams,
    type PayoutUpdateFrequencyParams as PayoutUpdateFrequencyParams,
  };
}
