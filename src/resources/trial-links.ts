// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing Free Trial Links
 */
export class TrialLinks extends APIResource {
  /**
   * Create a new free trial link for the account
   *
   * @example
   * ```ts
   * const trialLink = await client.trialLinks.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   {
   *     duration: 7,
   *     offerExpiration: 7,
   *     offerLimit: 7,
   *   },
   * );
   * ```
   */
  create(
    account: string,
    body: TrialLinkCreateParams,
    options?: RequestOptions,
  ): APIPromise<TrialLinkCreateResponse> {
    return this._client.post(path`/api/${account}/trial-links`, { body, ...options });
  }

  /**
   * List all free trial links for the account, including the details and statistics
   *
   * @example
   * ```ts
   * const trialLinks = await client.trialLinks.list(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { limit: 10, offset: 0 },
   * );
   * ```
   */
  list(
    account: string,
    query: TrialLinkListParams,
    options?: RequestOptions,
  ): APIPromise<TrialLinkListResponse> {
    return this._client.get(path`/api/${account}/trial-links`, { query, ...options });
  }

  /**
   * Delete a free trial link by its ID
   *
   * @example
   * ```ts
   * const trialLink = await client.trialLinks.delete(
   *   123456789,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  delete(
    trialLinkID: number,
    params: TrialLinkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TrialLinkDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/trial-links/${trialLinkID}`, options);
  }

  /**
   * Only available if we already scraped subscribers and calculated revenue per fan
   *
   * @example
   * ```ts
   * const response = await client.trialLinks.listSpenders(
   *   'trial_link_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  listSpenders(
    trialLinkID: string,
    params: TrialLinkListSpendersParams,
    options?: RequestOptions,
  ): APIPromise<TrialLinkListSpendersResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/trial-links/${trialLinkID}/spenders`, { query, ...options });
  }

  /**
   * Get list of subscribers who joined through a Free Trial Link
   *
   * @example
   * ```ts
   * const response = await client.trialLinks.listSubscribers(
   *   'excepturi',
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     limit: 10,
   *     offset: 0,
   *   },
   * );
   * ```
   */
  listSubscribers(
    trialLinkID: string,
    params: TrialLinkListSubscribersParams,
    options?: RequestOptions,
  ): APIPromise<TrialLinkListSubscribersResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/trial-links/${trialLinkID}/subscribers`, {
      query,
      ...options,
    });
  }
}

export interface TrialLinkCreateResponse {
  _meta?: TrialLinkCreateResponse._Meta;

  _pagination?: TrialLinkCreateResponse._Pagination;

  data?: TrialLinkCreateResponse.Data;
}

export namespace TrialLinkCreateResponse {
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
    id?: number;

    claimCounts?: number;

    createdAt?: string;

    expiredAt?: string;

    isFinished?: boolean;

    subscribeCounts?: number;

    subscribeDays?: number;

    trialLinkName?: string;

    url?: string;
  }
}

export interface TrialLinkListResponse {
  _meta?: TrialLinkListResponse._Meta;

  _pagination?: TrialLinkListResponse._Pagination;

  data?: TrialLinkListResponse.Data;
}

export namespace TrialLinkListResponse {
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

      claimCounts?: number;

      clicksCounts?: number;

      createdAt?: string;

      expiredAt?: string;

      isFinished?: boolean;

      links?: List.Links;

      revenue?: List.Revenue;

      subscribeCounts?: number;

      subscribeDays?: number;

      trialLinkName?: string;

      url?: string;
    }

    export namespace List {
      export interface Links {
        related?: Links.Related;
      }

      export namespace Links {
        export interface Related {
          subscribers?: string;
        }
      }

      export interface Revenue {
        calculatedAt?: string;

        isLoading?: boolean;

        revenuePerSubscriber?: number;

        spendersCount?: number;

        total?: number;
      }
    }
  }
}

export interface TrialLinkDeleteResponse {
  _meta?: TrialLinkDeleteResponse._Meta;

  data?: TrialLinkDeleteResponse.Data;
}

export namespace TrialLinkDeleteResponse {
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

export interface TrialLinkListSpendersResponse {
  _meta?: TrialLinkListSpendersResponse._Meta;

  data?: Array<TrialLinkListSpendersResponse.Data>;
}

export namespace TrialLinkListSpendersResponse {
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
    onlyfans_id?: string;

    onlyfans_user_data?: Data.OnlyfansUserData;

    revenue?: Data.Revenue;

    username?: string;
  }

  export namespace Data {
    export interface OnlyfansUserData {
      id?: number;

      avatar?: string;

      avatarThumbs?: string;

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

      headerSize?: string;

      headerThumbs?: string;

      hideChat?: boolean;

      isBlocked?: boolean;

      isPendingAutoprolong?: boolean;

      isPerformer?: boolean;

      isRealPerformer?: boolean;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      listsStates?: Array<OnlyfansUserData.ListsState>;

      name?: string;

      notice?: string;

      promoOffers?: Array<OnlyfansUserData.PromoOffer>;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: OnlyfansUserData.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: string;

      subscribedOnData?: OnlyfansUserData.SubscribedOnData;

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

    export namespace OnlyfansUserData {
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
    }

    export interface Revenue {
      messages?: number;

      posts?: number;

      streams?: number;

      subscriptions?: number;

      tips?: number;

      total?: number;
    }
  }
}

export interface TrialLinkListSubscribersResponse {
  _meta?: TrialLinkListSubscribersResponse._Meta;

  data?: TrialLinkListSubscribersResponse.Data;
}

export namespace TrialLinkListSubscribersResponse {
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

      isPendingAutoprolong?: boolean;

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

      subscribedByAutoprolong?: boolean;

      subscribedByData?: List.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: boolean;

      subscribedOnData?: List.SubscribedOnData;

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

      export interface PromoOffer {
        id?: number;

        createdAt?: string;

        expiredAt?: string;

        finishedAt?: string;

        subscribeDays?: number;

        subscriberId?: string;

        userId?: string;
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

export interface TrialLinkCreateParams {
  /**
   * The duration of the free trial **in days**. Must be **1**, **3**, **7**, **14**,
   * **30** (1 month), **90** (3 months), **180** (6 months), or **360** (12 months).
   */
  duration: 1 | 3 | 7 | 14 | 30 | 90 | 180 | 360;

  /**
   * The trial link expiration **in days (from now)**. Must either be **0** (to never
   * expire), or a number between **1** and **30**.
   */
  offerExpiration: number;

  /**
   * How many people can use this offer. Must either be **0** (for no limit), or a
   * number between **1**-**10**, **50**, or **100**.
   */
  offerLimit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 50 | 100;

  /**
   * The name of the trail link (optional). Cannot be longer than 64 characters.
   */
  name?: string | null;
}

export interface TrialLinkListParams {
  /**
   * The number of trial links to return. Default `10`
   */
  limit: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset: number;

  /**
   * Sort the results by a field. Default `create_date`
   */
  field?: 'create_date' | 'expire_date' | 'subscribe_counts' | 'subscribe_days' | 'claims_count' | null;

  /**
   * Sort the results. Default `desc`
   */
  sort?: 'desc' | 'asc' | null;

  /**
   * Wait for the revenue data to finish processing, instead of processing in the
   * background. **Will result in longer response times, use with caution**. Default
   * `false`
   */
  synchronous?: boolean | null;
}

export interface TrialLinkDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface TrialLinkListSpendersParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: The number of spenders to return per page. Default `50`.
   */
  limit?: number;

  /**
   * Query param: Minimal spend of a fan. Default `1`. Must be at least 1.
   */
  minSpend?: number;

  /**
   * Query param: The offset used for pagination. Default `0`.
   */
  offset?: number;
}

export interface TrialLinkListSubscribersParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: The number of subscribers to return per page. Default `10`
   */
  limit: number;

  /**
   * Query param: The offset used for pagination. Default `0`
   */
  offset: number;
}

export declare namespace TrialLinks {
  export {
    type TrialLinkCreateResponse as TrialLinkCreateResponse,
    type TrialLinkListResponse as TrialLinkListResponse,
    type TrialLinkDeleteResponse as TrialLinkDeleteResponse,
    type TrialLinkListSpendersResponse as TrialLinkListSpendersResponse,
    type TrialLinkListSubscribersResponse as TrialLinkListSubscribersResponse,
    type TrialLinkCreateParams as TrialLinkCreateParams,
    type TrialLinkListParams as TrialLinkListParams,
    type TrialLinkDeleteParams as TrialLinkDeleteParams,
    type TrialLinkListSpendersParams as TrialLinkListSpendersParams,
    type TrialLinkListSubscribersParams as TrialLinkListSubscribersParams,
  };
}
