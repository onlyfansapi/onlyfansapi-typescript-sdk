// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TabsOrderAPI from './tabs-order';
import {
  TabsOrder,
  TabsOrderGetResponse,
  TabsOrderUpdateParams,
  TabsOrderUpdateResponse,
} from './tabs-order';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints for managingr account notifications
 */
export class Notifications extends APIResource {
  tabsOrder: TabsOrderAPI.TabsOrder = new TabsOrderAPI.TabsOrder(this._client);

  /**
   * List all notifications for the account
   *
   * @example
   * ```ts
   * const notifications = await client.notifications.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationListResponse> {
    return this._client.get(path`/api/${account}/notifications`, { query, ...options });
  }

  /**
   * Get a quick overview of all unread notification types
   *
   * @example
   * ```ts
   * const response = await client.notifications.getCounts(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  getCounts(account: string, options?: RequestOptions): APIPromise<NotificationGetCountsResponse> {
    return this._client.get(path`/api/${account}/notifications/counts`, options);
  }

  /**
   * Mark all notifications of this account as read
   *
   * @example
   * ```ts
   * const response = await client.notifications.markAllAsRead(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  markAllAsRead(account: string, options?: RequestOptions): APIPromise<NotificationMarkAllAsReadResponse> {
    return this._client.post(path`/api/${account}/notifications/mark-all-as-read`, options);
  }

  /**
   * Search users that have appeared in your notifications
   *
   * @example
   * ```ts
   * const response = await client.notifications.searchUsers(
   *   'acct_XXXXXXXXXXXXXXX',
   *   { query: 'User' },
   * );
   * ```
   */
  searchUsers(
    account: string,
    query: NotificationSearchUsersParams,
    options?: RequestOptions,
  ): APIPromise<NotificationSearchUsersResponse> {
    return this._client.get(path`/api/${account}/notifications/search-users`, { query, ...options });
  }
}

export interface NotificationListResponse {
  _meta?: NotificationListResponse._Meta;

  data?: NotificationListResponse.Data;
}

export namespace NotificationListResponse {
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
    hasMore?: boolean;

    list?: Array<Data.List>;
  }

  export namespace Data {
    export interface List {
      id?: number;

      canGoToProfile?: boolean;

      createdAt?: string;

      isRead?: boolean;

      replacePairs?: List.ReplacePairs;

      subType?: string;

      text?: string;

      type?: string;

      user?: List.User;
    }

    export namespace List {
      export interface ReplacePairs {
        '{PRICE}'?: string;

        '{SUBSCRIBER_LINK}'?: string;
      }

      export interface User {
        id?: number;

        _view?: string;
      }
    }
  }
}

export interface NotificationGetCountsResponse {
  _meta?: NotificationGetCountsResponse._Meta;

  data?: NotificationGetCountsResponse.Data;
}

export namespace NotificationGetCountsResponse {
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
    all?: number;

    commented?: number;

    deactivated_media?: number;

    favorited?: number;

    mentioned?: number;

    message?: number;

    purchases?: number;

    subscribed?: number;

    system?: number;

    tags?: number;

    tip?: number;
  }
}

export interface NotificationMarkAllAsReadResponse {
  _meta?: NotificationMarkAllAsReadResponse._Meta;

  data?: NotificationMarkAllAsReadResponse.Data;
}

export namespace NotificationMarkAllAsReadResponse {
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

export interface NotificationSearchUsersResponse {
  _meta?: NotificationSearchUsersResponse._Meta;

  data?: Array<NotificationSearchUsersResponse.Data>;
}

export namespace NotificationSearchUsersResponse {
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

    avatar?: string | null;

    avatarThumbs?: string | null;

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

    displayName?: string;

    hasNotViewedStory?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    header?: string | null;

    headerSize?: string | null;

    headerThumbs?: string | null;

    hideChat?: boolean;

    isBlocked?: boolean;

    isPendingAutoprolong?: boolean;

    isPerformer?: boolean;

    isRealPerformer?: boolean;

    isRestricted?: boolean;

    isVerified?: boolean;

    lastSeen?: string;

    listsStates?: Array<Data.ListsState>;

    name?: string;

    notice?: string;

    promoOffers?: Array<unknown>;

    subscribedBy?: boolean;

    subscribedByAutoprolong?: boolean;

    subscribedByData?: Data.SubscribedByData;

    subscribedByExpire?: boolean;

    subscribedByExpireDate?: string;

    subscribedIsExpiredNow?: boolean;

    subscribedOn?: boolean;

    subscribedOnData?: Data.SubscribedOnData;

    subscribedOnDuration?: string;

    subscribedOnExpiredNow?: boolean;

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

    export interface SubscribedOnData {
      discountFinishedAt?: string | null;

      discountPercent?: number;

      discountPeriod?: number;

      discountStartedAt?: string | null;

      duration?: string;

      expiredAt?: string;

      hasActivePaidSubscriptions?: boolean;

      isMuted?: boolean;

      lastActivity?: string;

      messagesSumm?: number;

      newPrice?: number;

      postsSumm?: number;

      price?: number;

      recommendations?: number;

      regularPrice?: number;

      renewedAt?: string;

      status?: string | null;

      streamsSumm?: number;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<SubscribedOnData.Subscribe>;

      subscribesSumm?: number;

      tipsSumm?: number;

      totalSumm?: number;

      unsubscribeReason?: string;
    }

    export namespace SubscribedOnData {
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

        offerEnd?: string;

        offerStart?: string;

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

export interface NotificationListParams {
  /**
   * Used for pagination. This value should be the ID of the previous response's last
   * notification.
   */
  from_id?: number;

  /**
   * The number of notifications. Default `10`
   */
  limit?: number;

  /**
   * Whether to skip user details. Default `all`
   */
  skip_users?: 'all' | 'none';

  /**
   * Filter notifications by a specific type
   */
  type?:
    | 'all'
    | 'subscriptions'
    | 'onlyfans'
    | 'purchases'
    | 'tips'
    | 'tags'
    | 'comments'
    | 'mentions'
    | 'likes'
    | 'promotions';
}

export interface NotificationSearchUsersParams {
  /**
   * The query to search for. Can be either a name or username.
   */
  query: string;
}

Notifications.TabsOrder = TabsOrder;

export declare namespace Notifications {
  export {
    type NotificationListResponse as NotificationListResponse,
    type NotificationGetCountsResponse as NotificationGetCountsResponse,
    type NotificationMarkAllAsReadResponse as NotificationMarkAllAsReadResponse,
    type NotificationSearchUsersResponse as NotificationSearchUsersResponse,
    type NotificationListParams as NotificationListParams,
    type NotificationSearchUsersParams as NotificationSearchUsersParams,
  };

  export {
    TabsOrder as TabsOrder,
    type TabsOrderUpdateResponse as TabsOrderUpdateResponse,
    type TabsOrderGetResponse as TabsOrderGetResponse,
    type TabsOrderUpdateParams as TabsOrderUpdateParams,
  };
}
