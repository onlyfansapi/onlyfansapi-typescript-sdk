// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for Tracking Links (campaigns) that other OF creators have shared with this account. Revenue, cost, and spender data are not available for shared campaigns.
 */
export class Tags extends APIResource {
  /**
   * Get tags for a specific shared Tracking Link. Tag namespace is shared with owned
   * Tracking Links. This is a free endpoint.
   *
   * @example
   * ```ts
   * const tags = await client.sharedTrackingLinks.tags.list(
   *   123,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  list(
    sharedTrackingLinkID: number,
    params: TagListParams,
    options?: RequestOptions,
  ): APIPromise<TagListResponse> {
    const { account } = params;
    return this._client.get(
      path`/api/${account}/shared-tracking-links/${sharedTrackingLinkID}/tags`,
      options,
    );
  }

  /**
   * Add tags to a shared Tracking Link. Existing tags are preserved. Tag namespace
   * is shared with owned Tracking Links. This is a free endpoint.
   *
   * @example
   * ```ts
   * const response = await client.sharedTrackingLinks.tags.add(
   *   123,
   *   { account: 'acct_XXXXXXXXXXXXXXX', tags: ['string'] },
   * );
   * ```
   */
  add(
    sharedTrackingLinkID: number,
    params: TagAddParams,
    options?: RequestOptions,
  ): APIPromise<TagAddResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/shared-tracking-links/${sharedTrackingLinkID}/tags`, {
      body,
      ...options,
    });
  }

  /**
   * Remove tags from a shared Tracking Link. Tag namespace is shared with owned
   * Tracking Links. This is a free endpoint.
   *
   * @example
   * ```ts
   * const tag = await client.sharedTrackingLinks.tags.remove(
   *   123,
   *   { account: 'acct_XXXXXXXXXXXXXXX', tags: ['string'] },
   * );
   * ```
   */
  remove(
    sharedTrackingLinkID: number,
    params: TagRemoveParams,
    options?: RequestOptions,
  ): APIPromise<TagRemoveResponse> {
    const { account, ...body } = params;
    return this._client.delete(path`/api/${account}/shared-tracking-links/${sharedTrackingLinkID}/tags`, {
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

      notice?: string;

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

      notice?: string;

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

      notice?: string;

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
   * Body param: Array of tag names to add to the shared tracking link.
   */
  tags: Array<string>;
}

export interface TagRemoveParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Array of tag names to remove from the shared tracking link.
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
