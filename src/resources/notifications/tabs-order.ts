// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TabsOrder extends APIResource {
  /**
   * Update the order of an account's notification tabs as displayed on the OnlyFans
   * notifications page
   *
   * @example
   * ```ts
   * const tabsOrder =
   *   await client.notifications.tabsOrder.update(
   *     'acct_XXXXXXXXXXXXXXX',
   *     {
   *       tabs: [
   *         'all',
   *         'subscriptions',
   *         'onlyfans',
   *         'purchases',
   *         'tips',
   *         'tags',
   *         'comments',
   *         'mentions',
   *         'likes',
   *         'promotions',
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    account: string,
    body: TabsOrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TabsOrderUpdateResponse> {
    return this._client.put(path`/api/${account}/notifications/tabs-order`, { body, ...options });
  }

  /**
   * Get the order of an account's notification tabs as displayed on the OnlyFans
   * notifications page
   *
   * @example
   * ```ts
   * const tabsOrder = await client.notifications.tabsOrder.get(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  get(account: string, options?: RequestOptions): APIPromise<TabsOrderGetResponse> {
    return this._client.get(path`/api/${account}/notifications/tabs-order`, options);
  }
}

export interface TabsOrderUpdateResponse {
  _meta?: TabsOrderUpdateResponse._Meta;

  data?: TabsOrderUpdateResponse.Data;
}

export namespace TabsOrderUpdateResponse {
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
    success?: boolean;
  }
}

export interface TabsOrderGetResponse {
  _meta?: TabsOrderGetResponse._Meta;

  data?: Array<string>;
}

export namespace TabsOrderGetResponse {
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
}

export interface TabsOrderUpdateParams {
  /**
   * Array of tab keys. Must include exactly these: all, subscriptions, onlyfans,
   * purchases, tips, tags, comments, mentions, likes, promotions.
   */
  tabs: Array<string>;
}

export declare namespace TabsOrder {
  export {
    type TabsOrderUpdateResponse as TabsOrderUpdateResponse,
    type TabsOrderGetResponse as TabsOrderGetResponse,
    type TabsOrderUpdateParams as TabsOrderUpdateParams,
  };
}
