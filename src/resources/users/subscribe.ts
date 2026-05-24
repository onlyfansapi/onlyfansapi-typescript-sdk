// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for fetching OnlyFans users
 */
export class Subscribe extends APIResource {
  /**
   * Subscribe to a user's profile.
   *
   * @example
   * ```ts
   * const subscribe = await client.users.subscribe.create(
   *   'user_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  create(
    userID: string,
    params: SubscribeCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscribeCreateResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/users/${userID}/subscribe`, options);
  }

  /**
   * Unsubscribe from a user's profile.
   *
   * @example
   * ```ts
   * const subscribe = await client.users.subscribe.delete(
   *   'user_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX', reason: 'reason' },
   * );
   * ```
   */
  delete(
    userID: string,
    params: SubscribeDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SubscribeDeleteResponse> {
    const { account, ...body } = params;
    return this._client.delete(path`/api/${account}/users/${userID}/subscribe`, { body, ...options });
  }
}

export interface SubscribeCreateResponse {
  _meta?: SubscribeCreateResponse._Meta;

  data?: SubscribeCreateResponse.Data;
}

export namespace SubscribeCreateResponse {
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

    avatar?: string;

    avatarThumbs?: Data.AvatarThumbs;

    canAddSubscriber?: boolean;

    canCommentStory?: boolean;

    canEarn?: boolean;

    canLookStory?: boolean;

    canPayInternal?: boolean;

    canReceiveChatMessage?: boolean;

    canReport?: boolean;

    canRestrict?: boolean;

    canTrialSend?: boolean;

    canUnsubscribe?: boolean;

    currentSubscribePrice?: number;

    hasNotViewedStory?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    header?: string;

    headerSize?: Data.HeaderSize;

    headerThumbs?: Data.HeaderThumbs;

    hideChat?: boolean;

    isActive?: boolean;

    isBlocked?: boolean;

    isPaywallRequired?: boolean;

    isPendingAutoprolong?: boolean;

    isPerformer?: boolean;

    isRealPerformer?: boolean;

    isRestricted?: boolean;

    isVerified?: boolean;

    lastSeen?: string;

    listsStates?: Array<Data.ListsState>;

    name?: string;

    subscribedBy?: boolean;

    subscribedByAutoprolong?: boolean;

    subscribedByData?: Data.SubscribedByData;

    subscribedByExpire?: boolean;

    subscribedByExpireDate?: string;

    subscribedIsExpiredNow?: boolean;

    subscribedOn?: boolean;

    subscribedOnData?: string | null;

    subscribedOnDuration?: string | null;

    subscribedOnExpiredNow?: string | null;

    subscribePrice?: number;

    tipsEnabled?: boolean;

    tipsMax?: number;

    tipsMin?: number;

    tipsMinInternal?: number;

    tipsTextEnabled?: boolean;

    username?: string;

    view?: string;
  }

  export namespace Data {
    export interface AvatarThumbs {
      c144?: string;

      c50?: string;
    }

    export interface HeaderSize {
      height?: number;

      width?: number;
    }

    export interface HeaderThumbs {
      w480?: string;

      w760?: string;
    }

    export interface ListsState {
      id?: string;

      canAddUser?: boolean;

      cannotAddUserReason?: string;

      hasUser?: boolean;

      name?: string;

      type?: string;
    }

    export interface SubscribedByData {
      discountFinishedAt?: string | null;

      discountPercent?: number;

      discountPeriod?: number;

      discountStartedAt?: string | null;

      duration?: string;

      expiredAt?: string;

      hasActivePaidSubscriptions?: boolean;

      isMuted?: boolean;

      newPrice?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string;

      showPostsInFeed?: boolean;

      status?: string | null;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<SubscribedByData.Subscribe>;

      unsubscribeReason?: string;
    }

    export namespace SubscribedByData {
      export interface Subscribe {
        id?: number;

        action?: string;

        cancelDate?: string | null;

        date?: string;

        discount?: number;

        duration?: number;

        earningId?: number;

        expireDate?: string;

        isCurrent?: boolean;

        offerEnd?: string | null;

        offerStart?: string | null;

        price?: number;

        regularPrice?: number;

        startDate?: string;

        subscriberId?: number;

        type?: string;

        userId?: number;
      }
    }
  }
}

export interface SubscribeDeleteResponse {
  _meta?: SubscribeDeleteResponse._Meta;

  data?: SubscribeDeleteResponse.Data;
}

export namespace SubscribeDeleteResponse {
  export interface _Meta {
    _cache?: _Meta._Cache;

    _credits?: _Meta._Credits;
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
  }

  export interface Data {
    message?: string;

    success?: boolean;
  }
}

export interface SubscribeCreateParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface SubscribeDeleteParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Reason for unsubscribing. Valid options: `1,2,3,4,5`. Leave empty
   * for `No specific reason`.
   */
  reason: string;
}

export declare namespace Subscribe {
  export {
    type SubscribeCreateResponse as SubscribeCreateResponse,
    type SubscribeDeleteResponse as SubscribeDeleteResponse,
    type SubscribeCreateParams as SubscribeCreateParams,
    type SubscribeDeleteParams as SubscribeDeleteParams,
  };
}
