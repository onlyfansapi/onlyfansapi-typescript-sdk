// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for generating and retrieving AI-powered fan profile summaries
 */
export class Summary extends APIResource {
  /**
   * Queue generation or regeneration of an AI profile summary for a fan. Costs 200
   * credits (charged on completion). Use the GET endpoint to poll for results. To
   * regenerate an existing summary, pass `regenerate: true`.
   *
   * @example
   * ```ts
   * const response = await client.fans.summary.generateSummary(
   *   'fan_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  generateSummary(
    fanID: string,
    params: SummaryGenerateSummaryParams,
    options?: RequestOptions,
  ): APIPromise<SummaryGenerateSummaryResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/fans/${fanID}/summary`, { body, ...options });
  }

  /**
   * Retrieve the AI profile summary for a fan. Poll this endpoint after triggering a
   * generation to check for completion.
   *
   * @example
   * ```ts
   * const response = await client.fans.summary.getSummary(
   *   'fan_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  getSummary(
    fanID: string,
    params: SummaryGetSummaryParams,
    options?: RequestOptions,
  ): APIPromise<SummaryGetSummaryResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/fans/${fanID}/summary`, options);
  }
}

export interface SummaryGenerateSummaryResponse {
  message?: string;

  status?: string;
}

export interface SummaryGetSummaryResponse {
  analyzed_message_count?: number;

  error_message?: string | null;

  last_analyzed_at?: string;

  last_buy_date?: string;

  status?: string;

  summary_data?: SummaryGetSummaryResponse.SummaryData;
}

export namespace SummaryGetSummaryResponse {
  export interface SummaryData {
    content_dislikes?: string;

    content_preferences?: string;

    dos_and_donts?: string;

    family_pets?: string;

    hobbies?: string;

    interests?: string;

    kinks?: string;

    name?: string;

    other_notes?: string;

    preferred_name?: string;

    requests?: string;

    spend_cadence?: string;

    themes?: string;

    travel_plans?: string;
  }
}

export interface SummaryGenerateSummaryParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Set to true to regenerate an existing completed summary.
   */
  regenerate?: boolean;
}

export interface SummaryGetSummaryParams {
  /**
   * The Account ID
   */
  account: string;
}

export declare namespace Summary {
  export {
    type SummaryGenerateSummaryResponse as SummaryGenerateSummaryResponse,
    type SummaryGetSummaryResponse as SummaryGetSummaryResponse,
    type SummaryGenerateSummaryParams as SummaryGenerateSummaryParams,
    type SummaryGetSummaryParams as SummaryGetSummaryParams,
  };
}
