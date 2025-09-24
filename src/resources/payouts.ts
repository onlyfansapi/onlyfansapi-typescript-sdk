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
   * const response = await client.payouts.listPayoutRequests(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listPayoutRequests(
    account: string,
    query: PayoutListPayoutRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PayoutListPayoutRequestsResponse> {
    return this._client.get(path`/api/${account}/payouts/payout-requests`, { query, ...options });
  }

  /**
   * List all transactions for the account.
   *
   * @example
   * ```ts
   * const response = await client.payouts.listTransactions(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listTransactions(
    account: string,
    query: PayoutListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PayoutListTransactionsResponse> {
    return this._client.get(path`/api/${account}/payouts/transactions`, { query, ...options });
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
   * const response = await client.payouts.updatePayoutFrequency(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { frequency: 'manual' },
   * );
   * ```
   */
  updatePayoutFrequency(
    account: string,
    body: PayoutUpdatePayoutFrequencyParams,
    options?: RequestOptions,
  ): APIPromise<PayoutUpdatePayoutFrequencyResponse> {
    return this._client.patch(path`/api/${account}/payouts/payout-frequency`, { body, ...options });
  }
}

export interface PayoutListPayoutRequestsResponse {
  _meta?: PayoutListPayoutRequestsResponse._Meta;

  data?: PayoutListPayoutRequestsResponse.Data;
}

export namespace PayoutListPayoutRequestsResponse {
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

      rejectReason?: string;

      state?: string;
    }
  }
}

export interface PayoutListTransactionsResponse {
  _meta?: PayoutListTransactionsResponse._Meta;

  data?: PayoutListTransactionsResponse.Data;
}

export namespace PayoutListTransactionsResponse {
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
    hasMore?: boolean;

    list?: Array<Data.List>;

    marker?: number;

    nextMarker?: number;
  }

  export namespace Data {
    export interface List {
      id?: string;

      amount?: number;

      createdAt?: string;

      currency?: string;

      description?: string;

      fee?: number;

      mediaTaxAmount?: number;

      net?: number;

      payoutPendingDays?: number;

      status?: string;

      taxAmount?: number;

      user?: List.User;

      vatAmount?: number;
    }

    export namespace List {
      export interface User {
        id?: number;

        avatar?: string;

        avatarThumbs?: string;

        isVerified?: boolean;

        name?: string;

        username?: string;

        view?: string;
      }
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
        rejectReason?: string;

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
        rejectReason?: string;

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

export interface PayoutUpdatePayoutFrequencyResponse {
  _meta?: PayoutUpdatePayoutFrequencyResponse._Meta;

  data?: PayoutUpdatePayoutFrequencyResponse.Data;
}

export namespace PayoutUpdatePayoutFrequencyResponse {
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

export interface PayoutListPayoutRequestsParams {
  /**
   * Number of payout requests to return
   */
  limit?: string;

  /**
   * Number of payout requests to skip for pagination
   */
  offset?: string;
}

export interface PayoutListTransactionsParams {
  /**
   * Number of transactions to return
   */
  limit?: string;

  /**
   * The marker used for pagination. Default: `null`
   */
  marker?: string;
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

export interface PayoutUpdatePayoutFrequencyParams {
  /**
   * The new payout frequency
   */
  frequency: 'manual' | 'weekly' | 'monthly';
}

export declare namespace Payouts {
  export {
    type PayoutListPayoutRequestsResponse as PayoutListPayoutRequestsResponse,
    type PayoutListTransactionsResponse as PayoutListTransactionsResponse,
    type PayoutRequestManualWithdrawalResponse as PayoutRequestManualWithdrawalResponse,
    type PayoutRetrieveBalancesResponse as PayoutRetrieveBalancesResponse,
    type PayoutRetrieveEarningStatisticsResponse as PayoutRetrieveEarningStatisticsResponse,
    type PayoutRetrieveEligibilityResponse as PayoutRetrieveEligibilityResponse,
    type PayoutUpdatePayoutFrequencyResponse as PayoutUpdatePayoutFrequencyResponse,
    type PayoutListPayoutRequestsParams as PayoutListPayoutRequestsParams,
    type PayoutListTransactionsParams as PayoutListTransactionsParams,
    type PayoutRequestManualWithdrawalParams as PayoutRequestManualWithdrawalParams,
    type PayoutRetrieveEarningStatisticsParams as PayoutRetrieveEarningStatisticsParams,
    type PayoutUpdatePayoutFrequencyParams as PayoutUpdatePayoutFrequencyParams,
  };
}
