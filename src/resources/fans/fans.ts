// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NotesAPI from './notes';
import {
  NoteClearNotesParams,
  NoteClearNotesResponse,
  NoteCreateEditNotesParams,
  NoteCreateEditNotesResponse,
  NoteGetNotesParams,
  NoteGetNotesResponse,
  Notes,
} from './notes';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryGenerateSummaryParams,
  SummaryGenerateSummaryResponse,
  SummaryGetSummaryParams,
  SummaryGetSummaryResponse,
} from './summary';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing OnlyFans fans (subscribers)
 */
export class Fans extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);

  /**
   * Get Subscription History for a given OnlyFans User ID. This can be useful, for
   * example, when the user's subscribed to your account for the first time.
   *
   * @example
   * ```ts
   * const response = await client.fans.getSubscriptionHistory(
   *   'user_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  getSubscriptionHistory(
    userID: string,
    params: FanGetSubscriptionHistoryParams,
    options?: RequestOptions,
  ): APIPromise<FanGetSubscriptionHistoryResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/fans/${userID}/subscriptions-history`, options);
  }

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

  /**
   * Get a list of top fans sorted by spending. Filterable by total, subscriptions,
   * tips, messages, posts, or streams.
   *
   * @example
   * ```ts
   * const response = await client.fans.listTop(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listTop(
    account: string,
    query: FanListTopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FanListTopResponse> {
    return this._client.get(path`/api/${account}/fans/top`, { query, ...options });
  }

  /**
   * Change the Fan's Custom Name shown in OnlyFans
   *
   * @example
   * ```ts
   * const response = await client.fans.setCustomName('fan_id', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   *   custom_name: '🐳Whale ($100+)',
   * });
   * ```
   */
  setCustomName(
    fanID: string,
    params: FanSetCustomNameParams,
    options?: RequestOptions,
  ): APIPromise<FanSetCustomNameResponse> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/fans/${fanID}/custom-name`, { body, ...options });
  }
}

export interface FanGetSubscriptionHistoryResponse {
  _meta?: FanGetSubscriptionHistoryResponse._Meta;

  data?: FanGetSubscriptionHistoryResponse.Data;
}

export namespace FanGetSubscriptionHistoryResponse {
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
      expireDate?: string;

      price?: number;

      subscribeDate?: string;
    }
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
    next_page?: string | null;
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

      currentSubscribePrice?: string | null;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

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

      subscribedByAutoprolong?: string | null;

      subscribedByData?: string | null;

      subscribedByExpire?: string | null;

      subscribedByExpireDate?: string | null;

      subscribedIsExpiredNow?: string | null;

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
        discountFinishedAt?: string | null;

        discountPercent?: number;

        discountPeriod?: number;

        discountStartedAt?: string | null;

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

        renewedAt?: string | null;

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

          cancelDate?: string | null;

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
    next_page?: string | null;
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

      currentSubscribePrice?: string | null;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

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

      subscribedByAutoprolong?: string | null;

      subscribedByData?: string | null;

      subscribedByExpire?: string | null;

      subscribedByExpireDate?: string | null;

      subscribedIsExpiredNow?: string | null;

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
        discountFinishedAt?: string | null;

        discountPercent?: number;

        discountPeriod?: number;

        discountStartedAt?: string | null;

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

        renewedAt?: string | null;

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

          cancelDate?: string | null;

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
    next_page?: string | null;
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

      subscribedOn?: string | null;

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

        lastActivity?: string;

        messagesSumm?: number;

        newPrice?: number;

        postsSumm?: number;

        price?: number;

        recommendations?: number;

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
    next_page?: string | null;
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

      currentSubscribePrice?: string | null;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

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

      subscribedByAutoprolong?: string | null;

      subscribedByData?: string | null;

      subscribedByExpire?: string | null;

      subscribedByExpireDate?: string | null;

      subscribedIsExpiredNow?: string | null;

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
        discountFinishedAt?: string | null;

        discountPercent?: number;

        discountPeriod?: number;

        discountStartedAt?: string | null;

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

        renewedAt?: string | null;

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

          cancelDate?: string | null;

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

export interface FanListTopResponse {
  _meta?: FanListTopResponse._Meta;

  data?: FanListTopResponse.Data;
}

export namespace FanListTopResponse {
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

      currentSubscribePrice?: string | null;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

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

      subscribedBy?: boolean;

      subscribedByAutoprolong?: string | null;

      subscribedByData?: string | null;

      subscribedByExpire?: string | null;

      subscribedByExpireDate?: string | null;

      subscribedIsExpiredNow?: string | null;

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

      export interface SubscribedOnData {
        discountFinishedAt?: string | null;

        discountPercent?: number;

        discountPeriod?: number;

        discountStartedAt?: string | null;

        duration?: string;

        expiredAt?: string;

        isMuted?: boolean;

        lastActivity?: string;

        messagesSumm?: number;

        newPrice?: number;

        postsSumm?: number;

        price?: number;

        recommendations?: number;

        regularPrice?: number;

        renewedAt?: string | null;

        status?: string;

        streamsSumm?: number;

        subscribeAt?: string;

        subscribePrice?: number;

        subscribesSumm?: number;

        tipsSumm?: number;

        totalSumm?: number;

        unsubscribeReason?: string;
      }
    }
  }
}

export interface FanSetCustomNameResponse {
  _meta?: FanSetCustomNameResponse._Meta;

  data?: FanSetCustomNameResponse.Data;
}

export namespace FanSetCustomNameResponse {
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

    avatar?: string;

    avatarThumbs?: Data.AvatarThumbs;

    canAddSubscriber?: boolean;

    canCommentStory?: boolean;

    canEarn?: boolean;

    canLookStory?: boolean;

    canPayInternal?: boolean;

    canReceiveChatMessage?: boolean;

    canReport?: boolean;

    canRestrict?: boolean;

    canTrialSend?: boolean;

    currentSubscribePrice?: string | null;

    displayName?: string;

    hasNotViewedStory?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    header?: string;

    headerSize?: Data.HeaderSize;

    headerThumbs?: Data.HeaderThumbs;

    hideChat?: boolean;

    isBlocked?: boolean;

    isPaywallRequired?: boolean;

    isPendingAutoprolong?: boolean;

    isPerformer?: boolean;

    isRealPerformer?: boolean;

    isRestricted?: boolean;

    isVerified?: boolean;

    lastSeen?: string;

    listsStates?: Array<Data.ListsState>;

    name?: string;

    notice?: string;

    subscribedBy?: string | null;

    subscribedByAutoprolong?: string | null;

    subscribedByData?: Data.SubscribedByData;

    subscribedByExpire?: string | null;

    subscribedByExpireDate?: string;

    subscribedIsExpiredNow?: boolean;

    subscribedOn?: string | null;

    subscribedOnData?: Data.SubscribedOnData;

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

      newPostsAfterExpireCount?: number;

      newPrice?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string | null;

      showPostsInFeed?: boolean;

      status?: string | null;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<unknown>;

      unsubscribeReason?: string;
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

export interface FanGetSubscriptionHistoryParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface FanListActiveParams {
  filter?: FanListActiveParams.Filter;

  /**
   * Number of fans to return (1-50). Must be at least 1. Must not be greater
   * than 20.
   */
  limit?: number;

  /**
   * Number of fans to skip. Must be at least 0.
   */
  offset?: number;

  /**
   * Search within fan name/username.
   */
  query?: string | null;

  /**
   * Filter by fan type.
   */
  type?: 'active' | 'expired' | 'all';
}

export namespace FanListActiveParams {
  export interface Filter {
    /**
     * Filter by minimum subscription duration in months. Must be at least 0.
     */
    duration?: number;

    /**
     * Filter by online status (`1` for online fans).
     */
    online?: 1 | 0 | null;

    /**
     * Filter by minimum tips. Must be at least 0.
     */
    tips?: number;

    /**
     * Filter by minimum amount total spent by a fan. Must be at least 0.
     */
    total_spent?: number;
  }
}

export interface FanListAllParams {
  filter?: FanListAllParams.Filter;

  /**
   * Number of fans to return (1-50). Must be at least 1. Must not be greater
   * than 20.
   */
  limit?: number;

  /**
   * Number of fans to skip. Must be at least 0.
   */
  offset?: number;

  /**
   * Search within fan name/username.
   */
  query?: string | null;

  /**
   * Filter by fan type.
   */
  type?: 'active' | 'expired' | 'all';
}

export namespace FanListAllParams {
  export interface Filter {
    /**
     * Filter by minimum subscription duration in months. Must be at least 0.
     */
    duration?: number;

    /**
     * Filter by online status (`1` for online fans).
     */
    online?: 1 | 0 | null;

    /**
     * Filter by minimum tips. Must be at least 0.
     */
    tips?: number;

    /**
     * Filter by minimum amount total spent by a fan. Must be at least 0.
     */
    total_spent?: number;
  }
}

export interface FanListExpiredParams {
  filter?: FanListExpiredParams.Filter;

  /**
   * Number of fans to return (1-50). Must be at least 1. Must not be greater
   * than 20.
   */
  limit?: number;

  /**
   * Number of fans to skip. Must be at least 0.
   */
  offset?: number;

  /**
   * Search within fan name/username.
   */
  query?: string | null;

  /**
   * Filter by fan type.
   */
  type?: 'active' | 'expired' | 'all';
}

export namespace FanListExpiredParams {
  export interface Filter {
    /**
     * Filter by minimum subscription duration in months. Must be at least 0.
     */
    duration?: number;

    /**
     * Filter by online status (`1` for online fans).
     */
    online?: 1 | 0 | null;

    /**
     * Filter by minimum tips. Must be at least 0.
     */
    tips?: number;

    /**
     * Filter by minimum amount total spent by a fan. Must be at least 0.
     */
    total_spent?: number;
  }
}

export interface FanListLatestParams {
  /**
   * End date for filtering (required with start_date). This field is required when
   * <code>start_date</code> is present.
   */
  end_date?: string | null;

  /**
   * Number of fans to return (1-50). Must be at least 1. Must not be greater
   * than 100.
   */
  limit?: number;

  /**
   * Number of fans to skip. Must be at least 0.
   */
  offset?: number;

  /**
   * Start date for filtering (required with end_date). This field is required when
   * <code>end_date</code> is present.
   */
  start_date?: string | null;

  /**
   * Filter by type: total, renew, or new.
   */
  type?: 'total' | 'renew' | 'new' | null;
}

export interface FanListTopParams {
  /**
   * Sort by: total (default), subscribes, tips, messages, post, streams.
   */
  by?: 'total' | 'subscribes' | 'tips' | 'messages' | 'post' | 'streams' | null;

  /**
   * End date for filtering (required with start_date). This field is required when
   * <code>start_date</code> is present.
   */
  end_date?: string | null;

  /**
   * Start date for filtering (required with end_date). This field is required when
   * <code>end_date</code> is present.
   */
  start_date?: string | null;
}

export interface FanSetCustomNameParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: New Custom Name for a Fan. Send empty string (`""`) or `null` to
   * clear out the custom name.
   */
  custom_name: string;
}

Fans.Notes = Notes;
Fans.Summary = Summary;

export declare namespace Fans {
  export {
    type FanGetSubscriptionHistoryResponse as FanGetSubscriptionHistoryResponse,
    type FanListActiveResponse as FanListActiveResponse,
    type FanListAllResponse as FanListAllResponse,
    type FanListExpiredResponse as FanListExpiredResponse,
    type FanListLatestResponse as FanListLatestResponse,
    type FanListTopResponse as FanListTopResponse,
    type FanSetCustomNameResponse as FanSetCustomNameResponse,
    type FanGetSubscriptionHistoryParams as FanGetSubscriptionHistoryParams,
    type FanListActiveParams as FanListActiveParams,
    type FanListAllParams as FanListAllParams,
    type FanListExpiredParams as FanListExpiredParams,
    type FanListLatestParams as FanListLatestParams,
    type FanListTopParams as FanListTopParams,
    type FanSetCustomNameParams as FanSetCustomNameParams,
  };

  export {
    Notes as Notes,
    type NoteClearNotesResponse as NoteClearNotesResponse,
    type NoteCreateEditNotesResponse as NoteCreateEditNotesResponse,
    type NoteGetNotesResponse as NoteGetNotesResponse,
    type NoteClearNotesParams as NoteClearNotesParams,
    type NoteCreateEditNotesParams as NoteCreateEditNotesParams,
    type NoteGetNotesParams as NoteGetNotesParams,
  };

  export {
    Summary as Summary,
    type SummaryGenerateSummaryResponse as SummaryGenerateSummaryResponse,
    type SummaryGetSummaryResponse as SummaryGetSummaryResponse,
    type SummaryGenerateSummaryParams as SummaryGenerateSummaryParams,
    type SummaryGetSummaryParams as SummaryGetSummaryParams,
  };
}
