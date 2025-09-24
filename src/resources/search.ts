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
   * const response = await client.search.profiles({
   *   query: 'milf',
   * });
   * ```
   */
  profiles(query: SearchProfilesParams, options?: RequestOptions): APIPromise<SearchProfilesResponse> {
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
    next_page_url?: string;

    total_results?: number;
  }

  export interface Data {
    id?: number;

    about?: string;

    audios_count?: number;

    avatar_url?: string;

    browsable?: boolean;

    bundles?: string;

    created_at?: string;

    facebook?: string;

    fansly?: string;

    favorited_count?: number;

    favorites_count?: number;

    gender?: string;

    header_url?: string;

    instagram?: string;

    is_adult_content?: boolean;

    is_performer?: boolean;

    is_real_performer?: boolean;

    is_verified?: boolean;

    join_date?: string;

    last_seen_at?: string;

    location?: string;

    manyvids?: string;

    min_subscribe_price?: number;

    name?: string;

    onlyfans_id?: string;

    photos_count?: number;

    pornhub?: string;

    posts_count?: number;

    promotions?: string;

    stats_updated_at?: string;

    subscribe_price?: number;

    subscribers_count?: string;

    tiktok?: string;

    twitter?: string;

    updated_at?: string;

    username?: string;

    videos_count?: number;

    website?: string;

    wishlist?: string;
  }
}

export interface SearchProfilesParams {
  /**
   * Query for full text search in username, display name, bio
   */
  query: string;

  /**
   * The number of profiles to return. For each returned profile we charge your
   * account 1 credit. Default: `10`
   */
  limit?: string;

  /**
   * Location
   */
  location?: string;

  /**
   * Maximum subscribe price
   */
  max_subscribe_price?: string;

  /**
   * Minimum subscribe price
   */
  min_subscribe_price?: string;
}

export declare namespace Search {
  export {
    type SearchProfilesResponse as SearchProfilesResponse,
    type SearchProfilesParams as SearchProfilesParams,
  };
}
