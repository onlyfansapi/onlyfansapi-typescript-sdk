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
  filter?: StoredListSharedTrackingLinksParams.Filter;

  /**
   * The number of shared tracking links to return. Default `10`. Must be at least 1.
   * Must not be greater than 1000.
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`. Must be at least 0.
   */
  offset?: number;
}

export namespace StoredListSharedTrackingLinksParams {
  export interface Filter {
    /**
     * Must not be greater than 255 characters.
     */
    search?: string | null;

    /**
     * Must not be greater than 50 characters.
     */
    tags?: Array<string>;
  }
}

export interface StoredListSharedTrialLinksParams {
  filter?: StoredListSharedTrialLinksParams.Filter;

  /**
   * The number of shared trial links to return. Default `10`. Must be at least 1.
   * Must not be greater than 1000.
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`. Must be at least 0.
   */
  offset?: number;
}

export namespace StoredListSharedTrialLinksParams {
  export interface Filter {
    /**
     * Must not be greater than 255 characters.
     */
    search?: string | null;

    /**
     * Must not be greater than 50 characters.
     */
    tags?: Array<string>;
  }
}

export interface StoredListTrackingLinksParams {
  filter?: StoredListTrackingLinksParams.Filter;

  /**
   * The number of tracking links to return. Default `10`. Must be at least 1. Must
   * not be greater than 1000.
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`. Must be at least 0.
   */
  offset?: number;
}

export namespace StoredListTrackingLinksParams {
  export interface Filter {
    include_smart_links?: boolean;

    /**
     * Must not be greater than 255 characters.
     */
    search?: string | null;

    /**
     * Must not be greater than 50 characters.
     */
    tags?: Array<string>;
  }
}

export interface StoredListTrialLinksParams {
  filter?: StoredListTrialLinksParams.Filter;

  /**
   * The number of trial links to return. Default `10`. Must be at least 1. Must not
   * be greater than 1000.
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`. Must be at least 0.
   */
  offset?: number;
}

export namespace StoredListTrialLinksParams {
  export interface Filter {
    include_smart_links?: boolean;

    /**
     * Must not be greater than 255 characters.
     */
    search?: string | null;

    /**
     * Must not be greater than 50 characters.
     */
    tags?: Array<string>;
  }
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
