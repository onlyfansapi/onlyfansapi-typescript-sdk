// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing OnlyFans followings (people you're subscribed to)
 */
export class Following extends APIResource {
  /**
   * Get a paginated list of followings for an Account. By default OnlyFans returns
   * this list newest-first, sorted by `subscribedByData.subscribeAt` descending. The
   * expired list does not share this order, so do not assume it applies there. Pass
   * `sort` (optionally with `sortDirection`) to reorder the list — see the parameter
   * description for the caveat that OnlyFans persists the chosen order account-wide.
   * An empty page is not the end of the list: OnlyFans applies `offset` to the whole
   * following collection before filtering it down to the requested list, so a page
   * can come back empty while more results follow. Keep following
   * `_pagination.next_page` until it is `null` instead of stopping at the first
   * empty page.
   *
   * @example
   * ```ts
   * const response = await client.following.listActive(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listActive(
    account: string,
    query: FollowingListActiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FollowingListActiveResponse> {
    return this._client.get(path`/api/${account}/following/active`, { query, ...options });
  }

  /**
   * Get a paginated list of followings for an Account. By default OnlyFans returns
   * this list newest-first, sorted by `subscribedByData.subscribeAt` descending. The
   * expired list does not share this order, so do not assume it applies there. Pass
   * `sort` (optionally with `sortDirection`) to reorder the list — see the parameter
   * description for the caveat that OnlyFans persists the chosen order account-wide.
   * An empty page is not the end of the list: OnlyFans applies `offset` to the whole
   * following collection before filtering it down to the requested list, so a page
   * can come back empty while more results follow. Keep following
   * `_pagination.next_page` until it is `null` instead of stopping at the first
   * empty page.
   *
   * @example
   * ```ts
   * const response = await client.following.listAll(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listAll(
    account: string,
    query: FollowingListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FollowingListAllResponse> {
    return this._client.get(path`/api/${account}/following/all`, { query, ...options });
  }

  /**
   * Get a paginated list of expired followings for an Account. This list has no
   * order guarantee. Unlike the all and active lists, it is sorted by neither
   * `subscribedByData.subscribeAt` nor `subscribedByData.expiredAt`. To poll for new
   * expirations, page through the full list each cycle (`limit=50`, follow
   * `_pagination.next_page` until it is null) and diff it against your own store
   * using `subscribedByData.expiredAt`. Do NOT stop early at the first entry you
   * have already seen, as that can silently skip real expirations. An empty page is
   * not the end of the list either: OnlyFans applies `offset` to the whole following
   * collection and only then filters that window down to expired subscriptions, so
   * early pages can come back empty while hundreds of expired rows still follow.
   * Keep following `_pagination.next_page` until it is `null` instead of stopping at
   * the first empty page. Pass `sort=expire_date` (optionally with `sortDirection`)
   * to get a deterministic order instead — see the parameter description for the
   * caveat that OnlyFans persists the chosen order account-wide. Ordering by expiry
   * descending puts the still-active subscriptions first and moves the expired rows
   * to the tail of the collection, so prefer `sortDirection=asc` or
   * `sort=is_expired` for expired-first results; for that reason `sort=expire_date`
   * defaults to `asc` on this list when no `sortDirection` is given.
   *
   * @example
   * ```ts
   * const response = await client.following.listExpired(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listExpired(
    account: string,
    query: FollowingListExpiredParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FollowingListExpiredResponse> {
    return this._client.get(path`/api/${account}/following/expired`, { query, ...options });
  }
}

export interface FollowingListActiveResponse {
  _meta?: FollowingListActiveResponse._Meta;

  _pagination?: FollowingListActiveResponse._Pagination;

  data?: FollowingListActiveResponse.Data;
}

export namespace FollowingListActiveResponse {
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

      lastSeen?: string | null;

      listsStates?: Array<List.ListsState>;

      name?: string;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: List.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: boolean;

      subscribedOnData?: string | null;

      subscribedOnDuration?: string | null;

      subscribedOnExpiredNow?: string | null;

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

        renewedAt?: string;

        showPostsInFeed?: boolean;

        status?: string | null;

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
    }
  }
}

export interface FollowingListAllResponse {
  _meta?: FollowingListAllResponse._Meta;

  _pagination?: FollowingListAllResponse._Pagination;

  data?: FollowingListAllResponse.Data;
}

export namespace FollowingListAllResponse {
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

      lastSeen?: string | null;

      listsStates?: Array<List.ListsState>;

      name?: string;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: List.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: boolean;

      subscribedOnData?: string | null;

      subscribedOnDuration?: string | null;

      subscribedOnExpiredNow?: string | null;

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

        renewedAt?: string;

        showPostsInFeed?: boolean;

        status?: string | null;

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
    }
  }
}

export interface FollowingListExpiredResponse {
  _meta?: FollowingListExpiredResponse._Meta;

  _pagination?: FollowingListExpiredResponse._Pagination;

  data?: FollowingListExpiredResponse.Data;
}

export namespace FollowingListExpiredResponse {
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

      lastSeen?: string | null;

      listsStates?: Array<List.ListsState>;

      name?: string;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: List.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: boolean;

      subscribedOnData?: string | null;

      subscribedOnDuration?: string | null;

      subscribedOnExpiredNow?: string | null;

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

        renewedAt?: string;

        showPostsInFeed?: boolean;

        status?: string | null;

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
    }
  }
}

export interface FollowingListActiveParams {
  filter?: FollowingListActiveParams.Filter;

  /**
   * Number of followings to return (1-50). Must be at least 1. Must not be greater
   * than 50.
   */
  limit?: number;

  /**
   * Pagination offset. Must be at least 0.
   */
  offset?: number;

  /**
   * Search within following name/username.
   */
  query?: string | null;

  /**
   * Order the list by `last_activity` (the followed creator's last activity),
   * `expire_date` (subscription expiry), `subscribe_date` (subscription start) or
   * `is_expired` (expired first — OnlyFans only offers this one on the expired
   * list). Omit it to keep whichever order is currently stored for the account.
   * **Note:** OnlyFans persists this order account-wide, so it also applies to later
   * requests that omit `sort` and to the creator's own onlyfans.com UI, until it is
   * changed again. **Expired list:** OnlyFans applies `offset` to the whole
   * following collection and only then filters it down to expired subscriptions, so
   * ordering by expiry descending puts the still-active subscriptions first and
   * moves the expired rows to the tail of the collection — the first several hundred
   * offsets then come back empty. Use `sortDirection=asc` or `sort=is_expired` to
   * get expired-first results. For that reason `sort=expire_date` on the expired
   * list defaults to `asc` instead of `desc` when you do not pass `sortDirection`.
   * Whatever order you pick, an empty page is **not** the end of the list: keep
   * following `_pagination.next_page` until it is `null` rather than stopping at the
   * first empty page. This field is required when <code>sortDirection</code> is
   * present.
   */
  sort?: 'last_activity' | 'expire_date' | 'subscribe_date' | 'is_expired' | null;

  /**
   * Direction for `sort`: `desc` (default) or `asc`. Requires `sort` to be set.
   * Exception: `sort=expire_date` on the expired list defaults to `asc`, because
   * `desc` moves the expired rows to the tail of the underlying collection and
   * leaves the early pages empty. Passing `sortDirection` explicitly always wins.
   */
  sortDirection?: 'asc' | 'desc' | null;
}

export namespace FollowingListActiveParams {
  export interface Filter {
    /**
     * Filter by online status (1 for online, 0 for offline, null for all).
     */
    online?: 1 | 0 | null;

    /**
     * Filter by paid status (1 for paid, 0 for free, null for all).
     */
    paid?: 1 | 0 | null;
  }
}

export interface FollowingListAllParams {
  filter?: FollowingListAllParams.Filter;

  /**
   * Number of followings to return (1-50). Must be at least 1. Must not be greater
   * than 50.
   */
  limit?: number;

  /**
   * Pagination offset. Must be at least 0.
   */
  offset?: number;

  /**
   * Search within following name/username.
   */
  query?: string | null;

  /**
   * Order the list by `last_activity` (the followed creator's last activity),
   * `expire_date` (subscription expiry), `subscribe_date` (subscription start) or
   * `is_expired` (expired first — OnlyFans only offers this one on the expired
   * list). Omit it to keep whichever order is currently stored for the account.
   * **Note:** OnlyFans persists this order account-wide, so it also applies to later
   * requests that omit `sort` and to the creator's own onlyfans.com UI, until it is
   * changed again. **Expired list:** OnlyFans applies `offset` to the whole
   * following collection and only then filters it down to expired subscriptions, so
   * ordering by expiry descending puts the still-active subscriptions first and
   * moves the expired rows to the tail of the collection — the first several hundred
   * offsets then come back empty. Use `sortDirection=asc` or `sort=is_expired` to
   * get expired-first results. For that reason `sort=expire_date` on the expired
   * list defaults to `asc` instead of `desc` when you do not pass `sortDirection`.
   * Whatever order you pick, an empty page is **not** the end of the list: keep
   * following `_pagination.next_page` until it is `null` rather than stopping at the
   * first empty page. This field is required when <code>sortDirection</code> is
   * present.
   */
  sort?: 'last_activity' | 'expire_date' | 'subscribe_date' | 'is_expired' | null;

  /**
   * Direction for `sort`: `desc` (default) or `asc`. Requires `sort` to be set.
   * Exception: `sort=expire_date` on the expired list defaults to `asc`, because
   * `desc` moves the expired rows to the tail of the underlying collection and
   * leaves the early pages empty. Passing `sortDirection` explicitly always wins.
   */
  sortDirection?: 'asc' | 'desc' | null;
}

export namespace FollowingListAllParams {
  export interface Filter {
    /**
     * Filter by online status (1 for online, 0 for offline, null for all).
     */
    online?: 1 | 0 | null;

    /**
     * Filter by paid status (1 for paid, 0 for free, null for all).
     */
    paid?: 1 | 0 | null;
  }
}

export interface FollowingListExpiredParams {
  filter?: FollowingListExpiredParams.Filter;

  /**
   * Number of followings to return (1-50). Must be at least 1. Must not be greater
   * than 50.
   */
  limit?: number;

  /**
   * Pagination offset. Must be at least 0.
   */
  offset?: number;

  /**
   * Search within following name/username.
   */
  query?: string | null;

  /**
   * Order the list by `last_activity` (the followed creator's last activity),
   * `expire_date` (subscription expiry), `subscribe_date` (subscription start) or
   * `is_expired` (expired first — OnlyFans only offers this one on the expired
   * list). Omit it to keep whichever order is currently stored for the account.
   * **Note:** OnlyFans persists this order account-wide, so it also applies to later
   * requests that omit `sort` and to the creator's own onlyfans.com UI, until it is
   * changed again. **Expired list:** OnlyFans applies `offset` to the whole
   * following collection and only then filters it down to expired subscriptions, so
   * ordering by expiry descending puts the still-active subscriptions first and
   * moves the expired rows to the tail of the collection — the first several hundred
   * offsets then come back empty. Use `sortDirection=asc` or `sort=is_expired` to
   * get expired-first results. For that reason `sort=expire_date` on the expired
   * list defaults to `asc` instead of `desc` when you do not pass `sortDirection`.
   * Whatever order you pick, an empty page is **not** the end of the list: keep
   * following `_pagination.next_page` until it is `null` rather than stopping at the
   * first empty page. This field is required when <code>sortDirection</code> is
   * present.
   */
  sort?: 'last_activity' | 'expire_date' | 'subscribe_date' | 'is_expired' | null;

  /**
   * Direction for `sort`: `desc` (default) or `asc`. Requires `sort` to be set.
   * Exception: `sort=expire_date` on the expired list defaults to `asc`, because
   * `desc` moves the expired rows to the tail of the underlying collection and
   * leaves the early pages empty. Passing `sortDirection` explicitly always wins.
   */
  sortDirection?: 'asc' | 'desc' | null;
}

export namespace FollowingListExpiredParams {
  export interface Filter {
    /**
     * Filter by online status (1 for online, 0 for offline, null for all).
     */
    online?: 1 | 0 | null;

    /**
     * Filter by paid status (1 for paid, 0 for free, null for all).
     */
    paid?: 1 | 0 | null;
  }
}

export declare namespace Following {
  export {
    type FollowingListActiveResponse as FollowingListActiveResponse,
    type FollowingListAllResponse as FollowingListAllResponse,
    type FollowingListExpiredResponse as FollowingListExpiredResponse,
    type FollowingListActiveParams as FollowingListActiveParams,
    type FollowingListAllParams as FollowingListAllParams,
    type FollowingListExpiredParams as FollowingListExpiredParams,
  };
}
