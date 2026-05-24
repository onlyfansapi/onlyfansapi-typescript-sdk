// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * APIs for retrieving summary analytics data
 */
export class Summary extends APIResource {
  /**
   * Get earnings overview by category for selected accounts within a date range.
   * Returns total earnings, subscriptions, posts, messages, tips, streams, and
   * content stats.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.summary.getEarningsOverview({
   *     account_ids: ['acc_abc123', 'acc_def456'],
   *     end_date: '2024-12-31',
   *     start_date: '2024-01-01',
   *   });
   * ```
   */
  getEarningsOverview(
    body: SummaryGetEarningsOverviewParams,
    options?: RequestOptions,
  ): APIPromise<SummaryGetEarningsOverviewResponse> {
    return this._client.post('/api/analytics/summary/earnings', { body, ...options });
  }

  /**
   * Get historical earnings chart data for the team. Returns monthly aggregated
   * revenue data for the specified time range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.summary.getHistoricalPerformance();
   * ```
   */
  getHistoricalPerformance(
    body: SummaryGetHistoricalPerformanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryGetHistoricalPerformanceResponse> {
    return this._client.post('/api/analytics/summary/historical', { body, ...options });
  }

  /**
   * Compare two time periods to analyze performance changes. Returns summary,
   * breakdown, and chart data for the comparison.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.summary.getPeriodComparison({
   *     account_ids: ['acc_abc123', 'acc_def456'],
   *     period_a: { end: '2024-03-31', start: '2024-01-01' },
   *     period_b: { end: '2024-06-30', start: '2024-04-01' },
   *   });
   * ```
   */
  getPeriodComparison(
    body: SummaryGetPeriodComparisonParams,
    options?: RequestOptions,
  ): APIPromise<SummaryGetPeriodComparisonResponse> {
    return this._client.post('/api/analytics/summary/comparison', { body, ...options });
  }
}

export interface SummaryGetEarningsOverviewResponse {
  messages?: number;

  posts?: number;

  streams?: number;

  subscriptions?: number;

  tips?: number;

  total_accounts?: number;

  total_earnings?: number;

  total_images?: number;

  total_messages?: number;

  total_videos?: number;
}

export type SummaryGetHistoricalPerformanceResponse =
  Array<SummaryGetHistoricalPerformanceResponse.SummaryGetHistoricalPerformanceResponseItem>;

export namespace SummaryGetHistoricalPerformanceResponse {
  export interface SummaryGetHistoricalPerformanceResponseItem {
    period?: string;

    value?: number;
  }
}

export interface SummaryGetPeriodComparisonResponse {
  breakdown?: Array<unknown>;

  chart_data?: Array<unknown>;

  period_a_label?: string;

  period_b_label?: string;

  summary?: SummaryGetPeriodComparisonResponse.Summary;
}

export namespace SummaryGetPeriodComparisonResponse {
  export interface Summary {
    change?: number;

    change_percentage?: number;

    period_a_total?: number;

    period_b_total?: number;
  }
}

export interface SummaryGetEarningsOverviewParams {
  /**
   * Array of account prefixed IDs to get earnings for
   */
  account_ids: Array<string>;

  /**
   * The end date (ISO 8601 format)
   */
  end_date: string;

  /**
   * The start date (ISO 8601 format)
   */
  start_date: string;
}

export interface SummaryGetHistoricalPerformanceParams {
  /**
   * The time range for historical data
   */
  time_range?: '3m' | '6m' | '12m' | 'ytd' | 'last-year';
}

export interface SummaryGetPeriodComparisonParams {
  /**
   * Array of account prefixed IDs to compare
   */
  account_ids: Array<string>;

  /**
   * First period to compare
   */
  period_a: SummaryGetPeriodComparisonParams.PeriodA;

  /**
   * Second period to compare
   */
  period_b: SummaryGetPeriodComparisonParams.PeriodB;

  /**
   * Comparison granularity
   */
  granularity?: 'months' | 'quarters' | 'half_years' | 'years';

  /**
   * The statistic type to compare
   */
  stat_type?: 'totalEarnings' | 'subscriptions' | 'posts' | 'messages' | 'tips' | 'streams';
}

export namespace SummaryGetPeriodComparisonParams {
  /**
   * First period to compare
   */
  export interface PeriodA {
    /**
     * Must be a valid date. Must be a date after or equal to
     * <code>period_a.start</code>.
     */
    end: string;

    /**
     * Must be a valid date.
     */
    start: string;
  }

  /**
   * Second period to compare
   */
  export interface PeriodB {
    /**
     * Must be a valid date. Must be a date after or equal to
     * <code>period_b.start</code>.
     */
    end: string;

    /**
     * Must be a valid date.
     */
    start: string;
  }
}

export declare namespace Summary {
  export {
    type SummaryGetEarningsOverviewResponse as SummaryGetEarningsOverviewResponse,
    type SummaryGetHistoricalPerformanceResponse as SummaryGetHistoricalPerformanceResponse,
    type SummaryGetPeriodComparisonResponse as SummaryGetPeriodComparisonResponse,
    type SummaryGetEarningsOverviewParams as SummaryGetEarningsOverviewParams,
    type SummaryGetHistoricalPerformanceParams as SummaryGetHistoricalPerformanceParams,
    type SummaryGetPeriodComparisonParams as SummaryGetPeriodComparisonParams,
  };
}
