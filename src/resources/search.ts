// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Full-text search for profiles with filters for pricing, free trials, location,
   * media count and more.
   *
   * @example
   * ```ts
   * const response = await client.search.profiles();
   * ```
   */
  profiles(
    query: SearchProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchProfilesResponse> {
    return this._client.get('/api/search', { query, ...options });
  }
}

export interface SearchProfilesResponse {
  _meta?: SearchProfilesResponse._Meta;

  _pagination?: SearchProfilesResponse._Pagination;

  data?: Array<SearchProfilesResponse.Data>;
}

export namespace SearchProfilesResponse {
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
    next_cursor?: string;

    next_page_url?: string;

    total_results?: number;
  }

  export interface Data {
    about?: string;

    audios_count?: number;

    avatar_url?: string;

    bundles?: string | null;

    facebook?: string | null;

    fansly?: string | null;

    favorited_count?: number;

    favorites_count?: number;

    header_url?: string;

    instagram?: string | null;

    is_adult_content?: boolean;

    is_performer?: boolean;

    is_real_performer?: boolean;

    is_verified?: boolean;

    join_date?: string;

    last_seen_at?: string | null;

    location?: string;

    manyvids?: string | null;

    min_subscribe_price?: number;

    name?: string;

    ofapi_gender?: string;

    ofapi_gender_confidence?: number;

    onlyfans_id?: number;

    photos_count?: number;

    pornhub?: string | null;

    posts_count?: number;

    promotions?: string | null;

    stats_updated_at?: string;

    subscribe_price?: number;

    subscribers_count?: string | null;

    tiktok?: string | null;

    twitter?: string | null;

    username?: string;

    videos_count?: number;

    website?: string;

    wishlist?: string | null;
  }
}

export interface SearchProfilesParams {
  /**
   * Cursor for pagination. Use the `next_cursor` from the previous response to get
   * the next page of results.
   */
  cursor?: string | null;

  filter?: SearchProfilesParams.Filter;

  /**
   * Filter by Instagram username.
   */
  instagram?: string;

  /**
   * The number of profiles to return. For each returned profile we charge your
   * account 1 credit. Default: `10`. Must be at least 1. Must not be greater
   * than 100.
   */
  limit?: number;

  /**
   * Filter by location.
   */
  location?: string;

  /**
   * Filter by maximum subscribe price. Must be at least 0.00.
   */
  max_subscribe_price?: number;

  /**
   * Filter by minimum subscribe price. Must be at least 0.00.
   */
  min_subscribe_price?: number;

  /**
   * Query for full text search in username, display name, bio. Must be at least 3
   * characters.
   */
  query?: string;

  /**
   * Field to sort by. ⭐️ Only available on the Pro and Enterprise plan.
   */
  sort?:
    | 'likes'
    | 'photos'
    | 'videos'
    | 'subscribers'
    | 'subscribe_price'
    | 'min_subscribe_price'
    | 'join_date'
    | 'last_seen';

  /**
   * Direction for sorting. `desc` - highest value first. `asc` - lowest value first.
   */
  sortDirection?: 'desc' | 'asc';

  /**
   * Filter by TikTok username.
   */
  tiktok?: string;

  /**
   * Filter by website.
   */
  website?: string;
}

export namespace SearchProfilesParams {
  export interface Filter {
    /**
     * Filter by gender (available: `female`, `male`, `trans`, `trans_ftm`
     * (Female-to-Male), `trans_mft` (Male-to-Female), `couple`). ⭐️ Only available on
     * the Pro and Enterprise plan.
     */
    gender?: 'female' | 'male' | 'trans' | 'trans_ftm' | 'trans_mtf' | 'couple';
  }
}

export declare namespace Search {
  export {
    type SearchProfilesResponse as SearchProfilesResponse,
    type SearchProfilesParams as SearchProfilesParams,
  };
}
