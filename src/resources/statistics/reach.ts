// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reach extends APIResource {
  /**
   * Get the number of profile visitors for a given period.
   *
   * @example
   * ```ts
   * const response =
   *   await client.statistics.reach.getProfileVisitors(
   *     'acct_XXXXXXXXXXXXXXX',
   *     {
   *       end_date: '2025-03-31 23:59:59',
   *       start_date: '2025-01-01 00:00:00',
   *     },
   *   );
   * ```
   */
  getProfileVisitors(
    account: string,
    query: ReachGetProfileVisitorsParams,
    options?: RequestOptions,
  ): APIPromise<ReachGetProfileVisitorsResponse> {
    return this._client.get(path`/api/${account}/statistics/reach/profile-visitors`, { query, ...options });
  }
}

/**
 * No filter
 */
export type ReachGetProfileVisitorsResponse =
  | ReachGetProfileVisitorsResponse.UnionMember0
  | ReachGetProfileVisitorsResponse.UnionMember1
  | ReachGetProfileVisitorsResponse.UnionMember2;

export namespace ReachGetProfileVisitorsResponse {
  /**
   * No filter
   */
  export interface UnionMember0 {
    _meta?: UnionMember0._Meta;

    data?: UnionMember0.Data;
  }

  export namespace UnionMember0 {
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
      chart?: Data.Chart;

      hasStats?: boolean;

      isAvailable?: boolean;

      topCountries?: Data.TopCountries;

      topDurationUsers?: Data.TopDurationUsers;

      total?: Data.Total;
    }

    export namespace Data {
      export interface Chart {
        duration?: Array<Chart.Duration>;

        visitors?: Array<Chart.Visitor>;
      }

      export namespace Chart {
        export interface Duration {
          count?: number;

          date?: string;
        }

        export interface Visitor {
          count?: number;

          date?: string;
        }
      }

      export interface TopCountries {
        hasMore?: boolean;

        rows?: Array<TopCountries.Row>;

        totals?: TopCountries.Totals;
      }

      export namespace TopCountries {
        export interface Row {
          countryCode?: string;

          countryName?: string;

          rank?: number;

          viewsCount?: Row.ViewsCount;
        }

        export namespace Row {
          export interface ViewsCount {
            guests?: number;

            subscribers?: number;

            total?: number;

            users?: number;
          }
        }

        export interface Totals {
          guests?: string;

          subscribers?: number;

          total?: number;

          users?: string;
        }
      }

      export interface TopDurationUsers {
        totals?: TopDurationUsers.Totals;
      }

      export namespace TopDurationUsers {
        export interface Totals {
          guests?: string;

          subscribers?: number;

          total?: number;

          users?: string;
        }
      }

      export interface Total {
        current?: string;

        delta?: number;
      }
    }
  }

  /**
   * Chart filter
   */
  export interface UnionMember1 {
    _meta?: UnionMember1._Meta;

    data?: UnionMember1.Data;
  }

  export namespace UnionMember1 {
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
      chart?: Data.Chart;

      hasStats?: boolean;

      isAvailable?: boolean;

      total?: Data.Total;
    }

    export namespace Data {
      export interface Chart {
        duration?: Array<Chart.Duration>;

        visitors?: Array<Chart.Visitor>;
      }

      export namespace Chart {
        export interface Duration {
          count?: number;

          date?: string;
        }

        export interface Visitor {
          count?: number;

          date?: string;
        }
      }

      export interface Total {
        current?: string;

        delta?: number;
      }
    }
  }

  /**
   * Top countries filter
   */
  export interface UnionMember2 {
    _meta?: UnionMember2._Meta;

    data?: UnionMember2.Data;
  }

  export namespace UnionMember2 {
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
      hasStats?: boolean;

      isAvailable?: boolean;

      topCountries?: Data.TopCountries;
    }

    export namespace Data {
      export interface TopCountries {
        hasMore?: boolean;

        rows?: Array<TopCountries.Row>;

        totals?: TopCountries.Totals;
      }

      export namespace TopCountries {
        export interface Row {
          countryCode?: string;

          countryName?: string;

          rank?: number;

          viewsCount?: Row.ViewsCount;
        }

        export namespace Row {
          export interface ViewsCount {
            guests?: number;

            subscribers?: number;

            total?: number;

            users?: number;
          }
        }

        export interface Totals {
          guests?: string;

          subscribers?: number;

          total?: number;

          users?: string;
        }
      }
    }
  }
}

export interface ReachGetProfileVisitorsParams {
  /**
   * The end date for the period.
   */
  end_date: string;

  /**
   * The start date for the period
   */
  start_date: string;

  /**
   * Optionally, filter the results by `chart` or `topCountries`. See example
   * responses.
   */
  filter?: 'chart' | 'topCountries' | null;

  /**
   * Number of results to return
   */
  limit?: number | null;

  /**
   * Filter all / users / guests
   */
  type?: 'total' | 'users' | 'guests' | null;
}

export declare namespace Reach {
  export {
    type ReachGetProfileVisitorsResponse as ReachGetProfileVisitorsResponse,
    type ReachGetProfileVisitorsParams as ReachGetProfileVisitorsParams,
  };
}
