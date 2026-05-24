// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProfitabilityAPI from './profitability';
import {
  Profitability,
  ProfitabilityGetHistoryParams,
  ProfitabilityGetHistoryResponse,
  ProfitabilityGetProfitabilityParams,
  ProfitabilityGetProfitabilityResponse,
} from './profitability';
import * as TransactionsAPI from './transactions';
import {
  TransactionGetByTypeParams,
  TransactionGetByTypeResponse,
  TransactionGetSummaryParams,
  TransactionGetSummaryResponse,
  Transactions,
} from './transactions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * APIs for retrieving financial analytics data
 */
export class Financial extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  profitability: ProfitabilityAPI.Profitability = new ProfitabilityAPI.Profitability(this._client);

  /**
   * Generate revenue or churn forecasts using statistical models (Moving Average,
   * Linear Regression, ARIMA, SARIMA).
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.financial.getForecast({
   *     account_ids: ['acc_abc123', 'acc_def456'],
   *     forecast_days: 30,
   *     historical_days: 90,
   *     metric: 'revenue',
   *     model: 'linear_regression',
   *   });
   * ```
   */
  getForecast(
    body: FinancialGetForecastParams,
    options?: RequestOptions,
  ): APIPromise<FinancialGetForecastResponse> {
    return this._client.post('/api/analytics/financial/forecast', { body, ...options });
  }
}

export interface FinancialGetForecastResponse {
  forecast?: Array<FinancialGetForecastResponse.Forecast>;

  historical?: Array<FinancialGetForecastResponse.Historical>;

  metric?: string;

  model?: string;
}

export namespace FinancialGetForecastResponse {
  export interface Forecast {
    date?: string;

    value?: number;
  }

  export interface Historical {
    date?: string;

    value?: number;
  }
}

export interface FinancialGetForecastParams {
  /**
   * Array of account prefixed IDs
   */
  account_ids: Array<string>;

  /**
   * Number of days to forecast (7-365)
   */
  forecast_days: number;

  /**
   * Number of historical days to analyze (30-730)
   */
  historical_days: number;

  /**
   * The metric to forecast
   */
  metric: 'revenue' | 'churn_percentage';

  /**
   * The forecasting model to use
   */
  model: 'moving_average' | 'linear_regression' | 'arima' | 'sarima';
}

Financial.Transactions = Transactions;
Financial.Profitability = Profitability;

export declare namespace Financial {
  export {
    type FinancialGetForecastResponse as FinancialGetForecastResponse,
    type FinancialGetForecastParams as FinancialGetForecastParams,
  };

  export {
    Transactions as Transactions,
    type TransactionGetByTypeResponse as TransactionGetByTypeResponse,
    type TransactionGetSummaryResponse as TransactionGetSummaryResponse,
    type TransactionGetByTypeParams as TransactionGetByTypeParams,
    type TransactionGetSummaryParams as TransactionGetSummaryParams,
  };

  export {
    Profitability as Profitability,
    type ProfitabilityGetHistoryResponse as ProfitabilityGetHistoryResponse,
    type ProfitabilityGetProfitabilityResponse as ProfitabilityGetProfitabilityResponse,
    type ProfitabilityGetHistoryParams as ProfitabilityGetHistoryParams,
    type ProfitabilityGetProfitabilityParams as ProfitabilityGetProfitabilityParams,
  };
}
