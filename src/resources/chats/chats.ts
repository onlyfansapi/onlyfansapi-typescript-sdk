// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageDeleteParams,
  MessageDeleteResponse,
  MessageListParams,
  MessageListResponse,
  MessageSendParams,
  MessageSendResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing OnlyFans chats
 */
export class Chats extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Get the list of chats for an Account.
   *
   * @example
   * ```ts
   * const chats = await client.chats.list(
   *   'acct_XXXXXXXXXXXXXXX',
   * );
   * ```
   */
  list(
    account: string,
    query: ChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatListResponse> {
    return this._client.get(path`/api/${account}/chats`, { query, ...options });
  }

  /**
   * Calling this endpoint will show the target fan a "Model is typing..." note in
   * the chat for ~4 seconds. If you want to continue showing the indicator call this
   * endpoint multiple times. Free - no credits charged.
   *
   * @example
   * ```ts
   * const response = await client.chats.startTypingIndicator(
   *   '458485726',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
   * ```
   */
  startTypingIndicator(
    chatID: string,
    params: ChatStartTypingIndicatorParams,
    options?: RequestOptions,
  ): APIPromise<ChatStartTypingIndicatorResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/chats/${chatID}/typing`, options);
  }
}

export interface ChatListResponse {
  _meta?: ChatListResponse._Meta;

  _pagination?: ChatListResponse._Pagination;

  data?: Array<ChatListResponse.Data>;
}

export namespace ChatListResponse {
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

  export interface _Pagination {
    next_page?: string;
  }

  export interface Data {
    canGoToProfile?: boolean;

    canNotSendReason?: boolean;

    canSendMessage?: boolean;

    countPinnedMessages?: number;

    fan?: Data.Fan;

    hasPurchasedFeed?: boolean;

    hasUnreadTips?: boolean;

    isMutedNotifications?: boolean;

    lastMessage?: Data.LastMessage;

    lastReadMessageId?: number;

    unreadMessagesCount?: number;
  }

  export namespace Data {
    export interface Fan {
      id?: number;

      about?: string;

      archivedPostsCount?: number;

      audiosCount?: number;

      avatar?: string;

      avatarHeaderConverterUpload?: boolean;

      avatarThumbs?: Fan.AvatarThumbs;

      canAddSubscriber?: boolean;

      canChat?: boolean;

      canCommentStory?: boolean;

      canCreatePromotion?: boolean;

      canCreateTrial?: boolean;

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

      favoritedCount?: number;

      favoritesCount?: number;

      finishedStreamsCount?: number;

      firstPublishedPostDate?: string;

      hasFriends?: boolean;

      hasLabels?: boolean;

      hasLinks?: boolean;

      hasNotViewedStory?: boolean;

      hasPinnedPosts?: boolean;

      hasSavedStreams?: boolean;

      hasScheduledStream?: boolean;

      hasStories?: boolean;

      hasStream?: boolean;

      header?: string;

      headerSize?: Fan.HeaderSize;

      headerThumbs?: Fan.HeaderThumbs;

      isAdultContent?: boolean;

      isBlocked?: boolean;

      isFriend?: boolean;

      isMarkdownDisabledForAbout?: boolean;

      isPaywallRequired?: boolean;

      isPendingAutoprolong?: boolean;

      isPerformer?: boolean;

      isPrivateRestriction?: boolean;

      isRealPerformer?: boolean;

      isReferrerAllowed?: boolean;

      isRestricted?: boolean;

      isSpotifyConnected?: boolean;

      isSpringConnected?: boolean;

      isVerified?: boolean;

      joinDate?: string;

      lastSeen?: string;

      listsStates?: Array<Fan.ListsState>;

      location?: string;

      mediasCount?: number;

      name?: string;

      notice?: string;

      photosCount?: number;

      postsCount?: number;

      privateArchivedPostsCount?: number;

      shouldShowFinishedStreams?: boolean;

      showMediaCount?: boolean;

      showPostsInFeed?: boolean;

      showSubscribersCount?: boolean;

      subscribedBy?: boolean;

      subscribedByAutoprolong?: boolean;

      subscribedByData?: Fan.SubscribedByData;

      subscribedByExpire?: boolean;

      subscribedByExpireDate?: string;

      subscribedIsExpiredNow?: boolean;

      subscribedOn?: boolean;

      subscribedOnData?: Fan.SubscribedOnData;

      subscribedOnDuration?: string;

      subscribedOnExpiredNow?: boolean;

      subscribePrice?: number;

      subscribersCount?: string;

      tipsEnabled?: boolean;

      tipsMax?: number;

      tipsMin?: number;

      tipsMinInternal?: number;

      tipsTextEnabled?: boolean;

      username?: string;

      videosCount?: number;

      view?: string;

      website?: string;

      wishlist?: string;
    }

    export namespace Fan {
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
        discountFinishedAt?: string;

        discountPercent?: number;

        discountPeriod?: number;

        discountStartedAt?: string;

        duration?: string;

        expiredAt?: string;

        hasActivePaidSubscriptions?: boolean;

        isMuted?: boolean;

        newPrice?: number;

        price?: number;

        regularPrice?: number;

        renewedAt?: string;

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

          cancelDate?: string;

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

      export interface SubscribedOnData {
        discountFinishedAt?: string;

        discountPercent?: number;

        discountPeriod?: number;

        discountStartedAt?: string;

        duration?: string;

        expiredAt?: string;

        hasActivePaidSubscriptions?: boolean;

        isMuted?: boolean;

        messagesSumm?: number;

        newPrice?: number;

        postsSumm?: number;

        price?: number;

        regularPrice?: number;

        renewedAt?: string;

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

          cancelDate?: string;

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

    export interface LastMessage {
      id?: number;

      canBePinned?: boolean;

      cancelSeconds?: number;

      canPurchase?: boolean;

      canPurchaseReason?: string;

      canReport?: boolean;

      canUnsendQueue?: boolean;

      changedAt?: string;

      createdAt?: string;

      fromUser?: LastMessage.FromUser;

      giphyId?: string;

      isCouplePeopleMedia?: boolean;

      isFree?: boolean;

      isFromQueue?: boolean;

      isLiked?: boolean;

      isMarkdownDisabled?: boolean;

      isMediaReady?: boolean;

      isNew?: boolean;

      isOpened?: boolean;

      isPinned?: boolean;

      isReportedByMe?: boolean;

      isTip?: boolean;

      lockedText?: boolean;

      media?: Array<unknown>;

      mediaCount?: number;

      previews?: Array<unknown>;

      price?: number;

      queueId?: number;

      responseType?: string;

      text?: string;

      unsendSecondsQueue?: number;
    }

    export namespace LastMessage {
      export interface FromUser {
        id?: number;

        _view?: string;
      }
    }
  }
}

export interface ChatStartTypingIndicatorResponse {
  _meta?: ChatStartTypingIndicatorResponse._Meta;

  data?: ChatStartTypingIndicatorResponse.Data;
}

export namespace ChatStartTypingIndicatorResponse {
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

export interface ChatListParams {
  /**
   * Number of chats to return (10, 20, or 30)
   */
  limit?: string;

  /**
   * Number of chats to skip for pagination
   */
  offset?: string;

  /**
   * Sort order for chats (recent or old)
   */
  order?: string;

  /**
   * Search query to filter chats
   */
  query?: string;

  /**
   * Whether to skip user details in response (all or none)
   */
  skip_users?: string;
}

export interface ChatStartTypingIndicatorParams {
  /**
   * The Account ID
   */
  account: string;
}

Chats.Messages = Messages;

export declare namespace Chats {
  export {
    type ChatListResponse as ChatListResponse,
    type ChatStartTypingIndicatorResponse as ChatStartTypingIndicatorResponse,
    type ChatListParams as ChatListParams,
    type ChatStartTypingIndicatorParams as ChatStartTypingIndicatorParams,
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageDeleteParams as MessageDeleteParams,
    type MessageSendParams as MessageSendParams,
  };
}
