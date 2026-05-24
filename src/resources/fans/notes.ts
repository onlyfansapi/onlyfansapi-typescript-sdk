// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing OnlyFans fans (subscribers)
 */
export class Notes extends APIResource {
  /**
   * Clear notes for a specific fan.
   *
   * @example
   * ```ts
   * const response = await client.fans.notes.clearNotes(
   *   'fan_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  clearNotes(
    fanID: string,
    params: NoteClearNotesParams,
    options?: RequestOptions,
  ): APIPromise<NoteClearNotesResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/fans/${fanID}/notes`, options);
  }

  /**
   * Create or edit notes for a specific fan.
   *
   * @example
   * ```ts
   * const response = await client.fans.notes.createEditNotes(
   *   'fan_id',
   *   {
   *     account: 'acct_XXXXXXXXXXXXXXX',
   *     notes: 'Example note',
   *   },
   * );
   * ```
   */
  createEditNotes(
    fanID: string,
    params: NoteCreateEditNotesParams,
    options?: RequestOptions,
  ): APIPromise<NoteCreateEditNotesResponse> {
    const { account, ...body } = params;
    return this._client.put(path`/api/${account}/fans/${fanID}/notes`, { body, ...options });
  }

  /**
   * Retrieve notes for a specific fan.
   *
   * @example
   * ```ts
   * const response = await client.fans.notes.getNotes(
   *   'fan_id',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  getNotes(
    fanID: string,
    params: NoteGetNotesParams,
    options?: RequestOptions,
  ): APIPromise<NoteGetNotesResponse> {
    const { account } = params;
    return this._client.get(path`/api/${account}/fans/${fanID}/notes`, options);
  }
}

export interface NoteClearNotesResponse {
  _meta?: NoteClearNotesResponse._Meta;

  data?: NoteClearNotesResponse.Data;
}

export namespace NoteClearNotesResponse {
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

    displayName?: string;

    hasNotViewedStory?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    header?: string;

    headerSize?: Data.HeaderSize;

    headerThumbs?: Data.HeaderThumbs;

    hideChat?: boolean;

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

    notice?: string;

    subscribedBy?: boolean;

    subscribedByAutoprolong?: boolean;

    subscribedByData?: Data.SubscribedByData;

    subscribedByExpire?: boolean;

    subscribedByExpireDate?: string;

    subscribedIsExpiredNow?: boolean;

    subscribedOn?: string | null;

    subscribedOnData?: Data.SubscribedOnData;

    subscribedOnDuration?: string;

    subscribedOnExpiredNow?: boolean;

    subscribePrice?: number;

    subscriptionBundles?: Array<Data.SubscriptionBundle>;

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

      renewedAt?: string | null;

      showPostsInFeed?: boolean;

      status?: string;

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

        offerStart?: string;

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

      messagesSumm?: number;

      newPrice?: number;

      postsSumm?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string | null;

      status?: string | null;

      streamsSumm?: number;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<unknown>;

      subscribesSumm?: number;

      tipsSumm?: number;

      totalSumm?: number;

      unsubscribeReason?: string;
    }

    export interface SubscriptionBundle {
      id?: number;

      canBuy?: boolean;

      discount?: number;

      duration?: number;

      price?: number;
    }
  }
}

export interface NoteCreateEditNotesResponse {
  _meta?: NoteCreateEditNotesResponse._Meta;

  data?: NoteCreateEditNotesResponse.Data;
}

export namespace NoteCreateEditNotesResponse {
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

    displayName?: string;

    hasNotViewedStory?: boolean;

    hasScheduledStream?: boolean;

    hasStories?: boolean;

    hasStream?: boolean;

    header?: string;

    headerSize?: Data.HeaderSize;

    headerThumbs?: Data.HeaderThumbs;

    hideChat?: boolean;

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

    notice?: string;

    subscribedBy?: boolean;

    subscribedByAutoprolong?: boolean;

    subscribedByData?: Data.SubscribedByData;

    subscribedByExpire?: boolean;

    subscribedByExpireDate?: string;

    subscribedIsExpiredNow?: boolean;

    subscribedOn?: string | null;

    subscribedOnData?: Data.SubscribedOnData;

    subscribedOnDuration?: string;

    subscribedOnExpiredNow?: boolean;

    subscribePrice?: number;

    subscriptionBundles?: Array<Data.SubscriptionBundle>;

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

      renewedAt?: string | null;

      showPostsInFeed?: boolean;

      status?: string;

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

        offerStart?: string;

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

      messagesSumm?: number;

      newPrice?: number;

      postsSumm?: number;

      price?: number;

      regularPrice?: number;

      renewedAt?: string | null;

      status?: string | null;

      streamsSumm?: number;

      subscribeAt?: string;

      subscribePrice?: number;

      subscribes?: Array<unknown>;

      subscribesSumm?: number;

      tipsSumm?: number;

      totalSumm?: number;

      unsubscribeReason?: string;
    }

    export interface SubscriptionBundle {
      id?: number;

      canBuy?: boolean;

      discount?: number;

      duration?: number;

      price?: number;
    }
  }
}

export interface NoteGetNotesResponse {
  _meta?: NoteGetNotesResponse._Meta;

  data?: NoteGetNotesResponse.Data;
}

export namespace NoteGetNotesResponse {
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
    notes?: string;
  }
}

export interface NoteClearNotesParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface NoteCreateEditNotesParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The new note value.
   */
  notes: string;
}

export interface NoteGetNotesParams {
  /**
   * The Account ID
   */
  account: string;
}

export declare namespace Notes {
  export {
    type NoteClearNotesResponse as NoteClearNotesResponse,
    type NoteCreateEditNotesResponse as NoteCreateEditNotesResponse,
    type NoteGetNotesResponse as NoteGetNotesResponse,
    type NoteClearNotesParams as NoteClearNotesParams,
    type NoteCreateEditNotesParams as NoteCreateEditNotesParams,
    type NoteGetNotesParams as NoteGetNotesParams,
  };
}
