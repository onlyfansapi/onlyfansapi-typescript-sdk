// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Get OnlyFans Profile details for a given username. User details are retrieved
   * using the current current `{account}` so fields like `subscribedOnData` which
   * include potential subscription details will be included.
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve('consequuntur', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  retrieve(
    username: string,
    params: UserRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/users/${username}`, options);
  }
}

export interface UserRetrieveResponse {
  _meta?: UserRetrieveResponse._Meta;

  data?: UserRetrieveResponse.Data;
}

export namespace UserRetrieveResponse {
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

    subscribedOn?: string;

    subscribedOnData?: Data.SubscribedOnData;

    subscribedOnDuration?: string;

    subscribedOnExpiredNow?: boolean;

    subscribePrice?: number;

    subscribersCount?: string;

    subscriptionBundles?: Array<Data.SubscriptionBundle>;

    tipsEnabled?: boolean;

    tipsMax?: number;

    tipsMin?: number;

    tipsMinInternal?: number;

    tipsTextEnabled?: boolean;

    username?: string;

    videosCount?: number;

    view?: string;

    website?: string;

    wishlist?: string;
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
      discountFinishedAt?: string;

      discountPercent?: number;

      discountPeriod?: number;

      discountStartedAt?: string;

      duration?: string;

      expiredAt?: string;

      hasActivePaidSubscriptions?: boolean;

      isMuted?: boolean;

      newPrice?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string;

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

        cancelDate?: string;

        date?: string;

        discount?: number;

        duration?: number;

        earningId?: number;

        expireDate?: string;

        isCurrent?: boolean;

        offerEnd?: string;

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
      discountFinishedAt?: string;

      discountPercent?: number;

      discountPeriod?: number;

      discountStartedAt?: string;

      duration?: string;

      expiredAt?: string;

      hasActivePaidSubscriptions?: boolean;

      isMuted?: boolean;

      messagesSumm?: number;

      newPrice?: number;

      postsSumm?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string;

      status?: string;

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

export interface UserRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export declare namespace Users {
  export { type UserRetrieveResponse as UserRetrieveResponse, type UserRetrieveParams as UserRetrieveParams };
}
