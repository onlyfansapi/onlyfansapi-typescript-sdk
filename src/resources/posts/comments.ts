// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Comments extends APIResource {
  /**
   * Create a comment on one of your posts.
   *
   * @example
   * ```ts
   * const comment = await client.posts.comments.create(
   *   'ullam',
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     text: 'This is a comment.',
   *   },
   * );
   * ```
   */
  create(
    postID: string,
    params: CommentCreateParams,
    options?: RequestOptions,
  ): APIPromise<CommentCreateResponse> {
    const { account, text, answerTo, giphyId } = params;
    return this._client.post(path`/api/${account}/posts/${postID}/comments`, {
      query: { text, answerTo, giphyId },
      ...options,
    });
  }

  /**
   * Get comments from one of your posts.
   *
   * @example
   * ```ts
   * const comments = await client.posts.comments.list('ullam', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  list(postID: string, params: CommentListParams, options?: RequestOptions): APIPromise<CommentListResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/posts/${postID}/comments`, { query, ...options });
  }

  /**
   * Delete a comment on one of your posts.
   *
   * @example
   * ```ts
   * const comment = await client.posts.comments.delete(123, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   *   post_id: 123,
   * });
   * ```
   */
  delete(
    commentID: number,
    params: CommentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CommentDeleteResponse> {
    const { account, post_id } = params;
    return this._client.delete(path`/api/${account}/posts/${post_id}/comments/${commentID}`, options);
  }

  /**
   * Like a comment on one of your posts.
   *
   * @example
   * ```ts
   * const response = await client.posts.comments.likeComment(
   *   123,
   *   { account: 'acct_XXXXXXXXXXXXXXX', post_id: 123 },
   * );
   * ```
   */
  likeComment(
    commentID: number,
    params: CommentLikeCommentParams,
    options?: RequestOptions,
  ): APIPromise<CommentLikeCommentResponse> {
    const { account, post_id } = params;
    return this._client.post(path`/api/${account}/posts/${post_id}/comments/${commentID}/like`, options);
  }

  /**
   * Pin a comment on one of your posts.
   *
   * @example
   * ```ts
   * const response = await client.posts.comments.pinComment(
   *   123,
   *   { account: 'acct_XXXXXXXXXXXXXXX', post_id: 123 },
   * );
   * ```
   */
  pinComment(
    commentID: number,
    params: CommentPinCommentParams,
    options?: RequestOptions,
  ): APIPromise<CommentPinCommentResponse> {
    const { account, post_id } = params;
    return this._client.post(path`/api/${account}/posts/${post_id}/comments/${commentID}/pin`, options);
  }

  /**
   * Unlike a comment on one of your posts.
   *
   * @example
   * ```ts
   * const response = await client.posts.comments.unlikeComment(
   *   123,
   *   { account: 'acct_XXXXXXXXXXXXXXX', post_id: 123 },
   * );
   * ```
   */
  unlikeComment(
    commentID: number,
    params: CommentUnlikeCommentParams,
    options?: RequestOptions,
  ): APIPromise<CommentUnlikeCommentResponse> {
    const { account, post_id } = params;
    return this._client.delete(path`/api/${account}/posts/${post_id}/comments/${commentID}/like`, options);
  }

  /**
   * Unpin a comment from one of your posts.
   *
   * @example
   * ```ts
   * const response = await client.posts.comments.unpinComment(
   *   123,
   *   { account: 'acct_XXXXXXXXXXXXXXX', post_id: 123 },
   * );
   * ```
   */
  unpinComment(
    commentID: number,
    params: CommentUnpinCommentParams,
    options?: RequestOptions,
  ): APIPromise<CommentUnpinCommentResponse> {
    const { account, post_id } = params;
    return this._client.delete(path`/api/${account}/posts/${post_id}/comments/${commentID}/pin`, options);
  }
}

export interface CommentCreateResponse {
  _meta?: CommentCreateResponse._Meta;

  data?: CommentCreateResponse.Data;
}

export namespace CommentCreateResponse {
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

    canLike?: boolean;

    changedAt?: string;

    giphyId?: string | null;

    isLiked?: boolean;

    isLikedByAuthor?: boolean;

    isPinned?: boolean;

    likesCount?: number;

    postedAt?: string;

    text?: string;
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

      canReport?: boolean;

      canSendChatToAll?: boolean;

      creditsMax?: number;

      creditsMin?: number;

      creditsMinAlternatives?: number;

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

      lastSeen?: string;

      name?: string;

      showMediaCount?: boolean;

      subscribedOn?: string | null;

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

export interface CommentListResponse {
  _meta?: CommentListResponse._Meta;

  data?: CommentListResponse.Data;
}

export namespace CommentListResponse {
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

    list?: Array<Data.List>;

    nextOffset?: number;
  }

  export namespace Data {
    export interface List {
      id?: number;

      author?: List.Author;

      canLike?: boolean;

      changedAt?: string;

      giphyId?: string | null;

      isLiked?: boolean;

      isLikedByAuthor?: boolean;

      isPinned?: boolean;

      likesCount?: number;

      postedAt?: string;

      text?: string;
    }

    export namespace List {
      export interface Author {
        id?: number;

        _view?: string;
      }
    }
  }
}

export interface CommentDeleteResponse {
  _meta?: CommentDeleteResponse._Meta;

  data?: CommentDeleteResponse.Data;
}

export namespace CommentDeleteResponse {
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

export interface CommentLikeCommentResponse {
  _meta?: CommentLikeCommentResponse._Meta;

  data?: CommentLikeCommentResponse.Data;
}

export namespace CommentLikeCommentResponse {
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
    isLiked?: boolean;

    likesCount?: number;

    success?: boolean;
  }
}

export interface CommentPinCommentResponse {
  _meta?: CommentPinCommentResponse._Meta;

  data?: CommentPinCommentResponse.Data;
}

export namespace CommentPinCommentResponse {
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

export interface CommentUnlikeCommentResponse {
  _meta?: CommentUnlikeCommentResponse._Meta;

  data?: CommentUnlikeCommentResponse.Data;
}

export namespace CommentUnlikeCommentResponse {
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
    isLiked?: boolean;

    likesCount?: number;

    success?: boolean;
  }
}

export interface CommentUnpinCommentResponse {
  _meta?: CommentUnpinCommentResponse._Meta;

  data?: CommentUnpinCommentResponse.Data;
}

export namespace CommentUnpinCommentResponse {
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

export interface CommentCreateParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: The text of the comment.
   */
  text: string;

  /**
   * Query param: The ID of the comment to which this comment is a reply.
   */
  answerTo?: number;

  /**
   * Query param: The ID of the Giphy to include in the comment.
   */
  giphyId?: string;
}

export interface CommentListParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Number of comments to return (default = 10)
   */
  limit?: number;

  /**
   * Query param: Number of comments to skip for pagination
   */
  offset?: number;

  /**
   * Query param: Sort the returned comments (default = desc)
   */
  sort?: 'desc' | 'asc';
}

export interface CommentDeleteParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the post to which the comment belongs.
   */
  post_id: number;
}

export interface CommentLikeCommentParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the post to which the comment belongs.
   */
  post_id: number;
}

export interface CommentPinCommentParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the post to which the comment belongs.
   */
  post_id: number;
}

export interface CommentUnlikeCommentParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the post to which the comment belongs.
   */
  post_id: number;
}

export interface CommentUnpinCommentParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the post to which the comment belongs.
   */
  post_id: number;
}

export declare namespace Comments {
  export {
    type CommentCreateResponse as CommentCreateResponse,
    type CommentListResponse as CommentListResponse,
    type CommentDeleteResponse as CommentDeleteResponse,
    type CommentLikeCommentResponse as CommentLikeCommentResponse,
    type CommentPinCommentResponse as CommentPinCommentResponse,
    type CommentUnlikeCommentResponse as CommentUnlikeCommentResponse,
    type CommentUnpinCommentResponse as CommentUnpinCommentResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentListParams as CommentListParams,
    type CommentDeleteParams as CommentDeleteParams,
    type CommentLikeCommentParams as CommentLikeCommentParams,
    type CommentPinCommentParams as CommentPinCommentParams,
    type CommentUnlikeCommentParams as CommentUnlikeCommentParams,
    type CommentUnpinCommentParams as CommentUnpinCommentParams,
  };
}
