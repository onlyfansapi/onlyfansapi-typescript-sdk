// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * APIs for managing OnlyFans chats
 */
export class Messages extends APIResource {
  /**
   * Get messages from a specific chat.
   *
   * @example
   * ```ts
   * const messages = await client.chats.messages.list(
   *   '458485726',
   *   { account: 'acct_XXXXXXXXXXXXXXX' },
   * );
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
   *   '123456789',
   *   { account: 'acct_XXXXXXXXXXXXXXX', chat_id: '458485726' },
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
   * Send a new message to a chat.
   *
   * @example
   * ```ts
   * const response = await client.chats.messages.send(
   *   '458485726',
   *   { account: 'acct_XXXXXXXXXXXXXXX', text: 'Hello!' },
   * );
   * ```
   */
  send(chatID: string, params: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    const { account, ...body } = params;
    return this._client.post(path`/api/${account}/chats/${chatID}/messages`, { body, ...options });
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

export interface MessageListParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Query param: ID of the last message from previous page. Used for pagination
   */
  id?: string;

  /**
   * Query param: Sort order for messages (desc or asc)
   */
  order?: string;

  /**
   * Query param: Whether to skip user details (all or none)
   */
  skip_users?: string;
}

export interface MessageDeleteParams {
  /**
   * The Account ID
   */
  account: string;

  /**
   * The ID of the chat, usually a fan's OnlyFans User ID
   */
  chat_id: string;
}

export interface MessageSendParams {
  /**
   * Path param: The Account ID
   */
  account: string;

  /**
   * Body param: The message text content
   */
  text: string;

  /**
   * Body param: Whether the text should be shown or hidden
   */
  lockedText?: boolean;

  /**
   * Body param: Array of media file upload prefixed_ids, or OF media IDs (required
   * if price is not 0). Will be hidden if `price` is provided.
   */
  mediaFiles?: Array<string>;

  /**
   * Body param: Array of media file upload prefixed_ids, or OF media IDs (required
   * if price is not 0). Will be shown if `price` is provided. All `previews` values
   * must also exist in the `mediaFiles` array.
   */
  previews?: Array<string>;

  /**
   * Body param: Price for paid content (0 or between 3-200). In case this is not
   * zero, **mediaFiles** is required
   */
  price?: number;
}

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageDeleteParams as MessageDeleteParams,
    type MessageSendParams as MessageSendParams,
  };
}
