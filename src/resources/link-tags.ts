// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * APIs for managing tags on free trial links, tracking links, and Smart Links
 */
export class LinkTags extends APIResource {
  /**
   * Get all existing tags that have been used on free trial links, tracking links,
   * and/or Smart Links for this account. This is a free endpoint.
   *
   * @example
   * ```ts
   * const linkTags = await client.linkTags.list();
   * ```
   */
  list(
    query: LinkTagListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkTagListResponse> {
    return this._client.get('/api/link-tags', { query, ...options });
  }
}

export interface LinkTagListResponse {
  _meta?: LinkTagListResponse._Meta;

  data?: LinkTagListResponse.Data;
}

export namespace LinkTagListResponse {
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

      remaining_day?: string | null;

      remaining_minute?: number;
    }
  }

  export interface Data {
    tags?: Array<string>;
  }
}

export interface LinkTagListParams {
  /**
   * Filter by link type. If not provided, returns tags for all types.
   */
  type?: 'trial_links' | 'tracking_links' | 'smart_links';
}

export declare namespace LinkTags {
  export { type LinkTagListResponse as LinkTagListResponse, type LinkTagListParams as LinkTagListParams };
}
