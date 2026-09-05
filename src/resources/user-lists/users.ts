// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Get all users in a OnlyFans User List
   *
   * @example
   * ```ts
   * const users = await client.userLists.users.list(
   *   'userListId',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  list(userListID: string, params: UserListParams, options?: RequestOptions): APIPromise<UserListResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/user-lists/${userListID}/users`, { query, ...options });
  }

  /**
   * Add multiple Users To OnlyFans User List
   *
   * @example
   * ```ts
   * const response = await client.userLists.users.add(
   *   'userListId',
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     ids: ['string', 'string', 'string'],
   *   },
   * );
   * ```
   */
  add(userListID: string, params: UserAddParams, options?: RequestOptions): APIPromise<UserAddResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/user-lists/${userListID}/users`, { body, ...options });
  }

  /**
   * Remove all users from a OnlyFans User List
   *
   * @example
   * ```ts
   * const response = await client.userLists.users.clear(
   *   'userListId',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  clear(
    userListID: string,
    params: UserClearParams,
    options?: RequestOptions,
  ): APIPromise<UserClearResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/user-lists/${userListID}/users`, options);
  }

  /**
   * Get pinned users from an OnlyFans User List.
   *
   * @example
   * ```ts
   * const response = await client.userLists.users.listPinned(
   *   'friends',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  listPinned(
    userListID: string,
    params: UserListPinnedParams,
    options?: RequestOptions,
  ): APIPromise<UserListPinnedResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/user-lists/${userListID}/users/pinned`, {
      query,
      ...options,
    });
  }

  /**
   * Pin a user in any OnlyFans user list.
   *
   * @example
   * ```ts
   * const response = await client.userLists.users.pin(1145988, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   *   userListId: 'friends',
   * });
   * ```
   */
  pin(userID: number, params: UserPinParams, options?: RequestOptions): APIPromise<UserPinResponse> {
    const { account, userListId } = params;
    return this._client.post(path`/api/${account}/user-lists/${userListId}/users/${userID}/pin`, options);
  }

  /**
   * Remove User from OnlyFans User List
   *
   * @example
   * ```ts
   * const user = await client.userLists.users.remove(123456, {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   *   userListId: 'userListId',
   * });
   * ```
   */
  remove(userID: number, params: UserRemoveParams, options?: RequestOptions): APIPromise<UserRemoveResponse> {
    const { account, userListId } = params;
    return this._client.delete(path`/api/${account}/user-lists/${userListId}/users/${userID}`, options);
  }
}

export interface UserListResponse {
  _meta?: UserListResponse._Meta;

  data?: UserListResponse.Data;
}

export namespace UserListResponse {
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

    nextOffset?: number;
  }

  export namespace Data {
    export interface List {
      id?: number;

      avatar?: string;

      avatarThumbs?: List.AvatarThumbs;

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

      header?: string;

      headerSize?: List.HeaderSize;

      headerThumbs?: List.HeaderThumbs;

      hideChat?: boolean;

      isBlocked?: boolean;

      isPendingAutoprolong?: boolean;

      isPerformer?: boolean;

      isRealPerformer?: boolean;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      listsStates?: Array<List.ListsState>;

      name?: string;

      notice?: string;

      promoOffers?: Array<List.PromoOffer>;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: List.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: boolean;

      subscribedOnData?: List.SubscribedOnData;

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

    export namespace List {
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

      export interface PromoOffer {
        id?: number;

        createdAt?: string;

        expiredAt?: string | null;

        finishedAt?: string;

        subscribeDays?: number;

        subscriberId?: string;

        userId?: string;
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

        renewedAt?: string | null;

        status?: string;

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

          offerEnd?: string | null;

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
}

/**
 * Default: OnlyFans accepted every User ID
 */
export type UserAddResponse = UserAddResponse.UnionMember0 | UserAddResponse.UnionMember1;

export namespace UserAddResponse {
  /**
   * Default: OnlyFans accepted every User ID
   */
  export interface UnionMember0 {
    _meta?: UnionMember0._Meta;

    data?: UnionMember0.Data;
  }

  export namespace UnionMember0 {
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
      '1224114714'?: Array<number>;
    }
  }

  /**
   * With `skip_invalid=true`: the rejected User IDs are reported instead of failing
   * the batch
   */
  export interface UnionMember1 {
    _meta?: UnionMember1._Meta;

    data?: UnionMember1.Data;
  }

  export namespace UnionMember1 {
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
      added?: Array<number>;

      failed?: Data.Failed;
    }

    export namespace Data {
      export interface Failed {
        '123456'?: string;
      }
    }
  }
}

export interface UserClearResponse {
  _meta?: UserClearResponse._Meta;

  data?: UserClearResponse.Data;
}

export namespace UserClearResponse {
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

    canAddUsers?: boolean;

    canDelete?: boolean;

    canManageUsers?: boolean;

    canPinnedToChat?: boolean;

    canPinnedToFeed?: boolean;

    canUpdate?: boolean;

    direction?: string;

    isPinnedToChat?: boolean;

    isPinnedToFeed?: boolean;

    name?: string;

    order?: string;

    postsCount?: number;

    sortList?: Array<unknown>;

    type?: string;

    users?: Array<unknown>;

    usersCount?: number;
  }
}

export interface UserListPinnedResponse {
  _meta?: UserListPinnedResponse._Meta;

  data?: UserListPinnedResponse.Data;
}

export namespace UserListPinnedResponse {
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

    nextOffset?: number;
  }

  export namespace Data {
    export interface List {
      id?: number;

      avatar?: string;

      avatarThumbs?: List.AvatarThumbs;

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

      header?: string;

      headerSize?: List.HeaderSize;

      headerThumbs?: List.HeaderThumbs;

      hideChat?: boolean;

      isBlocked?: boolean;

      isPendingAutoprolong?: boolean;

      isPerformer?: boolean;

      isRealPerformer?: boolean;

      isRestricted?: boolean;

      isVerified?: boolean;

      lastSeen?: string;

      listsStates?: Array<List.ListsState>;

      name?: string;

      notice?: string;

      promoOffers?: Array<List.PromoOffer>;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: List.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: boolean;

      subscribedOnData?: List.SubscribedOnData;

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

    export namespace List {
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

      export interface PromoOffer {
        id?: number;

        createdAt?: string;

        expiredAt?: string | null;

        finishedAt?: string;

        subscribeDays?: number;

        subscriberId?: string;

        userId?: string;
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

        renewedAt?: string | null;

        status?: string;

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

          offerEnd?: string | null;

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
}

export interface UserPinResponse {
  _meta?: UserPinResponse._Meta;

  data?: UserPinResponse.Data;
}

export namespace UserPinResponse {
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

export interface UserRemoveResponse {
  _meta?: UserRemoveResponse._Meta;

  data?: UserRemoveResponse.Data;
}

export namespace UserRemoveResponse {
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
    list?: Data.List;

    userState?: Data.UserState;
  }

  export namespace Data {
    export interface List {
      id?: number;

      canAddUsers?: boolean;

      canDelete?: boolean;

      canManageUsers?: boolean;

      canPinnedToChat?: boolean;

      canPinnedToFeed?: boolean;

      canUpdate?: boolean;

      direction?: string;

      isPinnedToChat?: boolean;

      isPinnedToFeed?: boolean;

      name?: string;

      order?: string;

      postsCount?: number;

      sortList?: Array<unknown>;

      type?: string;

      users?: Array<List.User>;

      usersCount?: number;
    }

    export namespace List {
      export interface User {
        id?: number;

        avatar?: string;

        avatarThumbs?: User.AvatarThumbs;

        isVerified?: boolean;

        name?: string;

        username?: string;

        view?: string;
      }

      export namespace User {
        export interface AvatarThumbs {
          c144?: string;

          c50?: string;
        }
      }
    }

    export interface UserState {
      id?: number;

      canAddUser?: boolean;

      cannotAddUserReason?: string | null;

      hasUser?: boolean;

      name?: string;

      type?: string;
    }
  }
}

export interface UserListParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Number of users to return (1 - 100). Default = 10
   */
  limit?: string;

  /**
   * Query param: Number of users to skip for pagination
   */
  offset?: string;
}

export interface UserAddParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: Array of OnlyFans User IDs to be added into the list
   */
  ids: Array<string>;

  /**
   * Body param: Set to `true` to skip the User IDs OnlyFans refuses instead of
   * failing the whole batch. We drop the rejected IDs and retry the remainder for
   * you (up to 5 OnlyFans attempts, each costing 1 credit), then respond `200` with
   * `data.added` (the IDs that made it in) and `data.failed` (an object mapping each
   * rejected User ID to the reason OnlyFans gave). Note this changes the shape of
   * `data` — see the example responses. Failures that are not about individual users
   * (e.g. an invalid or inaccessible list ID) still return the regular `400`.
   */
  skip_invalid?: boolean;
}

export interface UserClearParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface UserListPinnedParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Number of users to return (1 - 100). Default = 10
   */
  limit?: string;

  /**
   * Query param: Number of users to skip for pagination
   */
  offset?: string;
}

export interface UserPinParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * OnlyFans User List ID, or a default list name like `friends`
   */
  userListId: string;
}

export interface UserRemoveParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * OnlyFans User List ID
   */
  userListId: string;
}

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserAddResponse as UserAddResponse,
    type UserClearResponse as UserClearResponse,
    type UserListPinnedResponse as UserListPinnedResponse,
    type UserPinResponse as UserPinResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserListParams as UserListParams,
    type UserAddParams as UserAddParams,
    type UserClearParams as UserClearParams,
    type UserListPinnedParams as UserListPinnedParams,
    type UserPinParams as UserPinParams,
    type UserRemoveParams as UserRemoveParams,
  };
}
