// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing OnlyFans fans (subscribers)
 */
export class Fans extends APIResource {
  /**
   * Get a paginated list of fans for an Account. Newest fans are first.
   *
   * @example
   * ```ts
   * const response = await client.fans.listActive(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listActive(
    account: string,
    query: FanListActiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FanListActiveResponse> {
    return this._client.get(path`/api/${account}/fans/active`, { query, ...options });
  }

  /**
   * Get a paginated list of fans for an Account. Newest fans are first.
   *
   * @example
   * ```ts
   * const response = await client.fans.listAll(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listAll(
    account: string,
    query: FanListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FanListAllResponse> {
    return this._client.get(path`/api/${account}/fans/all`, { query, ...options });
  }

  /**
   * Get a paginated list of expired fans for an Account. Newest fans are first.
   *
   * @example
   * ```ts
   * const response = await client.fans.listExpired(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listExpired(
    account: string,
    query: FanListExpiredParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FanListExpiredResponse> {
    return this._client.get(path`/api/${account}/fans/expired`, { query, ...options });
  }

  /**
   * Get a paginated list fans, filterable by total, only new subscribers, or only
   * renewals. Newest fans are first.
   *
   * @example
   * ```ts
   * const response = await client.fans.listLatest(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listLatest(
    account: string,
    query: FanListLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FanListLatestResponse> {
    return this._client.get(path`/api/${account}/fans/latest`, { query, ...options });
  }
}

export interface FanListActiveResponse {
  _meta?: FanListActiveResponse._Meta;

  _pagination?: FanListActiveResponse._Pagination;

  data?: FanListActiveResponse.Data;
}

export namespace FanListActiveResponse {
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
  }

  export namespace Data {
    export interface List {
      id?: number;

      avatar?: string;

      avatarThumbs?: List.AvatarThumbs;

      canAddSubscriber?: boolean;

      canCommentStory?: boolean;

      canEarn?: boolean;

      canLookStory?: boolean;

      canPayInternal?: boolean;

      canReceiveChatMessage?: boolean;

      canReport?: boolean;

      canRestrict?: boolean;

      canTrialSend?: boolean;

      currentSubscribePrice?: string;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string;

      headerSize?: string;

      headerThumbs?: string;

      hideChat?: boolean;

      isBlocked?: boolean;

      isPaywallRequired?: boolean;

      isPerformer?: boolean;

      isRealPerformer?: boolean;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      listsStates?: Array<List.ListsState>;

      name?: string;

      notice?: string;

      promoOffers?: Array<List.PromoOffer>;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: string;

      subscribedByData?: string;

      subscribedByExpire?: string;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: string;

      subscribedOn?: boolean;

      subscribedOnData?: List.SubscribedOnData;

      subscribedOnDuration?: string;

      subscribedOnExpiredNow?: boolean;

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

    export namespace List {
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }

      export interface ListsState {
        id?: string;

        canAddUser?: boolean;

        cannotAddUserReason?: string;

        hasUser?: boolean;

        name?: string;

        type?: string;
      }

      export interface PromoOffer {
        id?: number;

        createdAt?: string;

        expiredAt?: string;

        finishedAt?: string;

        subscribeDays?: number;

        subscriberId?: string;

        userId?: string;
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

        lastActivity?: string;

        messagesSumm?: number;

        newPrice?: number;

        postsSumm?: number;

        price?: number;

        recommendations?: number;

        regularPrice?: number;

        renewedAt?: string;

        status?: string;

        streamsSumm?: number;

        subscribeAt?: string;

        subscribePrice?: number;

        subscribes?: Array<SubscribedOnData.Subscribe>;

        subscribesSumm?: number;

        tipsSumm?: number;

        totalSumm?: number;

        unsubscribeReason?: string;
      }

      export namespace SubscribedOnData {
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
    }
  }
}

export interface FanListAllResponse {
  _meta?: FanListAllResponse._Meta;

  _pagination?: FanListAllResponse._Pagination;

  data?: FanListAllResponse.Data;
}

export namespace FanListAllResponse {
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
  }

  export namespace Data {
    export interface List {
      id?: number;

      avatar?: string;

      avatarThumbs?: List.AvatarThumbs;

      canAddSubscriber?: boolean;

      canCommentStory?: boolean;

      canEarn?: boolean;

      canLookStory?: boolean;

      canPayInternal?: boolean;

      canReceiveChatMessage?: boolean;

      canReport?: boolean;

      canRestrict?: boolean;

      canTrialSend?: boolean;

      currentSubscribePrice?: string;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string;

      headerSize?: string;

      headerThumbs?: string;

      hideChat?: boolean;

      isBlocked?: boolean;

      isPaywallRequired?: boolean;

      isPerformer?: boolean;

      isRealPerformer?: boolean;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      listsStates?: Array<List.ListsState>;

      name?: string;

      notice?: string;

      promoOffers?: Array<List.PromoOffer>;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: string;

      subscribedByData?: string;

      subscribedByExpire?: string;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: string;

      subscribedOn?: boolean;

      subscribedOnData?: List.SubscribedOnData;

      subscribedOnDuration?: string;

      subscribedOnExpiredNow?: boolean;

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

    export namespace List {
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }

      export interface ListsState {
        id?: string;

        canAddUser?: boolean;

        cannotAddUserReason?: string;

        hasUser?: boolean;

        name?: string;

        type?: string;
      }

      export interface PromoOffer {
        id?: number;

        createdAt?: string;

        expiredAt?: string;

        finishedAt?: string;

        subscribeDays?: number;

        subscriberId?: string;

        userId?: string;
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

        lastActivity?: string;

        messagesSumm?: number;

        newPrice?: number;

        postsSumm?: number;

        price?: number;

        recommendations?: number;

        regularPrice?: number;

        renewedAt?: string;

        status?: string;

        streamsSumm?: number;

        subscribeAt?: string;

        subscribePrice?: number;

        subscribes?: Array<SubscribedOnData.Subscribe>;

        subscribesSumm?: number;

        tipsSumm?: number;

        totalSumm?: number;

        unsubscribeReason?: string;
      }

      export namespace SubscribedOnData {
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
    }
  }
}

export interface FanListExpiredResponse {
  _meta?: FanListExpiredResponse._Meta;

  _pagination?: FanListExpiredResponse._Pagination;

  data?: FanListExpiredResponse.Data;
}

export namespace FanListExpiredResponse {
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
  }

  export namespace Data {
    export interface List {
      id?: number;

      avatar?: string;

      avatarThumbs?: List.AvatarThumbs;

      canAddSubscriber?: boolean;

      canCommentStory?: boolean;

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

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string;

      headerSize?: List.HeaderSize;

      headerThumbs?: List.HeaderThumbs;

      hideChat?: boolean;

      isBlocked?: boolean;

      isPaywallRequired?: boolean;

      isPendingAutoprolong?: boolean;

      isPerformer?: boolean;

      isRealPerformer?: boolean;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      listsStates?: Array<List.ListsState>;

      name?: string;

      notice?: string;

      promoOffers?: Array<unknown>;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: List.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: string;

      subscribedOnData?: List.SubscribedOnData;

      subscribedOnDuration?: string;

      subscribedOnExpiredNow?: boolean;

      subscribePrice?: number;

      subscriptionBundles?: Array<List.SubscriptionBundle>;

      tipsEnabled?: boolean;

      tipsMax?: number;

      tipsMin?: number;

      tipsMinInternal?: number;

      tipsTextEnabled?: boolean;

      username?: string;

      view?: string;
    }

    export namespace List {
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

        lastActivity?: string;

        messagesSumm?: number;

        newPrice?: number;

        postsSumm?: number;

        price?: number;

        recommendations?: number;

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
}

export interface FanListLatestResponse {
  _meta?: FanListLatestResponse._Meta;

  _pagination?: FanListLatestResponse._Pagination;

  data?: FanListLatestResponse.Data;
}

export namespace FanListLatestResponse {
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

    offset?: number;

    users?: Array<Data.User>;
  }

  export namespace Data {
    export interface User {
      id?: number;

      avatar?: string;

      avatarThumbs?: User.AvatarThumbs;

      canAddSubscriber?: boolean;

      canCommentStory?: boolean;

      canEarn?: boolean;

      canLookStory?: boolean;

      canPayInternal?: boolean;

      canReceiveChatMessage?: boolean;

      canReport?: boolean;

      canRestrict?: boolean;

      canTrialSend?: boolean;

      currentSubscribePrice?: string;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string;

      headerSize?: string;

      headerThumbs?: string;

      hideChat?: boolean;

      isBlocked?: boolean;

      isPaywallRequired?: boolean;

      isPerformer?: boolean;

      isRealPerformer?: boolean;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      listsStates?: Array<User.ListsState>;

      name?: string;

      notice?: string;

      promoOffers?: Array<User.PromoOffer>;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: string;

      subscribedByData?: string;

      subscribedByExpire?: string;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: string;

      subscribedOn?: boolean;

      subscribedOnData?: User.SubscribedOnData;

      subscribedOnDuration?: string;

      subscribedOnExpiredNow?: boolean;

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

    export namespace User {
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }

      export interface ListsState {
        id?: string;

        canAddUser?: boolean;

        cannotAddUserReason?: string;

        hasUser?: boolean;

        name?: string;

        type?: string;
      }

      export interface PromoOffer {
        id?: number;

        createdAt?: string;

        expiredAt?: string;

        finishedAt?: string;

        subscribeDays?: number;

        subscriberId?: string;

        userId?: string;
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

        lastActivity?: string;

        messagesSumm?: number;

        newPrice?: number;

        postsSumm?: number;

        price?: number;

        recommendations?: number;

        regularPrice?: number;

        renewedAt?: string;

        status?: string;

        streamsSumm?: number;

        subscribeAt?: string;

        subscribePrice?: number;

        subscribes?: Array<SubscribedOnData.Subscribe>;

        subscribesSumm?: number;

        tipsSumm?: number;

        totalSumm?: number;

        unsubscribeReason?: string;
      }

      export namespace SubscribedOnData {
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
    }
  }
}

export interface FanListActiveParams {
  filter?: FanListActiveParams.Filter;

  /**
   * Number of fans to return (1-50)
   */
  limit?: string | null;

  /**
   * Number of fans to skip
   */
  offset?: string | null;

  /**
   * Filter by fan type
   */
  type?: string | null;
}

export namespace FanListActiveParams {
  export interface Filter {
    /**
     * Filter by minimum subscription duration (days)
     */
    duration?: string | null;

    /**
     * Filter by online status (1 for online)
     */
    online?: string | null;

    /**
     * Filter by minimum tips
     */
    tips?: string | null;

    /**
     * Filter by minimum total spent
     */
    total_spent?: string | null;
  }
}

export interface FanListAllParams {
  filter?: FanListAllParams.Filter;

  /**
   * Number of fans to return (1-50)
   */
  limit?: string | null;

  /**
   * Number of fans to skip
   */
  offset?: string | null;

  /**
   * Filter by fan type
   */
  type?: string | null;
}

export namespace FanListAllParams {
  export interface Filter {
    /**
     * Filter by minimum subscription duration (days)
     */
    duration?: string | null;

    /**
     * Filter by online status (1 for online)
     */
    online?: string | null;

    /**
     * Filter by minimum tips
     */
    tips?: string | null;

    /**
     * Filter by minimum total spent
     */
    total_spent?: string | null;
  }
}

export interface FanListExpiredParams {
  filter?: FanListExpiredParams.Filter;

  /**
   * Number of fans to return (1-50)
   */
  limit?: string | null;

  /**
   * Number of fans to skip
   */
  offset?: string | null;

  /**
   * Filter by fan type
   */
  type?: string | null;
}

export namespace FanListExpiredParams {
  export interface Filter {
    /**
     * Filter by minimum subscription duration (days)
     */
    duration?: string | null;

    /**
     * Filter by online status (1 for online)
     */
    online?: string | null;

    /**
     * Filter by minimum tips
     */
    tips?: string | null;

    /**
     * Filter by minimum total spent
     */
    total_spent?: string | null;
  }
}

export interface FanListLatestParams {
  /**
   * End date for filtering (required with start_date)
   */
  end_date?: string | null;

  /**
   * Number of fans to return (1-100)
   */
  limit?: string | null;

  /**
   * Number of fans to skip
   */
  offset?: string | null;

  /**
   * Start date for filtering (required with end_date)
   */
  start_date?: string | null;

  /**
   * Filter by type: total, renew, or new
   */
  type?: string | null;
}

export declare namespace Fans {
  export {
    type FanListActiveResponse as FanListActiveResponse,
    type FanListAllResponse as FanListAllResponse,
    type FanListExpiredResponse as FanListExpiredResponse,
    type FanListLatestResponse as FanListLatestResponse,
    type FanListActiveParams as FanListActiveParams,
    type FanListAllParams as FanListAllParams,
    type FanListExpiredParams as FanListExpiredParams,
    type FanListLatestParams as FanListLatestParams,
  };
}
