// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TrackingLinks extends APIResource {
  /**
   * Create a new Tracking Link for the account
   *
   * @example
   * ```ts
   * const trackingLink = await client.trackingLinks.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { name: 'Twitter bio' },
   * );
   * ```
   */
  create(
    account: string,
    body: TrackingLinkCreateParams,
    options?: RequestOptions,
  ): APIPromise<TrackingLinkCreateResponse> {
    return this._client.post(path`/api/${account}/tracking-links`, { body, ...options });
  }

  /**
   * List all tracking links for the account and revenue data
   *
   * @example
   * ```ts
   * const trackingLinks = await client.trackingLinks.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: TrackingLinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrackingLinkListResponse> {
    return this._client.get(path`/api/${account}/tracking-links`, { query, ...options });
  }

  /**
   * Delete a Tracking Link
   *
   * @example
   * ```ts
   * const trackingLink = await client.trackingLinks.delete(
   *   'tracking_link_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  delete(
    trackingLinkID: string,
    params: TrackingLinkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TrackingLinkDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/tracking-links/${trackingLinkID}`, options);
  }

  /**
   * Get list of spenders who made purchases through a Tracking Link
   *
   * @example
   * ```ts
   * const response = await client.trackingLinks.listSpenders(
   *   'tracking_link_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  listSpenders(
    trackingLinkID: string,
    params: TrackingLinkListSpendersParams,
    options?: RequestOptions,
  ): APIPromise<TrackingLinkListSpendersResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/tracking-links/${trackingLinkID}/spenders`, {
      query,
      ...options,
    });
  }

  /**
   * Get list of subscribers who joined through a Tracking Link
   *
   * @example
   * ```ts
   * const response = await client.trackingLinks.listSubscribers(
   *   'tracking_link_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX', limit: 10, offset: 0 },
   * );
   * ```
   */
  listSubscribers(
    trackingLinkID: string,
    params: TrackingLinkListSubscribersParams,
    options?: RequestOptions,
  ): APIPromise<TrackingLinkListSubscribersResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/tracking-links/${trackingLinkID}/subscribers`, {
      query,
      ...options,
    });
  }
}

export interface TrackingLinkCreateResponse {
  _meta?: TrackingLinkCreateResponse._Meta;

  data?: Array<TrackingLinkCreateResponse.Data>;
}

export namespace TrackingLinkCreateResponse {
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

    campaignCode?: number;

    campaignName?: string;

    countSubscribers?: number;

    countTransitions?: number;

    createdAt?: string;

    endDate?: string;
  }
}

export interface TrackingLinkListResponse {
  _meta?: TrackingLinkListResponse._Meta;

  _pagination?: TrackingLinkListResponse._Pagination;

  data?: TrackingLinkListResponse.Data;
}

export namespace TrackingLinkListResponse {
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

      campaignCode?: number;

      campaignName?: string;

      campaignUrl?: string;

      clicksCount?: number;

      createdAt?: string;

      endDate?: string;

      links?: List.Links;

      revenue?: List.Revenue;

      subscribersCount?: number;
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

        revenuePerClick?: number;

        revenuePerSubscriber?: number;

        spendersCount?: number;

        total?: number;
      }
    }
  }
}

export interface TrackingLinkDeleteResponse {
  _meta?: TrackingLinkDeleteResponse._Meta;

  data?: TrackingLinkDeleteResponse.Data;
}

export namespace TrackingLinkDeleteResponse {
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

export interface TrackingLinkListSpendersResponse {
  _meta?: TrackingLinkListSpendersResponse._Meta;

  data?: Array<TrackingLinkListSpendersResponse.Data>;
}

export namespace TrackingLinkListSpendersResponse {
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

export interface TrackingLinkListSubscribersResponse {
  _meta?: TrackingLinkListSubscribersResponse._Meta;

  data?: TrackingLinkListSubscribersResponse.Data;
}

export namespace TrackingLinkListSubscribersResponse {
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

    marker?: number;
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

      canReport?: boolean;

      canRestrict?: boolean;

      currentSubscribePrice?: string;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string;

      headerSize?: string;

      headerThumbs?: string;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      name?: string;

      notice?: string;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: string;

      subscribedByExpire?: string;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: string;

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
      export interface AvatarThumbs {
        c144?: string;

        c50?: string;
      }
    }
  }
}

export interface TrackingLinkCreateParams {
  /**
   * The name of the Tracking Link
   */
  name: string;
}

export interface TrackingLinkListParams {
  /**
   * The end date for Tracking Links. Keep empty to get all.
   */
  endDate?: string | null;

  /**
   * The number of tracking links to return. Default `3`
   */
  limit?: number | null;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number | null;

  /**
   * Sort the results. Default `desc`
   */
  sort?: 'desc' | 'asc' | null;

  /**
   * Sort by subscriber count (claims), or creation date
   */
  sortby?: 'claims' | 'created_date' | null;

  /**
   * The start date for Tracking Links. Keep empty to get all.
   */
  startDate?: string | null;

  /**
   * Wait for the revenue data to finish processing, instead of processing in the
   * background. **Will result in longer response times, use with caution**. Default
   * `false`
   */
  synchronous?: boolean | null;

  /**
   * Whether or not to include deleted tracking links in the response. Default
   * `false`
   */
  with_deleted?: boolean | null;
}

export interface TrackingLinkDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface TrackingLinkListSpendersParams {
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

export interface TrackingLinkListSubscribersParams {
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

export declare namespace TrackingLinks {
  export {
    type TrackingLinkCreateResponse as TrackingLinkCreateResponse,
    type TrackingLinkListResponse as TrackingLinkListResponse,
    type TrackingLinkDeleteResponse as TrackingLinkDeleteResponse,
    type TrackingLinkListSpendersResponse as TrackingLinkListSpendersResponse,
    type TrackingLinkListSubscribersResponse as TrackingLinkListSubscribersResponse,
    type TrackingLinkCreateParams as TrackingLinkCreateParams,
    type TrackingLinkListParams as TrackingLinkListParams,
    type TrackingLinkDeleteParams as TrackingLinkDeleteParams,
    type TrackingLinkListSpendersParams as TrackingLinkListSpendersParams,
    type TrackingLinkListSubscribersParams as TrackingLinkListSubscribersParams,
  };
}
