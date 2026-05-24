// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Stored extends APIResource {
  /**
   * List all shared Tracking Links from the OnlyFansAPI Cache. This is a free
   * endpoint that does not call the OnlyFans API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.stored.listSharedTrackingLinks(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  listSharedTrackingLinks(
    account: string,
    query: StoredListSharedTrackingLinksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoredListSharedTrackingLinksResponse> {
    return this._client.get(path`/api/${account}/stored/shared-tracking-links`, { query, ...options });
  }

  /**
   * List all shared Free Trial Links from the OnlyFansAPI Cache. This is a free
   * endpoint that does not call the OnlyFans API.
   *
   * @example
   * ```ts
   * const response = await client.stored.listSharedTrialLinks(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listSharedTrialLinks(
    account: string,
    query: StoredListSharedTrialLinksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoredListSharedTrialLinksResponse> {
    return this._client.get(path`/api/${account}/stored/shared-trial-links`, { query, ...options });
  }

  /**
   * List all stored tracking links from the OnlyFansAPI Cache. This is a free
   * endpoint that does not call the OnlyFans API.
   *
   * @example
   * ```ts
   * const response = await client.stored.listTrackingLinks(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listTrackingLinks(
    account: string,
    query: StoredListTrackingLinksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoredListTrackingLinksResponse> {
    return this._client.get(path`/api/${account}/stored/tracking-links`, { query, ...options });
  }

  /**
   * List all stored free trial links from the OnlyFansAPI Cache. This is a free
   * endpoint that does not call the OnlyFans API.
   *
   * @example
   * ```ts
   * const response = await client.stored.listTrialLinks(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listTrialLinks(
    account: string,
    query: StoredListTrialLinksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoredListTrialLinksResponse> {
    return this._client.get(path`/api/${account}/stored/trial-links`, { query, ...options });
  }
}

export interface StoredListSharedTrackingLinksResponse {
  _meta?: StoredListSharedTrackingLinksResponse._Meta;

  _pagination?: StoredListSharedTrackingLinksResponse._Pagination;

  data?: StoredListSharedTrackingLinksResponse.Data;
}

export namespace StoredListSharedTrackingLinksResponse {
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

  export interface _Pagination {
    next_page?: string | null;

    notice?: string | null;
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

      isDeleted?: boolean;

      owner?: List.Owner;

      subscribersCount?: number;

      tags?: Array<unknown>;
    }

    export namespace List {
      export interface Owner {
        id?: number;

        avatarThumbUrl?: string;

        name?: string;

        username?: string;
      }
    }
  }
}

export interface StoredListSharedTrialLinksResponse {
  _meta?: StoredListSharedTrialLinksResponse._Meta;

  _pagination?: StoredListSharedTrialLinksResponse._Pagination;

  data?: StoredListSharedTrialLinksResponse.Data;
}

export namespace StoredListSharedTrialLinksResponse {
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

  export interface _Pagination {
    next_page?: string | null;

    notice?: string | null;
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

      expiredAt?: string | null;

      isFinished?: boolean;

      owner?: List.Owner;

      subscribeCounts?: number;

      subscribeDays?: number;

      tags?: Array<unknown>;

      trialLinkName?: string;

      url?: string;
    }

    export namespace List {
      export interface Owner {
        id?: number;

        avatarThumbUrl?: string;

        name?: string;

        username?: string;
      }
    }
  }
}

export interface StoredListTrackingLinksResponse {
  _meta?: StoredListTrackingLinksResponse._Meta;

  _pagination?: StoredListTrackingLinksResponse._Pagination;

  data?: StoredListTrackingLinksResponse.Data;
}

export namespace StoredListTrackingLinksResponse {
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

      cost?: List.Cost;

      createdAt?: string;

      endDate?: string | null;

      links?: List.Links;

      revenue?: List.Revenue;

      subscribersCount?: number;

      tags?: Array<string>;
    }

    export namespace List {
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
}

export interface StoredListTrialLinksResponse {
  _meta?: StoredListTrialLinksResponse._Meta;

  _pagination?: StoredListTrialLinksResponse._Pagination;

  data?: StoredListTrialLinksResponse.Data;
}

export namespace StoredListTrialLinksResponse {
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

      cost?: List.Cost;

      createdAt?: string;

      expiredAt?: string | null;

      isFinished?: boolean;

      links?: List.Links;

      revenue?: List.Revenue;

      subscribeCounts?: number;

      subscribeDays?: number;

      tags?: Array<string>;

      trialLinkName?: string;

      url?: string;
    }

    export namespace List {
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

        revenuePerSubscriber?: number;

        spendersCount?: number;

        total?: number;
      }
    }
  }
}

export interface StoredListSharedTrackingLinksParams {
  /**
   * Search campaign name, owner username, or a pasted OnlyFans tracking link URL.
   */
  'filter[search]'?: string;

  /**
   * Filter by one or more tag names or slugs. Accepts CSV or repeated array values
   * (`filter[tags][]=...`) and matches any tag. Tag namespace is shared with owned
   * Tracking Links.
   */
  'filter[tags]'?: string;

  /**
   * The number of shared tracking links to return. Default `10`
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;
}

export interface StoredListSharedTrialLinksParams {
  /**
   * Search shared trial link name, URL, or owner username.
   */
  'filter[search]'?: string;

  /**
   * Filter by one or more tag names or slugs. Accepts CSV or repeated array values
   * (`filter[tags][]=...`) and matches any tag. Tag namespace is shared with owned
   * Free Trial Links.
   */
  'filter[tags]'?: string;

  /**
   * The number of shared trial links to return. Default `10`
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;
}

export interface StoredListTrackingLinksParams {
  /**
   * Include tracking links created by Smart Links. Default `false`
   */
  'filter[include_smart_links]'?: boolean;

  /**
   * Search campaign name, creator username, or a pasted OnlyFans tracking link URL.
   */
  'filter[search]'?: string;

  /**
   * Filter by one or more tag names or slugs. Accepts CSV or repeated array values
   * (`filter[tags][]=...`) and matches any tag.
   */
  'filter[tags]'?: string;

  /**
   * The number of tracking links to return. Default `10`
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;
}

export interface StoredListTrialLinksParams {
  /**
   * Include trial links created by Smart Links. Default `false`
   */
  'filter[include_smart_links]'?: boolean;

  /**
   * Search trial link name or URL.
   */
  'filter[search]'?: string;

  /**
   * Filter by one or more tag names or slugs. Accepts CSV or repeated array values
   * (`filter[tags][]=...`) and matches any tag.
   */
  'filter[tags]'?: string;

  /**
   * The number of trial links to return. Default `10`
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;
}

export declare namespace Stored {
  export {
    type StoredListSharedTrackingLinksResponse as StoredListSharedTrackingLinksResponse,
    type StoredListSharedTrialLinksResponse as StoredListSharedTrialLinksResponse,
    type StoredListTrackingLinksResponse as StoredListTrackingLinksResponse,
    type StoredListTrialLinksResponse as StoredListTrialLinksResponse,
    type StoredListSharedTrackingLinksParams as StoredListSharedTrackingLinksParams,
    type StoredListSharedTrialLinksParams as StoredListSharedTrialLinksParams,
    type StoredListTrackingLinksParams as StoredListTrackingLinksParams,
    type StoredListTrialLinksParams as StoredListTrialLinksParams,
  };
}
