// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing tracking links
 */
export class Tags extends APIResource {
  /**
   * Get tags for a specific tracking link. This is a free endpoint.
   *
   * @example
   * ```ts
   * const tags = await client.trackingLinks.tags.list(
   *   123456789,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  list(trackingLinkID: number, params: TagListParams, options?: RequestOptions): APIPromise<TagListResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/tracking-links/${trackingLinkID}/tags`, options);
  }

  /**
   * Add tags to a specific tracking link. Existing tags are preserved. This is a
   * free endpoint.
   *
   * @example
   * ```ts
   * const response = await client.trackingLinks.tags.add(
   *   123456789,
   *   { account: 'acct_XXXXXXXXXXXXXXX', tags: ['string'] },
   * );
   * ```
   */
  add(trackingLinkID: number, params: TagAddParams, options?: RequestOptions): APIPromise<TagAddResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/tracking-links/${trackingLinkID}/tags`, {
      body,
      ...options,
    });
  }

  /**
   * Remove tags from a specific tracking link. This is a free endpoint.
   *
   * @example
   * ```ts
   * const tag = await client.trackingLinks.tags.remove(
   *   123456789,
   *   { account: 'acct_XXXXXXXXXXXXXXX', tags: ['string'] },
   * );
   * ```
   */
  remove(
    trackingLinkID: number,
    params: TagRemoveParams,
    options?: RequestOptions,
  ): APIPromise<TagRemoveResponse> {
    const { account, ...body } = params;
    return this._client.delete(path`/api/${account}/tracking-links/${trackingLinkID}/tags`, {
      body,
      ...options,
    });
  }
}

export interface TagListResponse {
  _meta?: TagListResponse._Meta;

  data?: TagListResponse.Data;
}

export namespace TagListResponse {
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

export interface TagAddResponse {
  _meta?: TagAddResponse._Meta;

  data?: TagAddResponse.Data;
}

export namespace TagAddResponse {
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

export interface TagRemoveResponse {
  _meta?: TagRemoveResponse._Meta;

  data?: TagRemoveResponse.Data;
}

export namespace TagRemoveResponse {
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

export interface TagListParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface TagAddParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Array of tag names to add to the tracking link.
   */
  tags: Array<string>;
}

export interface TagRemoveParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Array of tag names to remove from the tracking link.
   */
  tags: Array<string>;
}

export declare namespace Tags {
  export {
    type TagListResponse as TagListResponse,
    type TagAddResponse as TagAddResponse,
    type TagRemoveResponse as TagRemoveResponse,
    type TagListParams as TagListParams,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
  };
}
