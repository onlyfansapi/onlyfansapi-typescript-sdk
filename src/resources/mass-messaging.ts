// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MassMessaging extends APIResource {
  /**
   * Get the content of a mass message.
   *
   * @example
   * ```ts
   * const massMessaging = await client.massMessaging.retrieve(
   *   'id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  retrieve(
    id: string,
    params: MassMessagingRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MassMessagingRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/mass-messaging/${id}`, options);
  }

  /**
   * Update a mass message.
   *
   * @example
   * ```ts
   * const massMessaging = await client.massMessaging.update(
   *   'id',
   *   { account: 'acct_XXXXXXXXXXXXXXX', text: 'Hello!' },
   * );
   * ```
   */
  update(
    id: string,
    params: MassMessagingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MassMessagingUpdateResponse> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/mass-messaging/${id}`, { body, ...options });
  }

  /**
   * List the pending or recently sent mass messages in the message queue.
   *
   * @example
   * ```ts
   * const massMessagings = await client.massMessaging.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(account: string, options?: RequestOptions): APIPromise<MassMessagingListResponse> {
    return this._client.get(path`/api/${account}/mass-messaging`, options);
  }

  /**
   * Unsend a recently sent mass message, or delete a scheduled/saved message. When
   * unsending, purchased content will continue to be able to viewable.
   *
   * @example
   * ```ts
   * const massMessaging = await client.massMessaging.delete(
   *   'id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  delete(
    id: string,
    params: MassMessagingDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MassMessagingDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/mass-messaging/${id}`, options);
  }

  /**
   * Get an overview of mass messages, showing the send count and view count.
   *
   * @example
   * ```ts
   * const response =
   *   await client.massMessaging.retrieveOverview(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  retrieveOverview(
    account: string,
    query: MassMessagingRetrieveOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MassMessagingRetrieveOverviewResponse> {
    return this._client.get(path`/api/${account}/mass-messaging/overview`, { query, ...options });
  }

  /**
   * Send a mass message to lists and/or users. You may use both the `userLists` and
   * `userIds` parameters to send the same message to both lists and individual
   * users.
   *
   * @example
   * ```ts
   * const response = await client.massMessaging.send(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { text: 'Hello!' },
   * );
   * ```
   */
  send(
    account: string,
    body: MassMessagingSendParams,
    options?: RequestOptions,
  ): APIPromise<MassMessagingSendResponse> {
    return this._client.post(path`/api/${account}/mass-messaging`, { body, ...options });
  }
}

export interface MassMessagingRetrieveResponse {
  _meta?: MassMessagingRetrieveResponse._Meta;

  data?: MassMessagingRetrieveResponse.Data;
}

export namespace MassMessagingRetrieveResponse {
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
    queue?: Data.Queue;

    success?: boolean;
  }

  export namespace Data {
    export interface Queue {
      id?: number;

      canUnsend?: boolean;

      date?: string;

      giphyId?: string | null;

      hasError?: boolean;

      isCanceled?: boolean;

      isFree?: boolean;

      mediaTypes?: string | null;

      releaseForms?: Array<unknown>;

      sentCount?: number;

      text?: string;

      textCropped?: string;

      unsendSeconds?: number;

      viewedCount?: number;
    }
  }
}

export interface MassMessagingUpdateResponse {
  _meta?: MassMessagingUpdateResponse._Meta;

  data?: MassMessagingUpdateResponse.Data;
}

export namespace MassMessagingUpdateResponse {
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
    id?: number;

    canUnsend?: boolean;

    date?: string;

    hasError?: boolean;

    isCanceled?: boolean;

    isCouplePeopleMedia?: boolean;

    isDone?: boolean;

    isReady?: boolean;

    pending?: number;

    total?: number;

    unsendSeconds?: number;
  }
}

export interface MassMessagingListResponse {
  _meta?: MassMessagingListResponse._Meta;

  data?: Array<MassMessagingListResponse.Data>;
}

export namespace MassMessagingListResponse {
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
    id?: number;

    canUnsend?: boolean;

    date?: string;

    hasError?: boolean;

    isCanceled?: boolean;

    isCouplePeopleMedia?: boolean;

    isDone?: boolean;

    isReady?: boolean;

    pending?: number;

    total?: number;

    unsendSeconds?: number;
  }
}

export interface MassMessagingDeleteResponse {
  _meta?: MassMessagingDeleteResponse._Meta;

  data?: MassMessagingDeleteResponse.Data;
}

export namespace MassMessagingDeleteResponse {
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
    queue?: Data.Queue;

    success?: boolean;
  }

  export namespace Data {
    export interface Queue {
      id?: number;

      canUnsend?: boolean;

      date?: string;

      giphyId?: string | null;

      hasError?: boolean;

      isCanceled?: boolean;

      isFree?: boolean;

      mediaTypes?: string | null;

      releaseForms?: Array<unknown>;

      sentCount?: number;

      text?: string;

      textCropped?: string;

      unsendSeconds?: number;

      viewedCount?: number;
    }
  }
}

export interface MassMessagingRetrieveOverviewResponse {
  _meta?: MassMessagingRetrieveOverviewResponse._Meta;

  data?: MassMessagingRetrieveOverviewResponse.Data;
}

export namespace MassMessagingRetrieveOverviewResponse {
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

      media?: Array<Item.Media>;

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

export interface MassMessagingSendResponse {
  _meta?: MassMessagingSendResponse._Meta;

  data?: MassMessagingSendResponse.Data;
}

export namespace MassMessagingSendResponse {
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
    id?: number;

    canUnsend?: boolean;

    date?: string;

    hasError?: boolean;

    isCanceled?: boolean;

    isCouplePeopleMedia?: boolean;

    isDone?: boolean;

    isReady?: boolean;

    pending?: number;

    total?: number;

    unsendSeconds?: number;
  }
}

export interface MassMessagingRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface MassMessagingUpdateParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The message text content
   */
  text: string;

  /**
   * Body param: Screen `text` for OnlyFans banned words and block the update if any
   * are found (returns a 422 listing the offending words). `strict_ban` blocks all
   * tiers, `risky` blocks Risky + Replace/soften, `replace_soften` blocks
   * Replace/soften only. Omit to disable screening.
   */
  blockBannedWords?: 'strict_ban' | 'risky' | 'replace_soften';

  /**
   * Body param: The ID of the Giphy GIF to attach to the message. Get IDs from the
   * Giphy listing endpoints (`/giphy/trending`, `/giphy/search`).
   */
  giphyId?: string;

  /**
   * Body param: Whether the text should be shown or hidden
   */
  lockedText?: boolean;

  /**
   * Body param: Array of media file upload prefixed_ids, or OF media IDs (required
   * if price is not 0). Will be hidden if `price` is provided.
   */
  mediaFiles?: Array<string>;

  /**
   * Body param: Array of media file upload prefixed_ids, or OF media IDs (required
   * if price is not 0). Will be shown if `price` is provided. All `previews` values
   * must also exist in the `mediaFiles` array.
   */
  previews?: Array<string>;

  /**
   * Body param: Price for paid content (0 or between 3-200). In case this is not
   * zero, **mediaFiles** is required
   */
  price?: number;

  /**
   * Body param: Schedule the chat message in the future (UTC timezone).
   */
  scheduledDate?: string;

  /**
   * Body param: Array of user IDs that the mass message will be sent to.
   */
  userIds?: Array<string>;

  /**
   * Body param: Array of user list IDs that the mass message will be sent to.
   */
  userLists?: Array<string>;
}

export interface MassMessagingDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface MassMessagingRetrieveOverviewParams {
  /**
   * The latest mass message to retrieve. Keep empty to get all. It must be after
   * `startDate` and is also used for pagination.
   */
  endDate?: string;

  /**
   * Number of mass messages to return (default = 10)
   */
  limit?: number;

  /**
   * Optionally, find a mass message by the message text.
   */
  query?: string;

  /**
   * The earliest mass message to retrieve. Keep empty to get all.
   */
  startDate?: string;
}

export interface MassMessagingSendParams {
  /**
   * The message text content
   */
  text: string;

  /**
   * Screen `text` for OnlyFans banned words and block the send if any are found
   * (returns a 422 listing the offending words). `strict_ban` blocks all tiers,
   * `risky` blocks Risky + Replace/soften, `replace_soften` blocks Replace/soften
   * only. Omit to disable screening.
   */
  blockBannedWords?: 'strict_ban' | 'risky' | 'replace_soften';

  /**
   * Array of user list IDs that the mass message will NOT be sent to.
   */
  excludedLists?: Array<string>;

  /**
   * The ID of the Giphy GIF to attach to the message. Get IDs from the Giphy listing
   * endpoints (`/giphy/trending`, `/giphy/search`).
   */
  giphyId?: string;

  /**
   * Whether the text should be shown or hidden
   */
  lockedText?: boolean;

  /**
   * Direct file uploads, OFAPI `ofapi_media_` IDs, or OF vault IDs. Will be hidden
   * if `price` is provided.
   */
  mediaFiles?: Array<unknown>;

  /**
   * Direct file uploads, OFAPI `ofapi_media_` IDs, OF vault IDs, or integer indices
   * referencing uploaded files in `mediaFiles`. Will be shown if `price` is
   * provided.
   */
  previews?: Array<unknown>;

  /**
   * Price for paid content (0 or between 3-200). In case this is not zero,
   * **mediaFiles** is required
   */
  price?: number;

  /**
   * Array of OnlyFans Release Form Guest IDs to tag in your mass message
   */
  rfGuest?: string;

  /**
   * Array of OnlyFans Release Form Partners IDs to tag in your mass message
   */
  rfPartner?: string;

  /**
   * Array of OnlyFans Creator User IDs to tag in your mass message
   */
  rfTag?: string;

  /**
   * Add your message to the "Saved for later" queue.
   */
  saveForLater?: boolean;

  /**
   * Schedule the chat message in the future (UTC timezone).
   */
  scheduledDate?: string;

  /**
   * Array of user IDs that the mass message will be sent to.
   */
  userIds?: Array<string>;

  /**
   * Array of user list IDs that the mass message will be sent to.
   */
  userLists?: Array<string>;
}

export declare namespace MassMessaging {
  export {
    type MassMessagingRetrieveResponse as MassMessagingRetrieveResponse,
    type MassMessagingUpdateResponse as MassMessagingUpdateResponse,
    type MassMessagingListResponse as MassMessagingListResponse,
    type MassMessagingDeleteResponse as MassMessagingDeleteResponse,
    type MassMessagingRetrieveOverviewResponse as MassMessagingRetrieveOverviewResponse,
    type MassMessagingSendResponse as MassMessagingSendResponse,
    type MassMessagingRetrieveParams as MassMessagingRetrieveParams,
    type MassMessagingUpdateParams as MassMessagingUpdateParams,
    type MassMessagingDeleteParams as MassMessagingDeleteParams,
    type MassMessagingRetrieveOverviewParams as MassMessagingRetrieveOverviewParams,
    type MassMessagingSendParams as MassMessagingSendParams,
  };
}
