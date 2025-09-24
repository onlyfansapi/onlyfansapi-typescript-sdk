// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Labels extends APIResource {
  /**
   * Create a new post label.
   *
   * @example
   * ```ts
   * const label = await client.posts.labels.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { name: 'My new label' },
   * );
   * ```
   */
  create(
    account: string,
    body: LabelCreateParams,
    options?: RequestOptions,
  ): APIPromise<LabelCreateResponse> {
    return this._client.post(path`/api/${account}/posts/labels`, { body, ...options });
  }

  /**
   * List the labels that you can use to organize your posts.
   *
   * @example
   * ```ts
   * const labels = await client.posts.labels.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: LabelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LabelListResponse> {
    return this._client.get(path`/api/${account}/posts/labels`, { query, ...options });
  }
}

export interface LabelCreateResponse {
  _meta?: LabelCreateResponse._Meta;

  data?: LabelCreateResponse.Data;
}

export namespace LabelCreateResponse {
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

    isClearInProgress?: boolean;

    name?: string;

    posts?: Array<unknown>;

    postsCount?: number;

    type?: string;
  }
}

export interface LabelListResponse {
  _meta?: LabelListResponse._Meta;

  data?: LabelListResponse.Data;
}

export namespace LabelListResponse {
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
    hashSort?: string;

    hasMore?: boolean;

    list?: Array<Data.List>;

    nextOffset?: number;

    order?: string;

    sort?: string;
  }

  export namespace Data {
    export interface List {
      id?: string;

      isClearInProgress?: boolean;

      name?: string;

      posts?: Array<unknown>;

      postsCount?: number;

      type?: string;
    }
  }
}

export interface LabelCreateParams {
  /**
   * The name of your new label
   */
  name: string;
}

export interface LabelListParams {
  /**
   * Number of labels to return (default = 10)
   */
  limit?: string;

  /**
   * Number of labels to skip for pagination
   */
  offset?: string;
}

export declare namespace Labels {
  export {
    type LabelCreateResponse as LabelCreateResponse,
    type LabelListResponse as LabelListResponse,
    type LabelCreateParams as LabelCreateParams,
    type LabelListParams as LabelListParams,
  };
}
