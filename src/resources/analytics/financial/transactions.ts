// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * APIs for retrieving financial analytics data
 */
export class Transactions extends APIResource {
  /**
   * Get transaction totals grouped by transaction type (subscriptions, tips,
   * messages, etc.).
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.financial.transactions.getByType({
   *     account_ids: ['acc_abc123', 'acc_def456'],
   *     end_date: '2024-12-31',
   *     start_date: '2024-01-01',
   *   });
   * ```
   */
  getByType(
    body: TransactionGetByTypeParams,
    options?: RequestOptions,
  ): APIPromise<TransactionGetByTypeResponse> {
    return this._client.post('/api/analytics/financial/transactions/by-type', { body, ...options });
  }

  /**
   * Get transaction summary including counts for succeeded, refunded, and disputed
   * transactions, plus gross, net, and fee totals.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.financial.transactions.getSummary({
   *     account_ids: ['acc_abc123', 'acc_def456'],
   *     end_date: '2024-12-31',
   *     start_date: '2024-01-01',
   *   });
   * ```
   */
  getSummary(
    body: TransactionGetSummaryParams,
    options?: RequestOptions,
  ): APIPromise<TransactionGetSummaryResponse> {
    return this._client.post('/api/analytics/financial/transactions/summary', { body, ...options });
  }
}

export type TransactionGetByTypeResponse =
  Array<TransactionGetByTypeResponse.TransactionGetByTypeResponseItem>;

export namespace TransactionGetByTypeResponse {
  export interface TransactionGetByTypeResponseItem {
    count?: number;

    total?: number;

    type?: string;
  }
}

export interface TransactionGetSummaryResponse {
  disputed_count?: number;

  refunded_count?: number;

  succeeded_count?: number;

  total_fees?: number;

  total_gross?: number;

  total_net?: number;
}

export interface TransactionGetByTypeParams {
  /**
   * Array of account prefixed IDs
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

export interface TransactionGetSummaryParams {
  /**
   * Array of account prefixed IDs
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

export declare namespace Transactions {
  export {
    type TransactionGetByTypeResponse as TransactionGetByTypeResponse,
    type TransactionGetSummaryResponse as TransactionGetSummaryResponse,
    type TransactionGetByTypeParams as TransactionGetByTypeParams,
    type TransactionGetSummaryParams as TransactionGetSummaryParams,
  };
}
