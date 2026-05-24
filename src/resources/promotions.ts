// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Promotions extends APIResource {
  /**
   * Create a new promotion for the account.
   *
   * @example
   * ```ts
   * const promotion = await client.promotions.create(
   *   'acct_XXXXXXXXXXXXXXX',
   *   {
   *     discount: 10,
   *     expirationDays: 7,
   *     offerLimit: 10,
   *     type: 'new',
   *   },
   * );
   * ```
   */
  create(
    account: string,
    body: PromotionCreateParams,
    options?: RequestOptions,
  ): APIPromise<PromotionCreateResponse> {
    return this._client.post(path`/api/${account}/promotions`, { body, ...options });
  }

  /**
   * List all promotions for the account.
   *
   * @example
   * ```ts
   * const promotions = await client.promotions.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: PromotionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromotionListResponse> {
    return this._client.get(path`/api/${account}/promotions`, { query, ...options });
  }

  /**
   * Delete a promotion for the account.
   *
   * @example
   * ```ts
   * const promotion = await client.promotions.delete(
   *   'promotion_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  delete(
    promotionID: string,
    params: PromotionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PromotionDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/promotions/${promotionID}`, options);
  }

  /**
   * Stop an active promotion for the account.
   *
   * @example
   * ```ts
   * const response = await client.promotions.stop(
   *   'promotion_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  stop(
    promotionID: string,
    params: PromotionStopParams,
    options?: RequestOptions,
  ): APIPromise<PromotionStopResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/promotions/${promotionID}/stop`, options);
  }
}

export interface PromotionCreateResponse {
  _meta?: PromotionCreateResponse._Meta;

  data?: Array<PromotionCreateResponse.Data>;
}

export namespace PromotionCreateResponse {
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
    id?: number;

    canClaim?: boolean;

    claimsCount?: number;

    createdAt?: string;

    finishedAt?: string;

    hasRelatedPromo?: boolean;

    isFinished?: boolean;

    message?: string;

    price?: number;

    rawMessage?: string;

    subscribeCounts?: number;

    subscribeDays?: number;

    type?: string;
  }
}

export interface PromotionListResponse {
  _meta?: PromotionListResponse._Meta;

  data?: PromotionListResponse.Data;
}

export namespace PromotionListResponse {
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
    hasMore?: boolean;

    items?: Array<Data.Item>;
  }

  export namespace Data {
    export interface Item {
      id?: number;

      canClaim?: boolean;

      claimsCount?: number;

      createdAt?: string;

      finishedAt?: string;

      hasRelatedPromo?: boolean;

      isFinished?: boolean;

      message?: string;

      price?: number;

      rawMessage?: string;

      subscribeCounts?: number;

      subscribeDays?: number;

      type?: string;
    }
  }
}

export interface PromotionDeleteResponse {
  _meta?: PromotionDeleteResponse._Meta;

  data?: PromotionDeleteResponse.Data;
}

export namespace PromotionDeleteResponse {
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

export interface PromotionStopResponse {
  _meta?: PromotionStopResponse._Meta;

  data?: PromotionStopResponse.Data;
}

export namespace PromotionStopResponse {
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

export interface PromotionCreateParams {
  /**
   * The discount percentage for the promotion's first month. Set to 100 to make this
   * promotion a Free Trial.
   */
  discount: number;

  /**
   * In how many days this offer will expire. Set to 0 to make this promotion
   * infinite.
   */
  expirationDays: number;

  /**
   * Limit how many people can claim this offer. Set to 0 for no limits.
   */
  offerLimit: number;

  /**
   * Whether this promotion should apply to new subscribers, expired subscribers, or
   * both. **IMPORTANT: when set to new_and_expired, the OF will create two separate
   * promotions.**
   */
  type: 'new' | 'expired' | 'new_and_expired';

  /**
   * Required only when discount is 100. Sets the duration (in days) of the free
   * trial. Accepted 1-30
   */
  freeTrialDays?: number;

  /**
   * Optionally, provide a message for this promotion.
   */
  message?: string;
}

export interface PromotionListParams {
  /**
   * The number of promotions to return. Default `10`
   */
  limit?: number;

  /**
   * The offset used for pagination. Default `0`
   */
  offset?: number;
}

export interface PromotionDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface PromotionStopParams {
  /**
   * The Account ID
   */
  account: string;
}

export declare namespace Promotions {
  export {
    type PromotionCreateResponse as PromotionCreateResponse,
    type PromotionListResponse as PromotionListResponse,
    type PromotionDeleteResponse as PromotionDeleteResponse,
    type PromotionStopResponse as PromotionStopResponse,
    type PromotionCreateParams as PromotionCreateParams,
    type PromotionListParams as PromotionListParams,
    type PromotionDeleteParams as PromotionDeleteParams,
    type PromotionStopParams as PromotionStopParams,
  };
}
