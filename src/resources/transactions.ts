// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing OnlyFans transactions
 */
export class Transactions extends APIResource {
  /**
   * Get a paginated list of transactions for an Account. Newest transactions are
   * first. You can filter by transaction type and tips source.
   *
   * @example
   * ```ts
   * const transactions = await client.transactions.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get(path`/api/${account}/transactions`, { query, ...options });
  }
}

export interface TransactionListResponse {
  _meta?: TransactionListResponse._Meta;

  _pagination?: TransactionListResponse._Pagination;

  data?: TransactionListResponse.Data;
}

export namespace TransactionListResponse {
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

  export interface _Pagination {
    next_page?: string;
  }

  export interface Data {
    hasMore?: boolean;

    list?: Array<Data.List>;

    marker?: number;

    nextMarker?: number;
  }

  export namespace Data {
    export interface List {
      id?: string;

      amount?: number;

      createdAt?: string;

      currency?: string;

      description?: string;

      fee?: number;

      net?: number;

      payoutPendingDays?: number;

      status?: string;

      taxAmount?: number;

      type?: string;

      user?: List.User;

      vatAmount?: number;
    }

    export namespace List {
      export interface User {
        id?: number;

        avatar?: string;

        avatarThumbs?: User.AvatarThumbs;

        isVerified?: boolean;

        name?: string;

        username?: string;

        view?: string;
      }

      export namespace User {
        export interface AvatarThumbs {
          c144?: string;

          c50?: string;
        }
      }
    }
  }
}

export interface TransactionListParams {
  /**
   * The number of transactions to return. Recommended: `10`
   */
  limit?: string;

  /**
   * The marker used for pagination. Default: `null`
   */
  marker?: string;

  /**
   * The start date for the transactions list. Defaults to 30 days ago.
   */
  startDate?: string;

  /**
   * Filter tips by source. Only applies when `type=tips`. Options: `profile`,
   * `post_all`, `chat`, `stream`, `story`
   */
  tipsSource?: string;

  /**
   * Filter by transaction type. Options: `subscribes`, `tips`, `post`,
   * `chat_messages`, `stream`
   */
  type?: string;
}

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };
}
