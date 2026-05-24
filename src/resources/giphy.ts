// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Giphy extends APIResource {
  /**
   * Get trending GIFs from the OnlyFans Giphy proxy. Use the returned `id` as the
   * `giphyId` body param when sending a chat or mass message.
   *
   * @example
   * ```ts
   * const response = await client.giphy.listTrending(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  listTrending(
    account: string,
    query: GiphyListTrendingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GiphyListTrendingResponse> {
    return this._client.get(path`/api/${account}/giphy/trending`, { query, ...options });
  }

  /**
   * Search GIFs from the OnlyFans Giphy proxy. Use the returned `id` as the
   * `giphyId` body param when sending a chat or mass message.
   *
   * @example
   * ```ts
   * const response = await client.giphy.search(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { q: 'hello' },
   * );
   * ```
   */
  search(
    account: string,
    query: GiphySearchParams,
    options?: RequestOptions,
  ): APIPromise<GiphySearchResponse> {
    return this._client.get(path`/api/${account}/giphy/search`, { query, ...options });
  }
}

export interface GiphyListTrendingResponse {
  _meta?: GiphyListTrendingResponse._Meta;

  data?: Array<GiphyListTrendingResponse.Data>;
}

export namespace GiphyListTrendingResponse {
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
    id?: string;

    embed_url?: string;

    images?: Data.Images;

    rating?: string;

    slug?: string;

    title?: string;

    type?: string;

    url?: string;

    username?: string;
  }

  export namespace Data {
    export interface Images {
      fixed_height?: Images.FixedHeight;

      original?: Images.Original;
    }

    export namespace Images {
      export interface FixedHeight {
        height?: string;

        url?: string;

        width?: string;
      }

      export interface Original {
        height?: string;

        mp4?: string;

        url?: string;

        webp?: string;

        width?: string;
      }
    }
  }
}

export interface GiphySearchResponse {
  _meta?: GiphySearchResponse._Meta;

  data?: Array<GiphySearchResponse.Data>;
}

export namespace GiphySearchResponse {
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
    id?: string;

    embed_url?: string;

    images?: Data.Images;

    rating?: string;

    slug?: string;

    title?: string;

    type?: string;

    url?: string;

    username?: string;
  }

  export namespace Data {
    export interface Images {
      fixed_height?: Images.FixedHeight;

      original?: Images.Original;
    }

    export namespace Images {
      export interface FixedHeight {
        height?: string;

        url?: string;

        width?: string;
      }

      export interface Original {
        height?: string;

        mp4?: string;

        url?: string;

        webp?: string;

        width?: string;
      }
    }
  }
}

export interface GiphyListTrendingParams {
  /**
   * Number of GIFs to return (default = 10, max = 50)
   */
  limit?: number;

  /**
   * Number of GIFs to skip for pagination (default = 0)
   */
  offset?: number;
}

export interface GiphySearchParams {
  /**
   * The search query.
   */
  q: string;

  /**
   * Number of GIFs to return (default = 10, max = 50)
   */
  limit?: number;

  /**
   * Number of GIFs to skip for pagination (default = 0)
   */
  offset?: number;
}

export declare namespace Giphy {
  export {
    type GiphyListTrendingResponse as GiphyListTrendingResponse,
    type GiphySearchResponse as GiphySearchResponse,
    type GiphyListTrendingParams as GiphyListTrendingParams,
    type GiphySearchParams as GiphySearchParams,
  };
}
