// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryGetEarningsOverviewParams,
  SummaryGetEarningsOverviewResponse,
  SummaryGetHistoricalPerformanceParams,
  SummaryGetHistoricalPerformanceResponse,
  SummaryGetPeriodComparisonParams,
  SummaryGetPeriodComparisonResponse,
} from './summary';
import * as FinancialAPI from './financial/financial';
import { Financial, FinancialGetForecastParams, FinancialGetForecastResponse } from './financial/financial';

export class Analytics extends APIResource {
  financial: FinancialAPI.Financial = new FinancialAPI.Financial(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

Analytics.Financial = Financial;
Analytics.Summary = Summary;

export declare namespace Analytics {
  export {
    Financial as Financial,
    type FinancialGetForecastResponse as FinancialGetForecastResponse,
    type FinancialGetForecastParams as FinancialGetForecastParams,
  };

  export {
    Summary as Summary,
    type SummaryGetEarningsOverviewResponse as SummaryGetEarningsOverviewResponse,
    type SummaryGetHistoricalPerformanceResponse as SummaryGetHistoricalPerformanceResponse,
    type SummaryGetPeriodComparisonResponse as SummaryGetPeriodComparisonResponse,
    type SummaryGetEarningsOverviewParams as SummaryGetEarningsOverviewParams,
    type SummaryGetHistoricalPerformanceParams as SummaryGetHistoricalPerformanceParams,
    type SummaryGetPeriodComparisonParams as SummaryGetPeriodComparisonParams,
  };
}
