// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Chargebacks extends APIResource {
  /**
   * Retrieve a list of chargebacks within a specified date range. Possible statuses
   * are `loading`, `done`, `undo`.
   *
   * @example
   * ```ts
   * const chargebacks = await client.chargebacks.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: ChargebackListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargebackListResponse> {
    return this._client.get(path`/api/${account}/chargebacks`, { query, ...options });
  }

  /**
   * The Chargeback Ratio reflects the number of chargebacks compared to the total
   * number of payments as a percentage. Ideally, your Chargeback Ratio should be
   * under 1%.
   *
   * @example
   * ```ts
   * const response = await client.chargebacks.calculateRatio(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  calculateRatio(
    account: string,
    query: ChargebackCalculateRatioParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargebackCalculateRatioResponse> {
    return this._client.get(path`/api/${account}/chargebacks/ratio`, { query, ...options });
  }

  /**
   * List chargeback counts & amounts per hour, day or month.
   *
   * @example
   * ```ts
   * const response = await client.chargebacks.listStatistics(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listStatistics(
    account: string,
    query: ChargebackListStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargebackListStatisticsResponse> {
    return this._client.get(path`/api/${account}/chargebacks/statistics`, { query, ...options });
  }
}

export interface ChargebackListResponse {
  _meta?: ChargebackListResponse._Meta;

  data?: ChargebackListResponse.Data;
}

export namespace ChargebackListResponse {
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
      id?: number;

      createdAt?: string;

      payment?: List.Payment;

      paymentType?: string;
    }

    export namespace List {
      export interface Payment {
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

        user?: Payment.User;

        vatAmount?: number;
      }

      export namespace Payment {
        export interface User {
          id?: number;

          avatar?: string | null;

          avatarThumbs?: string | null;

          isVerified?: boolean;

          name?: string;

          username?: string;

          view?: string;
        }
      }
    }
  }
}

export interface ChargebackCalculateRatioResponse {
  _meta?: ChargebackCalculateRatioResponse._Meta;

  data?: ChargebackCalculateRatioResponse.Data;
}

export namespace ChargebackCalculateRatioResponse {
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
    chargebacksRatio?: number;
  }
}

export interface ChargebackListStatisticsResponse {
  _meta?: ChargebackListStatisticsResponse._Meta;

  data?: ChargebackListStatisticsResponse.Data;
}

export namespace ChargebackListStatisticsResponse {
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
    chartAmount?: Array<Data.ChartAmount>;

    chartCount?: Array<Data.ChartCount>;

    delta?: number;

    total?: number;
  }

  export namespace Data {
    export interface ChartAmount {
      count?: number;

      date?: string;
    }

    export interface ChartCount {
      count?: number;

      date?: string;
    }
  }
}

export interface ChargebackListParams {
  /**
   * The end date for the chargebacks. Keep empty to get all.
   */
  end_date?: string;

  /**
   * Number of chargebacks to return (1-100). Default = 10
   */
  limit?: string | null;

  /**
   * Number of chargebacks to skip, used for pagination.
   */
  offset?: string | null;

  /**
   * The start date for the chargebacks. Keep empty to get all.
   */
  start_date?: string;
}

export interface ChargebackCalculateRatioParams {
  /**
   * The end date for the chargeback ratio. Keep empty to get all.
   */
  end_date?: string;

  /**
   * The start date for the chargeback ratio. Keep empty to get all.
   */
  start_date?: string;
}

export interface ChargebackListStatisticsParams {
  /**
   * The end date for the chargebacks. Keep empty to get all.
   */
  end_date?: string;

  /**
   * The start date for the chargebacks. Keep empty to get all.
   */
  start_date?: string;
}

export declare namespace Chargebacks {
  export {
    type ChargebackListResponse as ChargebackListResponse,
    type ChargebackCalculateRatioResponse as ChargebackCalculateRatioResponse,
    type ChargebackListStatisticsResponse as ChargebackListStatisticsResponse,
    type ChargebackListParams as ChargebackListParams,
    type ChargebackCalculateRatioParams as ChargebackCalculateRatioParams,
    type ChargebackListStatisticsParams as ChargebackListStatisticsParams,
  };
}
