// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MassMessages extends APIResource {
  /**
   * List sent mass messages with engagement stats (sent, viewed, purchased, etc.).
   *
   * @example
   * ```ts
   * const massMessages =
   *   await client.engagement.messages.massMessages.list(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  list(
    account: string,
    query: MassMessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MassMessageListResponse> {
    return this._client.get(path`/api/${account}/engagement/messages/mass-messages`, { query, ...options });
  }

  /**
   * Get engagement chart metrics for mass messages: sent count and purchase amount
   * over time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.engagement.messages.massMessages.chart(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  chart(
    account: string,
    query: MassMessageChartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MassMessageChartResponse> {
    return this._client.get(path`/api/${account}/engagement/messages/mass-messages/chart`, {
      query,
      ...options,
    });
  }
}

export interface MassMessageListResponse {
  _meta?: MassMessageListResponse._Meta;

  _pagination?: MassMessageListResponse._Pagination;

  data?: MassMessageListResponse.Data;
}

export namespace MassMessageListResponse {
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

    items?: Array<Data.Item>;
  }

  export namespace Data {
    export interface Item {
      id?: number;

      canUnsend?: boolean;

      date?: string;

      giphyId?: string | null;

      isCanceled?: boolean;

      isFree?: boolean;

      isMediaReady?: boolean;

      isReportedByMe?: boolean;

      isTip?: boolean;

      media?: Array<unknown>;

      mediaCount?: number;

      previews?: Array<unknown>;

      rawText?: string;

      responseType?: string;

      sentCount?: number;

      template?: string;

      text?: string;

      unsendSeconds?: number;

      viewedCount?: number;
    }
  }
}

export interface MassMessageChartResponse {
  _meta?: MassMessageChartResponse._Meta;

  data?: MassMessageChartResponse.Data;
}

export namespace MassMessageChartResponse {
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
      limit_day?: string | null;

      limit_minute?: number;

      notice?: string;

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    group_messages?: Data.GroupMessages;

    group_messages_purchases?: Data.GroupMessagesPurchases;
  }

  export namespace Data {
    export interface GroupMessages {
      chart?: Array<GroupMessages.Chart>;

      delta?: number;

      total?: number;
    }

    export namespace GroupMessages {
      export interface Chart {
        count?: number;

        date?: string;
      }
    }

    export interface GroupMessagesPurchases {
      chart?: Array<GroupMessagesPurchases.Chart>;

      delta?: number;

      total?: number;
    }

    export namespace GroupMessagesPurchases {
      export interface Chart {
        count?: number;

        date?: string;
      }
    }
  }
}

export interface MassMessageListParams {
  /**
   * The latest message to retrieve. Keep empty to get all. It must be after
   * `startDate` and is also used for pagination.
   */
  endDate?: string;

  /**
   * Number of messages to return (default = 10)
   */
  limit?: number;

  /**
   * Optionally, filter by message text.
   */
  query?: string;

  /**
   * The earliest message to retrieve. Keep empty to get all.
   */
  startDate?: string;
}

export interface MassMessageChartParams {
  /**
   * End of the chart window in `Y-m-d H:i:s` format. It must be after `startDate`.
   */
  endDate?: string;

  /**
   * Start of the chart window in `Y-m-d H:i:s` format.
   */
  startDate?: string;

  /**
   * Include `total` and `delta` aggregates in the response. Defaults to `true`.
   */
  withTotal?: boolean;
}

export declare namespace MassMessages {
  export {
    type MassMessageListResponse as MassMessageListResponse,
    type MassMessageChartResponse as MassMessageChartResponse,
    type MassMessageListParams as MassMessageListParams,
    type MassMessageChartParams as MassMessageChartParams,
  };
}
