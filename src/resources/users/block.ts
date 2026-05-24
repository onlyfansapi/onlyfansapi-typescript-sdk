// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for fetching OnlyFans users
 */
export class Block extends APIResource {
  /**
   * Block user from accessing your profile.
   *
   * @example
   * ```ts
   * const block = await client.users.block.create('user_id', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  create(
    userID: string,
    params: BlockCreateParams,
    options?: RequestOptions,
  ): APIPromise<BlockCreateResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/users/${userID}/block`, options);
  }

  /**
   * Unblock a previously blocked user.
   *
   * @example
   * ```ts
   * const block = await client.users.block.delete('user_id', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  delete(
    userID: string,
    params: BlockDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BlockDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/users/${userID}/block`, options);
  }
}

export interface BlockCreateResponse {
  _meta?: BlockCreateResponse._Meta;

  data?: BlockCreateResponse.Data;
}

export namespace BlockCreateResponse {
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

    about?: string;

    archivedPostsCount?: number;

    audiosCount?: number;

    avatar?: string;

    avatarHeaderConverterUpload?: boolean;

    avatarThumbs?: Data.AvatarThumbs;

    canAddSubscriber?: boolean;

    canChat?: boolean;

    canCommentStory?: boolean;

    canCreatePromotion?: boolean;

    canCreateTrial?: boolean;

    canEarn?: boolean;

    canLookStory?: boolean;

    canPayInternal?: boolean;

    canReceiveChatMessage?: boolean;

    canReport?: boolean;

    canRestrict?: boolean;

    canTrialSend?: boolean;

    canUnsubscribe?: boolean;

    currentSubscribePrice?: number;

    displayName?: string;

    favoritedCount?: number;

    favoritesCount?: number;

    finishedStreamsCount?: number;

    firstPublishedPostDate?: string;

    hasFriends?: boolean;

    hasLabels?: boolean;

    hasLinks?: boolean;

    hasNotViewedStory?: boolean;

    hasPinnedPosts?: boolean;

    hasSavedStreams?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    header?: string;

    headerSize?: Data.HeaderSize;

    headerThumbs?: Data.HeaderThumbs;

    isAdultContent?: boolean;

    isBlocked?: boolean;

    isFriend?: boolean;

    isMarkdownDisabledForAbout?: boolean;

    isPaywallRequired?: boolean;

    isPendingAutoprolong?: boolean;

    isPerformer?: boolean;

    isPrivateRestriction?: boolean;

    isRealPerformer?: boolean;

    isReferrerAllowed?: boolean;

    isRestricted?: boolean;

    isSpotifyConnected?: boolean;

    isSpringConnected?: boolean;

    isVerified?: boolean;

    joinDate?: string;

    lastSeen?: string;

    listsStates?: Array<Data.ListsState>;

    location?: string;

    mediasCount?: number;

    name?: string;

    notice?: string;

    photosCount?: number;

    postsCount?: number;

    privateArchivedPostsCount?: number;

    shouldShowFinishedStreams?: boolean;

    showMediaCount?: boolean;

    showPostsInFeed?: boolean;

    showSubscribersCount?: boolean;

    subscribedBy?: boolean;

    subscribedByAutoprolong?: boolean;

    subscribedByData?: Data.SubscribedByData;

    subscribedByExpire?: boolean;

    subscribedByExpireDate?: string;

    subscribedIsExpiredNow?: boolean;

    subscribedOn?: string | null;

    subscribedOnData?: Data.SubscribedOnData;

    subscribedOnDuration?: string;

    subscribedOnExpiredNow?: boolean;

    subscribePrice?: number;

    subscribersCount?: string | null;

    subscriptionBundles?: Array<Data.SubscriptionBundle>;

    tipsEnabled?: boolean;

    tipsMax?: number;

    tipsMin?: number;

    tipsMinInternal?: number;

    tipsTextEnabled?: boolean;

    username?: string;

    videosCount?: number;

    view?: string;

    website?: string | null;

    wishlist?: string | null;
  }

  export namespace Data {
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

    export interface ListsState {
      id?: string;

      canAddUser?: boolean;

      cannotAddUserReason?: string;

      hasUser?: boolean;

      name?: string;

      type?: string;
    }

    export interface SubscribedByData {
      discountFinishedAt?: string | null;

      discountPercent?: number;

      discountPeriod?: number;

      discountStartedAt?: string | null;

      duration?: string;

      expiredAt?: string;

      hasActivePaidSubscriptions?: boolean;

      isMuted?: boolean;

      newPrice?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string | null;

      showPostsInFeed?: boolean;

      status?: string;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<SubscribedByData.Subscribe>;

      unsubscribeReason?: string;
    }

    export namespace SubscribedByData {
      export interface Subscribe {
        id?: number;

        action?: string;

        cancelDate?: string | null;

        date?: string;

        discount?: number;

        duration?: number;

        earningId?: number;

        expireDate?: string;

        isCurrent?: boolean;

        offerEnd?: string | null;

        offerStart?: string;

        price?: number;

        regularPrice?: number;

        startDate?: string;

        subscriberId?: number;

        type?: string;

        userId?: number;
      }
    }

    export interface SubscribedOnData {
      discountFinishedAt?: string | null;

      discountPercent?: number;

      discountPeriod?: number;

      discountStartedAt?: string | null;

      duration?: string;

      expiredAt?: string;

      hasActivePaidSubscriptions?: boolean;

      isMuted?: boolean;

      messagesSumm?: number;

      newPrice?: number;

      postsSumm?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string | null;

      status?: string | null;

      streamsSumm?: number;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<unknown>;

      subscribesSumm?: number;

      tipsSumm?: number;

      totalSumm?: number;

      unsubscribeReason?: string;
    }

    export interface SubscriptionBundle {
      id?: number;

      canBuy?: boolean;

      discount?: number;

      duration?: number;

      price?: number;
    }
  }
}

export interface BlockDeleteResponse {
  _meta?: BlockDeleteResponse._Meta;

  data?: BlockDeleteResponse.Data;
}

export namespace BlockDeleteResponse {
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

    about?: string;

    archivedPostsCount?: number;

    audiosCount?: number;

    avatar?: string;

    avatarHeaderConverterUpload?: boolean;

    avatarThumbs?: Data.AvatarThumbs;

    canAddSubscriber?: boolean;

    canChat?: boolean;

    canCommentStory?: boolean;

    canCreatePromotion?: boolean;

    canCreateTrial?: boolean;

    canEarn?: boolean;

    canLookStory?: boolean;

    canPayInternal?: boolean;

    canReceiveChatMessage?: boolean;

    canReport?: boolean;

    canRestrict?: boolean;

    canTrialSend?: boolean;

    canUnsubscribe?: boolean;

    currentSubscribePrice?: number;

    displayName?: string;

    favoritedCount?: number;

    favoritesCount?: number;

    finishedStreamsCount?: number;

    firstPublishedPostDate?: string;

    hasFriends?: boolean;

    hasLabels?: boolean;

    hasLinks?: boolean;

    hasNotViewedStory?: boolean;

    hasPinnedPosts?: boolean;

    hasSavedStreams?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    header?: string;

    headerSize?: Data.HeaderSize;

    headerThumbs?: Data.HeaderThumbs;

    isAdultContent?: boolean;

    isBlocked?: boolean;

    isFriend?: boolean;

    isMarkdownDisabledForAbout?: boolean;

    isPaywallRequired?: boolean;

    isPendingAutoprolong?: boolean;

    isPerformer?: boolean;

    isPrivateRestriction?: boolean;

    isRealPerformer?: boolean;

    isReferrerAllowed?: boolean;

    isRestricted?: boolean;

    isSpotifyConnected?: boolean;

    isSpringConnected?: boolean;

    isVerified?: boolean;

    joinDate?: string;

    lastSeen?: string;

    listsStates?: Array<Data.ListsState>;

    location?: string;

    mediasCount?: number;

    name?: string;

    notice?: string;

    photosCount?: number;

    postsCount?: number;

    privateArchivedPostsCount?: number;

    shouldShowFinishedStreams?: boolean;

    showMediaCount?: boolean;

    showPostsInFeed?: boolean;

    showSubscribersCount?: boolean;

    subscribedBy?: boolean;

    subscribedByAutoprolong?: boolean;

    subscribedByData?: Data.SubscribedByData;

    subscribedByExpire?: boolean;

    subscribedByExpireDate?: string;

    subscribedIsExpiredNow?: boolean;

    subscribedOn?: string | null;

    subscribedOnData?: Data.SubscribedOnData;

    subscribedOnDuration?: string;

    subscribedOnExpiredNow?: boolean;

    subscribePrice?: number;

    subscribersCount?: string | null;

    subscriptionBundles?: Array<Data.SubscriptionBundle>;

    tipsEnabled?: boolean;

    tipsMax?: number;

    tipsMin?: number;

    tipsMinInternal?: number;

    tipsTextEnabled?: boolean;

    username?: string;

    videosCount?: number;

    view?: string;

    website?: string | null;

    wishlist?: string | null;
  }

  export namespace Data {
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

    export interface ListsState {
      id?: string;

      canAddUser?: boolean;

      cannotAddUserReason?: string;

      hasUser?: boolean;

      name?: string;

      type?: string;
    }

    export interface SubscribedByData {
      discountFinishedAt?: string | null;

      discountPercent?: number;

      discountPeriod?: number;

      discountStartedAt?: string | null;

      duration?: string;

      expiredAt?: string;

      hasActivePaidSubscriptions?: boolean;

      isMuted?: boolean;

      newPrice?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string | null;

      showPostsInFeed?: boolean;

      status?: string;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<SubscribedByData.Subscribe>;

      unsubscribeReason?: string;
    }

    export namespace SubscribedByData {
      export interface Subscribe {
        id?: number;

        action?: string;

        cancelDate?: string | null;

        date?: string;

        discount?: number;

        duration?: number;

        earningId?: number;

        expireDate?: string;

        isCurrent?: boolean;

        offerEnd?: string | null;

        offerStart?: string;

        price?: number;

        regularPrice?: number;

        startDate?: string;

        subscriberId?: number;

        type?: string;

        userId?: number;
      }
    }

    export interface SubscribedOnData {
      discountFinishedAt?: string | null;

      discountPercent?: number;

      discountPeriod?: number;

      discountStartedAt?: string | null;

      duration?: string;

      expiredAt?: string;

      hasActivePaidSubscriptions?: boolean;

      isMuted?: boolean;

      messagesSumm?: number;

      newPrice?: number;

      postsSumm?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string | null;

      status?: string | null;

      streamsSumm?: number;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<unknown>;

      subscribesSumm?: number;

      tipsSumm?: number;

      totalSumm?: number;

      unsubscribeReason?: string;
    }

    export interface SubscriptionBundle {
      id?: number;

      canBuy?: boolean;

      discount?: number;

      duration?: number;

      price?: number;
    }
  }
}

export interface BlockCreateParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface BlockDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export declare namespace Block {
  export {
    type BlockCreateResponse as BlockCreateResponse,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockDeleteParams as BlockDeleteParams,
  };
}
