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
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for Tracking Links (campaigns) that other OF creators have shared with this account. Revenue, cost, and spender data are not available for shared campaigns.
 */
export class SharedTrackingLinks extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * List all Tracking Links (campaigns) shared with the account by other OF
   * creators. Calls OnlyFans live and syncs to our cache.
   *
   * @example
   * ```ts
   * const sharedTrackingLinks =
   *   await client.sharedTrackingLinks.list(
   *     'acct_XXXXXXXXXXXXXXX',
   *   );
   * ```
   */
  list(
    account: string,
    query: SharedTrackingLinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SharedTrackingLinkListResponse> {
    return this._client.get(path`/api/${account}/shared-tracking-links`, { query, ...options });
  }

  /**
   * Revoke the account's access to a shared Tracking Link (campaign). Calls OnlyFans
   * `DELETE /campaigns/share-access`, then removes the local cache row. The owner
   * keeps the link.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sharedTrackingLinks.revokeAccess(123, {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *   });
   * ```
   */
  revokeAccess(
    sharedTrackingLinkID: number,
    params: SharedTrackingLinkRevokeAccessParams,
    options?: RequestOptions,
  ): APIPromise<SharedTrackingLinkRevokeAccessResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/shared-tracking-links/${sharedTrackingLinkID}`, options);
  }
}

export interface SharedTrackingLinkListResponse {
  _meta?: SharedTrackingLinkListResponse._Meta;

  _pagination?: SharedTrackingLinkListResponse._Pagination;

  data?: SharedTrackingLinkListResponse.Data;
}

export namespace SharedTrackingLinkListResponse {
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

export interface SharedTrackingLinkRevokeAccessResponse {
  _meta?: SharedTrackingLinkRevokeAccessResponse._Meta;

  data?: SharedTrackingLinkRevokeAccessResponse.Data;
}

export namespace SharedTrackingLinkRevokeAccessResponse {
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
    success?: boolean;
  }
}

export interface SharedTrackingLinkListParams {
  /**
   * The number of shared tracking links to return. Default `10`
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;

  /**
   * Wait for the database sync to finish, instead of running it in the background.
   * **Will result in longer response times, use with caution**. Default `false`
   */
  synchronous?: boolean | null;
}

export interface SharedTrackingLinkRevokeAccessParams {
  /**
   * The Account ID
   */
  account: string;
}

SharedTrackingLinks.Tags = Tags;

export declare namespace SharedTrackingLinks {
  export {
    type SharedTrackingLinkListResponse as SharedTrackingLinkListResponse,
    type SharedTrackingLinkRevokeAccessResponse as SharedTrackingLinkRevokeAccessResponse,
    type SharedTrackingLinkListParams as SharedTrackingLinkListParams,
    type SharedTrackingLinkRevokeAccessParams as SharedTrackingLinkRevokeAccessParams,
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
