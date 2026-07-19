// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Get a single chat message by its ID. Returns a 404 if the message does not exist
   * in the chat.
   *
   * @example
   * ```ts
   * const message = await client.chats.messages.retrieve(
   *   '69696969',
   *   { account: 'acct_XXXXXXXXXXXXXXX', chat_id: '123' },
   * );
   * ```
   */
  retrieve(
    messageID: string,
    params: MessageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MessageRetrieveResponse> {
    const { account, chat_id } = params;
    return this._client.get(path`/api/${account}/chats/${chat_id}/messages/${messageID}`, options);
  }

  /**
   * Get messages from a specific chat.
   *
   * @example
   * ```ts
   * const messages = await client.chats.messages.list('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  list(chatID: string, params: MessageListParams, options?: RequestOptions): APIPromise<MessageListResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/chats/${chatID}/messages`, { query, ...options });
  }

  /**
   * Delete a message from a chat. Please note that ONLY messages sent less than 24
   * hours ago can be deleted.
   *
   * @example
   * ```ts
   * const message = await client.chats.messages.delete(
   *   '69696969',
   *   { account: 'acct_XXXXXXXXXXXXXXX', chat_id: '123' },
   * );
   * ```
   */
  delete(
    messageID: string,
    params: MessageDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MessageDeleteResponse> {
    const { account, chat_id } = params;
    return this._client.delete(path`/api/${account}/chats/${chat_id}/messages/${messageID}`, options);
  }

  /**
   * Like a chat message.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.like(
   *   '123456789',
   *   { account: 'acct_XXXXXXXXXXXXXXX', chat_id: '123' },
   * );
   * ```
   */
  like(
    messageID: string,
    params: MessageLikeParams,
    options?: RequestOptions,
  ): APIPromise<MessageLikeResponse> {
    const { account, chat_id } = params;
    return this._client.post(path`/api/${account}/chats/${chat_id}/messages/${messageID}/like`, options);
  }

  /**
   * Pin a message from a chat.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.pin(
   *   '123456789',
   *   { account: 'acct_XXXXXXXXXXXXXXX', chat_id: '123' },
   * );
   * ```
   */
  pin(messageID: string, params: MessagePinParams, options?: RequestOptions): APIPromise<MessagePinResponse> {
    const { account, chat_id } = params;
    return this._client.post(path`/api/${account}/chats/${chat_id}/messages/${messageID}/pin`, options);
  }

  /**
   * Search messages in a specific chat. Returns a list of message IDs matching the
   * search query.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.search('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   *   query: 'Hello',
   * });
   * ```
   */
  search(
    chatID: string,
    params: MessageSearchParams,
    options?: RequestOptions,
  ): APIPromise<MessageSearchResponse> {
    const { account, ...query } = params;
    return this._client.get(path`/api/${account}/chats/${chatID}/messages/search`, { query, ...options });
  }

  /**
   * Send a new message to a chat.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.send('123', {
   *   account: 'acct_XXXXXXXXXXXXXXX',
   * });
   * ```
   */
  send(chatID: string, params: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/chats/${chatID}/messages`, { body, ...options });
  }

  /**
   * Unlike a chat message.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.unlike(
   *   '123456789',
   *   { account: 'acct_XXXXXXXXXXXXXXX', chat_id: '123' },
   * );
   * ```
   */
  unlike(
    messageID: string,
    params: MessageUnlikeParams,
    options?: RequestOptions,
  ): APIPromise<MessageUnlikeResponse> {
    const { account, chat_id } = params;
    return this._client.delete(path`/api/${account}/chats/${chat_id}/messages/${messageID}/unlike`, options);
  }

  /**
   * Unpin a message from a chat.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.unpin(
   *   '123456789',
   *   { account: 'acct_XXXXXXXXXXXXXXX', chat_id: '123' },
   * );
   * ```
   */
  unpin(
    messageID: string,
    params: MessageUnpinParams,
    options?: RequestOptions,
  ): APIPromise<MessageUnpinResponse> {
    const { account, chat_id } = params;
    return this._client.delete(path`/api/${account}/chats/${chat_id}/messages/${messageID}/unpin`, options);
  }
}

export interface MessageRetrieveResponse {
  _meta?: MessageRetrieveResponse._Meta;

  data?: MessageRetrieveResponse.Data;
}

export namespace MessageRetrieveResponse {
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

    canBePinned?: boolean;

    cancelSeconds?: number;

    canPurchase?: boolean;

    canPurchaseReason?: string;

    canReport?: boolean;

    changedAt?: string;

    createdAt?: string;

    fromUser?: Data.FromUser;

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

    isSentByMe?: boolean;

    isTip?: boolean;

    lockedText?: boolean;

    media?: Array<unknown>;

    mediaCount?: number;

    previews?: Array<unknown>;

    price?: number;

    queueId?: number;

    releaseForms?: Array<unknown>;

    responseType?: string;

    text?: string;
  }

  export namespace Data {
    export interface FromUser {
      id?: number;

      _view?: string;
    }
  }
}

export interface MessageListResponse {
  _meta?: MessageListResponse._Meta;

  _pagination?: MessageListResponse._Pagination;

  data?: Array<MessageListResponse.Data>;
}

export namespace MessageListResponse {
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
    id?: number;

    canBePinned?: boolean;

    cancelSeconds?: number;

    canPurchase?: boolean;

    canPurchaseReason?: string;

    canReport?: boolean;

    changedAt?: string;

    createdAt?: string;

    fromUser?: Data.FromUser;

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

    isSentByMe?: boolean;

    isTip?: boolean;

    lockedText?: boolean;

    media?: Array<unknown>;

    mediaCount?: number;

    previews?: Array<unknown>;

    price?: number;

    queueId?: number;

    releaseForms?: Array<unknown>;

    responseType?: string;

    text?: string;
  }

  export namespace Data {
    export interface FromUser {
      id?: number;

      _view?: string;
    }
  }
}

export interface MessageDeleteResponse {
  _meta?: MessageDeleteResponse._Meta;

  data?: MessageDeleteResponse.Data;
}

export namespace MessageDeleteResponse {
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

export interface MessageLikeResponse {
  _meta?: MessageLikeResponse._Meta;

  data?: MessageLikeResponse.Data;
}

export namespace MessageLikeResponse {
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
    isLiked?: boolean;

    success?: boolean;
  }
}

export interface MessagePinResponse {
  _meta?: MessagePinResponse._Meta;

  data?: MessagePinResponse.Data;
}

export namespace MessagePinResponse {
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

export interface MessageSearchResponse {
  _meta?: MessageSearchResponse._Meta;

  data?: Array<number>;
}

export namespace MessageSearchResponse {
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

export interface MessageSendResponse {
  _meta?: MessageSendResponse._Meta;

  _pagination?: MessageSendResponse._Pagination;

  data?: MessageSendResponse.Data;
}

export namespace MessageSendResponse {
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
    id?: number;

    canBePinned?: boolean;

    cancelSeconds?: number;

    canPurchase?: boolean;

    canPurchaseReason?: string;

    canReport?: boolean;

    changedAt?: string;

    createdAt?: string;

    fromUser?: Data.FromUser;

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

    releaseForms?: Array<unknown>;

    responseType?: string;

    text?: string;
  }

  export namespace Data {
    export interface FromUser {
      id?: number;

      _view?: string;
    }
  }
}

export interface MessageUnlikeResponse {
  _meta?: MessageUnlikeResponse._Meta;

  data?: MessageUnlikeResponse.Data;
}

export namespace MessageUnlikeResponse {
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
    isLiked?: boolean;

    success?: boolean;
  }
}

export interface MessageUnpinResponse {
  _meta?: MessageUnpinResponse._Meta;

  data?: MessageUnpinResponse.Data;
}

export namespace MessageUnpinResponse {
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

export interface MessageRetrieveParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the chat (usually a fan's OnlyFans User ID)
   */
  chat_id: string;
}

export interface MessageListParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: Filter by certain messages. Currently, only pins are filterable.
   */
  filter?: 'pinned';

  /**
   * Query param: Use for pagination when `order=desc` (newest to oldest). Include
   * this message ID as the first message in the results. Used to retrieve messages
   * from e.g. the Search Chat Messages endpoint IDs.
   */
  first_id?: string | null;

  /**
   * Query param: Use for pagination when `order=asc` (oldest to newest). Include
   * this message ID as the first message in the results. WARNING! The response list
   * of messages will also be inverted (oldest messages will be first, opposite to
   * default where `order=desc`).
   */
  last_id?: string | null;

  /**
   * Query param: The number of messages to return (default = 10, max = 100)
   */
  limit?: string;

  /**
   * Query param: Sort order for messages (desc or asc)
   */
  order?: string;

  /**
   * Query param: Whether to skip user details (`all` or `none`).
   */
  skip_users?: string;
}

export interface MessageDeleteParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the chat (usually a fan's OnlyFans User ID)
   */
  chat_id: string;
}

export interface MessageLikeParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the chat, usually a fan's OnlyFans User ID
   */
  chat_id: string;
}

export interface MessagePinParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the chat, usually a fan's OnlyFans User ID
   */
  chat_id: string;
}

export interface MessageSearchParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: The query search in messages.
   */
  query: string;
}

export interface MessageSendParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The ID of the Giphy GIF to attach to the message. Get IDs from the
   * Giphy listing endpoints (`/giphy/trending`, `/giphy/search`).
   */
  giphyId?: string;

  /**
   * Body param: Whether the text should be shown or hidden
   */
  lockedText?: boolean;

  /**
   * Body param: Direct file uploads, OFAPI `ofapi_media_` IDs, or OF vault IDs. Will
   * be hidden if `price` is provided.
   */
  mediaFiles?: Array<unknown>;

  /**
   * Body param: Direct file uploads, OFAPI `ofapi_media_` IDs, OF vault IDs, or
   * integer indices referencing uploaded files in `mediaFiles`. Will be shown if
   * `price` is provided.
   */
  previews?: Array<unknown>;

  /**
   * Body param: Price for paid content (0 or between 3-200). In case this is not
   * zero, **mediaFiles** is required
   */
  price?: number;

  /**
   * Body param: Mark this message as a reply to another (can be either your own, or
   * the recipient's)
   */
  replyToMessageId?: number;

  /**
   * Body param: Array of OnlyFans Release Form Guest IDs to tag in your message
   */
  rfGuest?: string;

  /**
   * Body param: Array of OnlyFans Release Form Partners IDs to tag in your message
   */
  rfPartner?: string;

  /**
   * Body param: Array of OnlyFans Creator User IDs to tag in your message
   */
  rfTag?: string;

  /**
   * Body param: The message text content. Required unless a media file is present.
   */
  text?: string;
}

export interface MessageUnlikeParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the chat, usually a fan's OnlyFans User ID
   */
  chat_id: string;
}

export interface MessageUnpinParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the chat, usually a fan's OnlyFans User ID
   */
  chat_id: string;
}

export declare namespace Messages {
  export {
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
}
