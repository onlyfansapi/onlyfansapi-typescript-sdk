// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReachAPI from './reach';
import { Reach, ReachGetProfileVisitorsParams, ReachGetProfileVisitorsResponse } from './reach';
import * as StatementsAPI from './statements';
import { StatementGetEarningsParams, StatementGetEarningsResponse, Statements } from './statements';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Statistics extends APIResource {
  statements: StatementsAPI.Statements = new StatementsAPI.Statements(this._client);
  reach: ReachAPI.Reach = new ReachAPI.Reach(this._client);

  /**
   * Calculate the total transactions and amounts.
   *
   * @example
   * ```ts
   * const response =
   *   await client.statistics.calculateTotalTransactions(
   *     'acct_XXXXXXXXXXXXXXX',
   *     {
   *       end_date: '2025-03-31 23:59:59',
   *       start_date: '2025-01-01 00:00:00',
   *     },
   *   );
   * ```
   */
  calculateTotalTransactions(
    account: string,
    query: StatisticCalculateTotalTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<StatisticCalculateTotalTransactionsResponse> {
    return this._client.get(path`/api/${account}/statistics/total-transactions`, { query, ...options });
  }

  /**
   * Get an overview of statistics for fans, visitors, posts, or general.
   *
   * @example
   * ```ts
   * const response = await client.statistics.getOverview(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  getOverview(
    account: string,
    query: StatisticGetOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatisticGetOverviewResponse> {
    return this._client.get(path`/api/${account}/statistics/overview`, { query, ...options });
  }

  /**
   * Get subscriber metrics including total, new, renewed, paid, and free
   * subscriptions for a specified timeframe. `unknown_subscriptions` indicates
   * deleted fan accounts.
   *
   * @example
   * ```ts
   * const response =
   *   await client.statistics.getSubscriberMetrics(
   *     'acct_XXXXXXXXXXXXXXX',
   *     {
   *       end_date: '2025-03-31 23:59:59',
   *       start_date: '2025-01-01 00:00:00',
   *     },
   *   );
   * ```
   */
  getSubscriberMetrics(
    account: string,
    query: StatisticGetSubscriberMetricsParams,
    options?: RequestOptions,
  ): APIPromise<StatisticGetSubscriberMetricsResponse> {
    return this._client.get(path`/api/${account}/statistics/subscriber-metrics`, { query, ...options });
  }
}

export interface StatisticCalculateTotalTransactionsResponse {
  total_amount?: number;

  total_transactions?: number;
}

export interface StatisticGetOverviewResponse {
  _meta?: StatisticGetOverviewResponse._Meta;

  data?: StatisticGetOverviewResponse.Data;
}

export namespace StatisticGetOverviewResponse {
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
    earning?: Data.Earning;

    massMessages?: Data.MassMessages;

    posts?: Data.Posts;

    streams?: Data.Streams;

    visitors?: Data.Visitors;
  }

  export namespace Data {
    export interface Earning {
      delta?: number;

      gross?: number;

      total?: number;
    }

    export interface MassMessages {
      chartData?: Array<MassMessages.ChartData>;

      count?: MassMessages.Count;

      earnings?: MassMessages.Earnings;

      hasStatistic?: boolean;

      views?: MassMessages.Views;
    }

    export namespace MassMessages {
      export interface ChartData {
        count?: number;

        date?: string;
      }

      export interface Count {
        delta?: number;

        total?: number;
      }

      export interface Earnings {
        delta?: number;

        gross?: number;

        total?: number;
      }

      export interface Views {
        delta?: number;

        total?: number;
      }
    }

    export interface Posts {
      chartData?: Array<Posts.ChartData>;

      count?: Posts.Count;

      earnings?: Posts.Earnings;

      hasStatistic?: boolean;

      views?: Posts.Views;
    }

    export namespace Posts {
      export interface ChartData {
        count?: number;

        date?: string;
      }

      export interface Count {
        delta?: number;

        total?: number;
      }

      export interface Earnings {
        delta?: number;

        gross?: number;

        total?: number;
      }

      export interface Views {
        delta?: number;

        total?: number;
      }
    }

    export interface Streams {
      chartData?: Array<Streams.ChartData>;

      count?: Streams.Count;

      earnings?: Streams.Earnings;

      hasStatistic?: boolean;

      views?: Streams.Views;
    }

    export namespace Streams {
      export interface ChartData {
        count?: number;

        date?: string;
      }

      export interface Count {
        delta?: number;

        total?: string;
      }

      export interface Earnings {
        delta?: number;

        gross?: number;

        total?: number;
      }

      export interface Views {
        delta?: number;

        total?: number;
      }
    }

    export interface Visitors {
      chartData?: Array<Visitors.ChartData>;

      earnings?: Visitors.Earnings;

      hasStatistic?: boolean;

      subscriptions?: Visitors.Subscriptions;

      visitors?: Visitors.Visitors;
    }

    export namespace Visitors {
      export interface ChartData {
        count?: number;

        date?: string;
      }

      export interface Earnings {
        delta?: number;

        gross?: number;

        total?: number;
      }

      export interface Subscriptions {
        new?: Subscriptions.New;

        renew?: Subscriptions.Renew;
      }

      export namespace Subscriptions {
        export interface New {
          delta?: number;

          total?: number;
        }

        export interface Renew {
          delta?: number;

          total?: number;
        }
      }

      export interface Visitors {
        delta?: number;

        total?: number;
      }
    }
  }
}

export interface StatisticGetSubscriberMetricsResponse {
  _meta?: StatisticGetSubscriberMetricsResponse._Meta;

  data?: StatisticGetSubscriberMetricsResponse.Data;
}

export namespace StatisticGetSubscriberMetricsResponse {
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
    detailed?: Data.Detailed;

    new_subscriptions?: number;

    renewed_subscriptions?: number;

    total_subscriptions?: number;
  }

  export namespace Data {
    export interface Detailed {
      free_subscriptions?: number;

      paid_subscriptions?: number;

      unknown_subscriptions?: number;
    }
  }
}

export interface StatisticCalculateTotalTransactionsParams {
  /**
   * The end date for the period. Keep empty to calculate everything.
   */
  end_date: string;

  /**
   * The start date for the period. Keep empty to calculate everything.
   */
  start_date: string;
}

export interface StatisticGetOverviewParams {
  /**
   * The end date for the statistics. Keep empty to retrieve until now.
   */
  end_date?: string;

  /**
   * The start date for the statistics. Keep empty to retrieve from the model's start
   * date.
   */
  start_date?: string;

  /**
   * The type of statistics to retrieve (default = empty)
   */
  type?: 'fans' | 'visitors' | 'posts' | 'messages' | null;
}

export interface StatisticGetSubscriberMetricsParams {
  /**
   * The end date for the metrics.
   */
  end_date: string;

  /**
   * The start date for the metrics.
   */
  start_date: string;

  /**
   * Include paid and free fan metrics. Will slow down the response time, and might
   * time out if timeframe is too large. Default = `false`
   */
  detailed?: boolean | null;
}

Statistics.Statements = Statements;
Statistics.Reach = Reach;

export declare namespace Statistics {
  export {
    type StatisticCalculateTotalTransactionsResponse as StatisticCalculateTotalTransactionsResponse,
    type StatisticGetOverviewResponse as StatisticGetOverviewResponse,
    type StatisticGetSubscriberMetricsResponse as StatisticGetSubscriberMetricsResponse,
    type StatisticCalculateTotalTransactionsParams as StatisticCalculateTotalTransactionsParams,
    type StatisticGetOverviewParams as StatisticGetOverviewParams,
    type StatisticGetSubscriberMetricsParams as StatisticGetSubscriberMetricsParams,
  };

  export {
    Statements as Statements,
    type StatementGetEarningsResponse as StatementGetEarningsResponse,
    type StatementGetEarningsParams as StatementGetEarningsParams,
  };

  export {
    Reach as Reach,
    type ReachGetProfileVisitorsResponse as ReachGetProfileVisitorsResponse,
    type ReachGetProfileVisitorsParams as ReachGetProfileVisitorsParams,
  };
}
