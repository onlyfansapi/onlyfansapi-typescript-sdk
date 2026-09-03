// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DirectMessagesAPI from './direct-messages';
import {
  DirectMessageChartParams,
  DirectMessageChartResponse,
  DirectMessageListParams,
  DirectMessageListResponse,
  DirectMessages,
} from './direct-messages';
import * as MassMessagesAPI from './mass-messages';
import {
  MassMessageChartParams,
  MassMessageChartResponse,
  MassMessageListParams,
  MassMessageListResponse,
  MassMessages,
} from './mass-messages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  massMessages: MassMessagesAPI.MassMessages = new MassMessagesAPI.MassMessages(this._client);
  directMessages: DirectMessagesAPI.DirectMessages = new DirectMessagesAPI.DirectMessages(this._client);

  /**
   * List buyers for a specific message.
   *
   * @example
   * ```ts
   * const response =
   *   await client.engagement.messages.getMessageBuyers(
   *     'nobis',
   *     { account: 'acct_XXXXXXXXXXXXXXX' },
   *   );
   * ```
   */
  getMessageBuyers(
    messageID: string,
    params: MessageGetMessageBuyersParams,
    options?: RequestOptions,
  ): APIPromise<MessageGetMessageBuyersResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/engagement/messages/${messageID}/buyers`, {
      query,
      ...options,
    });
  }

  /**
   * Get the top performing message by purchases in the selected timeframe.
   *
   * @example
   * ```ts
   * const response =
   *   await client.engagement.messages.getTopMessage(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  getTopMessage(
    account: string,
    query: MessageGetTopMessageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageGetTopMessageResponse> {
    return this._client.get(path`/api/${account}/engagement/messages/top-message`, { query, ...options });
  }
}

export interface MessageGetMessageBuyersResponse {
  _meta?: MessageGetMessageBuyersResponse._Meta;

  _pagination?: MessageGetMessageBuyersResponse._Pagination;

  data?: MessageGetMessageBuyersResponse.Data;
}

export namespace MessageGetMessageBuyersResponse {
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
  }

  export namespace Data {
    export interface List {
      id?: number;

      avatar?: string | null;

      avatarThumbs?: string | null;

      canAddSubscriber?: boolean;

      canCommentStory?: boolean;

      canEarn?: boolean;

      canLookStory?: boolean;

      canPayInternal?: boolean;

      canReport?: boolean;

      canRestrict?: boolean;

      currentSubscribePrice?: number;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

      isActive?: boolean;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      name?: string;

      notice?: string;

      showMediaCount?: boolean;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: string | null;

      subscribedOnDuration?: string;

      subscribedOnExpiredNow?: boolean;

      subscribePrice?: number;

      tipsEnabled?: boolean;

      tipsMax?: number;

      tipsMin?: number;

      tipsMinInternal?: number;

      tipsTextEnabled?: boolean;

      username?: string;

      view?: string;
    }
  }
}

export interface MessageGetTopMessageResponse {
  _meta?: MessageGetTopMessageResponse._Meta;

  data?: MessageGetTopMessageResponse.Data;
}

export namespace MessageGetTopMessageResponse {
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
    purchases?: Data.Purchases;
  }

  export namespace Data {
    export interface Purchases {
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

      media?: Array<Purchases.Media>;

      mediaCount?: number;

      previews?: Array<unknown>;

      price?: string;

      purchasedCount?: number;

      rawText?: string;

      relationships?: Purchases.Relationships;

      responseType?: string;

      sentCount?: number;

      template?: string;

      text?: string;

      totalRevenueGenerated?: string;

      unsendSeconds?: number;

      viewedCount?: number;
    }

    export namespace Purchases {
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
          '240'?: string;

          '720'?: string;
        }
      }

      export interface Relationships {
        buyers?: Relationships.Buyers;
      }

      export namespace Relationships {
        export interface Buyers {
          href?: string;

          method?: string;
        }
      }
    }
  }
}

export interface MessageGetMessageBuyersParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Number of buyers to return (default = 10)
   */
  limit?: number;

  /**
   * Query param: Marker for pagination
   */
  marker?: number;

  /**
   * Query param: Offset for pagination (default = 0)
   */
  offset?: number;

  /**
   * Query param: Optional flag for subsequent pages (example: all).
   */
  skip_users?: string;

  /**
   * Query param: Skip duplicate users in results (0/1). Default = 1
   */
  skip_users_dups?: number;
}

export interface MessageGetTopMessageParams {
  /**
   * The end date for the period. Keep empty to retrieve until now. It must be after
   * `startDate`.
   */
  endDate?: string;

  /**
   * The start date for the period. Keep empty to retrieve from the model start date.
   */
  startDate?: string;
}

Messages.MassMessages = MassMessages;
Messages.DirectMessages = DirectMessages;

export declare namespace Messages {
  export {
    type MessageGetMessageBuyersResponse as MessageGetMessageBuyersResponse,
    type MessageGetTopMessageResponse as MessageGetTopMessageResponse,
    type MessageGetMessageBuyersParams as MessageGetMessageBuyersParams,
    type MessageGetTopMessageParams as MessageGetTopMessageParams,
  };

  export {
    MassMessages as MassMessages,
    type MassMessageListResponse as MassMessageListResponse,
    type MassMessageChartResponse as MassMessageChartResponse,
    type MassMessageListParams as MassMessageListParams,
    type MassMessageChartParams as MassMessageChartParams,
  };

  export {
    DirectMessages as DirectMessages,
    type DirectMessageListResponse as DirectMessageListResponse,
    type DirectMessageChartResponse as DirectMessageChartResponse,
    type DirectMessageListParams as DirectMessageListParams,
    type DirectMessageChartParams as DirectMessageChartParams,
  };
}
