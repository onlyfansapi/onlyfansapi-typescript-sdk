// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlockAPI from './block';
import {
  Block,
  BlockCreateParams,
  BlockCreateResponse,
  BlockDeleteParams,
  BlockDeleteResponse,
} from './block';
import * as RestrictAPI from './restrict';
import {
  Restrict,
  RestrictCreateParams,
  RestrictCreateResponse,
  RestrictDeleteParams,
  RestrictDeleteResponse,
} from './restrict';
import * as SubscribeAPI from './subscribe';
import {
  Subscribe as SubscribeAPISubscribe,
  SubscribeCreateParams,
  SubscribeCreateResponse,
  SubscribeDeleteParams,
  SubscribeDeleteResponse,
} from './subscribe';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for fetching OnlyFans users
 */
export class Users extends APIResource {
  restrict: RestrictAPI.Restrict = new RestrictAPI.Restrict(this._client);
  block: BlockAPI.Block = new BlockAPI.Block(this._client);
  subscribe: SubscribeAPI.Subscribe = new SubscribeAPI.Subscribe(this._client);

  /**
   * Get OnlyFans Profile details for a given username. User details are retrieved
   * using the current `{account}` so fields like `subscribedOnData` which include
   * potential subscription details will be included.
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve('exampleuser', {
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

  /**
   * Save on credits by getting up to 10 user details with a single request. User
   * details are retrieved using the current `{account}` so fields like
   * `subscribedOnData` which include potential subscription details will be
   * included.
   *
   * @example
   * ```ts
   * const users = await client.users.list(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { ids: '12412412,36139491,1858349' },
   * );
   * ```
   */
  list(account: string, query: UserListParams, options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get(path`/api/${account}/users/list`, { query, ...options });
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

export interface UserListResponse {
  _meta?: UserListResponse._Meta;

  data?: UserListResponse.Data;
}

export namespace UserListResponse {
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
    '1000000'?: Data._1000000;
  }

  export namespace Data {
    export interface _1000000 {
      id?: number;

      about?: string;

      archivedPostsCount?: number;

      audiosCount?: number;

      avatar?: string;

      avatarHeaderConverterUpload?: boolean;

      avatarThumbs?: _1000000.AvatarThumbs;

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

      firstPublishedPostDate?: string;

      hasFriends?: boolean;

      hasLabels?: boolean;

      hasLinks?: boolean;

      hasNotViewedStory?: boolean;

      hasPinnedPosts?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

      isActive?: boolean;

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

      listsStates?: Array<_1000000.ListsState>;

      location?: string | null;

      mediasCount?: number;

      name?: string;

      notice?: string;

      photosCount?: number;

      postsCount?: number;

      privateArchivedPostsCount?: number;

      showMediaCount?: boolean;

      showPostsInFeed?: boolean;

      showSubscribersCount?: boolean;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: _1000000.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: string | null;

      subscribedOnData?: _1000000.SubscribedOnData;

      subscribedOnDuration?: string;

      subscribedOnExpiredNow?: boolean;

      subscribePrice?: number;

      subscribersCount?: string | null;

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

    export namespace _1000000 {
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }

      export interface ListsState {
        id?: string;

        canAddUser?: boolean;

        cannotAddUserReason?: string | null;

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

          offerStart?: string | null;

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
    }
  }
}

export interface UserRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface UserListParams {
  /**
   * Comma-separated list of user IDs (max. 10 IDs). Must be at least 1 character.
   */
  ids: string;
}

Users.Restrict = Restrict;
Users.Block = Block;
Users.Subscribe = SubscribeAPISubscribe;

export declare namespace Users {
  export {
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserListParams as UserListParams,
  };

  export {
    Restrict as Restrict,
    type RestrictCreateResponse as RestrictCreateResponse,
    type RestrictDeleteResponse as RestrictDeleteResponse,
    type RestrictCreateParams as RestrictCreateParams,
    type RestrictDeleteParams as RestrictDeleteParams,
  };

  export {
    Block as Block,
    type BlockCreateResponse as BlockCreateResponse,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockDeleteParams as BlockDeleteParams,
  };

  export {
    SubscribeAPISubscribe as Subscribe,
    type SubscribeCreateResponse as SubscribeCreateResponse,
    type SubscribeDeleteResponse as SubscribeDeleteResponse,
    type SubscribeCreateParams as SubscribeCreateParams,
    type SubscribeDeleteParams as SubscribeDeleteParams,
  };
}
