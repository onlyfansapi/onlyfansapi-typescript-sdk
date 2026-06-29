// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MarkAllAsReadAPI from './mark-all-as-read';
import { MarkAllAsRead, MarkAllAsReadAllResponse } from './mark-all-as-read';
import * as MessagesAPI from './messages';
import {
  MessageDeleteParams,
  MessageDeleteResponse,
  MessageLikeParams,
  MessageLikeResponse,
  MessageListParams,
  MessageListResponse,
  MessagePinParams,
  MessagePinResponse,
  MessageRetrieveParams,
  MessageRetrieveResponse,
  MessageSearchParams,
  MessageSearchResponse,
  MessageSendParams,
  MessageSendResponse,
  MessageUnlikeParams,
  MessageUnlikeResponse,
  MessageUnpinParams,
  MessageUnpinResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chats extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  markAllAsRead: MarkAllAsReadAPI.MarkAllAsRead = new MarkAllAsReadAPI.MarkAllAsRead(this._client);

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
   * Delete a specific chat.
   *
   * @example
   * ```ts
   * const chat = await client.chats.delete('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  delete(chatID: string, params: ChatDeleteParams, options?: RequestOptions): APIPromise<ChatDeleteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/chats/${chatID}`, options);
  }

  /**
   * Hide a specific chat from the chat list. To unhide this chat, send a new message
   * to the user.
   *
   * @example
   * ```ts
   * const response = await client.chats.hide('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  hide(chatID: string, params: ChatHideParams, options?: RequestOptions): APIPromise<ChatHideResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/chats/${chatID}/hide`, options);
  }

  /**
   * List media files shared in a specific chat.
   *
   * @example
   * ```ts
   * const response = await client.chats.listMedia('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  listMedia(
    chatID: string,
    params: ChatListMediaParams,
    options?: RequestOptions,
  ): APIPromise<ChatListMediaResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/chats/${chatID}/media`, { query, ...options });
  }

  /**
   * Mark a specific chat as read. Alternative to List Chat Messages endpoint, if you
   * just want to mark the chat as read without fetching messages.
   *
   * @example
   * ```ts
   * const response = await client.chats.markAsRead('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  markAsRead(
    chatID: string,
    params: ChatMarkAsReadParams,
    options?: RequestOptions,
  ): APIPromise<ChatMarkAsReadResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/chats/${chatID}/mark-as-read`, options);
  }

  /**
   * Mark a specific chat as unread.
   *
   * @example
   * ```ts
   * const response = await client.chats.markAsUnread('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  markAsUnread(
    chatID: string,
    params: ChatMarkAsUnreadParams,
    options?: RequestOptions,
  ): APIPromise<ChatMarkAsUnreadResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/chats/${chatID}/mark-as-unread`, options);
  }

  /**
   * Mute notifications for a specific chat.
   *
   * @example
   * ```ts
   * const response = await client.chats.mute('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  mute(chatID: string, params: ChatMuteParams, options?: RequestOptions): APIPromise<ChatMuteResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/chats/${chatID}/mute`, options);
  }

  /**
   * Calling this endpoint will show the target fan a "Model is typing..." note in
   * the chat for ~4 seconds. Duplicate calls for the same account and chat are
   * coalesced during that window.
   *
   * @example
   * ```ts
   * const response = await client.chats.startTyping('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  startTyping(
    chatID: string,
    params: ChatStartTypingParams,
    options?: RequestOptions,
  ): APIPromise<ChatStartTypingResponse> {
    const { account } = params;
    return this._client.post(path`/api/${account}/chats/${chatID}/typing`, options);
  }

  /**
   * Unmute notifications for a specific chat.
   *
   * @example
   * ```ts
   * const response = await client.chats.unmute('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  unmute(chatID: string, params: ChatUnmuteParams, options?: RequestOptions): APIPromise<ChatUnmuteResponse> {
    const { account } = params;
    return this._client.delete(path`/api/${account}/chats/${chatID}/unmute`, options);
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

      subscribersCount?: string | null;

      tipsEnabled?: boolean;

      tipsMax?: number;

      tipsMin?: number;

      tipsMinInternal?: number;

      tipsTextEnabled?: boolean;

      username?: string;

      videosCount?: number;

      view?: string;

      website?: string | null;

      wishlist?: string | null;
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

        messagesSumm?: number;

        newPrice?: number;

        postsSumm?: number;

        price?: number;

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

      giphyId?: string | null;

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

export interface ChatDeleteResponse {
  _meta?: ChatDeleteResponse._Meta;

  data?: ChatDeleteResponse.Data;
}

export namespace ChatDeleteResponse {
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

export interface ChatHideResponse {
  _meta?: ChatHideResponse._Meta;

  data?: ChatHideResponse.Data;
}

export namespace ChatHideResponse {
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

export interface ChatListMediaResponse {
  _meta?: ChatListMediaResponse._Meta;

  data?: ChatListMediaResponse.Data;
}

export namespace ChatListMediaResponse {
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

    nextLastId?: string;
  }

  export namespace Data {
    export interface List {
      id?: number;

      canBePinned?: boolean;

      cancelSeconds?: number;

      canPurchase?: boolean;

      canPurchaseReason?: string;

      canReport?: boolean;

      changedAt?: string;

      createdAt?: string;

      fromUser?: List.FromUser;

      giphyId?: string | null;

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

      media?: Array<List.Media>;

      mediaCount?: number;

      previews?: Array<unknown>;

      price?: number;

      queueId?: number;

      releaseForms?: Array<unknown>;

      responseType?: string;

      text?: string;
    }

    export namespace List {
      export interface FromUser {
        id?: number;

        _view?: string;
      }

      export interface Media {
        id?: number;

        canView?: boolean;

        convertedToVideo?: boolean;

        createdAt?: string;

        duration?: number;

        files?: Media.Files;

        hasCustomPreview?: boolean;

        hasError?: boolean;

        isReady?: boolean;

        type?: string;

        videoSources?: Media.VideoSources;
      }

      export namespace Media {
        export interface Files {
          full?: Files.Full;

          preview?: Files.Preview;

          squarePreview?: Files.SquarePreview;

          thumb?: Files.Thumb;
        }

        export namespace Files {
          export interface Full {
            height?: number;

            size?: number;

            sources?: Array<unknown>;

            url?: string;

            width?: number;
          }

          export interface Preview {
            height?: number;

            size?: number;

            url?: string;

            width?: number;
          }

          export interface SquarePreview {
            height?: number;

            size?: number;

            url?: string;

            width?: number;
          }

          export interface Thumb {
            height?: number;

            size?: number;

            url?: string;

            width?: number;
          }
        }

        export interface VideoSources {
          '240'?: string | null;

          '720'?: string | null;
        }
      }
    }
  }
}

export interface ChatMarkAsReadResponse {
  _meta?: ChatMarkAsReadResponse._Meta;

  data?: ChatMarkAsReadResponse.Data;
}

export namespace ChatMarkAsReadResponse {
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

export interface ChatMarkAsUnreadResponse {
  _meta?: ChatMarkAsUnreadResponse._Meta;

  data?: ChatMarkAsUnreadResponse.Data;
}

export namespace ChatMarkAsUnreadResponse {
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

export interface ChatMuteResponse {
  _meta?: ChatMuteResponse._Meta;

  data?: ChatMuteResponse.Data;
}

export namespace ChatMuteResponse {
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

export interface ChatStartTypingResponse {
  _meta?: ChatStartTypingResponse._Meta;

  data?: ChatStartTypingResponse.Data;
}

export namespace ChatStartTypingResponse {
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

export interface ChatUnmuteResponse {
  _meta?: ChatUnmuteResponse._Meta;

  data?: ChatUnmuteResponse.Data;
}

export namespace ChatUnmuteResponse {
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

export interface ChatListParams {
  /**
   * Optionally, filter the chats by type.
   */
  filter?: 'pinned' | 'priority' | 'unread' | 'with_tips' | 'unread_with_tips';

  /**
   * Number of chats to return (1 - 100). Default = 10
   */
  limit?: string;

  /**
   * Number of chats to skip for pagination
   */
  offset?: string;

  /**
   * Sort order for chats (recent or old). Default = recent
   */
  order?: 'recent' | 'old';

  /**
   * Search query to filter chats
   */
  query?: string;

  /**
   * Whether to skip user details in response (all or none). Default = all
   */
  skip_users?: 'all' | 'none';
}

export interface ChatDeleteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface ChatHideParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface ChatListMediaParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Number of medias to return. Default = 20
   */
  limit?: string;

  /**
   * Query param: Number of medias to skip for pagination
   */
  offset?: string;

  /**
   * Query param: Whether to skip user details in response (all or none). Default =
   * all
   */
  skip_users?: string;

  /**
   * Query param: Filter by specific media types. Keep empty to return all.
   */
  type?: 'photos' | 'videos' | 'audios' | null;
}

export interface ChatMarkAsReadParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface ChatMarkAsUnreadParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface ChatMuteParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface ChatStartTypingParams {
  /**
   * The Account ID
   */
  account: string;
}

export interface ChatUnmuteParams {
  /**
   * The Account ID
   */
  account: string;
}

Chats.Messages = Messages;
Chats.MarkAllAsRead = MarkAllAsRead;

export declare namespace Chats {
  export {
    type ChatListResponse as ChatListResponse,
    type ChatDeleteResponse as ChatDeleteResponse,
    type ChatHideResponse as ChatHideResponse,
    type ChatListMediaResponse as ChatListMediaResponse,
    type ChatMarkAsReadResponse as ChatMarkAsReadResponse,
    type ChatMarkAsUnreadResponse as ChatMarkAsUnreadResponse,
    type ChatMuteResponse as ChatMuteResponse,
    type ChatStartTypingResponse as ChatStartTypingResponse,
    type ChatUnmuteResponse as ChatUnmuteResponse,
    type ChatListParams as ChatListParams,
    type ChatDeleteParams as ChatDeleteParams,
    type ChatHideParams as ChatHideParams,
    type ChatListMediaParams as ChatListMediaParams,
    type ChatMarkAsReadParams as ChatMarkAsReadParams,
    type ChatMarkAsUnreadParams as ChatMarkAsUnreadParams,
    type ChatMuteParams as ChatMuteParams,
    type ChatStartTypingParams as ChatStartTypingParams,
    type ChatUnmuteParams as ChatUnmuteParams,
  };

  export {
    Messages as Messages,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessageLikeResponse as MessageLikeResponse,
    type MessagePinResponse as MessagePinResponse,
    type MessageSearchResponse as MessageSearchResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageUnlikeResponse as MessageUnlikeResponse,
    type MessageUnpinResponse as MessageUnpinResponse,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
    type MessageDeleteParams as MessageDeleteParams,
    type MessageLikeParams as MessageLikeParams,
    type MessagePinParams as MessagePinParams,
    type MessageSearchParams as MessageSearchParams,
    type MessageSendParams as MessageSendParams,
    type MessageUnlikeParams as MessageUnlikeParams,
    type MessageUnpinParams as MessageUnpinParams,
  };

  export { MarkAllAsRead as MarkAllAsRead, type MarkAllAsReadAllResponse as MarkAllAsReadAllResponse };
}
