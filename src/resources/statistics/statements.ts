// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Statements extends APIResource {
  /**
   * Get the earnings for a given period.
   *
   * @example
   * ```ts
   * const response =
   *   await client.statistics.statements.getEarnings(
   *     'acct_XXXXXXXXXXXXXXX',
   *     { start_date: '2025-01-01 00:00:00' },
   *   );
   * ```
   */
  getEarnings(
    account: string,
    query: StatementGetEarningsParams,
    options?: RequestOptions,
  ): APIPromise<StatementGetEarningsResponse> {
    return this._client.get(path`/api/${account}/statistics/statements/earnings`, { query, ...options });
  }
}

export interface StatementGetEarningsResponse {
  _meta?: StatementGetEarningsResponse._Meta;

  data?: StatementGetEarningsResponse.Data;
}

export namespace StatementGetEarningsResponse {
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
    total?: Data.Total;
  }

  export namespace Data {
    export interface Total {
      chartAmount?: Array<Total.ChartAmount>;

      chartCount?: Array<Total.ChartCount>;

      delta?: number;

      gross?: number;

      total?: number;
    }

    export namespace Total {
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
}

export interface StatementGetEarningsParams {
  /**
   * The start date for the period
   */
  start_date: string;

  /**
   * The end date for the period.
   */
  end_date?: string;

  /**
   * Filter by All / Subscriptions / Tips / Posts / Messages / Streams
   */
  type?: 'total' | 'subscribes' | 'tips' | 'post' | 'messages' | 'stream';
}

export declare namespace Statements {
  export {
    type StatementGetEarningsResponse as StatementGetEarningsResponse,
    type StatementGetEarningsParams as StatementGetEarningsParams,
  };
}
