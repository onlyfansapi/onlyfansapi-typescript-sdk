// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HighlightsAPI from './highlights';
import {
  HighlightAddStoryParams,
  HighlightAddStoryResponse,
  HighlightCreateParams,
  HighlightCreateResponse,
  HighlightDeleteParams,
  HighlightDeleteResponse,
  HighlightListParams,
  HighlightListResponse,
  HighlightRemoveStoryParams,
  HighlightRemoveStoryResponse,
  HighlightRetrieveParams,
  HighlightRetrieveResponse,
  HighlightUpdateParams,
  HighlightUpdateResponse,
  Highlights,
} from './highlights';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing OnlyFans stories
 */
export class Stories extends APIResource {
  highlights: HighlightsAPI.Highlights = new HighlightsAPI.Highlights(this._client);

  /**
   * Post a new media or vault file to your story, optionally with text overlays,
   * @mentions, and a question sticker. Overlay elements are rendered by OnlyFans on
   * top of your story media at view time.
   *
   * @example
   * ```ts
   * const story = await client.stories.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { mediaFiles: ['ofapi_media_abc123', 'string'] },
   * );
   * ```
   */
  create(
    account: string,
    body: StoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<StoryCreateResponse> {
    return this._client.post(path`/api/${account}/stories`, { body, ...options });
  }

  /**
   * Retrieve details of a specific story by its ID.
   *
   * @example
   * ```ts
   * const story = await client.stories.retrieve(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  retrieve(
    storyID: number,
    params: StoryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<StoryRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/stories/${storyID}`, options);
  }

  /**
   * Delete a specific story by its ID.
   *
   * @example
   * ```ts
   * const story = await client.stories.delete(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  delete(
    storyID: number,
    params: StoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<StoryDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/stories/${storyID}`, options);
  }

  /**
   * Retrieve a list of your currently active stories.
   *
   * @example
   * ```ts
   * const response = await client.stories.listActive(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listActive(account: string, options?: RequestOptions): APIPromise<StoryListActiveResponse> {
    return this._client.get(path`/api/${account}/stories`, options);
  }

  /**
   * Retrieve a list of your archived stories.
   *
   * @example
   * ```ts
   * const response = await client.stories.listArchive(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listArchive(
    account: string,
    query: StoryListArchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoryListArchiveResponse> {
    return this._client.get(path`/api/${account}/stories/archive`, { query, ...options });
  }

  /**
   * Retrieve the list of viewers for a specific story by its ID.
   *
   * @example
   * ```ts
   * const response = await client.stories.listViewers(
   *   1234567890,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  listViewers(
    storyID: number,
    params: StoryListViewersParams,
    options?: RequestOptions,
  ): APIPromise<StoryListViewersResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/stories/${storyID}/viewers`, { query, ...options });
  }

  /**
   * Mark a specific story as watched by its ID.
   *
   * @example
   * ```ts
   * const response = await client.stories.markAsWatched(
   *   1234567890,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  markAsWatched(
    storyID: number,
    params: StoryMarkAsWatchedParams,
    options?: RequestOptions,
  ): APIPromise<StoryMarkAsWatchedResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/stories/${storyID}/mark-as-watched`, options);
  }

  /**
   * Retrieve viewer count, likes count, comments count, and tips statistics for a
   * specific story by its ID.
   *
   * @example
   * ```ts
   * const response = await client.stories.retrieveStats(
   *   1234567890,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  retrieveStats(
    storyID: number,
    params: StoryRetrieveStatsParams,
    options?: RequestOptions,
  ): APIPromise<StoryRetrieveStatsResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/stories/${storyID}/stats`, options);
  }
}

export interface StoryCreateResponse {
  _meta?: StoryCreateResponse._Meta;

  data?: StoryCreateResponse.Data;
}

export namespace StoryCreateResponse {
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
    id?: number;

    canDelete?: boolean;

    canvasHeight?: number;

    canvasWidth?: number;

    commentsCount?: number;

    createdAt?: string;

    hasPost?: boolean;

    isHighlightCover?: boolean;

    isLastInHighlight?: boolean;

    isReady?: boolean;

    isWatched?: boolean;

    likesCount?: number;

    media?: Array<Data.Media>;

    question?: Data.Question;

    releaseForms?: Array<Data.ReleaseForm>;

    texts?: Array<Data.Text>;

    tipsAmount?: string;

    tipsAmountRaw?: number;

    tipsCount?: number;

    userId?: number;

    viewers?: Array<unknown>;

    viewersCount?: number;
  }

  export namespace Data {
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
    }

    export namespace Media {
      export interface Files {
        full?: Files.Full;

        preview?: string | null;

        squarePreview?: string | null;

        thumb?: string | null;
      }

      export namespace Files {
        export interface Full {
          height?: number;

          size?: number;

          sources?: Array<unknown>;

          url?: string | null;

          width?: number;
        }
      }
    }

    export interface Question {
      entity?: Question.Entity;

      positions?: Question.Positions;

      type?: string;
    }

    export namespace Question {
      export interface Entity {
        id?: number;

        createdAt?: string;

        text?: string;
      }

      export interface Positions {
        angle?: number;

        color?: string;

        height?: number;

        left?: number;

        top?: number;

        width?: number;

        x?: string | null;

        y?: string | null;

        zIndex?: number;
      }
    }

    export interface ReleaseForm {
      id?: number;

      name?: string;

      partnerSource?: string;

      type?: string;

      user?: ReleaseForm.User;
    }

    export namespace ReleaseForm {
      export interface User {
        id?: number;

        avatar?: string | null;

        avatarThumbs?: string | null;

        isFromGuest?: boolean;

        isIdentityVerified?: boolean;

        ivStatus?: string;

        name?: string;

        username?: string;

        view?: string;
      }
    }

    export interface Text {
      angle?: number;

      bgColor?: string;

      color?: string;

      fontFamily?: string;

      fontSize?: string;

      fontStyle?: string | null;

      fontWeight?: number;

      left?: number;

      scale?: number;

      text?: string;

      textAlign?: string;

      textHeight?: number;

      textWidth?: number;

      top?: number;

      type?: string;

      users?: Array<unknown>;

      zIndex?: number;
    }
  }
}

export interface StoryRetrieveResponse {
  _meta?: StoryRetrieveResponse._Meta;

  data?: StoryRetrieveResponse.Data;
}

export namespace StoryRetrieveResponse {
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
    id?: number;

    canDelete?: boolean;

    commentsCount?: number;

    createdAt?: string;

    hasPost?: boolean;

    isHighlightCover?: boolean;

    isLastInHighlight?: boolean;

    isReady?: boolean;

    isWatched?: boolean;

    likesCount?: number;

    media?: Array<Data.Media>;

    question?: string | null;

    releaseForms?: Array<unknown>;

    tipsAmount?: string;

    tipsAmountRaw?: number;

    tipsCount?: number;

    userId?: number;

    viewers?: Array<unknown>;

    viewersCount?: number;
  }

  export namespace Data {
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

          sources?: Preview.Sources;

          url?: string;

          width?: number;
        }

        export namespace Preview {
          export interface Sources {
            w150?: string;
          }
        }

        export interface SquarePreview {
          height?: number;

          size?: number;

          sources?: SquarePreview.Sources;

          url?: string;

          width?: number;
        }

        export namespace SquarePreview {
          export interface Sources {
            w150?: string;

            w480?: string;
          }
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

export interface StoryDeleteResponse {
  _meta?: StoryDeleteResponse._Meta;

  data?: StoryDeleteResponse.Data;
}

export namespace StoryDeleteResponse {
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
    success?: boolean;
  }
}

export interface StoryListActiveResponse {
  _meta?: StoryListActiveResponse._Meta;

  data?: Array<StoryListActiveResponse.Data>;
}

export namespace StoryListActiveResponse {
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
    id?: number;

    canDelete?: boolean;

    commentsCount?: number;

    createdAt?: string;

    hasPost?: boolean;

    isHighlightCover?: boolean;

    isLastInHighlight?: boolean;

    isReady?: boolean;

    isWatched?: boolean;

    likesCount?: number;

    media?: Array<Data.Media>;

    question?: string | null;

    releaseForms?: Array<unknown>;

    tipsAmount?: string;

    tipsAmountRaw?: number;

    tipsCount?: number;

    userId?: number;

    viewers?: Array<unknown>;

    viewersCount?: number;
  }

  export namespace Data {
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

          sources?: Preview.Sources;

          url?: string;

          width?: number;
        }

        export namespace Preview {
          export interface Sources {
            w150?: string;
          }
        }

        export interface SquarePreview {
          height?: number;

          size?: number;

          sources?: SquarePreview.Sources;

          url?: string;

          width?: number;
        }

        export namespace SquarePreview {
          export interface Sources {
            w150?: string;

            w480?: string;
          }
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

export interface StoryListArchiveResponse {
  _meta?: StoryListArchiveResponse._Meta;

  data?: StoryListArchiveResponse.Data;
}

export namespace StoryListArchiveResponse {
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
    hasMore?: boolean;

    list?: Array<Data.List>;

    marker?: number;
  }

  export namespace Data {
    export interface List {
      id?: number;

      createdAt?: string;

      media?: Array<List.Media>;

      question?: string | null;
    }

    export namespace List {
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

            sources?: Preview.Sources;

            url?: string;

            width?: number;
          }

          export namespace Preview {
            export interface Sources {
              w150?: string;
            }
          }

          export interface SquarePreview {
            height?: number;

            size?: number;

            sources?: SquarePreview.Sources;

            url?: string;

            width?: number;
          }

          export namespace SquarePreview {
            export interface Sources {
              w150?: string;

              w480?: string;
            }
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

export interface StoryListViewersResponse {
  _meta?: StoryListViewersResponse._Meta;

  data?: StoryListViewersResponse.Data;
}

export namespace StoryListViewersResponse {
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
    hasMore?: boolean;

    list?: Array<Data.List>;
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

      hasStoryTips?: boolean;

      hasStream?: boolean;

      hasTopStoryTips?: boolean;

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

      isRestricted?: boolean;

      isStoryBlockedUser?: boolean;

      isStoryLiked?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      listsStates?: Array<List.ListsState>;

      name?: string;

      notice?: string;

      showMediaCount?: boolean;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: boolean;

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

    export namespace List {
      export interface ListsState {
        id?: string;

        canAddUser?: boolean;

        cannotAddUserReason?: string;

        hasUser?: boolean;

        name?: string;

        type?: string;
      }
    }
  }
}

export interface StoryMarkAsWatchedResponse {
  _meta?: StoryMarkAsWatchedResponse._Meta;

  data?: StoryMarkAsWatchedResponse.Data;
}

export namespace StoryMarkAsWatchedResponse {
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
    success?: boolean;
  }
}

export interface StoryRetrieveStatsResponse {
  _meta?: StoryRetrieveStatsResponse._Meta;

  data?: StoryRetrieveStatsResponse.Data;
}

export namespace StoryRetrieveStatsResponse {
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
    createdAt?: string;

    storyCommentAll?: Array<string>;

    storyCommentChart?: Array<Data.StoryCommentChart>;

    storyCommentCount?: number;

    storyLikeAll?: Array<string>;

    storyLikeChart?: Array<Data.StoryLikeChart>;

    storyLikeCount?: number;

    storyLookAll?: Array<string>;

    storyLookChart?: Array<Data.StoryLookChart>;

    storyLookCount?: string;

    storyTipAll?: Array<string>;

    storyTipChart?: Array<Data.StoryTipChart>;

    storyTipCount?: number;

    storyTipSum?: number;

    storyTipSumChart?: Array<Data.StoryTipSumChart>;
  }

  export namespace Data {
    export interface StoryCommentChart {
      count?: number;

      date?: string;
    }

    export interface StoryLikeChart {
      count?: number;

      date?: string;
    }

    export interface StoryLookChart {
      count?: number;

      date?: string;
    }

    export interface StoryTipChart {
      count?: number;

      date?: string;
    }

    export interface StoryTipSumChart {
      count?: number;

      date?: string;
    }
  }
}

export interface StoryCreateParams {
  /**
   * Array of media file upload prefixed_ids, or OF vault media IDs.
   */
  mediaFiles: Array<string>;

  /**
   * Canvas height overlay positions are relative to. Default `1920`.
   */
  canvasHeight?: number;

  /**
   * Canvas width overlay positions are relative to. Default `1080`.
   */
  canvasWidth?: number;

  /**
   * Interactive question sticker viewers can answer.
   */
  question?: StoryCreateParams.Question;

  /**
   * Text and @mention overlays.
   */
  texts?: Array<StoryCreateParams.Text>;
}

export namespace StoryCreateParams {
  /**
   * Interactive question sticker viewers can answer.
   */
  export interface Question {
    /**
     * Sticker accent color (hex). Default `#FF51DC`.
     */
    color?: string;

    /**
     * Sticker height in canvas px. Default `160`.
     */
    height?: number;

    /**
     * Horizontal position as a percentage of the canvas width (0-100). Default `25`.
     */
    left?: number;

    /**
     * The question to ask.
     */
    text?: string;

    /**
     * Vertical position as a percentage of the canvas height (0-100). Default `30`.
     */
    top?: number;

    /**
     * Sticker width in canvas px. Default `257`.
     */
    width?: number;
  }

  export interface Text {
    /**
     * The overlay text. For mentions this must be the `@username` to mention (OnlyFans
     * resolves the user and adds them to the story's release forms).
     */
    text: string;

    /**
     * Rotation in degrees. Default `0`.
     */
    angle?: number;

    /**
     * Background color (hex, `#00000000` = transparent). Native editor palette:
     * #FFFFFF #000000 #69818C #FF51DC #FF4081 #FA3240 #FF8040 #FCA800 #70CF27 #00C864
     * #00B1CC #2196F3 #7953F5 #A832BF. Default: transparent for texts, white for
     * mentions.
     */
    bgColor?: string;

    /**
     * Text color (hex). Defaults to the native editor behavior: white on a colored
     * background, black on a white background (mentions: OnlyFans blue `#0091EA` on
     * white).
     */
    color?: string;

    /**
     * Font family. Families support specific weights only: Roboto (400/500/700),
     * PTMono (400), ShantellSans (400), SofiaSans (400, renders uppercase),
     * YanoneKaffeesatz (700), RubikMedium (500), RubikBlack (700). Default `Roboto`.
     * Ignored for mentions (always Roboto 500).
     */
    fontFamily?:
      | 'Roboto'
      | 'PTMono'
      | 'ShantellSans'
      | 'SofiaSans'
      | 'YanoneKaffeesatz'
      | 'RubikMedium'
      | 'RubikBlack';

    /**
     * Font size in canvas px (8-100). The native editor uses 9-36. Default `20`.
     */
    fontSize?: number;

    /**
     * Font weight; must match the chosen family (see `fontFamily`).
     */
    fontWeight?: 400 | 500 | 700;

    /**
     * Horizontal position as a percentage of the canvas width (0-100). Default `25`.
     */
    left?: number;

    /**
     * Scale factor. Default `1`.
     */
    scale?: number;

    /**
     * Text alignment. Default `left`.
     */
    textAlign?: 'left' | 'center' | 'right';

    /**
     * Rendered text box height in canvas px. Estimated automatically when omitted.
     */
    textHeight?: number;

    /**
     * Rendered text box width in canvas px. Estimated automatically when omitted.
     */
    textWidth?: number;

    /**
     * Vertical position as a percentage of the canvas height (0-100). Defaults stagger
     * each overlay below the previous one.
     */
    top?: number;

    /**
     * Overlay type. Default `text`.
     */
    type?: 'text' | 'mention';

    /**
     * Stacking order. Defaults to placement order.
     */
    zIndex?: number;
  }
}

export interface StoryRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface StoryDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface StoryListArchiveParams {
  /**
   * Number of stories to return (default = 18)
   */
  limit?: number;

  /**
   * The marker used for pagination. Default: `null`
   */
  marker?: string;
}

export interface StoryListViewersParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: The number of story viewers to return. Default `8`
   */
  limit?: number | null;

  /**
   * Query param: The offset used for pagination. Default `0`
   */
  offset?: number | null;
}

export interface StoryMarkAsWatchedParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface StoryRetrieveStatsParams {
  /**
   * The Account ID
   */
  account: string;
}

Stories.Highlights = Highlights;

export declare namespace Stories {
  export {
    type StoryCreateResponse as StoryCreateResponse,
    type StoryRetrieveResponse as StoryRetrieveResponse,
    type StoryDeleteResponse as StoryDeleteResponse,
    type StoryListActiveResponse as StoryListActiveResponse,
    type StoryListArchiveResponse as StoryListArchiveResponse,
    type StoryListViewersResponse as StoryListViewersResponse,
    type StoryMarkAsWatchedResponse as StoryMarkAsWatchedResponse,
    type StoryRetrieveStatsResponse as StoryRetrieveStatsResponse,
    type StoryCreateParams as StoryCreateParams,
    type StoryRetrieveParams as StoryRetrieveParams,
    type StoryDeleteParams as StoryDeleteParams,
    type StoryListArchiveParams as StoryListArchiveParams,
    type StoryListViewersParams as StoryListViewersParams,
    type StoryMarkAsWatchedParams as StoryMarkAsWatchedParams,
    type StoryRetrieveStatsParams as StoryRetrieveStatsParams,
  };

  export {
    Highlights as Highlights,
    type HighlightCreateResponse as HighlightCreateResponse,
    type HighlightRetrieveResponse as HighlightRetrieveResponse,
    type HighlightUpdateResponse as HighlightUpdateResponse,
    type HighlightListResponse as HighlightListResponse,
    type HighlightDeleteResponse as HighlightDeleteResponse,
    type HighlightAddStoryResponse as HighlightAddStoryResponse,
    type HighlightRemoveStoryResponse as HighlightRemoveStoryResponse,
    type HighlightCreateParams as HighlightCreateParams,
    type HighlightRetrieveParams as HighlightRetrieveParams,
    type HighlightUpdateParams as HighlightUpdateParams,
    type HighlightListParams as HighlightListParams,
    type HighlightDeleteParams as HighlightDeleteParams,
    type HighlightAddStoryParams as HighlightAddStoryParams,
    type HighlightRemoveStoryParams as HighlightRemoveStoryParams,
  };
}
