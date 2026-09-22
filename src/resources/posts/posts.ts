// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommentsAPI from './comments';
import {
  CommentCreateParams,
  CommentCreateResponse,
  CommentDeleteParams,
  CommentDeleteResponse,
  CommentLikeParams,
  CommentLikeResponse,
  CommentListParams,
  CommentListResponse,
  CommentPinParams,
  CommentPinResponse,
  CommentUnlikeParams,
  CommentUnlikeResponse,
  CommentUnpinParams,
  CommentUnpinResponse,
  Comments,
} from './comments';
import * as LabelsAPI from './labels';
import { LabelCreateParams, LabelCreateResponse, LabelListParams, LabelListResponse, Labels } from './labels';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing OnlyFans posts
 */
export class Posts extends APIResource {
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);

  /**
   * Compose and send a new post to your OnlyFans account.
   *
   * @example
   * ```ts
   * const post = await client.posts.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { text: 'Hello!' },
   * );
   * ```
   */
  create(account: string, body: PostCreateParams, options?: RequestOptions): APIPromise<PostCreateResponse> {
    return this._client.post(path`/api/${account}/posts`, { body, ...options });
  }

  /**
   * Retrieve details of a post from your account.
   *
   * @example
   * ```ts
   * const post = await client.posts.retrieve(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  retrieve(
    postID: number,
    params: PostRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PostRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/posts/${postID}`, options);
  }

  /**
   * Update a posted, queued, or "saved for later" post.
   *
   * @example
   * ```ts
   * const post = await client.posts.update(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   *   text: 'Hello!',
   * });
   * ```
   */
  update(postID: number, params: PostUpdateParams, options?: RequestOptions): APIPromise<string> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/posts/${postID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Get posts from your OnlyFans account.
   *
   * @example
   * ```ts
   * const posts = await client.posts.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: PostListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostListResponse> {
    return this._client.get(path`/api/${account}/posts`, { query, ...options });
  }

  /**
   * Delete a post from your account.
   *
   * @example
   * ```ts
   * const post = await client.posts.delete(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  delete(postID: number, params: PostDeleteParams, options?: RequestOptions): APIPromise<PostDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/posts/${postID}`, options);
  }

  /**
   * Archive a post from your account. Also can be used to move posts between the
   * Regular and Private Archive.
   *
   * @example
   * ```ts
   * const response = await client.posts.archive(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  archive(
    postID: number,
    params: PostArchiveParams,
    options?: RequestOptions,
  ): APIPromise<PostArchiveResponse> {
    const { account, private_archive } = params;
    return this._client.post(path`/api/${account}/posts/${postID}/archive`, {
      query: { private_archive },
      ...options,
    });
  }

  /**
   * Pin or unpin a post to your account.
   *
   * @example
   * ```ts
   * const response = await client.posts.pin(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  pin(postID: number, params: PostPinParams, options?: RequestOptions): APIPromise<PostPinResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/posts/${postID}/pin`, options);
  }

  /**
   * Show the statistics of a post like purchases, views, likes, tips and more.
   *
   * @example
   * ```ts
   * const response = await client.posts.stats(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  stats(postID: number, params: PostStatsParams, options?: RequestOptions): APIPromise<PostStatsResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/posts/${postID}/stats`, { query, ...options });
  }

  /**
   * Unarchive a post from your account.
   *
   * @example
   * ```ts
   * const response = await client.posts.unarchive(1234567890, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  unarchive(
    postID: number,
    params: PostUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<PostUnarchiveResponse> {
    const { account, private_archive } = params;
    return this._client.post(path`/api/${account}/posts/${postID}/unarchive`, {
      query: { private_archive },
      ...options,
    });
  }
}

export interface PostCreateResponse {
  _meta?: PostCreateResponse._Meta;

  data?: PostCreateResponse.Data;
}

export namespace PostCreateResponse {
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

    author?: Data.Author;

    canComment?: boolean;

    canDelete?: boolean;

    canEdit?: boolean;

    canToggleFavorite?: boolean;

    canViewMedia?: boolean;

    isMarkdownDisabled?: boolean;

    isOpened?: boolean;

    media?: Array<Data.Media>;

    mediaCount?: number;

    postedAt?: string;

    postedAtPrecise?: string;

    rawText?: string;

    responseType?: string;

    text?: string;

    tipsAmount?: string;
  }

  export namespace Data {
    export interface Author {
      id?: number;

      avatar?: string;

      avatarThumbs?: Author.AvatarThumbs;

      canAddSubscriber?: boolean;

      canCommentStory?: boolean;

      canCreateLists?: boolean;

      canEarn?: boolean;

      canLookStory?: boolean;

      canPayInternal?: boolean;

      canSendChatToAll?: boolean;

      canTrialSend?: boolean;

      creditsMax?: number;

      creditsMin?: number;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      hasStripe?: boolean;

      header?: string;

      headerSize?: Author.HeaderSize;

      headerThumbs?: Author.HeaderThumbs;

      isPaywallPassed?: boolean;

      isStripeExist?: boolean;

      isVerified?: boolean;

      name?: string;

      showMediaCount?: boolean;

      showPostsInFeed?: boolean;

      subscribedBy?: boolean;

      subscribePrice?: number;

      subscriptionBundles?: Array<unknown>;

      tipsEnabled?: boolean;

      tipsMax?: number;

      tipsMin?: number;

      tipsMinInternal?: number;

      tipsTextEnabled?: boolean;

      username?: string;

      view?: string;
    }

    export namespace Author {
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }

      export interface HeaderSize {
        height?: number;

        width?: number;
      }

      export interface HeaderThumbs {
        w480?: string;

        w760?: string;
      }
    }

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

      releaseForms?: Array<unknown>;

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
  }
}

export interface PostRetrieveResponse {
  _meta?: PostRetrieveResponse._Meta;

  data?: PostRetrieveResponse.Data;
}

export namespace PostRetrieveResponse {
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

    author?: Data.Author;

    canComment?: boolean;

    canDelete?: boolean;

    canEdit?: boolean;

    canEditText?: boolean;

    canToggleFavorite?: boolean;

    canViewMedia?: boolean;

    isMarkdownDisabled?: boolean;

    isMediaReady?: boolean;

    isOpened?: boolean;

    postedAt?: string;

    postedAtPrecise?: string;

    rawText?: string;

    responseType?: string;

    text?: string;

    tipsAmount?: string;
  }

  export namespace Data {
    export interface Author {
      id?: number;

      avatar?: string;

      avatarThumbs?: Author.AvatarThumbs;

      canAddSubscriber?: boolean;

      canCommentStory?: boolean;

      canCreateLists?: boolean;

      canEarn?: boolean;

      canLookStory?: boolean;

      canPayInternal?: boolean;

      canSendChatToAll?: boolean;

      canTrialSend?: boolean;

      creditsMax?: number;

      creditsMin?: number;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      hasStripe?: boolean;

      header?: string;

      headerSize?: Author.HeaderSize;

      headerThumbs?: Author.HeaderThumbs;

      isPaywallPassed?: boolean;

      isStripeExist?: boolean;

      isVerified?: boolean;

      name?: string;

      showMediaCount?: boolean;

      showPostsInFeed?: boolean;

      subscribedBy?: boolean;

      subscribePrice?: number;

      subscriptionBundles?: Array<unknown>;

      tipsEnabled?: boolean;

      tipsMax?: number;

      tipsMin?: number;

      tipsMinInternal?: number;

      tipsTextEnabled?: boolean;

      username?: string;

      view?: string;
    }

    export namespace Author {
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }

      export interface HeaderSize {
        height?: number;

        width?: number;
      }

      export interface HeaderThumbs {
        w480?: string;

        w760?: string;
      }
    }
  }
}

export type PostUpdateResponse = string;

export interface PostListResponse {
  _meta?: PostListResponse._Meta;

  data?: PostListResponse.Data;
}

export namespace PostListResponse {
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
    counters?: Data.Counters;

    hasMore?: boolean;

    headMarker?: string;

    list?: Array<Data.List>;

    tailMarker?: string;
  }

  export namespace Data {
    export interface Counters {
      archivedPostsCount?: number;

      audiosCount?: number;

      mediasCount?: number;

      photosCount?: number;

      postsCount?: number;

      privateArchivedPostsCount?: number;

      streamsCount?: number;

      videosCount?: number;
    }

    export interface List {
      id?: number;

      author?: List.Author;

      canComment?: boolean;

      canDelete?: boolean;

      canEdit?: boolean;

      canToggleFavorite?: boolean;

      canViewMedia?: boolean;

      isMarkdownDisabled?: boolean;

      isMediaReady?: boolean;

      isOpened?: boolean;

      postedAt?: string;

      postedAtPrecise?: string;

      rawText?: string;

      responseType?: string;

      text?: string;

      tipsAmount?: string;
    }

    export namespace List {
      export interface Author {
        id?: number;

        _view?: string;
      }
    }
  }
}

export interface PostDeleteResponse {
  _meta?: PostDeleteResponse._Meta;

  data?: PostDeleteResponse.Data;
}

export namespace PostDeleteResponse {
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
    counters?: Data.Counters;

    success?: boolean;
  }

  export namespace Data {
    export interface Counters {
      archivedPostsCount?: number;

      audiosCount?: number;

      mediasCount?: number;

      photosCount?: number;

      postsCount?: number;

      streamsCount?: number;

      videosCount?: number;
    }
  }
}

export interface PostArchiveResponse {
  _meta?: PostArchiveResponse._Meta;

  data?: PostArchiveResponse.Data;
}

export namespace PostArchiveResponse {
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
    counters?: Data.Counters;

    labelStates?: Array<Data.LabelState>;
  }

  export namespace Data {
    export interface Counters {
      archivedPostsCount?: number;

      audiosCount?: number;

      mediasCount?: number;

      photosCount?: number;

      postsCount?: number;

      privateArchivedPostsCount?: number;

      streamsCount?: number;

      videosCount?: number;
    }

    export interface LabelState {
      id?: string;

      isClearInProgress?: boolean;

      name?: string;

      posts?: Array<unknown>;

      postsCount?: number;

      type?: string;
    }
  }
}

export interface PostPinResponse {
  _meta?: PostPinResponse._Meta;

  data?: PostPinResponse.Data;
}

export namespace PostPinResponse {
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
    success?: boolean;
  }
}

export interface PostStatsResponse {
  _meta?: PostStatsResponse._Meta;

  data?: PostStatsResponse.Data;
}

export namespace PostStatsResponse {
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
    commentChart?: Array<Data.CommentChart>;

    commentCount?: number;

    hasStats?: boolean;

    hasVideo?: boolean;

    isAvailable?: boolean;

    likeChart?: Array<Data.LikeChart>;

    likeCount?: number;

    lookChart?: Array<Data.LookChart>;

    lookCount?: number;

    lookDuration?: number;

    lookDurationAverage?: number;

    purchasedCount?: number;

    purchasedSumm?: number;

    purchasesChart?: Array<Data.PurchasesChart>;

    tipChart?: Array<Data.TipChart>;

    tipCount?: number;

    tipSum?: number;

    tipSumChart?: Array<Data.TipSumChart>;

    uniqueLookChart?: Array<Data.UniqueLookChart>;

    uniqueLookCount?: number;
  }

  export namespace Data {
    export interface CommentChart {
      count?: number;

      date?: string;
    }

    export interface LikeChart {
      count?: number;

      date?: string;
    }

    export interface LookChart {
      count?: number;

      date?: string;
    }

    export interface PurchasesChart {
      count?: number;

      date?: string;
    }

    export interface TipChart {
      count?: number;

      date?: string;
    }

    export interface TipSumChart {
      count?: number;

      date?: string;
    }

    export interface UniqueLookChart {
      count?: number;

      date?: string;
    }
  }
}

export interface PostUnarchiveResponse {
  _meta?: PostUnarchiveResponse._Meta;

  data?: PostUnarchiveResponse.Data;
}

export namespace PostUnarchiveResponse {
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
    counters?: Data.Counters;

    labelStates?: Array<Data.LabelState>;
  }

  export namespace Data {
    export interface Counters {
      archivedPostsCount?: number;

      audiosCount?: number;

      mediasCount?: number;

      photosCount?: number;

      postsCount?: number;

      privateArchivedPostsCount?: number;

      streamsCount?: number;

      videosCount?: number;
    }

    export interface LabelState {
      id?: string;

      isClearInProgress?: boolean;

      name?: string;

      posts?: Array<unknown>;

      postsCount?: number;

      type?: string;
    }
  }
}

export interface PostCreateParams {
  /**
   * The post text content
   */
  text: string;

  /**
   * Screen `text` for OnlyFans banned words and block the post if any are found
   * (returns a 422 listing the offending words). `strict_ban` blocks all tiers,
   * `risky` blocks Risky + Replace/soften, `replace_soften` blocks Replace/soften
   * only. Omit to disable screening.
   */
  blockBannedWords?: 'strict_ban' | 'risky' | 'replace_soften';

  /**
   * Number of days after which the post will expire. Between 1 and 30 days. Keep
   * empty for no expiration.
   */
  expireDays?: number;

  /**
   * Add a fundraising target to your post. If present, value must be at least 10.
   */
  fundRaisingTargetAmount?: number;

  /**
   * Specify which tip amounts will be listed under the fundraising card. Required
   * with `fundRaisingTargetAmount`, and you must provide at least 1 option. Array
   * items cannot be higher than the `fundRaisingTargetAmount`.
   */
  fundRaisingTipsPresets?: Array<string>;

  /**
   * Array of OF label IDs. Refer to our `/posts/labels` endpoint.
   */
  labelIds?: string;

  /**
   * Direct file uploads, OFAPI `ofapi_media_` IDs, or OF vault IDs.
   */
  mediaFiles?: Array<unknown>;

  /**
   * Direct file uploads, OFAPI `ofapi_media_` IDs, OF vault IDs, or integer indices
   * referencing uploaded files in `mediaFiles`. Will be shown if `price` is
   * provided.
   */
  previews?: Array<unknown>;

  /**
   * Array OnlyFans creator user IDs to tag in your post
   */
  rfTag?: string;

  /**
   * Add your post to the "Saved for later" queue.
   */
  saveForLater?: boolean;

  /**
   * Schedule your post in the future (UTC timezone).
   */
  scheduledDate?: string;

  /**
   * The array key of your quiz' correct answer. Required when `votingType` is
   * "quiz". Keep in mind that arrays start at `0`
   */
  votingCorrectIndex?: number;

  /**
   * The due date (in days) of your poll/quiz. Can be 1, 3, 7 or 30 days. Can only be
   * filled with `votingType`.
   */
  votingDue?: number;

  /**
   * The options of your poll/quiz. Required with `votingType`.
   */
  votingOptions?: Array<string>;

  /**
   * Include a poll or quiz within your post.
   */
  votingType?: 'poll' | 'quiz';
}

export interface PostRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface PostUpdateParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The post text content
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
   * Body param: Number of days after which the post will expire. Between 1 and 30
   * days. Keep empty for no expiration.
   */
  expireDays?: number;

  /**
   * Body param: Add a fundraising target to your post. If present, value must be at
   * least 10.
   */
  fundRaisingTargetAmount?: number;

  /**
   * Body param: Specify which tip amounts will be listed under the fundraising card.
   * Required with `fundRaisingTargetAmount`, and you must provide at least 1 option.
   * Array items cannot be higher than the `fundRaisingTargetAmount`.
   */
  fundRaisingTipsPresets?: Array<string>;

  /**
   * Body param: Array of OF label IDs. Refer to our `/posts/labels` endpoint.
   */
  labelIds?: string;

  /**
   * Body param: Array of OFAPI `ofapi_media_` IDs, or OF media IDs
   */
  mediaFiles?: string;

  /**
   * Body param: Price for paid content (0 or between 3-100). In case this is not
   * zero, **mediaFiles** is required
   */
  price?: number;

  /**
   * Body param: Array OnlyFans creator user IDs to tag in your post
   */
  rfTag?: string;

  /**
   * Body param: Add your post to the "Saved for later" queue.
   */
  saveForLater?: boolean;

  /**
   * Body param: Schedule your post in the future (UTC timezone).
   */
  scheduledDate?: string;

  /**
   * Body param: The array key of your quiz' correct answer. Required when
   * `votingType` is "quiz". Keep in mind that arrays start at `0`
   */
  votingCorrectIndex?: number;

  /**
   * Body param: The due date (in days) of your poll/quiz. Can be 1, 3, 7 or 30 days.
   * Can only be filled with `votingType`.
   */
  votingDue?: number;

  /**
   * Body param: The options of your poll/quiz. Required with `votingType`.
   */
  votingOptions?: Array<string>;

  /**
   * Body param: Include a poll or quiz within your post.
   */
  votingType?: 'poll' | 'quiz';
}

export interface PostListParams {
  /**
   * Set to true to include an array of counters (see example responses)
   */
  counters?: boolean;

  /**
   * Number of posts to return (default = 10)
   */
  limit?: number;

  /**
   * Filter posts by minimum publish date
   */
  minimumPublishDate?: string;

  /**
   * Number of posts to skip for pagination
   */
  offset?: number;

  /**
   * Order the returned posts (default = publish_date)
   */
  order?: 'publish_date' | 'favorites_count' | 'tips_summ';

  /**
   * Set to true to only show pinned posts
   */
  pinned?: boolean;

  /**
   * Search query to filter posts
   */
  query?: string;

  /**
   * Sort the returned posts (default = desc)
   */
  sort?: 'desc' | 'asc';
}

export interface PostDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface PostArchiveParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Set to `true` to move this post to the Private Archive.
   */
  private_archive?: boolean;
}

export interface PostPinParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface PostStatsParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Set to `true` to include historical data for a post.
   */
  with_historical_data?: boolean;
}

export interface PostUnarchiveParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Set to `true` if this post is currently in the Private Archive.
   */
  private_archive?: boolean;
}

Posts.Comments = Comments;
Posts.Labels = Labels;

export declare namespace Posts {
  export {
    type PostCreateResponse as PostCreateResponse,
    type PostRetrieveResponse as PostRetrieveResponse,
    type PostUpdateResponse as PostUpdateResponse,
    type PostListResponse as PostListResponse,
    type PostDeleteResponse as PostDeleteResponse,
    type PostArchiveResponse as PostArchiveResponse,
    type PostPinResponse as PostPinResponse,
    type PostStatsResponse as PostStatsResponse,
    type PostUnarchiveResponse as PostUnarchiveResponse,
    type PostCreateParams as PostCreateParams,
    type PostRetrieveParams as PostRetrieveParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
    type PostDeleteParams as PostDeleteParams,
    type PostArchiveParams as PostArchiveParams,
    type PostPinParams as PostPinParams,
    type PostStatsParams as PostStatsParams,
    type PostUnarchiveParams as PostUnarchiveParams,
  };

  export {
    Comments as Comments,
    type CommentCreateResponse as CommentCreateResponse,
    type CommentListResponse as CommentListResponse,
    type CommentDeleteResponse as CommentDeleteResponse,
    type CommentLikeResponse as CommentLikeResponse,
    type CommentPinResponse as CommentPinResponse,
    type CommentUnlikeResponse as CommentUnlikeResponse,
    type CommentUnpinResponse as CommentUnpinResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentListParams as CommentListParams,
    type CommentDeleteParams as CommentDeleteParams,
    type CommentLikeParams as CommentLikeParams,
    type CommentPinParams as CommentPinParams,
    type CommentUnlikeParams as CommentUnlikeParams,
    type CommentUnpinParams as CommentUnpinParams,
  };

  export {
    Labels as Labels,
    type LabelCreateResponse as LabelCreateResponse,
    type LabelListResponse as LabelListResponse,
    type LabelCreateParams as LabelCreateParams,
    type LabelListParams as LabelListParams,
  };
}
