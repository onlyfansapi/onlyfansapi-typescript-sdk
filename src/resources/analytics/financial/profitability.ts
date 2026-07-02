// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * APIs for retrieving financial analytics data
 */
export class Profitability extends APIResource {
  /**
   * Get historical profitability data for a specific account over multiple months.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.financial.profitability.getHistory(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { account_prefixed_id: 'acct_abc123' },
   *   );
   * ```
   */
  getHistory(
    account: string,
    query: ProfitabilityGetHistoryParams,
    options?: RequestOptions,
  ): APIPromise<ProfitabilityGetHistoryResponse> {
    return this._client.get(path`/api/analytics/financial/profitability/${account}/history`, {
      query,
      ...options,
    });
  }

  /**
   * Calculate profitability for creators including revenue, costs, commissions, and
   * margins for a specific month.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.financial.profitability.getProfitability(
   *     {
   *       account_ids: ['acc_abc123', 'acc_def456'],
   *       month: 6,
   *       year: 2024,
   *     },
   *   );
   * ```
   */
  getProfitability(
    body: ProfitabilityGetProfitabilityParams,
    options?: RequestOptions,
  ): APIPromise<ProfitabilityGetProfitabilityResponse> {
    return this._client.post('/api/analytics/financial/profitability', { body, ...options });
  }
}

export interface ProfitabilityGetHistoryResponse {
  data?: Array<ProfitabilityGetHistoryResponse.Data>;
}

export namespace ProfitabilityGetHistoryResponse {
  export interface Data {
    activeMilestones?: string | null;

    agencyEarnings?: string;

    commissionAmount?: string;

    commissionRate?: string;

    costs?: Array<unknown>;

    creatorName?: string;

    hasCommissionForPeriod?: boolean;

    hasCostsForPeriod?: boolean;

    marginPercentage?: string;

    month?: number;

    onlyFansUserId?: number;

    profit?: string;

    projectedNet?: string;

    ratePeriods?: Array<unknown>;

    referralNote?: string | null;

    totalCosts?: string;

    year?: number;
  }
}

export interface ProfitabilityGetProfitabilityResponse {
  data?: Array<ProfitabilityGetProfitabilityResponse.Data>;
}

export namespace ProfitabilityGetProfitabilityResponse {
  export interface Data {
    activeMilestones?: string | null;

    agencyEarnings?: string;

    commissionAmount?: string;

    commissionRate?: string;

    costs?: Array<unknown>;

    creatorName?: string;

    hasCommissionForPeriod?: boolean;

    hasCostsForPeriod?: boolean;

    marginPercentage?: string;

    month?: number;

    onlyFansUserId?: number;

    profit?: string;

    projectedNet?: string;

    ratePeriods?: Array<unknown>;

    referralNote?: string | null;

    totalCosts?: string;

    year?: number;
  }
}

export interface ProfitabilityGetHistoryParams {
  /**
   * The account prefixed ID.
   */
  account_prefixed_id: string;

  /**
   * Number of months of history to retrieve (1-60, default 12). Must be at least 1.
   * Must not be greater than 60.
   */
  months?: number;
}

export interface ProfitabilityGetProfitabilityParams {
  /**
   * Array of account prefixed IDs
   */
  account_ids: Array<string>;

  /**
   * The month to calculate profitability for (1-12)
   */
  month: number;

  /**
   * The year to calculate profitability for
   */
  year: number;
}

export declare namespace Profitability {
  export {
    type ProfitabilityGetHistoryResponse as ProfitabilityGetHistoryResponse,
    type ProfitabilityGetProfitabilityResponse as ProfitabilityGetProfitabilityResponse,
    type ProfitabilityGetHistoryParams as ProfitabilityGetHistoryParams,
    type ProfitabilityGetProfitabilityParams as ProfitabilityGetProfitabilityParams,
  };
}
