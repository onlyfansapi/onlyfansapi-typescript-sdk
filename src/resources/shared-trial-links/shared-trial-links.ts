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
 * APIs for Free Trial Links that other OF creators have shared with this account. Revenue, cost, and spender data are not available for shared links.
 */
export class SharedTrialLinks extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * List all Free Trial Links shared with the account by other OF creators. Calls
   * OnlyFans live and syncs to our cache.
   *
   * @example
   * ```ts
   * const sharedTrialLinks = await client.sharedTrialLinks.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: SharedTrialLinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SharedTrialLinkListResponse> {
    return this._client.get(path`/api/${account}/shared-trial-links`, { query, ...options });
  }

  /**
   * Revoke the account's access to a shared Free Trial Link. Calls OnlyFans
   * `DELETE /trials/share-access`, then removes the local cache row. The owner keeps
   * the link.
   *
   * @example
   * ```ts
   * const response = await client.sharedTrialLinks.revokeAccess(
   *   123,
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  revokeAccess(
    sharedTrialLinkID: number,
    params: SharedTrialLinkRevokeAccessParams,
    options?: RequestOptions,
  ): APIPromise<SharedTrialLinkRevokeAccessResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/shared-trial-links/${sharedTrialLinkID}`, options);
  }
}

export interface SharedTrialLinkListResponse {
  _meta?: SharedTrialLinkListResponse._Meta;

  _pagination?: SharedTrialLinkListResponse._Pagination;

  data?: SharedTrialLinkListResponse.Data;
}

export namespace SharedTrialLinkListResponse {
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

export interface SharedTrialLinkRevokeAccessResponse {
  _meta?: SharedTrialLinkRevokeAccessResponse._Meta;

  data?: SharedTrialLinkRevokeAccessResponse.Data;
}

export namespace SharedTrialLinkRevokeAccessResponse {
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

export interface SharedTrialLinkListParams {
  /**
   * The number of shared trial links to return. Default `10`
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

export interface SharedTrialLinkRevokeAccessParams {
  /**
   * The Account ID
   */
  account: string;
}

SharedTrialLinks.Tags = Tags;

export declare namespace SharedTrialLinks {
  export {
    type SharedTrialLinkListResponse as SharedTrialLinkListResponse,
    type SharedTrialLinkRevokeAccessResponse as SharedTrialLinkRevokeAccessResponse,
    type SharedTrialLinkListParams as SharedTrialLinkListParams,
    type SharedTrialLinkRevokeAccessParams as SharedTrialLinkRevokeAccessParams,
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
