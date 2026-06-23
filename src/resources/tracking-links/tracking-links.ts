// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from './tags';
import {
  TagAddParams,
  TagAddResponse,
  TagListParams,
  TagListResponse,
  TagRemoveParams,
  TagRemoveResponse,
  Tags,
} from './tags';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing tracking links
 */
export class TrackingLinks extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

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
   * Get individual Tracking Link details and it's revenue data
   *
   * @example
   * ```ts
   * const trackingLink = await client.trackingLinks.retrieve(
   *   'similique',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  retrieve(
    trackingLinkID: string,
    params: TrackingLinkRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TrackingLinkRetrieveResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/tracking-links/${trackingLinkID}`, options);
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
   *   'similique',
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
   * Get per-link time-to-profit cohort ARPS windows for a specific Tracking Link
   *
   * @example
   * ```ts
   * await client.trackingLinks.getCohortArps('ab', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  getCohortArps(
    trackingLinkID: string,
    params: TrackingLinkGetCohortArpsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/tracking-links/${trackingLinkID}/cohort-arps`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get dashboard-style summary plus daily and monthly metrics for a specific Tracking Link.
   *           <Callout title='Important information'>
   *             - `daily_metrics` returns **incremental per-day values**, not cumulative totals.
   *             - Cumulative totals are available in the `summary` section.
   *             - Historical daily data is only available from when we began recording daily link stats.
   *             - Daily data can only be tracked from the date the account was connected to OnlyFans API; earlier periods are not available.
   *           </Callout>
   *
   * @example
   * ```ts
   * const response = await client.trackingLinks.getStats(
   *   'fuga',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  getStats(
    trackingLinkID: string,
    params: TrackingLinkGetStatsParams,
    options?: RequestOptions,
  ): APIPromise<TrackingLinkGetStatsResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/tracking-links/${trackingLinkID}/stats`, {
      query,
      ...options,
    });
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
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     limit: 10,
   *     offset: 0,
   *   },
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

    endDate?: string | null;
  }
}

export interface TrackingLinkRetrieveResponse {
  _meta?: TrackingLinkRetrieveResponse._Meta;

  data?: TrackingLinkRetrieveResponse.Data;
}

export namespace TrackingLinkRetrieveResponse {
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
    id?: number;

    campaignCode?: number;

    campaignName?: string;

    campaignUrl?: string;

    clicksCount?: string | null;

    cost?: Data.Cost;

    createdAt?: string;

    endDate?: string | null;

    links?: Data.Links;

    revenue?: Data.Revenue;

    subscribersCount?: string | null;

    tags?: Array<string>;
  }

  export namespace Data {
    export interface Cost {
      clickSourceCount?: number;

      inputMode?: string | null;

      inputValue?: string | null;

      perClick?: string | null;

      perPromo?: string | null;

      perSub?: string | null;

      subscriberSourceCount?: number;
    }

    export interface Links {
      related?: Links.Related;
    }

    export namespace Links {
      export interface Related {
        spenders?: string;

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

      endDate?: string | null;

      links?: List.Links;

      revenue?: List.Revenue;

      subscribersCount?: number;

      tags?: Array<string>;
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

export interface TrackingLinkGetStatsResponse {
  _meta?: TrackingLinkGetStatsResponse._Meta;

  data?: TrackingLinkGetStatsResponse.Data;
}

export namespace TrackingLinkGetStatsResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    daily_metrics?: Array<Data.DailyMetric>;

    monthly_metrics?: Array<Data.MonthlyMetric>;

    summary?: Data.Summary;
  }

  export namespace Data {
    export interface DailyMetric {
      clicks?: number;

      revenue?: number;

      spenders?: number;

      subs?: number;

      timestamp?: string;
    }

    export interface MonthlyMetric {
      clicks?: number;

      revenue?: number;

      spenders?: number;

      subs?: number;

      timestamp?: string;
    }

    export interface Summary {
      clicks_total?: number;

      revenue_cached_at?: string;

      revenue_total?: number;

      spenders_total?: number;

      subs_total?: number;
    }
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

    revenue?: Data.Revenue;

    username?: string;
  }

  export namespace Data {
    export interface Revenue {
      calculated_at?: string;

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

      currentSubscribePrice?: string | null;

      displayName?: string;

      hasNotViewedStory?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string | null;

      headerSize?: string | null;

      headerThumbs?: string | null;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string | null;

      name?: string;

      notice?: string;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: string | null;

      subscribedByExpire?: string | null;

      subscribedByExpireDate?: string | null;

      subscribedIsExpiredNow?: string | null;

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

  /**
   * Array of tag names to add to the tracking link.
   */
  tags?: Array<string>;
}

export interface TrackingLinkRetrieveParams {
  /**
   * The Account ID
   */
  account: string;
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

export interface TrackingLinkGetCohortArpsParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Optional acquisition range end date
   */
  acquisition_end?: string;

  /**
   * Query param: Optional acquisition range start date
   */
  acquisition_start?: string;

  /**
   * Query param: Revenue basis. Defaults to `net`.
   */
  revenue_basis?: 'net' | 'gross';
}

export interface TrackingLinkGetStatsParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Optional stats range end date
   */
  date_end?: string;

  /**
   * Query param: Optional stats range start date
   */
  date_start?: string;
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

TrackingLinks.Tags = Tags;

export declare namespace TrackingLinks {
  export {
    type TrackingLinkCreateResponse as TrackingLinkCreateResponse,
    type TrackingLinkRetrieveResponse as TrackingLinkRetrieveResponse,
    type TrackingLinkListResponse as TrackingLinkListResponse,
    type TrackingLinkDeleteResponse as TrackingLinkDeleteResponse,
    type TrackingLinkGetStatsResponse as TrackingLinkGetStatsResponse,
    type TrackingLinkListSpendersResponse as TrackingLinkListSpendersResponse,
    type TrackingLinkListSubscribersResponse as TrackingLinkListSubscribersResponse,
    type TrackingLinkCreateParams as TrackingLinkCreateParams,
    type TrackingLinkRetrieveParams as TrackingLinkRetrieveParams,
    type TrackingLinkListParams as TrackingLinkListParams,
    type TrackingLinkDeleteParams as TrackingLinkDeleteParams,
    type TrackingLinkGetCohortArpsParams as TrackingLinkGetCohortArpsParams,
    type TrackingLinkGetStatsParams as TrackingLinkGetStatsParams,
    type TrackingLinkListSpendersParams as TrackingLinkListSpendersParams,
    type TrackingLinkListSubscribersParams as TrackingLinkListSubscribersParams,
  };

  export {
    Tags as Tags,
    type TagListResponse as TagListResponse,
    type TagAddResponse as TagAddResponse,
    type TagRemoveResponse as TagRemoveResponse,
    type TagListParams as TagListParams,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
  };
}
