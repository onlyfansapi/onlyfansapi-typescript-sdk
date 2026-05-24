// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * APIs for managing OnlyFans followings (people you're subscribed to)
 */
export class Following extends APIResource {
  /**
   * Get a paginated list of followings for an Account. Newest followings are first.
   *
   * @example
   * ```ts
   * await client.following.listActive('acct_XXXXXXXXXXXXXXX');
   * ```
   */
  listActive(
    account: string,
    query: FollowingListActiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/${account}/following/active`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a paginated list of followings for an Account. Newest followings are first.
   *
   * @example
   * ```ts
   * await client.following.listAll('acct_XXXXXXXXXXXXXXX');
   * ```
   */
  listAll(
    account: string,
    query: FollowingListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/${account}/following/all`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a paginated list of expired followings for an Account. Newest followings are
   * first.
   *
   * @example
   * ```ts
   * await client.following.listExpired('acct_XXXXXXXXXXXXXXX');
   * ```
   */
  listExpired(
    account: string,
    query: FollowingListExpiredParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/${account}/following/expired`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FollowingListActiveParams {
  filter?: FollowingListActiveParams.Filter;

  /**
   * Number of followings to return (1-50). Must be at least 1. Must not be greater
   * than 50.
   */
  limit?: number;

  /**
   * Pagination offset. Must be at least 0.
   */
  offset?: number;
}

export namespace FollowingListActiveParams {
  export interface Filter {
    /**
     * Filter by online status (1 for online, 0 for offline, null for all).
     */
    online?: null;

    /**
     * Filter by paid status (1 for paid, 0 for free, null for all).
     */
    paid?: null;
  }
}

export interface FollowingListAllParams {
  filter?: FollowingListAllParams.Filter;

  /**
   * Number of followings to return (1-50). Must be at least 1. Must not be greater
   * than 50.
   */
  limit?: number;

  /**
   * Pagination offset. Must be at least 0.
   */
  offset?: number;
}

export namespace FollowingListAllParams {
  export interface Filter {
    /**
     * Filter by online status (1 for online, 0 for offline, null for all).
     */
    online?: null;

    /**
     * Filter by paid status (1 for paid, 0 for free, null for all).
     */
    paid?: null;
  }
}

export interface FollowingListExpiredParams {
  filter?: FollowingListExpiredParams.Filter;

  /**
   * Number of followings to return (1-50). Must be at least 1. Must not be greater
   * than 50.
   */
  limit?: number;

  /**
   * Pagination offset. Must be at least 0.
   */
  offset?: number;
}

export namespace FollowingListExpiredParams {
  export interface Filter {
    /**
     * Filter by online status (1 for online, 0 for offline, null for all).
     */
    online?: null;

    /**
     * Filter by paid status (1 for paid, 0 for free, null for all).
     */
    paid?: null;
  }
}

export declare namespace Following {
  export {
    type FollowingListActiveParams as FollowingListActiveParams,
    type FollowingListAllParams as FollowingListAllParams,
    type FollowingListExpiredParams as FollowingListExpiredParams,
  };
}
