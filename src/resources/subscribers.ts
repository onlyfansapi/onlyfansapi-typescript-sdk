// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Subscribers extends APIResource {
  /**
   * Get subscriber and earning statistics for an account for a specified timeframe.
   * Optionally, filter by all, renews, or new subscribers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.subscribers.retrieveStatistics(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieveStatistics(
    account: string,
    query: SubscriberRetrieveStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriberRetrieveStatisticsResponse> {
    return this._client.get(path`/api/${account}/subscribers/statistics`, { query, ...options });
  }
}

export interface SubscriberRetrieveStatisticsResponse {
  _meta?: SubscriberRetrieveStatisticsResponse._Meta;

  data?: SubscriberRetrieveStatisticsResponse.Data;
}

export namespace SubscriberRetrieveStatisticsResponse {
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
    delta?: number;

    earnings?: Array<Data.Earning>;

    subscribers?: number;

    subscribes?: Array<Data.Subscribe>;

    total?: number;
  }

  export namespace Data {
    export interface Earning {
      count?: number;

      date?: string;
    }

    export interface Subscribe {
      count?: number;

      date?: string;
    }
  }
}

export interface SubscriberRetrieveStatisticsParams {
  /**
   * The end date for the period. Keep empty to calculate everything.
   */
  end_date?: string | null;

  /**
   * The start date for the period. Keep empty to calculate everything.
   */
  start_date?: string | null;

  /**
   * Filter the subscriber statistics (default = total)
   */
  type?: 'total' | 'renew' | 'new' | null;
}

export declare namespace Subscribers {
  export {
    type SubscriberRetrieveStatisticsResponse as SubscriberRetrieveStatisticsResponse,
    type SubscriberRetrieveStatisticsParams as SubscriberRetrieveStatisticsParams,
  };
}
