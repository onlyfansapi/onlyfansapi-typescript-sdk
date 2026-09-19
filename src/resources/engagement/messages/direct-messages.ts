// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class DirectMessages extends APIResource {
  /**
   * List sent direct messages with engagement stats (sent, viewed, purchased, etc.).
   *
   * @example
   * ```ts
   * const directMessages =
   *   await client.engagement.messages.directMessages.list(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  list(
    account: string,
    query: DirectMessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DirectMessageListResponse> {
    return this._client.get(path`/api/${account}/engagement/messages/direct-messages`, { query, ...options });
  }

  /**
   * Get engagement chart metrics for direct messages: sent count and purchase amount
   * over time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.engagement.messages.directMessages.chart(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  chart(
    account: string,
    query: DirectMessageChartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DirectMessageChartResponse> {
    return this._client.get(path`/api/${account}/engagement/messages/direct-messages/chart`, {
      query,
      ...options,
    });
  }
}

export interface DirectMessageListResponse {
  _meta?: DirectMessageListResponse._Meta;

  _pagination?: DirectMessageListResponse._Pagination;

  data?: DirectMessageListResponse.Data;
}

export namespace DirectMessageListResponse {
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

      canSendMessageToBuyers?: boolean;

      canUnsend?: boolean;

      date?: string;

      giphyId?: string | null;

      isCanceled?: boolean;

      isFree?: boolean;

      isMediaReady?: boolean;

      isReportedByMe?: boolean;

      isTip?: boolean;

      media?: Array<Item.Media>;

      mediaCount?: number;

      messageId?: number;

      previews?: Array<unknown>;

      price?: string;

      purchasedCount?: number;

      rawText?: string;

      responseType?: string;

      sentCount?: number;

      template?: string;

      text?: string;

      toUserId?: number;

      unsendSeconds?: number;

      viewedCount?: number;
    }

    export namespace Item {
      export interface Media {
        id?: number;

        canView?: boolean;

        convertedToVideo?: boolean;

        createdAt?: string;

        duration?: number;

        files?: Media.Files;

        hasCustomPreview?: boolean;

        hasError?: boolean;

        isReady?: boolean;

        type?: string;

        videoSources?: Media.VideoSources;
      }

      export namespace Media {
        export interface Files {
          full?: Files.Full;

          preview?: Files.Preview;

          squarePreview?: Files.SquarePreview;

          thumb?: Files.Thumb;
        }

        export namespace Files {
          export interface Full {
            height?: number;

            size?: number;

            sources?: Array<unknown>;

            url?: string;

            width?: number;
          }

          export interface Preview {
            height?: number;

            size?: number;

            url?: string;

            width?: number;
          }

          export interface SquarePreview {
            height?: number;

            size?: number;

            url?: string;

            width?: number;
          }

          export interface Thumb {
            height?: number;

            size?: number;

            url?: string;

            width?: number;
          }
        }

        export interface VideoSources {
          '240'?: string | null;

          '720'?: string | null;
        }
      }
    }
  }
}

export interface DirectMessageChartResponse {
  _meta?: DirectMessageChartResponse._Meta;

  data?: DirectMessageChartResponse.Data;
}

export namespace DirectMessageChartResponse {
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
    direct_messages?: Data.DirectMessages;

    direct_messages_purchases?: Data.DirectMessagesPurchases;
  }

  export namespace Data {
    export interface DirectMessages {
      chart?: Array<DirectMessages.Chart>;

      delta?: number;

      total?: number;
    }

    export namespace DirectMessages {
      export interface Chart {
        count?: number;

        date?: string;
      }
    }

    export interface DirectMessagesPurchases {
      chart?: Array<DirectMessagesPurchases.Chart>;

      delta?: number;

      total?: number;
    }

    export namespace DirectMessagesPurchases {
      export interface Chart {
        count?: number;

        date?: string;
      }
    }
  }
}

export interface DirectMessageListParams {
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
   * Optional offset for manual pagination.
   */
  offset?: number;

  /**
   * Optionally, filter by message text.
   */
  query?: string;

  /**
   * The earliest message to retrieve. Keep empty to get all.
   */
  startDate?: string;
}

export interface DirectMessageChartParams {
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

export declare namespace DirectMessages {
  export {
    type DirectMessageListResponse as DirectMessageListResponse,
    type DirectMessageChartResponse as DirectMessageChartResponse,
    type DirectMessageListParams as DirectMessageListParams,
    type DirectMessageChartParams as DirectMessageChartParams,
  };
}
